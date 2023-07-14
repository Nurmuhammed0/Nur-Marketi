import React from 'react'
import {Image} from 'react-bootstrap'
export default function Slider_() {
  return (
    <div>
      <div id="cf">
        <Image class="bottom" src="https://static.wixstatic.com/media/c837a6_f58829a26e594ca3aa72383e19cf39b9~mv2.png/v1/fill/w_1349,h_508,al_r,q_90,usm_0.66_1.00_0.01,enc_auto/c837a6_f58829a26e594ca3aa72383e19cf39b9~mv2.png" />
        <img class="top" src="https://static.wixstatic.com/media/c837a6_9c1280daaeb0481abc58e6e236efdf59~mv2.png/v1/fill/w_1349,h_508,al_br,q_90,usm_0.66_1.00_0.01,enc_auto/c837a6_9c1280daaeb0481abc58e6e236efdf59~mv2.png" />
        <div class='slidiv'>
        <h4>Лучшие цены</h4>
        <h1>Невероятные цены на все ваши любимые товары</h1>
        <div>Получите больше за меньшие деньги от выбранных брендов</div>
        <button>Купить сейчас</button>
        </div>
      </div>
      <div className='divimg'>
          <Image style={{marginRight:'40px'}} src='https://static.wixstatic.com/media/c22c23_e140bfa8cd6f4cb2ac5ee6e204f64073~mv2.jpg/v1/fill/w_620,h_421,al_t,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_e140bfa8cd6f4cb2ac5ee6e204f64073~mv2.jpg'/>
         <div className='imgdiv'>
            Праздничные предложения 
            <div className='divtext'>Скидка <br/> до 30%</div>
             Избранные бренды смартфонов <br/>
            <button className='divbtn'>Mагазин</button>
         </div>
         
          <Image src='https://static.wixstatic.com/media/c837a6_d84a631864a442a496670bc2d787c6a0~mv2.jpg/v1/fill/w_620,h_421,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_d84a631864a442a496670bc2d787c6a0~mv2.jpg'/>
          <div className='imgdiv2'>
          Только что
          <div className='divtext'>
            Возьми свой <br/> звук
            В <br/> любом месте</div>
            Лучшие бренды наушников <br/>
            <button className='divbtn divbtn2'>Mагазин</button>
          </div>
      </div>
  </div>
  )
}
