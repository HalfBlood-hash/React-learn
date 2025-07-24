

import React from 'react'
import { Container, Button } from '../../Component/component.js'

export default function Home() {
  return (


    <Container>
      <div>Home</div>
      <Button label="Submit"
        onClick={() => console.log('Submitted!')}
        size="large"
        backgroundColor="#28a745" />
    </Container>

  )
}
