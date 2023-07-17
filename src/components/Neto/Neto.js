import Bisneto from "../Bisneto/Bisneto"
import { ContainerNeto } from "./styled"



function Neto(props) {
    
    return(
        <>
        <ContainerNeto>
            Neto
            <Bisneto funcaoNeto = {props.funcaoFilho}/>
        </ContainerNeto>
        </>
    )
}

export default Neto