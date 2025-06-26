import {
  icons,
  type LucideProps,
} from 'lucide-react-native'

import type { LucideIconType } from '@/@types/LucideIconType'

type Props = LucideProps & {
  name: LucideIconType
}

const LucideIcon = ({
  name,
  color,
  size,
  ...rest
}: Props) => {
  const Icon = icons[name]

  return <Icon color={color} size={size} {...rest} />
}

export default LucideIcon