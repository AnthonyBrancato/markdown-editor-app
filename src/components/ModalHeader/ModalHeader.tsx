import { ModalHeader as ChakraUIModalHeader } from '@chakra-ui/react';

export function ModalHeader({ title }: { title: string }) {
  return (
    <ChakraUIModalHeader className="markdown-c__modal-header">
      {title}
    </ChakraUIModalHeader>
  );
}
