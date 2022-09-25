import { useState } from "react"
import Logo1 from "../../assets/icons/page/Logo1.jpg"
import Logo2 from "../../assets/icons/page/Logo2.jpg"
import Logo3 from "../../assets/icons/page/Logo3.jpg"
import Logo4 from "../../assets/icons/page/Logo4.jpg"
import Logo5 from "../../assets/icons/page/Logo5.jpg"
import Logo6 from "../../assets/icons/page/Logo6.jpg"

import NotificationIcon from "../../assets/icons/menu/notification.svg"
import SummaryIcon from "../../assets/icons/menu/summary.svg"
import PublishIcon from "../../assets/icons/menu/publish.svg"
import EngageIcon from "../../assets/icons/menu/engage.svg"
import ListenIcon from "../../assets/icons/menu/listen.svg"
import ReportIcon from "../../assets/icons/menu/report.svg"

import styles from "./index.module.css"
import { ClientItem, IClientItem } from "./ClientItem"
import BrandPanel from "./BrandPanel"
import { MenuItem, IMenuItem } from "./MenuItem"

const Navigation = () => {
  // eslint-disable-next-line no-unused-vars
  const [clientItems, setClientItems] = useState<IClientItem[]>([
    {
      iconUrl: Logo1,
      active: false,
    },
    {
      iconUrl: Logo2,
      active: false,
      badge: 99,
    },
    {
      iconUrl: Logo3,
      active: false,
    },
    {
      iconUrl: Logo4,
      active: true,
    },
    {
      iconUrl: Logo5,
      active: false,
    },
    {
      iconUrl: Logo6,
      active: false,
    },
  ])
  // eslint-disable-next-line no-unused-vars
  const [menuItems, setMenuItems] = useState<IMenuItem[]>([
    {
      iconUrl: NotificationIcon,
      title: "NOTIFICATIONS",
      badge: 29,
    },
    {
      iconUrl: SummaryIcon,
      title: "SUMMARY",
      accordion: true,
    },
    {
      iconUrl: PublishIcon,
      title: "PUBLISH",
      accordion: true,
      active: true,
      expand: true,
      subItems: [
        {
          title: "Compose",
        },
        {
          title: "Feed",
          active: true,
        },
      ],
    },
    {
      iconUrl: EngageIcon,
      title: "ENGAGE",
      accordion: true,
    },
    {
      iconUrl: ListenIcon,
      title: "LISTEN",
      accordion: true,
    },
    {
      iconUrl: ReportIcon,
      title: "REPORT",
      accordion: true,
    },
  ])

  const onMenuChanged = (index: number) => {
    try {
      const items = [...menuItems]
      const selected = { ...menuItems[index] }
      items.forEach((item) => {
        item.active = false
        item.expand = false
      })
      items[index].active = !selected.active
      items[index].expand = !selected.expand
      setMenuItems(items)
    } catch (e) {
      console.error(e)
    }
  }
  return (
    <div className={styles.navigation}>
      <BrandPanel />
      <div className={styles.navigationItems}>
        <div className={styles.navigationClients}>
          {clientItems.map((item, index) => (
            <ClientItem
              key={index}
              iconUrl={item.iconUrl}
              active={item.active}
              badge={item.badge}
            />
          ))}
        </div>
        <div className={styles.navigationMenu}>
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              iconUrl={item.iconUrl}
              title={item.title}
              badge={item.badge}
              accordion={item.accordion}
              active={item.active}
              expand={item.expand}
              subItems={item.subItems}
              onButtonClick={(e) => {
                e.stopPropagation()
                onMenuChanged(index)
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Navigation
