import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Router from 'packs/router'

document.addEventListener('DOMContentLoaded', () => {
  render(
    <BrowserRouter basename={ '/admin' }>
      <Router />
    </BrowserRouter>,
    document.querySelector('div#apps'),
  )
})

