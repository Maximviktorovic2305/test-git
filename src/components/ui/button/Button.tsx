import { ButtonHTMLAttributes } from 'react'
import styles from './Button.module.scss'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	typeForm?: 'round' | 'square'
	text?: string
}

const Button = ({ typeForm = 'square', text = 'Искать', ...props }: Props) => {
	return (
		<button
			{...props}
			className={typeForm === 'square' ? styles.button : styles.buttonRound}>
			{text}
		</button>
	)
}

export default Button
