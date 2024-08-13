import axios from 'axios'
import { instanse } from '../api/axiosClient'

// Функция запроса пользователя по имени
export async function getUserFromGitHub(username: string) {
	try {
		const res = await instanse.get(`${username}`)
		return res.data
	} catch (error) {
		console.log(error)
	}
}

// Функция запроса репозиториев пользователя
export async function getReposByUsername(userReposUrl: string) {
	const response = await axios.get(`${userReposUrl}`)

	return response
}
