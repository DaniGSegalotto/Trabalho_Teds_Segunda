import UserService from "@/services/UserService";
import React, { useState } from "react";
import { Button, Container, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";

interface Usuario {
    id?: number;
    name: string;
    email: string
    password: number
}

const UserForm: React.FC = () => {
    const [formData, setFormData] = useState<Usuario>({
        name: "",
        email: "",
        password: 0
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        
        setFormData(
            {
                ...formData,
                [name]: value
            }
        )
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        UserService.addUsuario(formData).then(() => {
            console.log("usuario adicionado")
        }).catch((err) => {
            console.log(err)
        })
        console.log(formData)
    }

    return(
        <>
            <Container className="mt-5 p-5">
                {
                    formData ?
                    <h1>Editando Usuario {formData.name}</h1>:
                    <h1>Criando Usuario</h1>
                }
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <FormLabel>Nome</FormLabel>
                        <FormControl
                            type="text"
                            name="name"
                            value={formData.name}
                            placeholder="Digite o nome do Usuario"
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Senha</FormLabel>
                        <FormControl
                            type="password"
                            name="password"
                            value={formData.password}
                            placeholder="Digite a senha do Usuario"
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Email</FormLabel>
                        <FormControl
                            type="email"
                            name="email"
                            value={formData.email}
                            placeholder="Digite o email do Usuario"
                            onChange={handleChange}
                        />
                    </FormGroup>

                    <Button variant="primary" color="green" type="submit">
                        Salvar
                    </Button>
                </Form>
            </Container>
        </>
    )
}

export default UserForm