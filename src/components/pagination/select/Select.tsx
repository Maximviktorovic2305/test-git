import styles from './Select.module.scss'

interface Props {
	handlesetItemsForPage: (value: number) => void
	itemsPerPage: number
}

const Select = ({ handlesetItemsForPage, itemsPerPage }: Props) => {
	console.log(itemsPerPage)
	return (
		<div className={styles.select_wrapper}>
			<span>Rows per page:</span>

			<select
				onChange={e => handlesetItemsForPage(Number(e.target.value))}
				value={itemsPerPage}
				name='item-per-page'>
				<option value={6}>6</option>
				<option value={10}>10</option>
				<option value={14}>14</option>
				<option value={18}>18</option>
			</select>
			{itemsPerPage}
		</div>
	)
}

export default Select