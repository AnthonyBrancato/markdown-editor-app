import { Divider } from '@chakra-ui/react';
import { ActionBar } from 'components/ActionBar/ActionBar';
import { Drawer } from 'components/common/Drawer';
import { DrawerManager } from 'components/common/DrawerManager';
import { TextAreaManager } from 'components/common/TextAreaManager';
import { Markdown } from 'components/Markdown/Markdown';
import { MarkdownPreview } from 'components/MarkdownPreview/MarkdownPreview';
import React from 'react';
import { FaRegTrashAlt, FaSave } from 'react-icons/fa';

export function MarkdownView() {
  const actions = React.useMemo(() => {
    return [
      {
        icon: <FaRegTrashAlt />,
        iconBtn: true,
        btnLabel: 'delete markdown',
      },
      {
        icon: <FaSave />,
        btnLabel: 'Save changes',
        iconBtn: false,
      },
    ];
  }, []);

  const leftActions = React.useMemo(() => {
    return {
      title: 'Markdown',
      menuComponent: <Drawer />,
    };
  }, []);

  return (
    <React.Fragment>
      <DrawerManager>
        <TextAreaManager>
          <ActionBar actions={actions} leftActions={leftActions} />
          <div className="flex justify-around h-screen">
            <Markdown />
            <Divider orientation="vertical" colorScheme="gray" />
            <MarkdownPreview />
          </div>
        </TextAreaManager>
      </DrawerManager>
    </React.Fragment>
  );
}
