import styled from 'styled-components'

export const Container = styled.div`
  max-width: var(--maxWidth);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem auto;
  justify-items: center;
  transition: opacity 0.5s;
  opacity: ${({ isVisible }) => (isVisible ? '0' : '1')};
`

export const Message = styled.h2`
  font-size: var(--fontBig);
  color: var(--green);
  position: absolute;
  font-weight: 700;
  font-family: var(--oswald);
`
