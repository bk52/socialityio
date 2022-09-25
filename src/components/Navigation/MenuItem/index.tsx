import React from "react"
import CollapseIcon from "../../../assets/icons/menu/collapse.svg"
import ExpandIcon from "../../../assets/icons/menu/expand.svg"
import cn from "classnames"
import styles from "./index.module.css"

export interface ISubItem {
  title: string
  active?: boolean
}

export interface IMenuItem {
  iconUrl: string
  title: string
  badge?: number
  accordion?: boolean
  active?: boolean
  expand?: boolean
  subItems?: ISubItem[]
  onButtonClick?: (e: React.MouseEvent) => void
}

export const MenuItem: React.FC<IMenuItem> = ({
  iconUrl,
  title,
  badge,
  accordion,
  active,
  expand,
  subItems,
  onButtonClick,
}) => {
  return (
    <>
      <div className={cn(styles.menuItem, `${active ? styles.active : ""}`)}>
        {expand && <div className={styles.cursor}></div>}
        <div className={styles.menuContent}>
          <img alt="menu-icon" src={iconUrl} />
          <div className={styles.menuTitle}>{title}</div>
          {badge && <div className={styles.menuBadge}>{badge}</div>}
          {accordion && !badge && (
            <div
              onClick={(e) => {
                onButtonClick && onButtonClick(e)
              }}
              className={styles.menuButton}
            >
              <img alt="button-icon" src={expand ? CollapseIcon : ExpandIcon} />
            </div>
          )}
        </div>
      </div>
      <div
        className={cn(
          styles.subMenu,
          `${expand ? styles.expand : styles.collapse}`
        )}
      >
        {subItems &&
          subItems.map((item, index) => (
            <li
              key={index}
              className={cn(`${item.active ? styles.active : ""}`)}
            >
              {item.title}
            </li>
          ))}
      </div>
    </>
  )
}
