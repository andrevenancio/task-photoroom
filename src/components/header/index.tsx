import { useRouter } from "next/router"

import { ButtonComponent } from "../button"

import styles from "./styles.module.css"

export const HeaderComponent = () => {
  const router = useRouter()

  if (router.pathname === "/") {
    return (
      <header className={styles.container}>
        &nbsp;
        <ButtonComponent href="/upload" icon="add" />
      </header>
    )
  }
  return (
    <header className={styles.container}>
      <ButtonComponent href="/" icon="arrow_back" />
    </header>
  )
}
