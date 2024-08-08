import { useEffect, useState } from "react"

import axios from "axios"

interface Props {
	userRepos: string
}


const UserTableBlock = ({ userRepos }: Props) => {

  console.log(userRepos)

	const [dataRepos, setDataRepos] = useState()

	useEffect(() => {
		const getdataRepos = async (userRepos: string) => {
			const response = await axios.get(`${userRepos}`)
			console.log(response.data)
		}

		getdataRepos(userRepos)
	}, [userRepos])


	// const [repos, setRepos] = useState([
	// 	{
	// 		name: 'React',
	// 		language: 'JavaScript',
	// 		forks: 182000,
	// 		stars: 190000,
	// 		updatedAt: '2023-10-26',
	// 	},
	// 	{
	// 		name: 'Angular',
	// 		language: 'TypeScript',
	// 		forks: 65000,
	// 		stars: 78000,
	// 		updatedAt: '2023-10-25',
	// 	},
	// 	{
	// 		name: 'Vue',
	// 		language: 'JavaScript',
	// 		forks: 35000,
	// 		stars: 200000,
	// 		updatedAt: '2023-10-27',
	// 	},
	// ])

	// const [sortBy, setSortBy] = useState(null) // State for sorting

	// const handleSort = column => {
	// 	if (sortBy === column) {
	// 		setSortBy(null) // Toggle sorting
	// 	} else {
	// 		setSortBy(column)
	// 	}
	// }

	// const sortedRepos = [...repos].sort((a, b) => {
	// 	if (sortBy === 'name') {
	// 		return a.name.localeCompare(b.name)
	// 	} else if (sortBy === 'language') {
	// 		return a.language.localeCompare(b.language)
	// 	} else {
	// 		return 0 // No sorting
	// 	}
	// })

	return (
		<table className='table'>
			{/* <thead>
				<tr>
					<th onClick={() => handleSort('name')}>
						Название
						{sortBy === 'name' && <span>{sortBy === 'name' ? '▲' : '▼'}</span>}
					</th>
					<th>Язык</th>
					<th>Число форков</th>
					<th>Число звезд</th>
					<th>Дата обновления</th>
				</tr>
			</thead>
			<tbody>
				{sortedRepos.map(repo => (
					<tr key={repo.name}>
						<td>{repo.name}</td>
						<td>{repo.language}</td>
						<td>{repo.forks}</td>
						<td>{repo.stars}</td>
						<td>{repo.updatedAt}</td>
					</tr>
				))}
			</tbody> */}
		</table>
	)
}

export default UserTableBlock