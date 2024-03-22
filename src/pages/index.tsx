import { useDispatch, useSelector } from "react-redux"

import { ButtonComponent } from "@/components/button"
import { FolderComponent } from "@/components/folder"
import { createFolder } from "@/state/reducers/folders"
import { RootState } from "@/state/store"
import { FolderType } from "@/types"

import styles from "@/styles/home.module.css"

export default function Page() {
  const dispatch = useDispatch()
  const folders: FolderType[] = useSelector((s: RootState) => s.folders.folders)

  const handleCreateFolder = () => {
    const folderName = prompt("Enter folder name:")
    if (folderName) {
      dispatch(createFolder(folderName))
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {folders.map((folder, index) => (
          <FolderComponent key={index} {...folder} />
        ))}
      </div>
      <ButtonComponent onClick={handleCreateFolder} icon="add">
        New Folder
      </ButtonComponent>
    </div>
  )
}
