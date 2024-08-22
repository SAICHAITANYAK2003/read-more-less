// Write your code here
import {useState} from 'react'

import {
  MainContainer,
  ContentContainer,
  Title,
  SubTitle,
  Image,
  ImageDescription,
  Button,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props

  const [isClicked, setClicked] = useState(false)

  const onClickButton = () => {
    setClicked(prevState => !prevState)
  }

  const description = isClicked
    ?reactHooksDescription:reactHooksDescription.slice(0, 170)
    

  const buttonText = isClicked ? 'Read Less' : 'Read More'

  return (
    <MainContainer>
      <ContentContainer>
        <Title>React Hooks</Title>
        <SubTitle>Hooks are a new addition to React</SubTitle>
        <Image
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        <ImageDescription>{description}</ImageDescription>
        <Button type="button" onClick={onClickButton}>
          {buttonText}
        </Button>
      </ContentContainer>
    </MainContainer>
  )
}

export default ReadMore
