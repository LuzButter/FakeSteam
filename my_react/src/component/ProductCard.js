import { Col, Row } from "antd"
import styled from "styled-components"


const Badge = styled.div`
.box {
    width: 200px; height: 300px;
    position: relative;
    // border: 1px solid #BBB;
    // margin: 20px;
    display: inline-block;
  }
  .bestseller:before {
    content: "";
    z-index: -1;
    overflow: hidden;
    transform: rotate(-135deg);
    width: 120px;
    display: block; 
    background: #79A70A;
    background: linear-gradient(#9BC90D 0%, #79A70A 100%);
    box-shadow: 0 3px 10px -5px rgba(0, 0, 0, 1);
    position: absolute;
    top: 34px;
    right: -16px;
    clip-path: polygon(120px 20px, 90px -10px, 30px -10px, 0px 20px, 10px 30px,  110px 30px);
    height: 20px;
    width: 120px;
  }
  .bestseller:after {
    content: "新品";
    z-index: 1;
    overflow: hidden;
    font-size: 10px;
    font-weight: bold;
    color: #FFF;
    text-transform: uppercase;
    text-align: center;
    line-height: 20px;
    transform: rotate(45deg);
    width: 120px;
    display: block; 
    background: #79A70A;
    background: linear-gradient(#9BC90D 0%, #79A70A 100%);
    box-shadow: 0 3px 10px -5px rgba(0, 0, 0, 1);
    position: absolute;
    top: 20px; right: -30px;
    clip-path: polygon(120px 20px, 90px -10px, 30px -10px, 0px 20px, 10px 30px,  110px 30px)
  }
`

const App = ({
    width = '200px',
    item = {
        img: 'https://ih1.redbubble.net/image.5273118024.5498/raf,360x360,075,t,fafafa:ca443f4786.jpg',
        title: 'e&t',
        before: '1234',
        after: '1000',
    }
}) => {

    return (
        <div>
            <Badge style={{ width: width, margin: '10px' }} >
                <div className="box bestseller" style={{ width: width, height: width, background: `url(${item.img})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
                <Row justify={'space-between'} style={{ width: '100%', height: '40%' }} >
                    <Col>
                        <div style={{ padding: '1em 0' }} >
                            {item.title}
                        </div>
                    </Col>
                    {/* <Col style={{ alignSelf: 'end' }} >
                        <div style={{ padding: '1em 0', textAlign: 'end' }} >
                            <div style={{ textDecorationLine: 'line-through', color: 'gray' }} >
                                ${item.before}
                            </div>
                            <div style={{ color: 'red', fontWeight: '500', fontSize: '1.1em' }} >
                                ${item.after}
                            </div>
                        </div>
                    </Col> */}
                </Row>
            </Badge>
        </div>
    )
}

export default App