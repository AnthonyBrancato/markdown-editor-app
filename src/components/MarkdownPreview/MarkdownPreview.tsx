import { Heading } from '@chakra-ui/react';
import { useTextAraeContextManager } from 'components/common/TextAreaManager';
import MDEditor from '@uiw/react-md-editor';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import 'styles/components/Markdown.css';

export function MarkdownPreview() {
  const { data } = useTextAraeContextManager();

  return (
    <div className="markdown-c__content markdown-c__preview--title flex flex-1 flex-col">
      <div className="markdown-c__header w-full h-16 shadow-md">
        <Heading as="h4" size="md" className="text-start uppercase p-4">
          Preview
        </Heading>
      </div>
      <div className="text-start p-4">
        <MDEditor.Markdown
          source={data}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw, rehypeSanitize]}
        />
      </div>
    </div>
  );
}
