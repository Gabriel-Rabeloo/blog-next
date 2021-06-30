import styled, { css } from 'styled-components';

export const Container = styled.footer`
  ${({ theme }) => css`
    margin: ${theme.spacings.medium};
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.small};
    text-align: center;
  `}
`;
