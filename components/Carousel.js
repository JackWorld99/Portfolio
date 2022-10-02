import React, {useEffect, useState} from "react"
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

const Carousel = ({image}) => {
    const [items, setItems] = useState()

    useEffect(() => {
        setItems(image.map(d => {
            return (
                <img className="carousel-img" src={`/images/${d.img}`} alt={d.alt} key={d.id}/>
            )
        }))
    }, [image])

    const responsive = {0: {items: 3}, 450: {items: 4}, 768: {items: 5}, 1024: {items: 6}}

    return (
        <AliceCarousel
            mouseTracking
            infinite
            autoPlayInterval={1000}
            animationDuration={1500}
            disableDotsControls
            disableButtonsControls
            responsive={responsive}
            items={items}
            autoPlay
        />
    )
}

export default Carousel