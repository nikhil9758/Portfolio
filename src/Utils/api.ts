import axios from 'axios'

const customFetch=axios.create({
    baseURL:'https://'
})

export default customFetch