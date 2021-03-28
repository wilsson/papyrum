import styled from 'styled-components';

export const InlineCode = styled.code`
  background-color: ${props => props.theme.inner.gray};
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  padding: 2px 6px;
  border-radius: 2px;
  font-size: 14px;
  color: ${props => props.theme.content.color};
`;