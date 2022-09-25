import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { DateTime } from "luxon"
import type { RootState, AppDispatch } from "../../../redux/store"
import { fetchFeeds } from "../../../redux/feed"
import styles from "./index.module.css"
import cn from "classnames"
import { ImSpinner8 } from "react-icons/im"
import { BiError } from "react-icons/bi"
import Avatar from "../../../assets/avatar.jpg"
import StatusBadge from "../../../components/StatusBadge"
import Card from "../../../components/Card"

const Header = () => {
  return (
    <div className={cn(styles.maxWidth, styles.header)}>
      <div className={styles.description}>
        <StatusBadge status="published" text="Published" />
        <StatusBadge status="scheduled" text="Scheduled" />
        <StatusBadge status="needApproval" text="Need Approval" />
        <StatusBadge status="error" text="Error" />
        <StatusBadge status="notes" text="Notes" />
      </div>
      <img alt="avatar" src={Avatar} className={styles.avatar} />
    </div>
  )
}

const Feeds = () => {
  const { error, feeds } = useSelector((state: RootState) => state.feed)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchFeeds())
  }, [])

  if (error)
    return (
      <div className={cn(styles.maxWidth, styles.content, styles.center)}>
        <BiError className={styles.icon} />
        <div className={styles.loadingText}>Error Occured</div>
      </div>
    )

  if (feeds)
    return (
      <div className={cn(styles.maxWidth, styles.content)}>
        {Object.entries(feeds).map(([key, value]) => (
          <div key={key} className={styles.row}>
            <div className={styles.title}>
              {DateTime.fromISO(key).setLocale("en").toFormat("dd LLLL yyyy")}
            </div>
            <div className={styles.cards}>
              {value &&
                value.map((item, index) => (
                  <Card
                    key={index}
                    postDate={item?.published_at}
                    text={item?.entry.message}
                    postStatus={item?.status}
                    channel={item?.account.channel}
                    imageUrl={item?.entry.image[0]}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    )

  return (
    <>
      <div className={cn(styles.maxWidth, styles.content, styles.center)}>
        <ImSpinner8 className={cn(styles.icon, styles.spin)} />
        <div className={styles.loadingText}>Loading</div>
      </div>
    </>
  )
}

const FeedsPage = () => {
  return (
    <>
      <Header />
      <Feeds />
    </>
  )
}

export default FeedsPage
