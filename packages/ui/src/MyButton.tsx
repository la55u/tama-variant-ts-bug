import { Button, styled } from 'tamagui'

export const MyButton = styled(Button, {
  variants: {
    variant: {
      simple: { bg: 'gray' },
      colorful: { bg: 'violet' },
    },
  } as const,
})
