import { Card, Image } from "@chakra-ui/react";
import usePost from "../hooks/usePost";
import getFullPathUrl from "../services/path-url";

function Post() {
  const { post } = usePost();
  return (
    <>
      {post?.post.attachments.map((file) => (
        <Card key={file.name} borderRadius={10} overflow="hidden">
          <Image src={getFullPathUrl(file.path)} />
        </Card>
      ))}
    </>
  );
}

export default Post;
