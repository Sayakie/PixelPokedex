import { FormFlag } from '../../util/Constant.js'
import { IllegalArgumentException } from '../../util/exception.js'
import { FormBelongToSpecies } from '../FormBelongToSpecies.js'
import { Species } from '../Species.js'

/**
 * Represents available forms of Shaymin.
 */
export const EnumShaymin = {
  Land: FormBelongToSpecies.builder()
    .name(`Land`)
    .species(Species.Shaymin)
    .form(0)
    .flags(FormFlag.DefaultForm, FormFlag.DisplayFormName)
    .spriteSuffix(`-land`)
    .build(),

  Sky: FormBelongToSpecies.builder()
    .name(`Sky`)
    .species(Species.Shaymin)
    .form(1)
    .flags(FormFlag.AlterForm, FormFlag.DisplayFormName)
    .spriteSuffix(`-sky`)
    .build(),

  /**
   * Returns all forms of Shaymin.
   * @returns {FormBelongToSpecies[]} All forms of Shaymin.
   */
  values(): FormBelongToSpecies[] {
    return [EnumShaymin.Land, EnumShaymin.Sky]
  },

  /**
   * Returns the form with the given name that is a member of this enum.
   *
   * @param {string} value The name of the form to return.
   * @returns {FormBelongToSpecies} The form with the given name.
   * @throws {IllegalArgumentException} If the given name is not a member of this enum.
   */
  valueOf(value: `Land` | `Sky` | null): FormBelongToSpecies {
    switch (value?.toLowerCase()) {
      case `land`:
        return EnumShaymin.Land
      case `sky`:
        return EnumShaymin.Sky
      default:
        throw new IllegalArgumentException(`Unknown value: ${value}`)
    }
  }
} as const