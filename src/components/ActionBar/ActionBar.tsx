import 'styles/components/ActionBar.css';
import {
  ActionBarItems,
  RightActionsProps,
} from '../ActionBarItems/ActionBarItems';
import { Heading, Divider, Stack } from '@chakra-ui/react';

interface ActionBarProps {
  actions: RightActionsProps[];
  leftActions: {
    title: string;
    menuComponent: JSX.Element;
  };
}

export function ActionBar({ actions, leftActions }: ActionBarProps) {
  const rightActions = actions.map(({ icon, iconBtn, btnLabel }) => {
    return {
      icon,
      iconBtn,
      btnLabel,
    };
  });

  return (
    <div className="markdown-c__action-bar">
      <ActionBarItems rightActions={rightActions}>
        <div className="flex items-center pr-7">
          <div className="w-20 h-20 flex items-center justify-center box-content">
            {leftActions.menuComponent}
          </div>
          <Heading as="h5" size="md" className="ml-5">
            {leftActions.title}
          </Heading>
        </div>
        <Stack h="40px">
          <Divider orientation="vertical" />
        </Stack>
        <div className="flex flex-col items-start pl-7">
          <Heading as="h5" size="sm">
            Document Name
          </Heading>
          <p>Markdown.md</p>
        </div>
      </ActionBarItems>
    </div>
  );
}
