import { useState } from 'react'
import TituloCalculadora from '../src/components/calculadora/Title/title'
import Teclado1 from './components/calculadora/ButtonGrid/buttonGrid'
import Display from "./components/calculadora/Display/display";
import './App.css'
import * as styles from "./components/calculadora/ButtonGrid/styles"




function App() {
  const [tela, setTela] = useState('0')
  const list = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', "+", "-", "*", "/", ".",]


  const handleClickClear = (event) => {
    setTela(event.target.value)
  }


  return (
    <>
      <styles.StyledCalc>
        <TituloCalculadora />
        <Display tela={tela} />
        <Teclado1 value={list} atualizar={setTela} tela={tela} />

        <button value={'0'} onClick={handleClickClear} >Apagar</button>
      </styles.StyledCalc>
    </>
  )
}

export default App
