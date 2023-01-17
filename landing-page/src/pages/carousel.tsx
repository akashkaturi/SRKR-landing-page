import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import pic1 from '../carousel_images/pic1.jpg'
import pic2 from '../carousel_images/pic2.png'
import pic3 from '../carousel_images/pic3.jpg'
import pic4 from '../carousel_images/pic4.jpg'
import pic5 from '../carousel_images/pic5.jpg'
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
const Carousel_layout = () => {
    return (
        <div>

            <Carousel autoPlay={true} autoFocus={true} interval={3000} infiniteLoop={true}>
                <div>
                    <Image src={pic1} alt="pic1" height={500} quality={100}></Image>
                    <p className="legend">Image 1</p>

                </div>
                <div>
                    <Image src={pic2} alt="pic2" height={500} quality={100}></Image>
                    <p className="legend">Image 2</p>

                </div>
                <div>
                    <Image src={pic3} alt="pic3" height={500} quality={100}></Image>
                    <p className="legend">Image 3</p>

                </div>
                <div>
                    <Image src={pic4} alt="pic4" height={500} quality={100}></Image>
                    <p className="legend">Image 4</p>

                </div>
                <div>
                    <Image src={pic5} alt="pic5" height={500} quality={100}></Image>
                    <p className="legend">Image 5</p>
                </div>
            </Carousel>
        </div>)
}

export default Carousel_layout;