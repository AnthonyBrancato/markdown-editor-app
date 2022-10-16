import { Drawer } from 'components/common/Drawer';
import { DrawerManager } from 'components/common/DrawerManager';
import { Markdown } from 'components/Markdown/Markdown';
import { MarkdownPreview } from 'components/MarkdownPreview/MarkdownPreview';
import { FaSave, FaRegTrashAlt } from 'react-icons/fa';
import './App.css';
import { ActionBar } from 'components/ActionBar/ActionBar';
import { Divider } from '@chakra-ui/react';
import { TextAreaManager } from 'components/common/TextAreaManager';

function App() {
  const actions = [
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

  const leftActions = {
    title: 'Markdown',
    menuComponent: <Drawer />,
  };

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
