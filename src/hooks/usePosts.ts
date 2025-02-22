import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface postAttachmentFiles {
  name: string;
  path: string;
}

export interface postsList {
  id: number;
  user: number;
  service: string;
  title: string;
  substring: string;
  published: string;
  file: postAttachmentFiles;
  attachments: postAttachmentFiles[];
}

export interface fetchPostsResponse {
  count: number;
  true_count: number;
  posts: postsList[];
}

const usePosts = () => {
  const [posts, setPosts] = useState<fetchPostsResponse>({
    count: 0,
    true_count: 0,
    posts: [],
  });
  const [searchText, setSearchText] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<fetchPostsResponse>("/posts", {
        signal: controller.signal,
        params: {
          q: searchText,
        },
      })
      .then((res) => setPosts(res.data))
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
      });
    return () => controller.abort();
  }, [searchText]);
  return { posts, error, setSearchText };
};

export default usePosts;
