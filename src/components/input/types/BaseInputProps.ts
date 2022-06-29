import React, { InputHTMLAttributes } from "react"
import { ViewField } from '../../../view/field/types/ViewField'

type BaseInput = ViewField & {
  width?: number | string
  type?: string
  onPressEnter?: React.KeyboardEventHandler<HTMLInputElement>
  onPressEsc?: React.KeyboardEventHandler<HTMLInputElement>
  onChange?: (value: string | number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

export type BaseInputProps = Partial<Omit<InputHTMLAttributes<any>, 'size'> & BaseInput>
