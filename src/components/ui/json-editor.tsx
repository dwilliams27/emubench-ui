import Editor from 'react-simple-code-editor';
import hljs from 'highlight.js/lib/core';
import json from 'highlight.js/lib/languages/json';
import 'highlight.js/styles/devibeans.css';

hljs.registerLanguage('json', json);

export function JsonEditor({ value, onChange }: any) {
  const highlightWithHljs = (code: string) => {
    return hljs.highlight(code, { language: 'json' }).value;
  };

  return (
    <Editor
      className="rounded-md bg-gray-200"
      value={value}
      onValueChange={onChange}
      highlight={highlightWithHljs}
      padding={10}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 14,
      }}
    />
  );
}