
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { Tag } from 'primereact/tag';
// import { ProductService } from './service/ProductService';

const PrimeCarousel = () => {

    const products = [
        {
            id: 1
        },
        {
            id: 2
        },
        {
            id: 3
        },
        {
            id: 3
        },
        {
            id: 3
        },
        {
            id: 3
        },
    ]

    const responsiveOptions = [
        {
            breakpoint: '1060px',
            numVisible: 3,
            numScroll: 1,
        },
        {
            breakpoint: '800px',
            numVisible: 2,
            numScroll: 1,
        },
    ];

    const productTemplate = (product) => {
        return (
            <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
                <div style={{
                    // width: '200px',
                    // height: '200px',
                    margin: '8px',
                    backgroundImage: 'url(https://i.pinimg.com/564x/15/58/5a/15585a5d547541d5d8bd59be92b232f3.jpg)',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    boxShadow: '2px 2px 7px #00000077',
                    borderRadius: '50%'
                }} />
            </div>

        );
    };

    return (
        <div>
            <Carousel value={products} numVisible={4} numScroll={2} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} circular showIndicators={false} />
        </div>
    )
}

export default PrimeCarousel