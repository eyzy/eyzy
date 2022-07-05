import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

export interface ButtonProps {
  variant?: 'primary' | 'minimal' | typeof String
  className?: boolean
}

export type BaseButtonProps = Partial<AnchorHTMLAttributes<any> & ButtonHTMLAttributes<any> & ButtonProps>