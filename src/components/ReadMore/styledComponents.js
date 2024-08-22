// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  height:100vh;
`

export const ContentContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`

export const Title = styled.h1`
  font-family:'Roboto';
  color: #1e293b;
  font-size:30px;
  text-align:center;
`

export const SubTitle = styled.p`
  font-family:'Roboto';
  color:#334155;
  font-size:20px;
  text-align:center;

`
export const Image = styled.img`
  height:350px;
  
`
export const ImageDescription = styled.p`
  font-family:'Roboto';
  color:#334155;
  font-size:18px;
  line-height:30px;
  width:40%;
  
`
export const Button=styled.button`
  height:40px;
  width:130px;
  border:none;
  background-color: #1f81ff; 
  color:#fff;
  border-radius:10px;
  cursor:pointer;
`
