import { ChangeEvent, DragEvent, useState } from "react"

import styles from "./styles.module.css"

type UploadComponentType = {
  onImageDrop: (file: File) => void
}

export const UploadComponent = ({ onImageDrop }: UploadComponentType) => {
  const [dragging, setDragging] = useState(false)

  const handleDragOver = (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault()
    setDragging(true)
  }

  const handleDragLeave = () => {
    setDragging(false)
  }

  const handleDrop = (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault()
    setDragging(false)
    const file = event.dataTransfer.files[0]
    if (file) {
      onImageDrop(file)
    }
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      onImageDrop(file)
    }
  }

  return (
    <label
      className={`${styles.container} ${dragging ? styles.dragging : ""}`}
      htmlFor="upload-component"
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <input
        type="file"
        onChange={handleInputChange}
        id="upload-component"
        accept=".png, .jpg, .jpeg"
      />
      <i>add</i>
      <span className={styles.message}>Drag and drop or click to upload</span>
    </label>
  )
}
