import Link from "next/link"
import { useRouter } from "next/router"

import styles from "./styles.module.css"

export const HeaderComponent = () => {
  const router = useRouter()

  if (router.pathname === "/") {
    return (
      <header className={styles.container}>
        &nbsp;
        <Link href="/upload">Upload</Link>
      </header>
    )
  }
  return (
    <header className={styles.container}>
      <Link href="/">Back</Link>
    </header>
  )
}
