import React from "react"
import styles from "./index.module.css"
import SelectorImage from "../../../assets/menuSelector.svg"

export interface IClientItem {
  iconUrl: string
  active?: boolean
  badge?: number
}

export const ClientItem: React.FC<IClientItem> = ({
  iconUrl,
  active,
  badge,
}) => {
  return (
    <div className={styles.item}>
      {active && (
        <img alt="selector" src={SelectorImage} className={styles.selector} />
      )}
      <div className={styles.button}>
        {badge && <div className={styles.badge}>{badge}</div>}
        {!active && <div className={styles.overlay}></div>}
        <img alt="app-icon" src={iconUrl} className={styles.image} />
      </div>
    </div>
  )
}
