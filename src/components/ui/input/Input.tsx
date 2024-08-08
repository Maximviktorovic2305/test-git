import { ChangeEvent, InputHTMLAttributes } from 'react'
import styles from './Input.module.scss'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	setUsername: (name: string) => void
}

const Input = ({ setUsername, ...props }: Props) => {
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
