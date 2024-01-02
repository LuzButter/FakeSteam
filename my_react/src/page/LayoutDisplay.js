import React, { Suspense, } from "react"

const DefaultLayout = React.lazy(() => import('../Layout/DefaultLayout'))
const SugoeatLike = React.lazy(() => import('../Layout/SugoeatLike'))
const SideLike = React.lazy(() => import('../Layout/SideOnly'))
const YTLike = React.lazy(() => import('../Layout/YTLike'))
const Layout2 = React.lazy(() => import('../component/Layout2'))

const LD = ({ children, layout = 'default', }) => {

    return (
        <>
            <Suspense>
                <SugoeatLike>
                    {children}
                </SugoeatLike>
                <SideLike>
                    {children}
                </SideLike>
                <YTLike>
                    {children}
                </YTLike>
                <Layout2>
                    {children}
                </Layout2>
                {/* <DefaultLayout>
                    {children}
                </DefaultLayout> */}
            </Suspense>
        </>
    )
}

export default LD