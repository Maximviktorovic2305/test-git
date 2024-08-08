import axios from "axios";


export const instanse = axios.create({
   baseURL: "https://api.github.com/users/"
}

)