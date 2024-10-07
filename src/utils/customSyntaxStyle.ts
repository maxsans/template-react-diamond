export const customStyle = {
  'code[class*="language-"]': {
    color: "var(--codeBlockText)",
    background: "none",
    fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    fontSize: "0.9rem",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    wordWrap: "normal",
    lineHeight: "1.5",
    tabSize: "4",
    hyphens: "none",
  },
  'pre[class*="language-"]': {
    color: "var(--codeBlockText)",
    background: "var(--codeBlockBackground)",
    fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    fontSize: "0.9rem",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    wordWrap: "normal",
    lineHeight: "1.5",
    tabSize: "4",
    hyphens: "none",
    padding: "1.2rem",
    borderRadius: "var(--borderRadius-md)",
    overflowX: "auto",
  },
  comment: { color: "var(--codeBlockComment)" },
  punctuation: { color: "var(--codeBlockPunctuation)" },
  property: { color: "var(--codeBlockProperty)" },
  string: { color: "var(--codeBlockString)" },
  operator: { color: "var(--codeBlockOperator)" },
  keyword: { color: "var(--codeBlockKeyword)" },
  function: { color: "var(--codeBlockFunction)" },
  variable: { color: "var(--codeBlockVariable)" },
};
