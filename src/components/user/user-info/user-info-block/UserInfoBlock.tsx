import { UserGithubReposProps } from '../../../../types/user'
import styles from './UserInfoBlock.module.scss'

interface Props {
	activeName: string | null
	repos: UserGithubReposProps[]
}

const UserInfoBlock = ({ activeName, repos }: Props) => {
	const activeRepo = repos.find(repo => repo.name === activeName)

	return (
		<>
			{activeRepo ? (
				<div className={styles.wrapper}>
					<div className={styles.name}>{activeRepo?.name}</div>
					<div className={styles.info}>
						{activeRepo?.language ? (
							<span className={styles.lang}>{activeRepo?.language}</span>
						) : (
							<span></span>
						)}

						<div>
							<img src='/Star.png' alt='star' />
							<span>{activeRepo?.watchers_count}</span>
						</div>
					</div>

					{activeRepo?.description ? (
						<div className={styles.description}>{activeRepo?.description}</div>
					) : (
						<div className={styles.description}>Нет описания...</div>
					)}

					{activeRepo?.license ? (
						<div className={styles.license}>{activeRepo?.license}</div>
					) : (
						<div className={styles.license}>Нет лицензии...</div>
					)}
				</div>
			) : (
				<div
					className={styles.notClicked}
					style={{ display: !activeRepo ? 'flex' : 'none' }}>
					Выберите репозиторий
				</div>
			)}
		</>
	)
}

export default UserInfoBlock
