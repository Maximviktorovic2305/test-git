
// Функция форматирования даты
export const formatToClientDate = (date?: Date | string) => {
	if (!date) {
		return ''
	}
	return new Date(date).toLocaleString()
}
