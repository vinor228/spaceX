import styled from "styled-components";

export const LaunchesWrapper = styled.div`
  margin: 0;
  padding: 0;
  width: 80vw;
  display: grid;
  grid-template-columns: repeat(auto-fit, 250px);
  grid-auto-rows: 10px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  justify-content: center;
  background-color:black;
`

export const Cart = styled.button<{ size: number }>`
  margin: 15px 10px;
  padding: 10px;
  box-sizing: border-box;
  grid-row-end: ${props  => props.size? `span ${props.size}` : 'span 25'};
  border-radius: 16px;
  background-color: red;
  transition: all .2s ease-in-out;
  &:hover {
  transform: scale(1.1);
  }
`

export const LaunchImage = styled.img`
  width: 150px;
  height: 150px;
`

export const DetailImage = styled.img`
  width: 25%;
  margin-right: 25px;
`

export const InfoText = styled.p`
  color: #b99e9e;
  margin: auto;
  font-size: 15px;
  font-weight: 800
`

export const PopupContainer = styled.div<{open: boolean}>`
  opacity: ${props => props.open ? 1 : 0};
  visibility:${props => props.open ? 'visible': 'hidden'} ;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.5);
 transition: 0.3s ease-in-out;
`

export const PopupBody = styled.div<{open: boolean}>`
  width: 700px;
  margin:  auto;
  background-color: white;
  display: flex;
  flex-direction: row;
  border-radius: 5px;
  position: relative;
  transition: inherit;
  opacity: ${props => props.open ? 1 : 0};
  visibility: ${props => props.open ? 'visible': 'hidden'} ;
  transform:${props => props.open ? 'translateY(0)': 'translateY(-100px)'}  ;
 `

export const DetailText = styled.p`
 margin: auto;
 font-weight: 700;
 font-size: 29px;
 font-family: monospace;`

export const DetailInfo = styled.p`
 margin: 5px 10px;
 font-weight: 200;
 font-size: 15px;`

export const CloseButton = styled.span`
  position: absolute;
 top: 15px;
 right: 20px;
 font-size: 1.5rem;
 cursor: pointer;
 color: #7f7f7f;
 &:hover{
  color: #000;
 }
`