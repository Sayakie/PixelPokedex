import { MessageActionRow, MessageButton, MessageEmbed } from 'discord.js'
import i18next from 'i18next'
import mergeOptions from 'merge-options'
import type { Options as WalkOptions } from 'walk-sync'
import walkSync from 'walk-sync'

import { EnumForm } from '@/enums/EnumForm.js'
import { EnumSpecies } from '@/enums/EnumSpecies.js'
import { ArrayUtil } from '@/utils/ArrayUtil.js'
import { FormFlag } from '@/utils/Constants.js'
import {
  getSpriteUri,
  getThumbnailUri,
  setSharedRandInt
} from '@/utils/PokemonUtil.js'

const numericFormatter = new Intl.NumberFormat('en-IN')

interface TemplateParameters {
  bs: BaseStats
  spawnInfos: SpawnInfo[]
  spawnerConfig: SpawnerConfig
  variant: number
}

export const walkDefaultOptions: WalkOptions = {
  directories: false,
  globs: ['**/*.+(ts|js)'],
  ignore: ['test/**/*', '*.(test|module).+(ts|js)'],
  includeBasePath: true
}

export function generateWebhookTemplate(p: TemplateParameters): {
  avatarUrl: string
  components: MessageActionRow[]
  embed: MessageEmbed
  username: string
} {
  const { components, embed: embedBase } = generateBaseTemplate(p)
  const username = embedBase.author?.name ?? `Unknown Pokemon`
  const avatarUrl =
    embedBase.author?.iconURL ??
    getSpriteUri(EnumSpecies.getFromName(p.bs.pixelmonName)!)
  const embed = embedBase.setAuthor('', '')

  return { avatarUrl, components, embed, username }
}

export function generateBaseTemplate({
  bs,
  spawnInfos,
  spawnerConfig,
  variant = 0
}: TemplateParameters): {
  embed: MessageEmbed
  components: MessageActionRow[]
} {
  const embed = new MessageEmbed()
  const components: MessageActionRow[] = []
  const species = EnumSpecies.getFromName(bs.pixelmonName)!

  const pokemonName = i18next.t(
    `Pixelmon:${species.getName().toLowerCase()}.name`
  )
  let [namePrefix, nameSuffix] = Array.from({ length: 2 }).map(() => '')

  if (EnumForm.formList.has(species)) {
    const forms = EnumForm.formList.get(species)!
    const currentForm = ArrayUtil.getRandomElement(
      forms.filter(({ form }) => form === variant)
    )
    const currentFormFlags = currentForm.getFlags()
    const otherFormList = forms.filter(({ form }) => form !== variant)

    setSharedRandInt(forms.indexOf(currentForm))

    if (variant > 0 || currentFormFlags.includes(FormFlag.ExposeMeta)) {
      const currentFormName =
        currentForm.$memo ?? currentForm.spriteSuffix.replace(/^-/, '')
      const formName = i18next.t(
        `Pixelmon:${species.getName().toLowerCase()}.form.${currentFormName}`
      )

      if (currentFormFlags.includes(FormFlag.PinToPrefix)) {
        namePrefix = `${formName} `
      } else {
        nameSuffix = ` - ${formName}`
      }
    }

    // Add some button for other forms
    if (otherFormList.length > 0) {
      // Due to Discord only allows up to 5 buttons, we need to split the list
      const rows = Math.ceil(otherFormList.length / 5)

      if (rows > 1) {
        /** TODO */
      } else {
        Array.from({ length: rows }).forEach((_, i) => {
          const row = new MessageActionRow()

          row.addComponents(
            otherFormList
              .slice(i * 5, i * 5 + 5)
              .map(({ form: variant, spriteSuffix, $memo }) => {
                const formName = $memo ?? spriteSuffix.replace(/^-/, '')
                const label = i18next.t(
                  `Pixelmon:${species.getName().toLowerCase()}.form.${formName}`
                )

                const button = new MessageButton()
                  .setStyle('SUCCESS')
                  .setCustomId(
                    `Pixelmon.${species
                      .getName()
                      .toLowerCase()}.form.${variant}`
                  )
                  .setLabel(label)

                return button
              })
          )

          components.push(row)
        })
      }
    }
  }

  // Add a button for the drops
  // TODO

  let spawnInfo: SpawnInfo
  const spawnInfoSpecs = spawnInfos.filter(
    ({ spec: { form } }) => (form ?? variant) === variant
  )
  if (spawnInfoSpecs.length > 1) {
    spawnInfo = spawnInfoSpecs.reduce(
      (acc, curr) => mergeOptions.call({ concatArrays: true }, acc, curr),
      {} as SpawnInfo
    )
  } else {
    spawnInfo =
      spawnInfos.find(({ spec: { form } }) => (form ?? variant) === variant) ??
      spawnInfos.at(0)!
  }

  // #########################################
  const eggGroups = bs.eggGroups
    .map(eggGroup => i18next.t(`egg.${eggGroup.toLowerCase()}`))
    .join(', ')
  const eggCycles = Number(String((bs.eggCycles + 1) * 255))
  const catchRate = String(bs.catchRate)

  const spawnTimes =
    spawnInfo.condition.times
      ?.map(time => i18next.t(`time.${time.toLowerCase()}`))
      .join(', ') ?? i18next.t('field.spawn.unknown')!

  const spawnBiomes =
    spawnInfo.condition.stringBiomes
      ?.map(biome => {
        // Hotfix. Should be on the top of this handler
        if (biome === 'nether') return 'hell'
        if (Object.keys(spawnerConfig.biomeCategories).includes(biome)) {
          return spawnerConfig.biomeCategories[biome]
        }

        return biome
      })
      .flatMap(biomes => {
        if (Array.isArray(biomes)) {
          return biomes.map(biome => biome.replace(/^[^:]+./, ''))
        } else {
          return biomes
        }
      })
      .map(biome => i18next.t(`Biome:${biome}`, ''))
      .filter(Boolean)
      .join(', ') ?? i18next.t('field.spawn.unknown')!

  // ##########
  // # Stats
  // ##########
  const { HP, Attack, Defence, SpecialAttack, SpecialDefence, Speed } = bs.stats

  const stats = [HP, Attack, Defence, SpecialAttack, SpecialDefence, Speed]
    .map(stat => stat.toString().padStart(3))
    .join(' ')
  const totalStats = Object.values(bs.stats)
    .reduce((acc, curr) => acc + curr, 0)
    .toString()
    .padStart(4)
    .padEnd(5)

  let hiddenAbility = ''
  const isInlineEmbedField = spawnBiomes.length < 25 ? true : false

  // Build the embed
  embed
    .setAuthor(
      `${namePrefix}${pokemonName}${nameSuffix}(#${species.getNationalPokedexNumber()})`,
      getSpriteUri(species, variant)
    )
    .setThumbnail(getThumbnailUri(species, variant))
    .setDescription(
      i18next.t(`Pixelmon:${species.getName().toLowerCase()}.description`) +
        '\n\u200b'
    )
    .addField(
      ':crossed_swords: ' + i18next.t('field.type'),
      bs.types.map(type => i18next.t(`type.${type.toLowerCase()}`)).join(', '),
      true
    )
    .addField(
      ':shield ' + i18next.t('field.ability'),
      bs.abilities
        .map((ability, index) => {
          if (!ability) return null

          ability = i18next.t(
            `Ability:${ability.replace(/\s/g, '').toLowerCase()}.name`
          )!

          if (index == 2) {
            hiddenAbility = ability
            return null
          }

          return ability
        })
        .filter(Boolean)
        .join(', '),
      true
    )

  if (hiddenAbility) {
    embed.addField(':alembic: ' + i18next.t('type.ha'), hiddenAbility, true)
  } else {
    embed.addField('\u200b', '\u200b', true)
  }

  embed
    .addField(':egg: ' + i18next.t('field.eggGroup'), eggGroups, true)
    .addField(
      ':hatching_chick: ' + i18next.t('field.hatchTime'),
      numericFormatter.format(eggCycles),
      true
    )
    .addField(':crystal_ball: ' + i18next.t('field.catchRate'), catchRate, true)
    .addField(':hourglass: ' + i18next.t('field.spawnTime'), spawnTimes, true)
    .addField(
      ':mushroom: ' + i18next.t('field.spawnBiome'),
      spawnBiomes,
      isInlineEmbedField
    )

  if (isInlineEmbedField) {
    embed.addField('\u200b', '\u200b', true)
  }

  embed.addField(
    ':hibiscus: ' + i18next.t('field.stats'),
    '```ml\n' +
      `+-------------------------+-------+\n` +
      `|  HP Atk Def SpA SpD Spe | Total |\n` +
      `+-------------------------+-------+\n` +
      `| ${stats} | ${totalStats} |\n` +
      `+-------------------------+-------+\n` +
      '\n```'
  )

  // Cleanup
  setSharedRandInt(-1)

  return { components, embed }
}
