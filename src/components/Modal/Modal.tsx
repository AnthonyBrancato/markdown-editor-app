import * as React from 'react';

import {
  ModalBody,
  ModalContent,
  Modal as ChakraUIModal,
  ModalOverlay,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { Button } from 'components/Button/Button';

import 'styles/components/Modal.css';
import { ModalFooter } from 'components/ModalFooter/ModalFooter';
import { ModalHeader } from 'components/ModalHeader/ModalHeader';
import { formattedISODate } from 'helpers/formattedISODate';

const { REACT_APP_API_BASE_URL } = process.env;

export function Modal({ onClose, isOpen, title }: any) {
  const initialRef = React.useRef(null);
  const [inputName, setInputName] = React.useState('');

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputName(event.target.value);
  };

  const formattedDate = formattedISODate(new Date());
  const onSubmit = async () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: inputName,
        createdAt: formattedDate,
      }),
    };

    console.log(requestOptions);

    const response = await fetch(
      `${REACT_APP_API_BASE_URL}api/v1/markdowns`,
      requestOptions
    );
    const data = await response.json();
    console.log(data);
  };

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
          <ModalHeader title={title} />
          <form onSubmit={onSubmit}>
            <FormControl>
              <FormLabel className="text-white" htmlFor="name">
                Title
              </FormLabel>
              <Input
                className="text-white"
                id="name"
                name="name"
                type="name"
                onChange={onNameChange}
              />
            </FormControl>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
          <Button className="ml-3" type="submit" onClick={onSubmit}>
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </ChakraUIModal>
  );
}
