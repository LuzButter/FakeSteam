import styled from "styled-components";

const HoverReveal = ({ height = '50vh', width = '50vh', src='https://i.pinimg.com/474x/19/ff/7e/19ff7e96eba588957d722382b7c84908.jpg' }) => {

    const HoverReveal = styled.div`

    width: fit-content;
    height: ${height};

    .background {
        background-image: url(${src});
    
        height: ${height};
        width: ${width};
        filter: brightness(0.3);
        transition: filter 0.5s;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
    .text {
        position: relative;
        top: ${'-'+height};
        left: 0px;
        color: #fff;
        height: ${height};
        width: ${width};
        display: flex;
        justify-content: center;
        align-items: center;
        transition: opacity 0.5s;
    }

    &:hover {
        .background {
            filter: brightness(1);
        }
        .text {
            opacity: 0;
        }
    }
    `

    return (
        <HoverReveal>
            <div className="background" />
            {/* <img src="https://i.pinimg.com/474x/19/ff/7e/19ff7e96eba588957d722382b7c84908.jpg" className="background" /> */}
            <div className="text" >
                food
            </div>
        </HoverReveal>
    )
}

const Example = () => {
    
    return <HoverReveal width="200px" height="200px" />
}

export default Example;