import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import Test from './components/Test.jsx'

function App() {
  return (
    <>
      <Header />
      <Main />
      <Test/>
    </>
  )
}

export default App