import styled from 'styled-components';
import { invert, grayscale } from 'polished'

export const Copy = styled.span`
  color: ${props => grayscale(invert(props.color))};
  position: absolute;
  right: 15px;
  top: 15px;
  font-size: 12px;
  cursor: pointer;
  z-index: 100;
  opacity: 0;
  transition: all .2s ease;
`;

export const Wrapper = styled.div`
  margin: 0 0 24px;
  position: relative;
  &:hover > ${Copy} {
    opacity: 1;
  }
`;