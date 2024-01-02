import './LayoutPart.css'
import "primereact/resources/themes/lara-light-indigo/theme.css";

const Layout = ({ children, style, className }) => {

    return (
        <>
            <div
                className={className+` ot-layout `}
                style={{
                    ...style
                }}
            >
                {children}
            </div>
        </>
    )
}

const Header = ({ children, style, className }) => {

    return (
        <>
            <div
                className={className+` indication ot-header`}
                style={{
                    ...style
                }}
            >
                {children}
            </div>

        </>
    )
}

const Footer = ({ children, style, className }) => {

    return (
        <div
            className={className+` indication ot-footer`}
            style={{
                ...style
            }}
        >
            {children}
        </div>
    )
}

const Sider = ({ children, style, className }) => {

    return (
        <div
            className={className+` indication ot-sider`}
            style={{
                ...style
            }}
        >
            {children}
        </div>
    )
}

const SiderLayout = ({ children, style, className }) => {

    return (
        <>
            <div
                className={className+` ot-sider-layout `}
                style={{
                    ...style
                }}
            >
                {children}
            </div>
        </>
    )
}

const Content = ({ children, style, className }) => {

    return (
        <div
            className={className+` indication ot-content`}
            style={{
                ...style
            }}
        >
            {children}
        </div>
    )
}

export { Header, Footer, Sider, Content, Layout, SiderLayout }