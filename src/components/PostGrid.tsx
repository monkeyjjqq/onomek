import { SimpleGrid, Text } from "@chakra-ui/react";
import usePosts from "../hooks/usePosts";
import PostCard from "./PostCard";

function PostGrid() {
  const { posts, error } = usePosts();
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
