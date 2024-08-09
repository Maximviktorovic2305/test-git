import { useState } from 'react'
import { useAppSelector } from '../../hooks'
import { userSelector } from '../../store/userSlice'
import UserInfoBlock from './user-info/user-info-block/UserInfoBlock'
import UserTableBlock from './user-info/user-table-block/UserTableBlock'
import styles from './UserData.module.scss'
import { UserGithubReposProps } from '../../types/user'

const UserData = () => {   
  const { user } = useAppSelector(userSelector)
  const [activeName, setActiveName] = useState<string | null>(null)
  const [repos, setRepos] = useState<UserGithubReposProps[]>([])


  return (
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