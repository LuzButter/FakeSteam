import React, { useEffect, lazy, Suspense } from "react";
import HoverReveal from '../component/HoverReveal'
import { useState } from "react";
import Galleria from '../component/Galleria'

const componentList = [
    {
        id: 1,
        name: 'AboutUs',
    },
    {
        id: 2,
        name: 'BarLineCombo',
    },
    {
        id: 3,
        name: 'HoverReveal',
    },
]

const CC = () => {

    const componentRender = (component_name) => {
        const Component = lazy(() => import(`../component/${component_name}`))
        // console.log(`import ${component_name}`)
        return (
            <>
                <Suspense fallback={<div>Loading...</div>}>
                    <Component />
                </Suspense>
            </>
        )
    }

    return (
        <>
            {console.log('run CC')}
            {componentList.map((e, index) =>
                <div key={index}>
                    {componentRender(e.name)}
                </div>
            )}
        </>
    )
}

export default CC;
