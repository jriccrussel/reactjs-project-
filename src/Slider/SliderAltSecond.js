import {useState} from 'react'
import data from '../data/data-slider'
import './SliderAltSecond.scss'

import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const SliderAltSecond = () => {
    const [current, setCurrent] = useState(0);
    const length = data.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(data) || data.length <= 0) {
        return null;
    }

    return (
        <section className='slider'>
        <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
        <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
        {data.map((slide, index) => {
            return (
            <div
                className={index === current ? 'slide active' : 'slide'}
                key={index}
            >
                {index === current && (
                <img src={slide.image} alt='travel image' className='image' />
                )}
            </div>
            );
        })}
        </section>
    );
}

export default SliderAltSecond