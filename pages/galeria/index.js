import React from 'react'
import Layout from '../../components/Layout/Layout';
import { Card, Container, Image } from 'react-bootstrap';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

const Galeria = () => {
    return (
        <Layout>
            <Container>
                <Card className='p-5'>
                    <h1>Galeria</h1>
                    <Swiper className="mySwiper"
                        slidesPerView={"auto"}
                        centeredSlides={true}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}>
                        <SwiperSlide>
                            <Image src={'/assets/img/1.JPG'} alt="img-1" width={'auto'} height={'300px'} ></Image></SwiperSlide>
                        <SwiperSlide><Image src={'/assets/img/2.JPG'} alt="img-2" width={'auto'} height={'300px'} ></Image></SwiperSlide>
                        <SwiperSlide><Image src={'/assets/img/3.JPG'} alt="img-3" width={'auto'} height={'300px'} ></Image></SwiperSlide>

                    </Swiper>

                </Card>
            </Container>
        </Layout>
    )
}

export default Galeria