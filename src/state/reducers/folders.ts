import { createSlice } from "@reduxjs/toolkit"

import { FolderType } from "@/types"

const LOCAL_STORAGE_KEY = "folders"

interface IState {
  folders: FolderType[]
}

const initialState: IState = {
  folders: [],
}

const slice = createSlice({
  name: "folders",
  initialState,
  reducers: {
    setInitialState: (state, action) => {
      state.folders = action.payload
    },
    createFolder: (state, action) => {
      state.folders.push({ name: action.payload, images: [] })
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state.folders))
    },
    deleteFolder: (state, action) => {
      const index = state.folders.findIndex(
        (folder) => folder.name === action.payload
      )
      if (index !== -1) {
        state.folders.splice(index, 1)
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state.folders))
      }
    },
    addImageToFolder: (state, action) => {
      const { name, image } = action.payload
      const folder = state.folders.find((folder) => folder.name === name)
      if (folder) {
        folder.images.push(image)
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state.folders))
      }
    },
    removeImageFromFolder: (state, action) => {
      const { name, imageId } = action.payload
      const folder = state.folders.find((folder) => folder.name === name)
      if (folder) {
        const index = folder.images.findIndex((image) => image.id === imageId)
        if (index !== -1) {
          folder.images.splice(index, 1)
          localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state.folders))
        }
      }
    },
    moveImageToFolder: (state, action) => {
      const { imageUrl, sourceFolder, destinationFolder } = action.payload
      const sourceIndex = state.folders.findIndex(
        (folder) => folder.name === sourceFolder
      )
      const destinationIndex = state.folders.findIndex(
        (folder) => folder.name === destinationFolder
      )
      if (sourceIndex !== -1 && destinationIndex !== -1) {
        const imageIndex = state.folders[sourceIndex].images.findIndex(
          (image) => image === imageUrl
        )
        if (imageIndex !== -1) {
          const imageToMove = state.folders[sourceIndex].images.splice(
            imageIndex,
            1
          )[0]
          state.folders[destinationIndex].images.push(imageToMove)
          localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state.folders))
        }
      }
    },
  },
})

export const {
  setInitialState,
  createFolder,
  deleteFolder,
  addImageToFolder,
  removeImageFromFolder,
  moveImageToFolder,
} = slice.actions
export default slice.reducer
