/* eslint-disable @next/next/no-img-element */
import React from "react"
import { useDispatch } from "react-redux"

import { deleteFolder, moveImageToFolder } from "@/state/reducers/folders" // Import your deleteFolder and moveImage actions

import { ImageComponent } from "../image"

import styles from "./styles.module.css"

const DraggableImage = ({
  imageUrl,
  parentFolder,
}: {
  imageUrl: string
  parentFolder: string
}) => {
  const handleDragStart = (e: React.DragEvent<HTMLImageElement>) => {
    e.dataTransfer.setData("imageUrl", imageUrl)
    e.dataTransfer.setData("parentFolder", parentFolder)
  }

  return (
    <div draggable onDragStart={handleDragStart}>
      <ImageComponent src={imageUrl} />
    </div>
  )
}

type FolderProps = {
  name: string
  images: string[]
}

export const FolderComponent = ({ name, images }: FolderProps) => {
  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(deleteFolder(name))
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    const newFolder = name
    const sourceFolder = e.dataTransfer.getData("parentFolder")
    if (sourceFolder !== newFolder) {
      const imageUrl = e.dataTransfer.getData("imageUrl")
      dispatch(
        moveImageToFolder({
          imageUrl,
          sourceFolder,
          destinationFolder: newFolder,
        })
      )
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.name}>
        <h2>{name}</h2>
        <button onClick={handleDelete}>Delete</button>
      </div>
      <div
        className={styles.content}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {images.map((image, index) => (
          <DraggableImage key={index} imageUrl={image} parentFolder={name} />
        ))}
      </div>
    </div>
  )
}
