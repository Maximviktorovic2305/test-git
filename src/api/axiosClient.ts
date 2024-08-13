import axios from "axios";

// Установка параметров по умолчанию axios
export const instanse = axios.create({
   // Базовый путь запроса
   baseURL: "https://api.github.com/users/"
}

)