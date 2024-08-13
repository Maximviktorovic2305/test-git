import styles from './App.module.scss'
import Header from './components/header/Header'
import Spinner from './components/spinner/Spinner'
import UserData from './components/user/UserData'
import { useAppSelector } from './hooks'
import { userSelector } from './store/userSlice'

function App() {
	// Получаем данные user из Redux State
	const { user, loading, error } = useAppSelector(userSelector)

	return (
		<div className={styles.app}>
			<Header />
			<div className={styles.wrapper}>
				{/* Устанавливаем спиннер если пользователь не загрузился */}
				{loading ? (
					<Spinner />
				) : user ? (
					<UserData />   
				) : (
					<h1 className={styles.greeting}>Добро пожаловать</h1>
				)}
				{/* Выводим ошибку при загрузке */}
				{error && <div className={styles.error}></div>}
			</div>
		</div>
	)
}

export default App
