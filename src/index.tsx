import React from 'react'
import ReactDOM from 'react-dom'

import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/globalStyles'
import { FilterContextProvider } from './contexts/FilterContext'
import { Toaster } from 'sonner'
import App from './App'
import { defaultTheme } from './styles/theme'


const AppContainer = () => {
  return (
    <React.StrictMode>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <FilterContextProvider>
          <App />
          <Toaster richColors />
        </FilterContextProvider>
      </ThemeProvider>
    </React.StrictMode>
  )
}

ReactDOM.render(<AppContainer />, document.getElementById('szb-app-root'))
