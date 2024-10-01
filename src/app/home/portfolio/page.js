"use client"
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import '/style/portfolioStyle.css';
import Image from 'next/image';
import laptop1 from '/images/laptop.png';
import laptop2 from '/images/chatfailap.png';
import laptop3 from '/images/lnkmngrlap.png';
import portSpring from '/images/portSpring.png';
// import line from '/images/line.png';
// import lineSpr from '/images/linespr.png';
import Ai from '/images/Ai2.png';
import uiux from '/images/uiux.png';
import Ma from '/images/Ma2.png';
import webApp from '/images/webApp2.png';
import chrome from '/images/chrome2.png';






const Portfolio = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     initialSlide: 0,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     responsive: [
//       {
//         breakpoint: 992,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 720,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           initialSlide: 2
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]
//   };





//   return (

// <div className='container-fluid'>
//  <div className='container port'>


// <div className='row portRow'>  









// </div>





// </div>

//     <div className="row slider-container PortFolio">
  
//       <h1 className='portHead text-start text-black text-xx-large'>
//         Our 
//         Portfolio
//       </h1>
//       <Image src={portSpring} alt='portSpring' className='portSpring '  />

//       <Slider {...settings}>

//         <div className='cardk'>
//         <div className='Slide-container'>
//           <div className='Slide-img'>
//             <Image src={laptop} alt='...' className='SlImg img-top img-fluid' />
//           </div>
//           <div className='SlideText'>
          
//             <h3 className='EmpName'>
//             Socialbu</h3>
//             <p className='EmpAbout'>
//             SocialBu - An all-in-one social media management & and automation platform that allows
//              users to manage multiple social accounts from one place, respond to incoming messages & and
//               comments, analyze their social media presence, and set dynamic automation.
//             </p>
           
//           </div>
//         </div>
//         </div>

//         <div className='cardk'>
//         <div className='Slide-container'>
//           <div className='Slide-img'>
//             <Image src={laptop3} alt='...' className='SlImg img-top img-fluid' />
//           </div>
//           <div className='SlideText'>
    
//             <h3 className='EmpName'>Lnk Manager</h3>
//             <p className='EmpAbout'>
           

// LinkMngr - A Simple and Easy-To-Use Link Management & Shortening Tool with Link Retargeting,
//  Custom Domain Branded Links, Team Collaboration, and Analytics. It is the quickest way to share
//   your links to increase traffic and brand awareness..
//             </p>
          
//           </div>

//         </div>
//         </div>
//         <div className='cardk'>
//                     <div className='Slide-container'>
//           <div className='Slide-img'>
//             <Image src={laptop2} alt='...' className='SlImg img-top img-fluid' />




//           </div>
//           <div className='SlideText'>
          // <Image src={Ai} alt='AI' className=' img-top img-fluid imgs' />
          //   <Image src={Ai} alt='AI' className=' img-top img-fluid imgs' />
          //   <Image src={chrome} alt='chrome' className=' img-top img-fluid imgs' />
          //   <Image src={Ma} alt='Ma' className=' img-top img-fluid imgs' />
            // <h3 className='EmpName'>ChatFAI</h3>
            // <p className='EmpAbout'>
            // ChatFAI - An AI-powered experience that allows you to chat with your favorite characters from movies,
            //  TV shows, books, history, and more. Whether you want to talk to a fictional character or a historical
            //   figure, ChatFAI makes it possible, and you ’ll feel like you're talking to them in real life.
             
            // </p>

            
          
//           </div>
//         </div>
      

//         </div>

       
//       </Slider>



     
//     </div>
//     <div className='row' style={{height:'5rem'}} ></div>
    
    
    
//     <Image src={lineSpr} alt='line' className='linespr img-fluid'  />
//     <Image src={line} alt='line' className='lineimg img-fluid'  />
  
//    </div>



const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};
return (


  <div className="container slider-container" id='Portfolio'>

    <h1 className='portHead'>Our <span className='port'>Portfolio </span></h1>

<Image src={portSpring} alt='portSpring' className='portSpring' />


    <Slider {...settings}>
      <div className='slideGen'>
        <div className='row rowSet'>
        <div className='col-lg-6 col md-12 col-12'>
<div className='SldImg '>
<Image src={laptop1} alt='...' className='SlImg img-top img-fluid' />  

</div>
</div>
<div className='col-lg-6 col md-12 col-12'>
  <div className='TextCont'>
<h3 className='EmpName'>
             Socialbu</h3>
             <p className='EmpAbout'>
             SocialBu - An all-in-one social media management & and automation platform that allows
              users to manage multiple social accounts from one place, respond to incoming messages & and
               comments, analyze their social media presence, and set dynamic automation.
             </p>
             </div>
           
<div className='logos'>
<Image src={webApp} alt='webApp' className=' img-top img-fluid imgs' />
<Image src={Ai} alt='AI' className=' img-top img-fluid imgs imgSet' />
  <Image src={uiux} alt='uiux' className=' img-top img-fluid imgs imgSet ' />
<Image src={Ma} alt='Ma' className=' img-top img-fluid imgs imgSet'  />
            
            <Image src={chrome} alt='chrome' className=' img-top img-fluid imgs imgSet ' />
</div>



</div>

        </div>

      </div>
      <div className='slideGen'>
      <div className='row rowSet'>
      <div className='col-lg-6 col md-12 col-12'>
<div className='SldImg '>
<Image src={laptop2} alt='...' className='SlImg img-top img-fluid' />  

</div>
</div>

<div className='col-lg-6 col md-12 col-12'>
<div className='TextCont'>
<h3 className='EmpName'>ChatFAI</h3>
            <p className='EmpAbout'>
            ChatFAI - An AI-powered experience that allows you to chat with your favorite characters from movies,
             TV shows, books, history, and more. Whether you want to talk to a fictional character or a historical
              figure, ChatFAI makes it possible, and you ’ll feel like you're talking to them in real life.
             
            </p>



           </div>

<div className='logos'>
<Image src={webApp} alt='webApp' className=' img-top img-fluid imgs' />
<Image src={Ai} alt='AI' className=' img-top img-fluid imgs imgSet' />
  <Image src={uiux} alt='uiux' className=' img-top img-fluid imgs imgSet ' />
<Image src={Ma} alt='Ma' className=' img-top img-fluid imgs imgSet'  />
            
            <Image src={chrome} alt='chrome' className=' img-top img-fluid imgs imgSet ' />
</div>



</div>

        </div>
      </div>
      <div className='slideGen'>
      <div className='row rowSet'>
      <div className='col-lg-6 col md-12 col-12'>
<div className='SldImg '>
<Image src={laptop3} alt='...' className='SlImg img-top img-fluid' />  

</div>
</div>

<div className='col-lg-6 col md-12 col-12'>

<div className='TextCont'>
<h3 className='EmpName'>Lnk Manager</h3>
            <p className='EmpAbout'>
           

LinkMngr - A Simple and Easy-To-Use Link Management & Shortening Tool with Link Retargeting,
 Custom Domain Branded Links, Team Collaboration, and Analytics. It is the quickest way to share
  your links to increase traffic and brand awareness..
            </p>

</div>

<div className='logos'>
<Image src={webApp} alt='webApp' className=' img-top img-fluid imgs' />
<Image src={Ai} alt='AI' className=' img-top img-fluid imgs imgSet' />
  <Image src={uiux} alt='uiux' className=' img-top img-fluid imgs imgSet ' />
<Image src={Ma} alt='Ma' className=' img-top img-fluid imgs imgSet'  />
            
            <Image src={chrome} alt='chrome' className=' img-top img-fluid imgs imgSet ' />
</div>


</div>

        </div>
      </div>
     
    </Slider>
  </div>
  
)
}

export default Portfolio;











