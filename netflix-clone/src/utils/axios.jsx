import axios from 'axios'
const instance= axios.create({
    baseURL:"https://api.themoviedb.org/3/",
    // https://www.themoviedb.org/
})
export default instance