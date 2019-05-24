import styled from 'styled-components';

export const Prop = styled.div`
  border-bottom: 1px solid #DFDFDF;
  padding: 15px;
`;

export const Wrapper = styled.div`
    margin: 20px 0;
  border: 1px solid #DFDFDF;
  background-color: #FCFCFC;
  border-radius: 2px;
  ${Prop}:last-child {
    border-bottom: none;
  }
  font-size: 14px;
  font-family: fira_codelight;
  font-family: "Operator Mono";
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LabelNameWrapper = styled.div`
  flex-basis: 70%;
  display: flex;
  align-items: baseline;
`;

const Label = styled.div`
  border-radius: 2px;
  line-height: 22px;
  padding: 0 5px;
  box-sizing: border-box;
  display: inline-block;
  word-break: break-all;
`;

export const LabelName = styled(Label)`
  background-color: #DEEBFF;
  color: #0747A6;
  margin-right: 15px;
`;

export const LabelTypeWrapper = styled.div`
  flex-basis: 60%;
`;
export const LabelType = styled(Label)`
  background-color: #EDEDED;
  color: #5E6C84;
`;

export const LabelEnum = styled(Label)`
  background-color: #DEFFEB;
  color: #30A607;
  display: block;
  width: max-content;
  margin-top: 10px;
  margin-left: 25px;
`;

export const LabelUnion = styled(Label)`
  color: #403294;
  background-color: #eae6ff;
  display: block;
  width: max-content;
  margin-top: 10px;
  margin-left: 25px;
`;

const LabelShape = styled(Label)`
  ${LabelUnion} {
    margin-top: 0;
  }
`;

const LabelShapeWrapper = styled(Label)``;

export const LabelRequiredOrDefaultWrapper = styled.div`
  flex-basis: 30%;
  text-align: right;
`;

export const LabelDefault = styled.div`
  color: #7E7E7E;
`;

export const LabelRequired = styled.div`
  color: #7E7E7E;
  font-weight: 700;
`;

export const Description = styled.div`
  color: #5B5B5B;
  margin-top: 20px;
`;

export const UnionWrapper = styled.div`
  margin-top: 10px;
`;