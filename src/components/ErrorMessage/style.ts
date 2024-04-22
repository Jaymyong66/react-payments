import styled from "styled-components";

export const ErrorMessage = styled.div`
  height: 14px;
  font-family: NotoSansKR, Regular;
  font-size: 9.5px;
  font-weight: 400;
  line-height: 13px;
  text-align: left;
  color: ${({ theme }) => theme.colors.inputError};
`;
