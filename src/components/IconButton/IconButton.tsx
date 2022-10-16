import { IconButton as ChakraUIIconButton } from '@chakra-ui/react';
import * as React from 'react';

import '../../styles/components/IconButton.css';

interface IconButtonProps {
  ariaLabel: string;
  icon?: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  isActive?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  isRound?: boolean;
  size?: string;
  spinner?: React.ReactElement;
  variant?: string;
  className?: string;
  onClick?: () => void;
}

export function IconButton({
  ariaLabel,
  className = 'markdown-c-icon-button__right-actions',
  ...props
}: IconButtonProps) {
  return (
    <ChakraUIIconButton
      aria-label={ariaLabel}
      className={className}
      {...props}
    />
  );
}
