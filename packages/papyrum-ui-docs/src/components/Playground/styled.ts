import styled from 'styled-components';

export const WrapperLivePreview = styled.div`
  padding: 15px;
`;

export const EditorWrapper = styled(WrapperLivePreview)`
  border-top: 1px solid ${props => props.theme.colors.borderMenu};
`;