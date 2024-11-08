import classes from './MySlider.module.css'
import slide1 from '../../Assets/slide1.jpg'
import slide2 from '../../Assets/slide2.jpg'
import slide3 from '../../Assets/slide3.jpg'
import slide4 from '../../Assets/slide4.jpg'
import slide5 from '../../Assets/slide5.jpg'
import slide6 from '../../Assets/slide6.jpg'
import { useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const MySlider = () => {
    const [slides, setSlides] = useState([slide6, slide1, slide2, slide3, slide4, slide5, slide6,slide1])
    const [currentSlide, setCurrentSlide] = useState(4)
    const [animDuration, setAnimDuration] = useState(0.2)
    useEffect(() => {
        const slideTimer = setInterval(() => {
            rollRight()
        }, 4000)
        return () => clearInterval(slideTimer)
    }, [currentSlide])

    const rollLeft = () => {
        if (currentSlide === 1) {
            setCurrentSlide(currentSlide - 1)
            setTimeout(() => {
                setAnimDuration(0)
                setCurrentSlide(slides.length - 2)
                setTimeout(() => {
                    setAnimDuration(0.2)
                }, 10)
            }, 200)
            
        } else setCurrentSlide(currentSlide - 1)
    }

    const rollRight = () => {
        if (currentSlide === slides.length - 2) {
            setCurrentSlide(currentSlide + 1)
            setTimeout(() => {
                setAnimDuration(0)
                setCurrentSlide(1)
                setTimeout(() => {
                    setAnimDuration(0.2)
                }, 10)
            }, 200)
            
        } else setCurrentSlide(currentSlide + 1)
    }


    return (
    <div className={classes.slider}>
        <div className={classes.arrowLeft} onClick={rollLeft}><FaChevronLeft/></div>
        <div className={classes.slides} style={{transitionDuration: `${animDuration}s`, left: -currentSlide * 100 + "%"}}>
            {slides.map((slide, index) => <img src={slide} key={index}/>)}
        </div>
        <div className={classes.arrowRight} onClick={rollRight}><FaChevronRight/></div>
    </div>
  )
}

export default MySlider