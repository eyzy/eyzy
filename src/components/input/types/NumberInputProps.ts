import { BaseInputProps } from "./BaseInputProps"

export type NumberInputProps = BaseInputProps & {
  positive?: boolean
  isInt?: boolean
}
