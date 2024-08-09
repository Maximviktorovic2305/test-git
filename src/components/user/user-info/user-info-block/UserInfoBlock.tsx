import axios from 'axios'
import { useEffect, useState } from 'react'
import { UserGithubReposProps } from '../../../../types/user'
import Spinner from '../../../spinner/Spinner'
import styles from './UserInfoBlock.module.scss'

interface Props {
	activeName: string | null
	repos: UserGithubReposProps[]
}

const UserInfoBlock = ({ activeName, repos }: Props) => {
	const activeRepo = repos.find(repo => repo.name === activeName)
	const [tags, setTags] = useState(null)
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		const getTags = async () => {
			try {
				setIsLoading(true)
				const response = await axios.get(`${activeRepo?.}`)
				// setTags(response.data)
				console.log(response.data)
			} catch (error) {
				console.log(error)
			} finally {
				setIsLoading(false)
			}
		}
		getTags()
	}, [activeRepo])

	if (isLoading) return <Spinner />

	return (
		<div className={styles.wrapper}>
			<div>{activeRepo?.name}</div>
			<div>{activeRepo?.watchers_count}</div>
			<div>
				{activeRepo?.topics.map(item => (
					<div>{item}</div>
				))}
			</div>
			<div>
				{activeRepo?.language}
				{activeRepo?.blobs_url}
			</div>
		</div>
	)
}

export default UserInfoBlock
