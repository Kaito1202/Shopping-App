import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  //レンダリングを2回することでバグを早期発見するstrictモード
  <React.StrictMode>
  {/*リンク遷移できるようにする*/}
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </React.StrictMode>,
)
