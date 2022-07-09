import React from 'react'
import SliderContainer, {SliderItem} from './slider'
import Image from 'next/image'


const ClientLogos: React.FC = () => (
    <>
      <SliderContainer className="" contentWidth={1290} initialOffsetX={0}>
        <SliderItem width={150}>
          <Image 
              src="/assets/trustedby/audobon.jpg"  
              width={150} 
              height={80} 
              alt="Audobon" 
              objectFit="contain"
              />
        </SliderItem>
        <SliderItem width={200}>
          <Image 
              src="/assets/trustedby/shopify.webp"  
              width={200} 
              height={80} 
              alt="Audobon" 
              objectFit="contain"
              />
        </SliderItem>
        <SliderItem width={150}>
          <Image 
              src="/assets/trustedby/rivian.png"  
              width={150} 
              height={80} 
              alt="Audobon" 
              objectFit="contain"
              />
        </SliderItem >
        <SliderItem width={150}>
          <Image 
              src="/assets/trustedby/facebook.png"  
              width={150} 
              height={80} 
              alt="Audobon" 
              objectFit="contain"
              />
        </SliderItem > 
        <SliderItem width={150}>
          <Image 
              src="/assets/trustedby/oneweb.png"  
              width={150} 
              height={80} 
              alt="Audobon" 
              objectFit="contain"
              />
        </SliderItem>
        <SliderItem width={200}>
          <Image 
              src="/assets/trustedby/meta.jpg"  
              width={200} 
              height={80} 
              alt="Audobon" 
              objectFit="contain"
              />
        </SliderItem>
        </SliderContainer>
        <SliderContainer className="" contentWidth={1290} initialOffsetX={0}>
        <SliderItem width={200}>
          <Image 
              src="/assets/trustedby/tesla2.jpg"  
              width={200} 
              height={80} 
              alt="Audobon" 
              objectFit="contain"
              />
        </SliderItem>
        <SliderItem width={150}>
          <Image 
              src="/assets/trustedby/twitter.png"  
              width={150} 
              height={80} 
              alt="Audobon" 
              objectFit="contain"
              />
        </SliderItem>
        <SliderItem width={150}>
          <Image 
              src="/assets/trustedby/spacex.png"  
              width={150} 
              height={80} 
              alt="Audobon" 
              objectFit="contain"
              />
        </SliderItem>
        <SliderItem width={150}>
          <Image 
              src="/assets/trustedby/showtime.jpeg"  
              width={150} 
              height={80} 
              alt="Audobon" 
              objectFit="contain"
              />
        </SliderItem>
        <SliderItem width={150}>
          <Image 
              src="/assets/trustedby/netflix.avif"  
              width={150} 
              height={80} 
              alt="Audobon" 
              objectFit="contain"
              />
        </SliderItem>
        
      </SliderContainer>
    </>
)


export default ClientLogos
