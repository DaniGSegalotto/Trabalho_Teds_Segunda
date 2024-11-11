import UserService from "@/services/UserService";
import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Modal,
  Table,
} from "react-bootstrap";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";

type Usuario = {
  id?: number;
  name: string;
  email: string;
  password: number;
};

const Usuarios = () => {
  const [listaUsuarios, setListaUsuarios] = useState<Usuario[]>([])
  const [showModal, setShowModal] = useState(false)
	const [refresh, setRefresh] = useState(false)
  const [currentUser, setCurrentUser] = useState<Usuario>({
    name: "",
    email: "",
    password: null,
  });

  useEffect(() => {
    fetchUsuarios();
  }, [refresh]);

  const fetchUsuarios = async () => {
    const resultado = await UserService.getUsuarios();
    setListaUsuarios(resultado);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setCurrentUser({
      ...currentUser,
      [name]: value,
    });
  };

  const addUsuario = async () => {
		const resultado = await UserService.addUsuario(currentUser)
		console.log(resultado)
		if(resultado === 201) {
			setShowModal(false)
			setRefresh(!refresh)
		}
	};

	const removeUsuario = async (id: number) => {
		const resultado = await UserService.deleteUsuario(id)
		if(resultado === 204)
			setRefresh(!refresh)
	}

  return (
    <Container className="mt-5 p-5">
      <h2 className="mb-4">
        Lista de Usuários
        <Button onClick={() => openModal()}>
          <FaPlus></FaPlus>
        </Button>
      </h2>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {listaUsuarios.map((user: Usuario) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>******</td>
              <td>
                <Button variant="danger" onClick={() => removeUsuario(user.id)}>
                  <FaTrash></FaTrash>
                </Button>
                <Button variant="warning">
                  <FaEdit></FaEdit>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        bg="dark"
        data-bs-theme="dark"
      >
        <Modal.Header closeButton>
          <Modal.Title>Usuário</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <FormGroup>
              <FormLabel>Nome</FormLabel>
              <FormControl
                type="text"
                name="name"
                value={currentUser.name}
                placeholder="Digite o nome do Usuario"
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Senha</FormLabel>
              <FormControl
                type="password"
                name="password"
                value={currentUser.password}
                placeholder="Digite a senha do Usuario"
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Email</FormLabel>
              <FormControl
                type="email"
                name="email"
                value={currentUser.email}
                placeholder="Digite o email do Usuario"
                onChange={handleChange}
              />
            </FormGroup>
          </Form>
        </Modal.Body>
				<Modal.Footer>
					<Button onClick={() => addUsuario()}>Salvar</Button>
				</Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Usuarios;
