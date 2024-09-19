import * as styles from './styles'

export default function Teclado1({ value, atualizar, tela }) {

    const handleClickIgual = (event)=>{
        if (tela.includes("+")){
          const temp1 = tela.split("+")
          const num1 = Number(temp1[0])
          const num2 = Number(temp1[1])
          return(
            atualizar(num1+num2)
          )
        }
        if (tela.includes("-")){
          const temp1 = tela.split("-")
          const num1 = Number(temp1[0])
          const num2 = Number(temp1[1])
          return(
            atualizar(num1-num2)
          )
        }
        if (tela.includes("*")){
          const temp1 = tela.split("*")
          const num1 = Number(temp1[0])
          const num2 = Number(temp1[1])
          return(
            atualizar(num1*num2)
          )
        }
        if (tela.includes("/")){
          const temp1 = tela.split("/")
          const num1 = Number(temp1[0])
          const num2 = Number(temp1[1])
          return(
            atualizar(num1/num2)
          )
        }
    }  

    return (
        <>
            <styles.StyledTeclado>
                {value && value.map((element, index) =>
                    <styles.StyledButton key={index} value={element} onClick={() => atualizar(tela + element)}>
                        {element}
                    </styles.StyledButton>)}
                <styles.StyledButton onClick={()=> handleClickIgual() }>=</styles.StyledButton>
            </styles.StyledTeclado>
            

        </>
    )
}
