import React from 'react'
import ReactDOM from 'react-dom/client'
import {ThemeProvider} from 'styled-components'
import GlobalStyles from './style/global'

import { AuthProvider } from './hooks/auth'

import theme from './style/theme'

import { Routes } from './routers'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <AuthProvider>
      <Routes/>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
)