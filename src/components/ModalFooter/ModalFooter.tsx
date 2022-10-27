import { ModalFooter as ChakraUIModalFooter } from '@chakra-ui/react';
import { Button } from 'components/Button/Button';

interface Props {
  children: React.ReactNode;
}

export function ModalFooter({ children }: Props) {
  return (
    <ChakraUIModalFooter className="markdown-c__modal-footer">
      {children}
    </ChakraUIModalFooter>
  );
}
