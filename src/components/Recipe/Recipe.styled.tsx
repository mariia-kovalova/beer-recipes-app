import styled from "@emotion/styled";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  width: 100%;
  height: 100%;

  padding: 20px;

  border-radius: 20px;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 236px;
`;

export const Name = styled.p`
  text-align: center;
  font-weight: 600;
`;

export const Tagline = styled.p`
  text-align: center;
`;

export const Description = styled.p`
  font-size: 14px;
`;
