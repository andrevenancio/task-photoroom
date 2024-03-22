import { ChangeEvent } from "react"
import { useRouter } from "next/router"
import loadImage from "blueimp-load-image"
import { useDispatch } from "react-redux"

import { UploadComponent } from "@/components/upload"
import { DEFAULT_FOLDER } from "@/constants"
import { addImageToFolder } from "@/state/reducers/folders"

import styles from "@/styles/upload.module.css"

export default function Page() {
  const router = useRouter()
  const dispatch = useDispatch()

  const uploadImageToServer = async (file: File) => {
    const imageData = await loadImage(file, {
      maxWidth: 400,
      maxHeight: 400,
      canvas: true,
    })

    const image = imageData.image as HTMLCanvasElement
    const imageBase64 = image.toDataURL("image/png")
    const imageBase64Data = imageBase64.replace("data:image/png;base64,", "")
    const data = {
      image_file_b64: imageBase64Data,
    }

    const response = await fetch("/api/upload", {
      method: "POST",
      body: JSON.stringify(data),
    })

    const result = await response.json()
    dispatch(addImageToFolder({ name: DEFAULT_FOLDER, image: result.image }))

    // redirect to home page
    router.push("/")
  }

  const handleImageDrop = (file: File) => {
    if (file) {
      uploadImageToServer(file)
    } else {
      console.error("No file")
    }
  }

  return (
    <div className={styles.container}>
      <UploadComponent onImageDrop={handleImageDrop} />
    </div>
  )
}
