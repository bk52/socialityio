import axios from "axios"

export const GetFeeds = async () => {
  return axios.get("https://api.jsonbin.io/v3/b/62ed1523e13e6063dc6cd5ee", {
    headers: {
      "X-ACCESS-KEY":
        "$2b$10$smpejxmp4gmvulslxzJAs.gQ4v4PXntI/WeSCOOFXAd3KZl7LFJcW",
    },
  })
}
