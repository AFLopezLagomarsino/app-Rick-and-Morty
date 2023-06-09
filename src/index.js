import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { store } from './funciones aux/redux/store'
import { Provider } from 'react-redux'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
  root.render(
  <Provider store = {store}>
  <BrowserRouter>
  <App />
  </BrowserRouter>,
  </Provider>
)
