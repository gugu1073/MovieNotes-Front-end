import React from 'react'
import ReactDOM from 'react-dom/client'
import {ThemeProvider} from 'styled-components'
import GlobalStyles from './style/global'

import theme from './style/theme'

import { SignUp } from './pages/SignUp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <SignUp/>
    </ThemeProvider>
  </React.StrictMode>,
)