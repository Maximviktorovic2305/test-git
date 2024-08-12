import styles from './Pagination.module.scss'
import Select from './select/Select'

interface Props {
	totalItems: number
	itemsPerPage: number
	currentPage: number
	onPageChange: (page: number) => void
	handlesetItemsForPage: (value: number) => void
}

const Pagination = ({
	totalItems,
	itemsPerPage,
	currentPage,
	onPageChange,
	handlesetItemsForPage,
}: Props) => {
	const totalPages = Math.ceil(totalItems / itemsPerPage)
	const pages = [...Array(totalPages).keys()].map(num => num + 1)

	return (
		<div>
			<div>
				<Select
					handlesetItemsForPage={handlesetItemsForPage}
					itemsPerPage={itemsPerPage}
				/>
			</div>

			<div>
				{pages.map(page => (
					<button
						key={page}
						onClick={() => onPageChange(page)}
						style={{
							backgroundColor: currentPage === page ? '#2196f3' : 'inherit',
							padding: 32,
							margin: 5,
						}}>
						{page}
					</button>
				))}
			</div>
		</div>
	)
}

export default Pagination