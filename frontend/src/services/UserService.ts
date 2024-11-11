import axios from "axios"

const urlBase = "http://localhost:3001/api"

class UsuarioService {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async addUsuario(data: any) {
        return axios.post(`${urlBase}/user`, data)
            .then((response) => response.status)
            .catch((err) => {
                console.log(err)
            })
            .finally( () => {
               console.log("terminou")
            })
    }

    async getUsuarios() {
        return axios.get(`${urlBase}/users`)
            .then((response) => response.data)
            .catch((error) => {
                console.error('Error fetching data:', error)
            })
    }

    deleteUsuario(id: number) {
        return axios.delete(`${urlBase}/user/${id}`)
            .then((response) => response.status)
            .catch((err) => {
                console.log(err)
            })
    }
}

export default new UsuarioService()