import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import constdata from '../shared/constant/constantfile'
import './external.css'
const SlideComp = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img src={constdata.fish1} alt="img" className="imgs"></img>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img src={constdata.fish2} alt="img" className="imgs"></img>
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={constdata.fighter} alt="img" className="imgs"></img>
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default SlideComp
