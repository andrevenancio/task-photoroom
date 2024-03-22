import { put, takeLatest } from "redux-saga/effects"

import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

import { DEFAULT_FOLDER } from "@/constants"
import { createFolder, setInitialState } from "@/state/reducers/folders"

interface IState {
  ready: boolean
  nodes: Node[]
}

const initialState: IState = {
  ready: false,
  nodes: [],
}

const slice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setReady(state, action: PayloadAction<boolean>) {
      state.ready = action.payload
    },
    getInitialData(state) {
      state.ready = false
    },
  },
})

export const { setReady, getInitialData } = slice.actions
export default slice.reducer

function* handleSaga(): any {
  const storage = JSON.parse(
    localStorage.getItem("folders") || '{"folders":[]}'
  )

  if (storage?.length > 0) {
    yield put(setInitialState(storage))
  } else {
    yield put(createFolder(DEFAULT_FOLDER))
  }
}

export function* saga() {
  yield takeLatest("global/getInitialData", handleSaga)
}
