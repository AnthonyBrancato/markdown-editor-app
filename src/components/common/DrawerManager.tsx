import { useDisclosure } from '@chakra-ui/hooks';
import { noop } from 'lodash';
import * as React from 'react';

interface DrawerContextManagerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

const DrawerContextManager = React.createContext<DrawerContextManagerProps>({
  isOpen: false,
  onClose: noop,
  onOpen: noop,
});

export function DrawerManager({ children }: { children: React.ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <DrawerContextManager.Provider
      value={{
        isOpen,
        onClose,
        onOpen,
      }}
    >
      {children}
    </DrawerContextManager.Provider>
  );
}

export const useDrawerContextManager = () =>
  React.useContext(DrawerContextManager);
