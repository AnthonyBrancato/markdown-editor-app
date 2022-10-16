import * as React from 'react';
import {
  Drawer as ChakraUIDrawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  Heading,
} from '@chakra-ui/react';
import { IconButton } from 'components/IconButton/IconButton';
import { FaHamburger } from 'react-icons/fa';
import { IoMdAdd } from 'react-icons/io';
import { useDrawerContextManager } from './DrawerManager';

import '../../styles/components/common/DrawerContent.css';
import { Button } from 'components/Button/Button';
import { DrawerItems } from './DrawerItems';

export function Drawer() {
  const { isOpen, onClose, onOpen } = useDrawerContextManager();
  return (
    <React.Fragment>
      <IconButton
        ariaLabel="open menu"
        icon={<FaHamburger />}
        onClick={onOpen}
      />
      <ChakraUIDrawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerContent className="markdown-c__drawer-content">
          <DrawerHeader>
            <Heading as="h5" size="sm" className="text-white uppercase">
              My documents
            </Heading>
            <div>
              <Button leftIcon={<IoMdAdd />}>New document</Button>
            </div>
          </DrawerHeader>
          <DrawerBody>
            <DrawerItems createdAt="01 April 2022" title="welcome" />
          </DrawerBody>
        </DrawerContent>
      </ChakraUIDrawer>
    </React.Fragment>
  );
}
