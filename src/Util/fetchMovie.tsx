import axios from "axios";
import { SearchListResponse } from "../types";

export const fetchMovie = async (searchQuery: string): Promise<string> => {
  const { data }: { data: SearchListResponse } = await axios.get(
    "https://www.googleapis.com/youtube/v3/search",
    {
      params: {
        part: "snippet",
        maxResults: 1,
        key: "AIzaSyAa90xYjDuWU0QRwuxhunJqBxJW33YdFWQ",
        q: `${searchQuery} trailer`,
      },
    }
  );

  return data.items[0].id.videoId;
};
