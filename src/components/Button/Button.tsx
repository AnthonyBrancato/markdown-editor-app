import {
  Button as ChakraUIButton,
  ButtonProps as ChakraUIButtonProps,
  Stack,
} from '@chakra-ui/react';

import '../../styles/components/Button.css';

interface ButtonProps extends ChakraUIButtonProps {
  children: React.ReactNode;
}

export function Button({
  children,
  leftIcon,
  rightIcon,
  variant,
  colorScheme,
  className = 'markdown-c__right-actions-button',
}: ButtonProps) {
  return (
    <Stack direction="row" spacing={4}>
      <ChakraUIButton
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        colorScheme={colorScheme}
        variant={variant}
        className={className}
      >
        {children}
      </ChakraUIButton>
    </Stack>
  );
}
