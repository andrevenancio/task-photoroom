import { ChangeEvent } from "react"

import styles from "./styles.module.css"

type UploadComponentType = {
  onImageDrop: (event: ChangeEvent<HTMLInputElement>) => void
}

export const UploadComponent = ({ onImageDrop }: UploadComponentType) => {
  return (
    <label className={styles.container} htmlFor="upload-component">
      <input
        type="file"
        onChange={onImageDrop}
        id="upload-component"
        accept=".png, .jpg, .jpeg"
      />
    </label>
  )
}
