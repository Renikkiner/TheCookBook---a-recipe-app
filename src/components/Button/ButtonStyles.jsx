import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: var(--maxWidth);
  margin: 0 auto;
  opacity: ${({ isVisible }) => (isVisible ? '0' : '1')};
`

export const ButtonContainer = styled.button`
  font-size: var(--fontBig);
  font-family: var(--oswald);
  background-color: var(--green);
  color: var(--cream);
  width: var(--extraWidth);
  border-radius: var(--size-radius);
  margin: 2rem 0;
  border: none;
  cursor: pointer;
  padding: 1rem;
  height: 5rem;
  transition: color 0.3s ease;

  &:hover {
    color: var(--yellow);
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
    border-radius: 0px;
    height: 5rem;
  }
`
