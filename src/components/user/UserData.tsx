import { useAppSelector } from '../../hooks'
import { userSelector } from '../../store/userSlice'
import UserInfoBlock from './user-info/user-info-block/UserInfoBlock'
import UserTableBlock from './user-info/user-table-block/UserTableBlock'
import styles from './UserData.module.scss'

const UserData = () => {   
  const { user } = useAppSelector(userSelector)

  return (
		<div className={styles.wrapper}>
			<UserTableBlock userRepos={user?.repos_url ?? ''}/>
			<UserInfoBlock />
		</div>
	)
}

export default UserData