import { Layout, Menu, theme, ConfigProvider, } from "antd";
import React, { useState, useMemo, useEffect, Suspense } from "react";
const { Header, Content, Footer, Sider } = Layout;

const MenuItem = new Array(15).fill(null).map((_, index) => {
    const key = index + 1;
    return {
        key,
        label: `nav ${key}`,
    }
})

const LayoutSelect = ({ children, layout, items }) => {
    switch (layout) {
        case 1:
            return (<Suspense><LayoutONE items={items} >{children}</LayoutONE></Suspense>)
        case 2:
            return (<Suspense><LayoutTWO items={items} >{children}</LayoutTWO></Suspense>)
        default:
            return (<Suspense><LayoutONE items={items} >{children}</LayoutONE></Suspense>)
    }
}

const LayoutONE = React.lazy(() => import('./Layout1'));
const LayoutTWO = React.lazy(() => import('./Layout2'));

const App = ({ children, layout, items }) => {

    const [colorHex, setColorHex] = useState(localStorage.getItem('themeColor'));

    return (
        <>
            <ConfigProvider
                theme={{
                    "token": {
                        "colorPrimary": localStorage.getItem('themeColor')
                    }
                }}
            >
                <LayoutSelect layout={layout} items={MenuItem} >
                    {children}
                </LayoutSelect>
                {/* <LayoutTWO>
                    {children}
                </LayoutTWO> */}
                {/* <Layout1>
                    {children}
                </Layout1> */}
            </ConfigProvider>
        </>
    )
}

export default App