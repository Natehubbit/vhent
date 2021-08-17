import { Box, Center, Text, Heading, Flex } from '@chakra-ui/layout';
import { Stat, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/stat';
import React from 'react'
import Avatar from '../../components/Avatar'
import Layout from '../../components/Layout'

const Profile = () => {
  return (
    <Layout>
      <Box
        bg='white'
        m='4'
        p='5'
        borderRadius='lg'
        shadow='sm'>
        <Center mb='5'>
          <Avatar
            size="lg"
            uri="https://picsum.photos/200/300"
          />
        </Center>
        <Center>
          <Heading>
            James Harvey
          </Heading>
        </Center>
        <Center>
          <Text color='GrayText'>
            nabby@gmail.com
          </Text>
        </Center>
      </Box>
      <Flex justifyContent='space-between'>
        <Flex
          flex='1'
          bg='white'
          m='4'
          p='5'
          borderRadius='lg'
          shadow='sm'>
          <Stat>
            <StatLabel>Businesses Saved</StatLabel>
            <StatNumber fontSize='6xl'>0</StatNumber>
          </Stat>
        </Flex>
        <Flex
          flex='1'
          bg='white'
          m='4'
          p='5'
          borderRadius='lg'
          shadow='sm'>
          <Stat>
            <StatLabel>Stories Liked</StatLabel>
            <StatNumber fontSize='6xl'>0</StatNumber>
          </Stat>
        </Flex>
      </Flex>
    </Layout>
  )
}

export default Profile
