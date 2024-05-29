import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface postAttachmentFiles {
  name: string;
  path: string;
}

interface fetchPostsResponse {
  id: number;
  user: number;
  service: string;
  title: string;
  substring: string;
  published: string;
  file: postAttachmentFiles;
  attachments: postAttachmentFiles[];
}

const usePosts = () => {
  const [posts, setPosts] = useState<fetchPostsResponse[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<fetchPostsResponse[]>("/posts", { signal: controller.signal })
      .then((res) => setPosts(res.data))
      .catch((error) => {
        if (error instanceof CanceledError) return setError(error.message);
      });
    return () => controller.abort();
  }, []);
  return { posts, error };
};

export default usePosts;
