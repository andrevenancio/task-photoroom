import { ReactNode } from "react"
import Link from "next/link"

import styles from "./styles.module.css"

type ButtonComponentProps = {
  children?: ReactNode
  icon?: string
  onClick?: () => void
  href?: string
}

export const ButtonComponent = ({
  children,
  icon,
  onClick,
  href,
}: ButtonComponentProps) => {
  if (href) {
    return (
      <Link href={href} className={styles.container}>
        {icon && <i>{icon}</i>}
        {children}
      </Link>
    )
  }

  return (
    <button className={styles.container} onClick={onClick}>
      <i>{icon}</i>
      {children}
    </button>
  )
}
