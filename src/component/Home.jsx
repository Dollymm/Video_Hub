import React from 'react';
import {Box, Container, Heading,Image, Stack,Text} from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const Home=() =>{
  return <Box>
<MyCarousal/>
<Container maxW={'container.xl'} minH={'100vh'}>
    <Heading textTransform={'uppercase'}
    py={"2"}
    w={'fit-content'}
    borderBottom={'2px solid'}
    m="auto">
      Services
    </Heading>
    <Stack h={'full'}
    p={'4'}
    alignItems={'center'}
    direction={['column','row']}>
    <Image src={img5}  h={["40","400"]} filter={'hue-rotate(-130deg)'}/>
<Text letterSpacing={"widest"} lineHeight={"190%"} p={["4","16"]} textAlign={"center"}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia optio, possimus at minima nisi saepe repellendus a magni deleniti, illo blanditiis ipsa earum
    voluptas nihil aspernatur odio error. Eum,Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi porro accusantium velit labore quam earum tenetur necessitatibus veritatis quod delectus possimus fugit fugiat at ipsam sed 
    consequuntur deleniti, repellendus dignissimos!labore Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, inventore vel repellendus at officiis iusto numquam earum dolorum cum delectus fugiat autem voluptas error maiores
    ipsa repudiandae deserunt architecto impedit.
</Text>
    </Stack>
</Container>
  </Box> 
  
}
const headingOptions={
    pos:'absolute',
    left:"50%",
    top:"50%",
    transform:"translate(-50%,-50%)",
    textTransfrom:"uppercse",
    p:'4',
    size:'4xl'
}
const MyCarousal=()=>(
    <Carousel 
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}>
<Box w="full" h={"100vh"}>

<Image src={img1} alt="Description" />
<Heading bg={"blackAlpha.600"} color={'white'} {...headingOptions}>
    Watch The Future
</Heading>
</Box>
<Box w="full" h={"100vh"}>
<Image src={img2} alt="Description" />
<Heading bg={"whiteAlpha.600"} color={'white'} {...headingOptions}>
    future is gaming
</Heading>

</Box>
<Box w="full" h={"100vh"}>
<Image src={img3} alt="Description" />
<Heading bg={"blackAlpha.600"} color={'white'}{...headingOptions}>
    Watch The Future
</Heading>
</Box>
<Box w="full" h={"100vh"}>
<Image src={img4} alt="Description" />
<Heading bg={"blackAlpha.600"} color={'white'} {...headingOptions}>
    Watch The Future
</Heading>
</Box>
    </Carousel>
)

export default Home