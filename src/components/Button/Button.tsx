import {
  Button as ChakraUIButton,
  ButtonProps as ChakraUIButtonProps,
  Stack,
} from '@chakra-ui/react';
import clsx from 'clsx';

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
  onClick,
  className,
}: ButtonProps) {
  return (
    <Stack direction="row" spacing={4}>
      <ChakraUIButton
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        colorScheme={colorScheme}
        variant={variant}
        className={clsx('markdown-c__right-actions-button', className)}
        onClick={onClick}
      >
        {children}
      </ChakraUIButton>
    </Stack>
  );
}
