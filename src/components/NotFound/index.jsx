import React from 'react'
//styles
import { Container } from './NotFoundStyles'
//icon
import { FaCookieBite } from 'react-icons/fa'

const NotFound = () => (
  <Container>
    <FaCookieBite className="icon" />
    <h1>404: Page Not Found</h1>
  </Container>
)

export default NotFound
