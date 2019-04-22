import { css } from 'styled-components';

export const theme = css`
  .cm-s-papyrum.CodeMirror {
    border-radius: 0;
    background: #fbfcfd;
    color: #24292e;
  }
  .cm-s-papyrum .CodeMirror-gutters {
    background: white;
    border-right-width: 0;
    border-radius: 0;
  }
  .cm-s-papyrum .CodeMirror-guttermarker {
    color: white;
  }
  .cm-s-papyrum .CodeMirror-guttermarker-subtle {
    color: #d0d0d0;
  }
  .cm-s-papyrum .CodeMirror-linenumber {
    font-size: 14px;
    line-height: 20px;
    padding-right: 20px;
    background: white;
  }
  .cm-s-papyrum .CodeMirror-cursor {
    border-left: 1px solid #24292e;
  }
  .cm-s-papyrum div.CodeMirror-selected,
  .cm-s-papyrum .CodeMirror-line::selection,
  .cm-s-papyrum .CodeMirror-line > span::selection,
  .cm-s-papyrum .CodeMirror-line > span > span::selection,
  .cm-s-papyrum .CodeMirror-line::-moz-selection,
  .cm-s-papyrum .CodeMirror-line > span::-moz-selection,
  .cm-s-papyrum .CodeMirror-line > span > span::-moz-selection {
    background: #c8c8fa;
  }
  .cm-s-papyrum .CodeMirror-activeline-background {
    background: #fafbfc;
  }
  .cm-s-papyrum .CodeMirror-matchingbracket {
    text-decoration: underline;
    color: #949495 !important;
  }
  .cm-s-papyrum .CodeMirror-lines {
    background: white;
  }
  .cm-s-papyrum .cm-comment {
    color: #659E50;
  }
  .cm-s-papyrum .cm-tag,
  .cm-s-papyrum .cm-bracket {
    color: #0047FF;
  }
  .cm-s-papyrum .cm-constant {
    color: #005cc5;
  }
  .cm-s-papyrum .cm-entity {
    color: #6f42c1;
  }
  .cm-s-papyrum .cm-keyword {
    color: #0047FF;
  }
  .cm-s-papyrum .cm-storage {
    color: #d73a49;
  }
  .cm-s-papyrum .cm-string {
    color: #ED6262;
  }
  .cm-s-papyrum .cm-support {
    color: #005cc5;
  }
  .cm-s-papyrum .cm-variable {
    color: #0047FF;
  }
`