import React, { useEffect, useState } from "react"
import { Button } from "react-bootstrap"

const ContadorDois: React.FC = () => {
    const [contador, setContador] = useState(0)

    useEffect( () => {
        console.log("Contador iniciado")
    }, [contador])

    const incrementar = () => {
        setContador(contador +1)
    }

    const decrementar = () => {
        setContador(contador -1)
    }

    return(
        <>
            <h1>Contador: {contador}</h1>
            <Button onClick={incrementar}>Incrementar</Button>
            <Button onClick={decrementar}>Decrementar</Button>
        </>
    )
}

export default ContadorDois