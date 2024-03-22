import styles from "./styles.module.css"

export const ImageComponent = ({ src }: { src: string }) => {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${src})` }}
    />
  )
}
