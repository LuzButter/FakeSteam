import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const ReacrSlickCarousel = () => {
    const [settings, setSetting] = useState({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    })

    useEffect(() => {
        function handleResize() {
            // console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
            if (window.screen.width > 1000) {
                setSetting({
                    dots: true,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 4,
                    slidesToScroll: 1
                })
            }
            else if (window.screen.width > 750) {
                setSetting({
                    dots: true,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 3,
                    slidesToScroll: 1
                })
            }
            else if (window.screen.width > 550) {
                setSetting({
                    dots: true,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 2,
                    slidesToScroll: 1
                })
            }
            else if (window.screen.width > 450) {
                setSetting({
                    dots: true,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1
                })
            }
        }
            window.addEventListener('resize', handleResize)

        }, []);



    return (
        <div>
            {console.log(window.screen.width)}
            <h2> Single Item</h2>
            <Slider {...settings}>
                <div>
                    <div style={{ textAlign: '-webkit-center' }} >
                        <div style={{
                            width: '200px',
                            height: '200px',
                            margin: '8px',
                            backgroundImage: 'url(https://i.pinimg.com/564x/15/58/5a/15585a5d547541d5d8bd59be92b232f3.jpg)',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            boxShadow: '2px 2px 7px #00000077',
                            borderRadius: '50%'
                        }} />
                    </div>
                </div>
                <div>
                    <div style={{ textAlign: '-webkit-center' }} >
                        <div style={{
                            width: '200px',
                            height: '200px',
                            margin: '8px',
                            backgroundImage: 'url(https://i.pinimg.com/564x/15/58/5a/15585a5d547541d5d8bd59be92b232f3.jpg)',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            boxShadow: '2px 2px 7px #00000077',
                            borderRadius: '50%'
                        }} />
                    </div>
                </div>
                <div>
                    <div style={{ textAlign: '-webkit-center' }} >
                        <div style={{
                            width: '200px',
                            height: '200px',
                            margin: '8px',
                            backgroundImage: 'url(https://i.pinimg.com/564x/15/58/5a/15585a5d547541d5d8bd59be92b232f3.jpg)',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            boxShadow: '2px 2px 7px #00000077',
                            borderRadius: '50%'
                        }} />
                    </div>
                </div>
                <div>
                    <div style={{ textAlign: '-webkit-center' }} >
                        <div style={{
                            width: '200px',
                            height: '200px',
                            margin: '8px',
                            backgroundImage: 'url(https://i.pinimg.com/564x/15/58/5a/15585a5d547541d5d8bd59be92b232f3.jpg)',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            boxShadow: '2px 2px 7px #00000077',
                            borderRadius: '50%'
                        }} />
                    </div>
                </div>
                <div>
                    <div style={{ textAlign: '-webkit-center' }} >
                        <div style={{
                            width: '200px',
                            height: '200px',
                            margin: '8px',
                            backgroundImage: 'url(https://i.pinimg.com/564x/15/58/5a/15585a5d547541d5d8bd59be92b232f3.jpg)',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            boxShadow: '2px 2px 7px #00000077',
                            borderRadius: '50%'
                        }} />
                    </div>
                </div>
                <div>
                    <div style={{ textAlign: '-webkit-center' }} >
                        <div style={{
                            width: '200px',
                            height: '200px',
                            margin: '8px',
                            backgroundImage: 'url(https://i.pinimg.com/564x/15/58/5a/15585a5d547541d5d8bd59be92b232f3.jpg)',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            boxShadow: '2px 2px 7px #00000077',
                            borderRadius: '50%'
                        }} />
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default ReacrSlickCarousel