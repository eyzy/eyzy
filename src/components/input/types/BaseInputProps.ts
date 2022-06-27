import React, { InputHTMLAttributes } from "react"

interface BaseInput {
  fit?: boolean
  label?: React.ReactElement
  helpText?: React.ReactElement
  error?: React.ReactElement
  width?: number | string
  type?: string
  onPressEnter?: React.KeyboardEventHandler<HTMLInputElement>
  onPressEsc?: React.KeyboardEventHandler<HTMLInputElement>
  onChange?: (value: string | number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

export type BaseInputProps = Partial<Omit<InputHTMLAttributes<any>, 'size'> & BaseInput>
