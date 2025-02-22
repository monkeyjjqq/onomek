import { SimpleGrid, Text } from "@chakra-ui/react";
import PostCard from "./PostCard";
import { fetchPostsResponse } from "../hooks/usePosts";
import Pagination from "./Pagination";
import { useState } from "react";

interface Props {
  posts: fetchPostsResponse;
  error: string;
}

function PostGrid({ posts, error }: Props) {
  console.log(posts);
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = 100; // You can change this number for testing
  const itemsPerPage = 1;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
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
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
}

export default PostGrid;
