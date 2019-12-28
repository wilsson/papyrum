import styled from 'styled-components';
import * as React from 'react';
import { useBaseUrl } from '../../utils';

const ImgStyled = styled.img`
  max-width: 100%;
`;

export const Img = ({ src, ...nextProps}) => {
  return <ImgStyled src={useBaseUrl(src)} {...nextProps} />;
};