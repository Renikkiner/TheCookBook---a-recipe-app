import styled from 'styled-components'

export const Spinner = styled.div`
  border: ${({ color }) =>
    color === 'cream' ? `4px solid var(--cream)` : `4px solid var(--red)`};
  border-top: 5px solid transparent;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  animation: spin 0.8s linear infinite;
  margin: 0 auto;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
