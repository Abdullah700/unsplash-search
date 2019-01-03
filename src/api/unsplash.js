import axios from 'axios'


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID f6f72747d2b975e414e35d7bc062eb1d055937e973be9ce1f08cd35bc465f1c9'
    }
})