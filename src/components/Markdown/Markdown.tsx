import { Heading } from '@chakra-ui/react';
import { Textarea } from 'components/Textarea/Textarea';
import 'styles/components/Markdown.css';

export function Markdown() {
  return (
    <div className="markdown-c__content markdown-c__content--text flex flex-1 flex-col">
      <div className="markdown-c__header w-full h-16 shadow-md">
        <Heading as="h4" size="md" className="text-start uppercase p-4">
          Markdown
        </Heading>
      </div>
      <div className="p-4">
        <Textarea />
      </div>
    </div>
  );
}
