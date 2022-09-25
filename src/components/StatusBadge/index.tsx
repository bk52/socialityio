import React from "react"
import cn from "classnames"
import styles from "./index.module.css"

export interface IStatusBadge {
  status: "published" | "scheduled" | "needApproval" | "error" | "notes"
  text?: string
}

const StatusBadge: React.FC<IStatusBadge> = ({ status, text }) => {
  return (
    <>
      <div className={cn(styles.badge, styles[status])}></div>
      <div className={styles.title}>{text}</div>
    </>
  )
}

export default StatusBadge
