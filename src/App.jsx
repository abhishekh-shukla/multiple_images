import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImageContainerOne from './ImageContainerOne'

const images = [
  "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
  "https://cdn.pixabay.com/photo/2017/11/07/07/49/web-2925929_960_720.jpg",
  "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
  "https://cdn.pixabay.com/photo/2012/11/13/17/44/e-mail-65927_960_720.jpg",
  "https://c7.staticflickr.com/9/8546/28354329294_bb45ba31fa_b.jpg",
  "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
  "https://c6.staticflickr.com/9/8890/28897154101_a8f55be225_b.jpg",
  "https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_b.jpg",
  "https://c7.staticflickr.com/9/8569/28941134686_d57273d933_b.jpg",
  "https://cdn.pixabay.com/photo/2021/10/11/22/14/link-6701956_1280.png",
  "https://media.istockphoto.com/id/861086798/photo/wireless-communication-between-smart-phone-and-car-instrument-panel-autonomous-car.jpg?s=2048x2048&w=is&k=20&c=gX4PwnrFgGI3LR-fpY6aLKlGvG6qIbeCrCyHY8Wy8Xk=",
  "https://media.istockphoto.com/id/1411625124/photo/modern-technologies-in-business-and-education.jpg?s=2048x2048&w=is&k=20&c=ndFEtvlIjUnYp0mWaRaCx8gLVW1M53-N7cH5-lgNjbY=",
  "https://media.istockphoto.com/id/1252264724/photo/the-modern-creative-communication-and-internet-network-connect-in-smart-city.jpg?s=2048x2048&w=is&k=20&c=aPRTiE0dwv__syNDvV7HZqC2TNXzUBuEjX3EOTVQiYk=",
  "https://cdn.pixabay.com/photo/2019/04/07/23/11/link-building-4111001_960_720.jpg",
  "https://cdn.pixabay.com/photo/2023/02/15/10/22/backlinks-7791410_1280.jpg",
  "https://cdn.pixabay.com/photo/2023/02/15/10/19/backlinks-7791387_1280.jpg",
  "https://media.istockphoto.com/id/531864277/photo/bandra-worli-sea-link.jpg?s=2048x2048&w=is&k=20&c=1eiA8c7XF-Tssv9AgxwGDHVQD8qUjDHHSZw85WkneJg=",
  "https://c6.staticflickr.com/9/8890/28897154101_a8f55be225_b.jpg",
];  

function App() {
  
  return (
 <div className="App">
  <div className='container_one'>
<ImageContainerOne images={images} />
 </div>
 <div className='container_two'>
<ImageContainerOne images={images} />
 </div>
 <div className='container_three'>
<ImageContainerOne images={images} />
 </div>
 </div>
  )
}

export default App
