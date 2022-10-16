import { noop } from 'lodash';
import * as React from 'react';

interface TextAreaContextManagerProps {
  data: string;
  onChange: (event: {
    target: {
      value: React.SetStateAction<string>;
    };
  }) => void;
}

const TextAreaContextManager = React.createContext<TextAreaContextManagerProps>(
  {
    data: '',
    onChange: noop,
  }
);

export function TextAreaManager({ children }: { children: React.ReactNode }) {
  const [data, setData] = React.useState<string>('');

  const onChange = React.useCallback(
    (event: { target: { value: React.SetStateAction<string> } }) => {
      setData(event.target.value);
    },
    []
  );

  return (
    <TextAreaContextManager.Provider
      value={{
        data,
        onChange,
      }}
    >
      {children}
    </TextAreaContextManager.Provider>
  );
}

export const useTextAraeContextManager = () =>
  React.useContext(TextAreaContextManager);
