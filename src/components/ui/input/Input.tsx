import { ChangeEvent, InputHTMLAttributes } from 'react'
import styles from './Input.module.scss'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	setUsername: (name: string) => void
}

// Компонент для ввода имени пользователя
const Input = ({ setUsername, ...props }: Props) => {

	// Ф-ия сохранения введенного имени пользователя
	const handleInputChange = (name: string) => {
		setUsername(name)
	}

	return (
		<input
    {...props}
			onChange={(e: ChangeEvent<HTMLInputElement>) =>
				handleInputChange(e.target.value)
			}
			className={styles.input}
			placeholder='Введите поисковый запрос'
		/>
	)
}

export default Input
