import React from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';


const CodeSnippet = () => {
  const snippet = `function someFunc(someArgs) {
  return 'some value';
}

someFunc();`;

  return (
    <SyntaxHighlighter
      language="javascript"
      style={atomOneDark}
      showLineNumbers={true}
      customStyle={{ overflowX: 'unset', textAlign: 'left' }}
    >
      {snippet}
    </SyntaxHighlighter >
  );
}

export default CodeSnippet;