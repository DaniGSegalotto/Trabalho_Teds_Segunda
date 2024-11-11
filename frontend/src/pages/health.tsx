import axios from "axios"
import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"

const HealthCheck = () => {
    const [resultado, setResultado] = useState("")
    useEffect(() => {
        axios.get("http://localhost:3001/api/healthcheck")
        .then(function (response) {
            setResultado(response.data.message)
            console.log(response.data.message)
          })
          .catch(function (error) {
            console.log(error);
          })
    }, [])
    return(
        <Container className="mt-5 p-5">
            <h1>{resultado}</h1>
        </Container>
    )
}

export default HealthCheck