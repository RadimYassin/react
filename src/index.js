import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css'
const el = <BrowserRouter>
               <App />
            </BrowserRouter>
ReactDOM.render(el, document.getElementById('root'))
