import React from 'react'
import ReactDOM from 'react-dom'

import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/globalStyles'
import { TaskContextProvider } from './contexts/TaskContext'
import { Toaster } from 'sonner'
import App from './App'
import { defaultTheme } from './styles/theme'


const AppContainer = () => {
  return (
    <React.StrictMode>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <TaskContextProvider>
          <App />
          <Toaster richColors />
        </TaskContextProvider>
      </ThemeProvider>
    </React.StrictMode>
  )
}

ReactDOM.render(<AppContainer />, document.getElementById('szb-app-root'))
