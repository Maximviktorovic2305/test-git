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
	// Определяем общее кол-во страниц
	const totalPages = Math.ceil(totalItems / itemsPerPage)
	const pages = [...Array(totalPages).keys()].map(num => num + 1)

	// Ф-ия смены страницы на предыдущую
	const onPrevPageChange = () => {
		if (currentPage > 1) {
			onPageChange(currentPage - 1)
		}
	}

	// Ф-ия смены страницы на следующую
	const onNextPageChange = () => {
		if (currentPage !== pages.length) {
			onPageChange(currentPage + 1)
		}
	}

	return (
		<div className={styles.pagination_wrapper}>
			<div>
				<Select
					handlesetItemsForPage={handlesetItemsForPage}
					itemsPerPage={itemsPerPage}
				/>
			</div>

			<div className={styles.info}>
				<span className={styles.pages_info}>
					{currentPage} of {pages.length}
				</span>
				<span className={styles.img_block}>
					<img onClick={onPrevPageChange} src='/arrow-left.png' alt='arrow' />
					<img onClick={onNextPageChange} src='/arrow-right.png' alt='arrow' />
				</span>
			</div>
		</div>
	)
}

export default Pagination
