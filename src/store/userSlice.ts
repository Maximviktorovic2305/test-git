import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { UserGithubProps } from '../types/user'
import { RootState } from './store'
import { getUserFromGitHub } from '../services'

interface UserReduxProps {
	user: UserGithubProps | null
	loading: boolean
	error: string | undefined
}

// Изначальное состояние state
const initialState: UserReduxProps = {
	user: null,
	loading: false,
	error: undefined,
}

// Запрос на получение данных пользователя
export const fetchUser = createAsyncThunk('user/fetchUser', getUserFromGitHub)

const userSlice = createSlice({
	name: 'user',
	initialState,
	// Работа с асинхронным запросом fetchUser
	extraReducers: builder => {
		builder.addCase(fetchUser.pending, state => {
			state.loading = true
		})
		builder.addCase(
			fetchUser.fulfilled,
			(state, action: PayloadAction<UserGithubProps>) => {
				state.loading = false
				state.user = action.payload
			},
		)
		builder.addCase(fetchUser.rejected, (state, action) => {
			state.loading = false
			state.user = null
			state.error = action.error.message
		})
	},
	reducers: {},
})
export const userSelector = (state: RootState) => state.user
export default userSlice.reducer
