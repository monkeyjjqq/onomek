import { SimpleGrid, Text } from "@chakra-ui/react";
import PostCard from "./PostCard";
import { fetchPostsResponse } from "../hooks/usePosts";
import Pagination from "./Pagination";

interface Props {
  posts: fetchPostsResponse;
  handlePageChange: (page: number) => void;
  currentPage: number;
  error: string;
}

function PostGrid({ posts, handlePageChange, currentPage, error }: Props) {
  const itemsPerPage = 50;

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding={2}
        spacing={10}
      >
        {posts.posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </SimpleGrid>
      <Pagination
        totalItems={posts.true_count}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
}

export default PostGrid;
