import React from "react"
import cn from "classnames"
import styles from "./index.module.css"
import { MdBlock } from "react-icons/md"
import { IoTrashOutline, IoEyeOutline } from "react-icons/io5"
import { CgMoreO } from "react-icons/cg"
import { BiLike, BiMessage } from "react-icons/bi"
import { FiShare2 } from "react-icons/fi"
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaCheck,
  FaRegHeart,
  FaRetweet,
} from "react-icons/fa"
import { DateTime } from "luxon"
import { Status, Channel } from "../../global/types"
import NoPostImage from "../../assets/no-post-image.png"

const classNames = [
  "needApproval",
  "scheduled",
  "scheduled", // publishing
  "published",
  "error",
]

interface ICard {
  postDate: string
  postStatus: Status
  text?: string
  imageUrl?: string
  channel?: Channel
}

interface IPostStatus {
  status: Status
  channel?: Channel
}

interface IPostText {
  text?: string
}

interface IPostReactions {
  channel?: Channel
  likes?: number
  sharesOrRetweets?: number
  comments?: number
  views?: number
}

interface IChannel {
  channel?: Channel
}

const PostIcon: React.FC<IChannel> = ({ channel }) => {
  if (channel === "facebook")
    return <FaFacebookF className={styles.channelIcon} />
  if (channel === "twitter") return <FaTwitter className={styles.channelIcon} />
  if (channel === "instagrambusiness")
    return <FaInstagram className={styles.channelIcon} />
  return <></>
}

const PostStatus: React.FC<IPostStatus> = ({ channel, status }) => {
  let bgColor = ""
  try {
    bgColor = classNames[status]
  } catch (e) {}
  return (
    <div className={cn(styles.status, styles[bgColor])}>
      <PostIcon channel={channel} />
    </div>
  )
}

const PostText: React.FC<IPostText> = ({ text }) => {
  let newText = text
  const link = newText?.match(
    // eslint-disable-next-line no-useless-escape
    /(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])/gi
  )
  if (link && link?.length > 0) {
    newText = newText?.replace(link[0], "")
  }
  return (
    <div className={styles.cardText}>
      {newText}
      {link && link.length > 0 && (
        <a href={link[0]} target={"_blank"} rel="noreferrer">
          {link[0]}
        </a>
      )}
    </div>
  )
}

const PostReactions: React.FC<IPostReactions> = ({
  channel,
  likes = 0,
  sharesOrRetweets = 0,
  comments = 0,
  views = 0,
}) => {
  if (channel === "twitter")
    return (
      <div className={styles.cardReactions}>
        <FaRegHeart className={styles.icon} />
        <div>{likes}</div>
        <FaRetweet className={styles.icon} />
        <div>{sharesOrRetweets}</div>
        <BiMessage className={styles.icon} />
        <div>{comments}</div>
        <IoEyeOutline className={styles.icon} />
        <div>{views}</div>
      </div>
    )
  else
    return (
      <div className={styles.cardReactions}>
        <BiLike className={styles.icon} />
        <div>{likes}</div>
        <BiMessage className={styles.icon} />
        <div>{comments}</div>
        <FiShare2 className={styles.icon} />
        <div>{sharesOrRetweets}</div>
        <IoEyeOutline className={styles.icon} />
        <div>{views}</div>
      </div>
    )
}

const Card: React.FC<ICard> = ({
  postDate,
  channel,
  postStatus,
  text,
  imageUrl,
}) => {
  const onImageError = (ev: React.SyntheticEvent<HTMLImageElement, Event>) => {
    ev.currentTarget.src = NoPostImage
  }
  return (
    <div className={styles.card}>
      <PostStatus status={postStatus} channel={channel} />
      <div className={styles.cardLayout}>
        {/* Action */}
        <div className={styles.cardInfo}>
          <span>
            {DateTime.fromFormat(postDate, "yyyy-MM-dd HH:mm:ss")
              .setLocale("en")
              .toFormat("dd LLLL yyyy - HH:mm")}
          </span>
          <div className={styles.actions}>
            {postStatus === Status.Scheduled && (
              <button>
                <MdBlock className={styles.actionIcons} />
              </button>
            )}
            {postStatus === Status.NeedApproval && (
              <button>
                <FaCheck className={styles.actionIcons} />
              </button>
            )}
            <button>
              <IoTrashOutline className={styles.actionIcons} />
            </button>
            <button>
              <CgMoreO className={styles.actionIcons} />
            </button>
          </div>
        </div>
        {/* Content */}
        <div className={styles.cardContent}>
          <PostText text={text} />
          <div className={styles.cardImage}>
            <img
              alt="postImage"
              onError={onImageError}
              src={imageUrl}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        {/* Reactions */}
        <PostReactions channel={channel} />
      </div>
    </div>
  )
}

export default Card
