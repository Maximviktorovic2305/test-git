import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { UserGithubProps } from '../types/user'
import { RootState } from './store'
import { instanse } from '../api/axiosClient'

interface UserReduxProps {
   user: UserGithubProps | null
   loading: boolean
   error: string | undefined;
}

const initialState: UserReduxProps = {
	user: null,
   loading: false,
   error: undefined
}


export const fetchUser = createAsyncThunk('user/fetchUser', async (username: string) => {
	const res = instanse.get(`${username}`)
	return (await res).data
})


const userSlice = createSlice({
	name: 'user',
	initialState,
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