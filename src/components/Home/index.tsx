import React, { useEffect, useState } from 'react'

import * as S from './styled'

export const Home = () => {
  const [image, setImage] = useState(0)
  const [imagesArray, setImagesArray] = useState([])
  console.log(imagesArray[1])

  function trackScrollPosition() {
    const position = window.scrollY
    const number = Math.min(Math.floor(position / 30) + 1, 128)
    setImage(number)
  }

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', trackScrollPosition)
  }

  useEffect(() => {
    let myArray = new Array(129)

    for (let i = 0; i < myArray.length; i++) {
      myArray[i] = `/sequence/sequence_${i}.jpg`
    }
    setImagesArray(myArray)
  }, [])

  return (
    <S.Section>
      <S.Content
        onScroll={trackScrollPosition}
        style={{
          backgroundImage: `url('${imagesArray[image]}')`
        }}
      />
    </S.Section>
  )
}

export default Home
