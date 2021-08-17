import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/tabs'
import React from 'react'
import { COLORS } from '../../common/theme';
import { Box, Flex } from '@chakra-ui/layout';
import RecommendationCard from '../RecommendationCard';

const Recommendations = () => {
  return (
    <Box
      m={4}
    >
      <Tabs variant="soft-rounded" colorScheme='purple'>
        <TabList shadow='sm' sx={{ borderRadius: 'var(--chakra-radii-full)' }} bg='white'>
          <Tab >Good</Tab>
          <Tab>Bad</Tab>
        </TabList>
        <TabPanels>
          <TabPanel px={0}>
            <Flex justifyContent='space-between' flexWrap='wrap'>
              <RecommendationCard />
              <RecommendationCard />
              <RecommendationCard />
              <RecommendationCard />
            </Flex>
          </TabPanel>
          <TabPanel>
            Bad list
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box >
  )
}

export default Recommendations
