import Input from './BaseInput'
import TextArea from './TextArea'
import NumberInput from './NumberInput'
import InputGroup from './group'

import './style/input.scss'
import './style/textarea.scss'

Input["Group"] = InputGroup

export default Input

export { TextArea }
export { NumberInput }