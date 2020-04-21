import React, { CSSProperties } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import PostCarouselSlider from './PostCarouselSlider';
const PostCarousel = () => {
    return (
        <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={180}
            totalSlides={3}
            visibleSlides={2}
        >
            <Slider style={styles.slider}>
                <Slide index={0}>
                    <PostCarouselSlider />
                </Slide>
                <Slide index={1}>
                    <PostCarouselSlider />
                </Slide>
                <Slide index={2}>
                    <PostCarouselSlider />
                </Slide>
            </Slider>
        </CarouselProvider>
    );
}
const styles: { [name: string]: CSSProperties } = {
    slider : {
        height : '230px'
    }
}

export default PostCarousel;