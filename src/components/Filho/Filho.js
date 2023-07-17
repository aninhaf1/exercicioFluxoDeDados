import Neto from "../Neto/Neto"
import { ContainerFilho } from "./styled"

function Filho(props) {
    
    return(
        <>
        <ContainerFilho>
            Filho
            <Neto funcaoFilho={props.funcao}/>
        </ContainerFilho>
        </>
    )
}

export default Filho