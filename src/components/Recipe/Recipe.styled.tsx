import styled from "@emotion/styled";

type CardProps = {
  isSelected: boolean;
};

export const Card = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  width: 100%;
  height: 100%;

  padding: 20px;

  border-radius: 11px;
  border: 1px solid #f5f5f5;
  background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.secondary : theme.bgTweetCard};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  text-align: center;

  transition: all 250ms ${({ theme }) => theme.cubic};

  a:hover &,
  a:focus & {
    transform: scale(1.05);
  }
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
