import { InputHTMLAttributes } from "react"
import { ViewField } from '../../../view/field/types/ViewField'

type BaseCheckbox = ViewField & {

}

export type BaseCheckboxProps = Partial<Omit<InputHTMLAttributes<any>, 'size'> & BaseCheckbox>
