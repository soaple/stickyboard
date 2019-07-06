// src/app-client.js

import React from 'react'
import ReactDOM from 'react-dom'

import AppRoutes from './components/base/AppRoutes'

window.onload = () => {
    ReactDOM.render(<AppRoutes/>, document.getElementById('main'))
}
