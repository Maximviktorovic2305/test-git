import styles from './UserTableBlock.module.scss'

import { useEffect, useState } from 'react'

import axios from 'axios'
import { useAppSelector } from '../../../../hooks'
import { userSelector } from '../../../../store/userSlice'
import { UserGithubReposProps, UserRepos } from '../../../../types/user'
import { formatToClientDate } from '../../../../utils/formatDate'
import Pagination from '../../../pagination/Pagination'
import Spinner from '../../../spinner/Spinner'

interface Props {
	userReposUrl: string
	setActiveName: (activeName: string) => void
	repos: UserGithubReposProps[]
	setRepos: (data: UserGithubReposProps[]) => void
	activeName: string | null
}

const UserTableBlock = ({
	userReposUrl,
	setActiveName,
	repos,
	activeName,
	setRepos,
}: Props) => {
	const [sortBy, setSortBy] = useState(false)
	const { user } = useAppSelector(userSelector)
	const [isLoading, setIsLoading] = useState(false)
	const [currentPage, setCurrentPage] = useState(1)
	const [itemsPerPage, setItemsPerPage] = useState(14)

	useEffect(() => {
		const getdataRepos = async (userReposUrl: string) => {
			if (userReposUrl && user) {
				try {
					setIsLoading(true)
					const response = await axios.get(`${userReposUrl}`)
					setRepos(response.data)
				} catch (error) {
					console.log(error)
				} finally {
					setIsLoading(false)
				}
			}
		}

		getdataRepos(userReposUrl)
	}, [setRepos, user, userReposUrl])

	const indexOfLastItem = currentPage * itemsPerPage
	const indexOfFirstItem = indexOfLastItem - itemsPerPage

	const currentItems = repos.slice(indexOfFirstItem, indexOfLastItem)

	const handlePageChange = (page: number) => {
		setCurrentPage(page)
	}

	const handlesetItemsForPage = (value: number) => {
		setItemsPerPage(value)
	}

	const handleSort = () => {
		setSortBy(prev => !prev)
	}

	const sortedRepos = sortBy
		? currentItems.sort((a, b) =>
				a.name > b.name ? 1 : b.name > a.name ? -1 : 0)
		: currentItems.sort((a, b) =>
				a.name < b.name ? 1 : b.name < a.name ? -1 : 0)

	if (isLoading) return <Spinner />

	return (
		<div className='wrapper'>
			<h2 className={styles.title}>Результаты поиска</h2>
			<table cellSpacing='0' className={styles.table}>
				<thead>
					<tr>
						<th onClick={handleSort}>
							{sortBy ? (
								<img src='/arrow.png' alt='arrow' />
							) : (
								<img
									style={{ rotate: '180deg' }}
									src='/arrow.png'
									alt='arrow'
								/>
							)}
							Название
						</th>
						<th>Язык</th>
						<th>Число форков</th>
						<th>Число звезд</th>
						<th>Дата обновления</th>
					</tr>
				</thead>
				<tbody>
					{sortedRepos?.map((repo: UserRepos) => (
						<tr
							key={repo.name}
							onClick={() => setActiveName(repo.name)}
							style={{
								backgroundColor:
									activeName === repo.name ? '#2196F30A' : '#00000000',
							}}>
							<td>{repo.name}</td>
							<td>{repo.language}</td>
							<td>{repo.forks_count}</td>
							<td>{repo.stargazers_count}</td>
							<td>{formatToClientDate(repo.updated_at)}</td>
						</tr>
					))}
				</tbody>

				<Pagination
					totalItems={repos.length}
					itemsPerPage={itemsPerPage}
					currentPage={currentPage}
					onPageChange={handlePageChange}
					handlesetItemsForPage={handlesetItemsForPage}
				/>
			</table>
		</div>
	)
}

export default UserTableBlock
