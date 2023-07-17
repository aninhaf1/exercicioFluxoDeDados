import { ContainerBisneto } from "./styled";


function Bisneto(props) {
    return(
        <>
        <ContainerBisneto>
            <p>Bisneto</p>
            <p>Botão do componente Bisneto</p>
            <p>Clique para atualizar o estado do pai</p>
            <button onClick={props.funcaoNeto}>Atualizar estado</button>
            
        </ContainerBisneto>
        </>
    )
}

export default Bisneto;