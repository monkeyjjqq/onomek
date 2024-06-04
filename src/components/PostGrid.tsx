import { SimpleGrid, Text } from "@chakra-ui/react";
import PostCard from "./PostCard";
import { fetchPostsResponse } from "../hooks/usePosts";

interface Props {
  posts: fetchPostsResponse[];
  error: string;
}

function PostGrid({ posts, error }: Props) {
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding={2}
        spacing={10}
      >
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </SimpleGrid>
    </>
  );
}

export default PostGrid;
