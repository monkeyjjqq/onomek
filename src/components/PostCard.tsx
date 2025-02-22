import {
  Badge,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
} from "@chakra-ui/react";
import { postsList } from "../hooks/usePosts";
import getFullPathUrl from "../services/path-url";

interface Props {
  post: postsList;
}

function PostCard({ post }: Props) {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={getFullPathUrl(post.file.path)} />
      <CardBody>
        <Heading fontSize="2xl" paddingBottom={3}>
          {post.title}
        </Heading>
        <HStack justifyContent="space-between">
          <Badge colorScheme="yellow" fontSize={17}>
            {post.service}
          </Badge>
          <Badge colorScheme="green" fontSize={14}>
            {post.published}
          </Badge>
        </HStack>
      </CardBody>
    </Card>
  );
}

export default PostCard;
