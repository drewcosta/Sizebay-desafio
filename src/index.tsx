import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import './index.css'
import { FilterContextProvider } from './contexts/FilterContext'

const AppContainer = () => {
  return (
    <React.StrictMode>
      <FilterContextProvider>
        <App />
      </FilterContextProvider>
    </React.StrictMode>
  )
}

ReactDOM.render(<AppContainer />, document.getElementById('szb-app-root'))
