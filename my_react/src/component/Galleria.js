
import React, { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';

import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons

let images = [
    { src: "https://i.pinimg.com/564x/cc/7b/1e/cc7b1e09fe848318389843df19ea6752.jpg", alt: "Description for Image 1", title: "Title 1" },
    { src: "https://i.pinimg.com/564x/94/17/d8/9417d87963f84d407f921f94b60f3926.jpg", alt: "Description for Image 2", title: "Title 2" },
    { src: "https://i.pinimg.com/564x/6c/9c/12/6c9c1291e3f3aca281d7be6c6df44dcd.jpg", alt: "Description for Image 3", title: "Title 3" },
    { src: "https://i.pinimg.com/564x/8b/17/82/8b17821159f4f1ee4d3a7f1f6e387ff5.jpg", alt: "Description for Image 4", title: "Title 4" },
    { src: "https://i.pinimg.com/564x/b9/44/f3/b944f382f84c6c16796436dd0c019180.jpg", alt: "Description for Image 5", title: "Title 5" },
    { src: "https://i.pinimg.com/564x/3f/d9/ac/3fd9ac54e5a00a09d00fc8ae5d4060c1.jpg", alt: "Description for Image 6", title: "Title 6" },
    { src: "https://i.pinimg.com/564x/27/fd/77/27fd77b7d5e28de934ca29684d8be3e7.jpg", alt: "Description for Image 7", title: "Title 7" },
    { src: "https://i.pinimg.com/564x/ef/b9/c0/efb9c0f408d0d3349a6fe7801bcfaaa1.jpg", alt: "Description for Image 8", title: "Title 8" },
    { src: "https://i.pinimg.com/564x/32/2e/90/322e906d5ccda9264a8e6e86e97e86eb.jpg", alt: "Description for Image 9", title: "Title 9" },
    { src: "https://i.pinimg.com/564x/00/b0/a2/00b0a22058e09490b1fbbf33573f436b.jpg", alt: "Description for Image 9", title: "Title 9" },
]

let images2 = [
    { src: "https://i.pinimg.com/564x/cc/7b/1e/cc7b1e09fe848318389843df19ea6752.jpg", alt: "Description for Image 1", title: "Title 1" },
    { src: "https://i.pinimg.com/564x/94/17/d8/9417d87963f84d407f921f94b60f3926.jpg", alt: "Description for Image 2", title: "Title 2" },
    { src: "https://i.pinimg.com/564x/6c/9c/12/6c9c1291e3f3aca281d7be6c6df44dcd.jpg", alt: "Description for Image 3", title: "Title 3" },
    { src: "https://i.pinimg.com/564x/8b/17/82/8b17821159f4f1ee4d3a7f1f6e387ff5.jpg", alt: "Description for Image 4", title: "Title 4" },
    // { src: "https://i.pinimg.com/564x/b9/44/f3/b944f382f84c6c16796436dd0c019180.jpg", alt: "Description for Image 5", title: "Title 5" },
]

const GalleriaDemo = () => {

    // const [images, setImages] = useState([{"itemImageSrc": "https://i.pinimg.com/564x/cc/7b/1e/cc7b1e09fe848318389843df19ea6752.jpg","thumbnailImageSrc": "https://i.pinimg.com/564x/cc/7b/1e/cc7b1e09fe848318389843df19ea6752.jpg","alt": "Description for Image 1", title: "Title 1"}]);


    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    const itemTemplate = (item) => {
        return (
            <>
                {/* <img src={item.itemImageSrc} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.alt} style={{ width: '100%' }} /> */}
                <div style={{
                    height: '30vw',
                    width: '30vw',
                    backgroundImage: `url(${item.src})`,
                    backgroundSize: 'content',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                }}
                    alt={item.alt}
                />
            </>
        )
    }

    const thumbnailTemplate = (item) => {
        return (
            <>
                {/* <img src={item.thumbnailImageSrc} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.alt} /> */}
                <div style={{
                    height: '100px',
                    width: '100px',
                    backgroundImage: `url(${item.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'

                }}
                    alt={item.alt}
                />
            </>
        )
    }

    return (
        <div>
            <div >
                <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={4} style={{ maxWidth: '640px' }}
                    item={itemTemplate} thumbnail={thumbnailTemplate} />

                <Galleria value={images2} responsiveOptions={responsiveOptions} numVisible={4} style={{ maxWidth: '640px' }}
                    item={itemTemplate} thumbnail={thumbnailTemplate} />
            </div>
        </div>
    );
}

const App = () => {

    return (
        <>
            <div style={{ backgroundColor: 'lightcyan' }}>
                <GalleriaDemo />
            </div>
        </>
    )
}

export default App