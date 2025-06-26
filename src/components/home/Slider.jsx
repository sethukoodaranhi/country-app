import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slidImg1 from '../../assets/images/groupPeople.jpg'
import slidImg2 from '../../assets/images/navratri.jpg'
import slidImg3 from '../../assets/images/talentedChild.jpg'
import mapImg from '../../assets/images/map.jpg'
import celebrationGirl from '../../assets/images/celebartion.jpg'
function Slider() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <div className='row mb-3 flex-column-reverse flex-md-row'>
            <div className='col-md-9 mb-3 mb-md-0'>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img
                            src={slidImg1}
                            className="d-block w-100 rounded carousel-img"
                            alt="Slide 1"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            src={slidImg2}
                            className="d-block w-100 rounded carousel-img"
                            alt="Slide 2"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            src={slidImg3}
                            className="d-block w-100 rounded carousel-img"
                            alt="Slide 3"
                        />
                    </Carousel.Item>
                </Carousel>

            </div>

            <div className='col-md-3 d-flex align-items-stretch'>
                <img
                    src={celebrationGirl}
                    className='img-fluid rounded w-100 object-fit-cover'
                    style={{ height: '100%' }}
                    alt="Celebration"
                />
            </div>
        </div>

    )
}

export default Slider