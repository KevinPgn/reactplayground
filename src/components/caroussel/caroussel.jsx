import React from 'react'
import "./caroussel.css"

import Img1 from "../../assets/animeImages/img1.jpg"
import Img2 from "../../assets/animeImages/img2.webp"
import Img3 from "../../assets/animeImages/img3.jpg"
import Img4 from "../../assets/animeImages/img4.jpg"
import Img5 from "../../assets/animeImages/img5.webp"
import Img6 from "../../assets/animeImages/img6.jpg"
import Img7 from "../../assets/animeImages/img7.webp"
import Img8 from "../../assets/animeImages/img8.webp"
import Img9 from "../../assets/animeImages/img9.jpg"
import Img10 from "../../assets/animeImages/img10.webp"

export default function caroussel() {
  
  
  return (
    <>
        <div className="caroussel">
          <div className="caroussel-container">
            <div className="caroussel-header">
              <h2 className='caroussel-title'>ANIMES POPULAIRES</h2>
            </div>
            <div className="caroussel-content">
                <div className="carrousel-item">
                  <img src={Img1} alt="" />
                  <p>Title Anime 1</p>
                </div>
                <div className="carrousel-item">
                  <img src={Img2} alt="" />
                  <p>Title Anime 2</p>
                </div>
                <div className="carrousel-item">
                  <img src={Img3} alt="" />
                  <p>Title Anime 3</p>
                </div>
                <div className="carrousel-item">
                  <img src={Img4} alt="" />
                  <p>Title Anime 4</p>
                </div>
                <div className="carrousel-item">
                  <img src={Img5} alt="" />
                  <p>Title Anime 5</p>
                </div>
                <div className="carrousel-item">
                  <img src={Img6} alt="" />
                  <p>Title Anime 6</p>
                </div>
                <div className="carrousel-item">
                  <img src={Img7} alt="" />
                  <p>Title Anime 7</p>
                </div>
                <div className="carrousel-item">
                  <img src={Img8} alt="" />
                  <p>Title Anime 8</p>
                </div>
                <div className="carrousel-item">
                  <img src={Img9} alt="" />
                  <p>Title Anime 9</p>
                </div>
                <div className="carrousel-item">
                  <img src={Img10} alt="" />
                  <p>Title Anime 10</p>
                </div>
            </div>
          </div>
        </div>
    </>
  )
}
