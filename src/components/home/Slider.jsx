import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slidImg1 from '../../assets/images/groupPeople.jpg'
import slidImg2 from '../../assets/images/navratri.jpg'
import slidImg3 from '../../assets/images/talentedChild.jpg'
import mapImg from '../../assets/images/map.jpg'
function Slider() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <div className='row mb-3'>
            <div className='col-lg-9'>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img src={slidImg1} className="d-block w-100" alt="Slide 1" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={slidImg2} className="d-block w-100" alt="Slide 2" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={slidImg3} className="d-block w-100" alt="Slide 3" />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className='col-lg-3'>
                <img src={mapImg} className='w-100' />
            </div>
        </div>
    )
}

export default Slider