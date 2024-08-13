import { UserGithubReposProps } from '../../../../types/user'
import { formatToClientDate } from '../../../../utils/formatDate'
import styles from './UserInfoBlock.module.scss'

interface Props {
	activeName: string | null
	repos: UserGithubReposProps[]
}

// Компонент для отображения информации о пользователе
const UserInfoBlock = ({ activeName, repos }: Props) => {
	// Получение активного репозитория
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

					{activeRepo?.created_at ? (
						<>
							<div className={styles.updated_at}>
								Создано: {formatToClientDate(activeRepo?.created_at)}
							</div>
						</>
					) : (
						<div className={styles.updated_at}>Нет описания...</div>
					)}

					{activeRepo?.updated_at ? (
						<>
							<div className={styles.updated_at}>
								Обновлено: {formatToClientDate(activeRepo?.updated_at)}
							</div>
						</>
					) : (
						<div className={styles.updated_at}>Нет описания...</div>
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
					>
					Выберите репозиторий
				</div>
			)}
		</>
	)
}

export default UserInfoBlock
