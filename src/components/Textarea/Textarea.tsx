import { Textarea as ChakraUITextarea, TextareaProps } from '@chakra-ui/react';

import 'styles/components/Textarea.css';
import { useTextAraeContextManager } from 'components/common/TextAreaManager';

export function Textarea({ ...props }: TextareaProps) {
  const { onChange, data } = useTextAraeContextManager();

  return (
    <ChakraUITextarea
      className="markdown-c__textarea"
      value={data}
      onChange={onChange}
      {...props}
    />
  );
}
