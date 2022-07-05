import React, { InputHTMLAttributes } from "react"

type BaseInput = {
  processValue?: (value: string) => any

  fit?: boolean
  width?: number | string
  type?: string
  onPressEnter?: React.KeyboardEventHandler<HTMLInputElement>
  onPressEsc?: React.KeyboardEventHandler<HTMLInputElement>
  onChange?: (value: string | number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

export type BaseInputProps = Partial<Omit<InputHTMLAttributes<any>, 'size'> & BaseInput>
