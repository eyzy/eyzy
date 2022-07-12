import { InputHTMLAttributes } from "react"
import { ViewField } from '../../../view/field/types/ViewField'

type BaseCheckbox = ViewField & {
  useRing?: boolean
}

export type BaseCheckboxProps = Partial<Omit<InputHTMLAttributes<any>, 'size'> & BaseCheckbox>
