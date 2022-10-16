import * as React from 'react';

import 'styles/components/ActionBarItems.css';
import { Button } from '../Button/Button';
import { IconButton } from '../IconButton/IconButton';

export interface RightActionsProps {
  icon: JSX.Element;
  iconBtn: boolean;
  btnLabel: string;
  className?: string;
}

interface ActionBarItemsProps {
  children: React.ReactNode;
  rightActions: RightActionsProps[];
}

export function ActionBarItems({
  children,
  rightActions,
}: ActionBarItemsProps) {
  return (
    <React.Fragment>
      <div className="markdown-c__action-bar-left-items">{children}</div>
      <div className="flex items-end">
        {rightActions.map(({ btnLabel, icon, iconBtn }) => {
          return (
            <React.Fragment>
              {iconBtn ? (
                <IconButton variant="ghost" ariaLabel={btnLabel} icon={icon} />
              ) : (
                <Button leftIcon={icon}>{btnLabel}</Button>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </React.Fragment>
  );
}
