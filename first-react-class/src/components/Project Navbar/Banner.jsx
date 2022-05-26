import React from 'react';
import randomImage from './images/NicePng_sasuke-png_500524.png';
import style from "./css/banner.module.css"

const Banner = () => {
  return (
      <div className={style.banner}>
      <div className={style.bannerText}>
        <h1>This is Sasuke Uchiha</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
          placeat nostrum velit quod a quae maxime laudantium, expedita,
          repellat distinctio enim, perspiciatis nisi molestiae eaque vero dolor
          delectus nemo maiores.
        </p>
        <button>Click me</button>
      </div>
      <div className={style.bannerImage}>
        <img src={randomImage} alt="" />
          </div>
    </div>
  );
};

export default Banner;
