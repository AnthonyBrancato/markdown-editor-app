import * as React from 'react';

import {
  ModalBody,
  ModalContent,
  ModalFooter,
  Modal as ChakraUIModal,
  ModalOverlay,
  ModalHeader,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { Button } from 'components/Button/Button';

import 'styles/components/Modal.css';

export function Modal({ onClose, isOpen, title }: any) {
  const initialRef = React.useRef(null);

  return (
    <ChakraUIModal
      onClose={onClose}
      isOpen={isOpen}
      isCentered
      initialFocusRef={initialRef}
    >
      <ModalOverlay />
      <ModalContent className="bg-slate-900">
        <ModalBody pb={6} className="markdown-c__modal-body">
          <ModalHeader className="markdown-c__modal-header">
            {title}
          </ModalHeader>
          <FormControl>
            <FormLabel className="markdown-c__modal-form-label">
              First name
            </FormLabel>
            <Input
              placeholder="For example: Welcome"
              className="markdown-c__modal-form-label__text-input"
            />
          </FormControl>
        </ModalBody>
        <ModalFooter className="markdown-c__modal-footer">
          <Button className="mr-3">Save</Button>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </ChakraUIModal>
  );
}

/**
 * 
 * 
 * <ModalHeader>Create new markdown file</ModalHeader>
        <ModalCloseButton />
        <ModalBody>hello</ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
 * 
 */
