/* eslint-disable @next/next/no-img-element */
import { useDispatch } from "react-redux"

import { deleteFolder } from "@/state/reducers/folders"

import { ImageComponent } from "../image"

import styles from "./styles.module.css"

type FolderProps = {
  name: string
  images: string[]
}

export const FolderComponent = ({ name, images }: FolderProps) => {
  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(deleteFolder(name))
  }

  return (
    <div className={styles.container}>
      <div className={styles.name}>
        <h2>{name}</h2>
        <button onClick={handleDelete}>Delete</button>
      </div>
      <div className={styles.content}>
        {images.map((image, index) => (
          <ImageComponent key={index} src={image} />
        ))}
      </div>
    </div>
  )
}
