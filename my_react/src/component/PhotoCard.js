import { Carousel } from 'antd';
import React from 'react';
const PhotoCard = () => {

    const contentStyle = {
        background: '#364d79',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '20vw',
        width: '20vw',
    };

    return (
        <div style={{ borderRadius: '8px', boxShadow: 'rgb(0 0 0 / 22%) 2px 2px 10px 0px', height: '30vw' }} >
            <Carousel>
                <div>
                    <div style={{
                        ...contentStyle,
                        backgroundImage: 'url(https://i.pinimg.com/564x/50/d7/e0/50d7e0849c187240927fcd432be76e0f.jpg)',
                    }} />
                </div>
                <div>
                    <div style={{
                        ...contentStyle,
                        backgroundImage: 'url(https://i.pinimg.com/564x/fc/52/ab/fc52aba543b4d91813fbc08f92df4454.jpg)',
                    }} />
                </div>
                <div>
                    <div style={{
                        ...contentStyle,
                        backgroundImage: 'url(https://i.pinimg.com/564x/07/e8/0e/07e80e69015676c7d3b3c5846034b5c2.jpg)',
                    }} />
                </div>
            </Carousel>
            <div style={{ height: '10vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
                <span style={{ fontSize: '1.5em' }} >sdfafa</span>
                <hr style={{ width: '5vw' }} />
                <div style={{maxWidth: '80%'}}>40項前瞻技術跨校展出積極推動產業生態系發展</div>
            </div>
        </div>
    )
};

const App = () => {

    return (
        <div style={{ width: '20vw', height: '30vw' }}>
            <PhotoCard />
        </div>
    )
}

export default App;