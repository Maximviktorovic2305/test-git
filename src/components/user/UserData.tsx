import { useState } from 'react'
import { useAppSelector } from '../../hooks'
import { userSelector } from '../../store/userSlice'
import { UserGithubReposProps } from '../../types/user'
import UserInfoBlock from './user-info/user-info-block/UserInfoBlock'
import UserTableBlock from './user-info/user-table-block/UserTableBlock'
import styles from './UserData.module.scss'

const UserData = () => {
	// Получаем user из state; устанавливаем репозитории пользователя по имени
	const { user } = useAppSelector(userSelector)
	const [activeName, setActiveName] = useState<string | null>(null)
	const [repos, setRepos] = useState<UserGithubReposProps[]>([])

	return (
		// Выбираем активный репозиторий из списка репозиториев пользователя
		<div className={styles.wrapper}>
			<UserTableBlock
				repos={repos}
				setRepos={setRepos}
				setActiveName={setActiveName}
				activeName={activeName}
				userReposUrl={user?.repos_url ?? ''}
			/>
			<UserInfoBlock repos={repos} activeName={activeName} />
		</div>
	)
}

export default UserData
