import { SelectProps } from "./Select";

export function getDefault(props: SelectProps) {
  const {defaultValue, value, options} = props
  const v = defaultValue || value
  return options.find(item => item.value === v)
}