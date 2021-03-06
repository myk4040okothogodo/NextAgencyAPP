import React from 'react'
import Carousel from './carousel'
import CarouselItem from './carousel-item'
import Review from './review'


const Testimonials: React.FC = () => (
    <Carousel className="bg-black text-white py-10 lg:py-20">
        <CarouselItem index={0}>
            <Review by="Axel (Showtime)">
                Margelo and showtime both shaer the love for high-quality software
                and the passion for building solutions people want.
            </Review>
        </CarouselItem>
        <CarouselItem index={1}>
            <Review by="Adam (Ceo of Pink Panda)">
                Margelo is a collection of world class talent, from react-native,
                to website, full stack to desing, I have been nothing but pleased 
                with their communication, imagination, insight and delivery.
            </Review>
        </CarouselItem>
        <CarouselItem index={2}>
            <Review by="Axel (Showtime)">
                Margelo and showtime both shaer the love for high-quality software
                and the passion for building solutions people want.
            </Review>
        </CarouselItem>
        <CarouselItem index={3}>
            <Review by="Axel (Showtime)">
                Margelo and showtime both shaer the love for high-quality software
                and the passion for building solutions people want.
            </Review>
        </CarouselItem>
    </Carousel>
)
export default Testimonials
