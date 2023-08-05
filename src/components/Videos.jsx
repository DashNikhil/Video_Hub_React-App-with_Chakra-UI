import React, { useState } from 'react';
import { Stack, VStack, Heading, Text, Button } from '@chakra-ui/react';
import vid1 from '../videos/video1.mp4';
import vid2 from '../videos/video2.mp4';
import vid3 from '../videos/video3.mp4';
import vid4 from '../videos/video4.mp4';
import vid5 from '../videos/video5.mp4';
import vid6 from '../videos/video6.mp4';
import vid7 from '../videos/video7.mp4';

const Videos = () => {
  const videosArr = [vid1, vid2, vid3, vid4, vid5, vid6, vid7];

  const [videoSrc, setVideoSrc] = useState(videosArr[0]);

  return (
    <Stack direction={['column', 'row']} h={'100vh'}>
      <VStack w={'full'}>
        <video
          controls
          controlsList="nodownload"
          src={videoSrc}
          style={{ width: '100%' }}
        ></video>
        <VStack alignItems={'flex-start'} p={'8'} w={'full'} overflowY={'auto'}>
          <Heading>Sample Video 1</Heading>
          <Text>
            This is a sample video for testing and demo. This is called
            description.
          </Text>
        </VStack>
      </VStack>
      <VStack
        w={['full', 'xl']}
        alignItems={'stretch'}
        p={'8'}
        spacing={'8'}
        overflowY={'auto'}
      >
        {videosArr.map((item, index) => (
          <Button
            variant={'ghost'}
            colorScheme={'purple'}
            onClick={() => setVideoSrc(item)}
          >
            Lecture {index + 1}
          </Button>
        ))}
      </VStack>
    </Stack>
  );
};

export default Videos;
