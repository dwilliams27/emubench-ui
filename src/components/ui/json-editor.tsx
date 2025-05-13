import Editor from 'react-simple-code-editor';
import hljs from 'highlight.js/lib/core';
import json from 'highlight.js/lib/languages/json';
import 'highlight.js/styles/devibeans.css';

hljs.registerLanguage('json', json);

export function JsonEditor({ value, onChange, readOnly }: { value: string; onChange?: (value: string) => void; readOnly?: boolean }) {
  const highlightWithHljs = (code: string) => {
    try {
      const highlight = hljs.highlight(code, { language: 'json' }).value;
      return highlight;
    } catch {
      return `<span></span>`;
    }
  };

  return (
    <Editor
      className="rounded-md bg-gray-200"
      value={value}
      onValueChange={onChange || (() => {})}
      highlight={highlightWithHljs}
      readOnly={readOnly || false}
      padding={10}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 14,
      }}
    />
  );
}