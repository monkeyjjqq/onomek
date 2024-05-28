import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

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

function PostGrid() {
  const [posts, setPosts] = useState<fetchPostsResponse[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<fetchPostsResponse[]>("/posts")
      .then((res) => setPosts(res.data))
      .catch((error) => setError(error.message));
  }, []);
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}

export default PostGrid;
