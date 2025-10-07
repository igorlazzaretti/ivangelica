import styled from 'styled-components'
import Background from '../../assets/bg1.png'

export const Main = styled.main`
  width: 100vw;
  height: auto;
  min-height: 60vh;
  background: url(${Background}) no-repeat center;
  background-size: cover;
    @media (max-width: 768px) {
    background-position: -40vw center; /* desloca o fundo mais para a esquerda */
  }
  /* Se quiser ainda mais à esquerda em celulares muito pequenos */
  @media (max-width: 480px) {
    background-position: -120vw center; /* desloca manualmente a imagem */
  }
`
export const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 40vw;
  gap: 1rem;
  padding: 2rem;
  flex-wrap: wrap;
  a {
    text-decoration: none;
    color: inherit;
  }

      @media (max-width: 768px) {
  margin-right: 20vw;
  }
  /* Se quiser ainda mais à esquerda em celulares muito pequenos */
  @media (max-width: 480px) {
  margin-right: 10vw;
  }

`
export const Item = styled.div`
  width: auto;
  min-width: 35vw;
  height: 60px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 8px;
  padding: 5px;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    vertical-align: middle;
    margin-right: 1rem;
    object-fit: cover;
  }
  p {
    display: inline;
    font-size: 1.2rem;
    text-align: center;
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }
  &:active {
    transform: translateY(0);
    transform: scale(0.98);
  }

`