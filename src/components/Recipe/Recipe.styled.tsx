import styled from "@emotion/styled";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  width: 100%;
  height: 100%;

  padding: 20px;

  border-radius: 11px;
  border: 1px solid #f5f5f5;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  text-align: center;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 236px;
`;

export const Name = styled.p`
  font-weight: 600;
`;
