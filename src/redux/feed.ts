import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { GetFeeds } from "../api/feeds"
import { IFeeds } from "../global/types"

interface IState {
  loading: boolean
  error: boolean
  feeds: IFeeds
}

const initialState: IState = {
  loading: true,
  error: false,
  feeds: {},
}

export const fetchFeeds = createAsyncThunk("auth/fetchSignIn", async () => {
  const response = await GetFeeds()
  return response.data
})

export const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFeeds.fulfilled, (state, action) => {
      const { record } = action.payload
      if (record?.posts_by_date) {
        state.feeds = record?.posts_by_date
        state.loading = false
      }
    })
    builder.addCase(fetchFeeds.rejected, (state, action) => {
      state.loading = false
      state.error = true
    })
  },
})

export default feedSlice.reducer
