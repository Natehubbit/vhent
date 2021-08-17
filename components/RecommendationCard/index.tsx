import React, { useState } from 'react'
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import Avatar from '../Avatar/index';
import { COLORS } from '../../common/theme';
import Link from 'next/link';
import { Button, IconButton } from '@chakra-ui/button';
import { MdBookmark, MdBookmarkBorder, MdKeyboardArrowRight } from 'react-icons/md';

const RecommendationCard = () => {
  const [bookmarked, setBookmarked] = useState(false)
  const onBookmark = () => {
    setBookmarked(!bookmarked)
  }
  return (
    <Flex
      w={{ base: '100%', md: '30%' }}
      justifyContent='space-between'
      flexDirection='column'
      bg='white'
      shadow='xs'
      p={5}
      mb={3}
      borderRadius={10}>
      <Link href='#'>
        <Text
          noOfLines={2}
          title='James Harvey Junior Hendricks Alves'
          w='70%'
          cursor='pointer'
          fontFamily='firaSans'
          fontSize='lg'
          mb='2'
          color={COLORS.primary}
          _hover={{
            textDecor: 'underline'
          }}>
          James Harvey Junior Hendricks Alves
        </Text>
      </Link>
      <Box mb='2'>
        <Avatar
          size="xs"
          uri="https://picsum.photos/200/300"
        />
      </Box>
      <Box mb='2'>
        <Text color='GrayText' fontSize='xs'>
          Business/Occupation
        </Text>
        <Text>
          Capentry
        </Text>
      </Box>
      {/* <Box mb='2'>
        <Text color='GrayText' fontSize='xs'>
          Email
        </Text>
        <Text>
          nabby@gmail.com
        </Text>
      </Box>
      <Box mb='2'>
        <Text color='GrayText' fontSize='xs'>
          Contact
        </Text>
        <Text>
          233503423421
        </Text>
      </Box> */}
      <Flex
        mt='5'
        justifyContent='space-between'
        alignItems='center'>
        {!bookmarked
          ? <IconButton
            onClick={onBookmark}
            aria-label='unbookmark'
            icon={<MdBookmarkBorder
              color='gold'
              size={25} />} />
          : <IconButton
            onClick={onBookmark}
            aria-label='bookmarked'
            icon={<IconButton
              aria-label='bookmark'
              icon={<MdBookmark
                color='gold'
                size={25} />} />
            } />}
        <Button
          variant='link'
          colorScheme='purple'
          rightIcon={<MdKeyboardArrowRight />}>
          View more
        </Button>
      </Flex>
    </Flex>
  )
}

export default RecommendationCard
