export enum Status {
  // eslint-disable-next-line no-unused-vars
  NeedApproval,
  // eslint-disable-next-line no-unused-vars
  Scheduled,
  // eslint-disable-next-line no-unused-vars
  Publishing,
  // eslint-disable-next-line no-unused-vars
  Published,
  // eslint-disable-next-line no-unused-vars
  Error,
}

export type Channel = "twitter" | "facebook" | "instagrambusiness"

interface IEntry {
  type: string
  message: string
  image: string[]
  video: string
}

interface IAccount {
  name: string
  username: string
  image: string
  link: string
  channel: Channel
}

export interface IPost {
  published_at: string
  updated_at: string
  created_at: string
  link: string
  is_published: boolean
  status: Status
  entry: IEntry
  account: IAccount
}

export interface IFeeds {
  [key: string]: IPost[]
}
