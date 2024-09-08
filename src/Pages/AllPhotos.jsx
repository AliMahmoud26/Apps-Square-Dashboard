import React from 'react'
import { FaFilter } from 'react-icons/fa'
import nature1 from '../assets/nature1.jpg'
import nature2 from '../assets/nature4.jpg'
import nature3 from '../assets/nature5.jpg'
import nature4 from '../assets/nature6.jpg'
import nature5 from '../assets/nature12.webp'
import forest1 from '../assets/forest1.jpg'
import forest2 from '../assets/forest2.jpeg'
import forest3 from '../assets/forest3.jpg'
import forest4 from '../assets/forest4.webp'
import bird1 from '../assets/bird1.webp'
import bird2 from '../assets/bird2.jpg'
import bird5 from '../assets/bird5.jpg'
import animal1 from '../assets/animal1.jpg'
import animal2 from '../assets/animal2.jpeg'
import animal3 from '../assets/animal3.jpg'
import animal4 from '../assets/animal4.jpg'
import animal5 from '../assets/animal5.avif'
import animal6 from '../assets/animal6.jpg'

const AllPhotos = () => {
  return (
    <div className='photos'>
        <div className="filter">
            <button className='btn'>Filter Content <FaFilter /></button>
        </div>
        
        <div className="images-gallery">
            <div className="img">
                <img src={nature1} alt="Image" />
            </div>
            <div className="img">
                <img src={nature2} alt="Image" />
            </div>
            <div className="img">
                <img src={nature3} alt="Image" />
            </div>
            <div className="img">
                <img src={nature4} alt="Image" />
            </div>
            <div className="img">
                <img src={nature5} alt="Image" />
            </div>
            <div className="img">
                <img src={forest1} alt="Image" />
            </div>
            <div className="img">
                <img src={forest3} alt="Image" />
            </div>
            <div className="img">
                <img src={bird1} alt="Image" />
            </div>
            <div className="img">
                <img src={bird2} alt="Image" />
            </div>
            <div className="img">
                <img src={forest4} alt="Image" />
            </div>
            <div className="img">
                <img src={bird5} alt="Image" />
            </div>
            <div className="img">
                <img src={animal3} alt="Image" />
            </div>
            <div className="img">
                <img src={animal1} alt="Image" />
            </div>
            <div className="img">
                <img src={animal2} alt="Image" />
            </div>
            <div className="img">
                <img src={animal6} alt="Image" />
            </div>
        </div>
    </div>
  )
}

export default AllPhotos