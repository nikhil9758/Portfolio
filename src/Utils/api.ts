import axios from 'axios'

const customFetch=axios.create({
    baseURL:'https://logindemo-a1d5e-default-rtdb.firebaseio.com/'
})

export default customFetch