import { Button, IconButton } from "@chakra-ui/button";
import { Box, HStack, Text } from "@chakra-ui/layout";
import { Textarea } from "@chakra-ui/textarea";
import React, { FC, useState } from "react";
import {
  AiOutlineComment,
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { COLORS, theme } from "../../common/theme";

interface CardActionProps {
  actions: {
    like: {
      liked: boolean;
      count: null | number;
    };
    comment: {
      count: number | null;
    };
  };
}

const CardAction: FC<CardActionProps> = ({ actions }) => {
  const [actionData, setActionData] =
    useState<CardActionProps["actions"]>(actions);
  const [commenting, setCommenting] = useState(false);
  const isLiked = actionData.like.liked;
  const toggleComment = () => {
    setCommenting(!commenting);
  };
  const onLike = () => {
    setActionData((a) => ({
      ...a,
      like: { ...a.like, liked: !a.like.liked },
    }));
  };
  const onComment = () => {};
  const {
    comment: { count: commentCount },
    like: { count: likeCount },
  } = actionData;
  return (
    <>
      <HStack>
        <IconButton onClick={onLike} aria-label="like">
          <>
            {isLiked ? (
              <AiFillHeart color={COLORS.red} />
            ) : (
              <AiOutlineHeart fill={COLORS.red} />
            )}
            <Text
              color={COLORS.red}
              pos="absolute"
              bottom={1}
              right={1.5}
              fontSize="0.6em"
            >
              {likeCount}
            </Text>
          </>
        </IconButton>
        <IconButton
          onClick={toggleComment}
          aria-label="comment"
        >
          <>
            <AiOutlineComment color={COLORS.primary} />
            <Text
              color={COLORS.primary}
              pos="absolute"
              bottom={1}
              right={1.5}
              fontSize="0.6em"
            >
              {commentCount}
            </Text>
          </>
        </IconButton>
        <IconButton aria-label="share">
          <AiOutlineShareAlt />
        </IconButton>
      </HStack>
      {commenting && (
        <Box mt={5}>
          <Textarea
            bg={COLORS.white}
            placeholder="Comment here..."
          />
          <HStack spacing={2}>
            <Button
              onClick={onComment}
              colorScheme="purple"
            >
              Comment
            </Button>
            <Button
              onClick={toggleComment}
              colorScheme="purple"
              variant="ghost"
            >
              Cancel
            </Button>
          </HStack>
        </Box>
      )}
    </>
  );
};

export default CardAction;
