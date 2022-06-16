import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet-async'

import { Header } from './components/Header'
import { Link } from './components/Link'
import { Logo } from './components/Logo'

const Wrapper = styled.div`
  text-align: center;
`

const App: React.FC = () => (
  <Wrapper>
    <Helmet>
      <title>CRA Pipeline</title>
    </Helmet>
    <Header>
      <Logo alt="Create React App - Logo" />
    </Header>
  </Wrapper>
)

export default App
