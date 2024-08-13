import { FormEvent, useState } from 'react'
import { useAppDispatch } from '../../hooks'
import { fetchUser } from '../../store/userSlice'
import Button from '../ui/button/Button'
import Input from '../ui/input/Input'
import styles from './Header.module.scss'

const Header = () => {
	const [username, setUsername] = useState('')
	const dispatch = useAppDispatch()

	// Ф-ия получения данных пользователя(имя)
	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		// Вызываем Redux и передаем запрос на получение пользователя по имени
		await dispatch(fetchUser(username))
	}

	return (
		<>
			<form onSubmit={handleSubmit} className={styles.header}>
				<Input value={username} setUsername={setUsername} />
				<Button type='submit' />
			</form>
		</>
	)
}

export default Header
