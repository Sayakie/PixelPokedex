import mergeOptions from 'merge-options'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

import type { ReadonlyWeakMap, Stat } from '../../@types.mjs'
import { FormBelongToSpecies } from '../../entity/FormBelongToSpecies.mjs'
import { Species } from '../../entity/Species.mjs'
import { Messages, STACK_OVERFLOW } from '../../Message.mjs'
import { DataDirectory } from '../Constant.mjs'
import { checkNonNull } from '../verify.mjs'

/**
 * Processes the "raw" stat data to use.
 *
 * In the case of `Alolan`, `Galarian`, and `Hisuian` forms, the stat data is
 * expand to include the base form's stats. This is done by adding the base
 * form's stats to the form's stats.
 *
 * @param {Stat} stat The raw stat to prepare
 * @returns {Stat} The prepared stat
 * @throws {Exception} If the stat is not found or is invalid (e.g. missingno)
 */
function prepareStat(stat: Stat): Stat {
  if (!stat.forms || Object.keys(stat.forms).length <= 0) {
    return stat
  }

  const species = Species.getFromName(stat.pixelmonName) || Species.MissingNo
  if (species === Species.MissingNo) {
    throw Messages.UNKNOWN_SPECIES
  }

  Object.keys(stat.forms).forEach(form => {
    checkNonNull(stat.forms, STACK_OVERFLOW)

    const { forms, ...statExcludeForms } = stat
    let statDefault = statExcludeForms

    if (
      FormBelongToSpecies.alolanForms.has(species) ||
      FormBelongToSpecies.galarianForms.has(species) ||
      FormBelongToSpecies.hisuianForms.has(species)
    ) {
      const {
        trMoves,
        hmMoves,
        tmMoves1,
        tmMoves2,
        tmMoves3,
        tmMoves4,
        tmMoves5,
        tmMoves6,
        tmMoves7,
        tmMoves8,
        transferMoves,
        ...statExcludeMoves
      } = statExcludeForms

      statDefault = statExcludeMoves
    }

    stat.forms[form] = mergeOptions(statDefault, stat.forms[form])
  })

  // @ts-expect-error Overwrite for the sake of consistency (naming convention)
  stat[`boundingBox`] = stat[`bounding_box`]
  return stat
}

export type StatLink = ReadonlyWeakMap<Species, Stat>
export async function loadAllStats(): Promise<StatLink> {
  const statLink = new WeakMap<Species, Stat>()

  for await (const species of Species.values()) {
    const statPath = join(
      DataDirectory,
      `pixelmon`,
      `stats`,
      `${species.getNationalPokedex().asString()}.json`
    )
    const statBuf = await readFile(statPath)
    const statRaw = JSON.parse(statBuf.toString())
    const stat = prepareStat(statRaw)

    statLink.set(species, stat)
  }

  return statLink
}