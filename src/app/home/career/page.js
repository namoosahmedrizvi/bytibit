
"use client"
import React from 'react';

import '/public/style/CraeerStyle.css';
import Image from 'next/image';

import Rectangle from '/public/images/Rectangle33.png';
import WorkWithUsImg from '/public/images/WorkWithUsimg.png';
import WorkWithUsImg2 from '/public/images/WorkWithUsimg2.png';
import WorkWithUsImg3 from '/public/images/WorkWithUsimg3.png';
import WorkWithUsImg4 from '/public/images/WorkWithUsimg4.png';
import WorkWithUsImg5 from '/public/images/WorkWithUsimg5.png';
import WorkWithUsImg1a from '/public/images/WorkWithUsimg1a.png';
import WorkWithUsImg2a from '/public/images/WorkWithUsimg2a.png';
import WorkWithUsImg3a from '/public/images/WorkWithUsimg3a.png';
import WorkWithUsImg4a from '/public/images/WorkWithUsimg4a.png';
import WorkWithUsImg5a from '/public/images/WorkWithUsimg5a.png';
import WebDevelopment from '/public/images/Web Development.png';

import Vector7 from '/public/images/Vector7.png';
import Group33 from '/public/images/Group33.png';

const Career = () => {
  return(
<div className='container-fluid craeerCf' id='Career'>
  <div className='row CRow1'>
<div className='col-lg-12'>
<Image src={Rectangle} className="CarHeRect" alt='none' />

<p className='CarHead'>WORK WITH US</p>

</div>


  </div>

  <div className='row contentR1'>


<div className='col-lg-4 col-md-6 col-12'>
<div className='ImgCon ImgCon1'>
<div className='DivContent1'>
<Image src={WorkWithUsImg} className='wWuImg wWImg1' alt='1' />

</div>

<div className='DivContent2'>
<Image src={WorkWithUsImg1a} className='wWuImga wWImg1a' alt='none' />

<div className='EditCont'>
<p className='Headings'> Backend Developer      <span className='tech'><Image src={WebDevelopment} className="wD" alt="none" /> Tech & Develop  </span></p>
<p className='textCont'>
Join us if you are an expert in crafting
                     powerful server-side solutions for our client's experiences.

</p>

</div>
</div>


</div>

</div>

<div className='col-lg-4 col-md-6 col-12'>
  <Image src={Vector7} className='Vector7' alt='none' />
<div className='ImgCon ImgCon2 '>
<div className='DivContent1'>
<Image src={WorkWithUsImg2} className='wWuImg wWImg1' alt='1' />

</div>

<div className='DivContent2'>
<Image src={WorkWithUsImg2a} className='wWuImga wWImg1a' alt='none' />

<div className='EditCont'>
<p className='Headings'>Full Stack Developer       <span className='tech'><Image src={WebDevelopment} className="wD" alt="none" />Tech & Develop   </span></p>
<p className='textCont'>
Versatile Full Stack Developer creating 
                     digital experiences are encouraged to apply.
  
</p>

</div>
</div>


</div>

</div>

<div className='col-lg-4 col-md-6 col-12'>

 <Image src={Group33} className='StyRec' alt='kkk'/>
<div className='ImgCon ImgCon3'>
<div className='DivContent1'>
<Image src={WorkWithUsImg3} className='wWuImg wWImg1' alt='1' />

</div>

<div className='DivContent2'>
<Image src={WorkWithUsImg3a} className='wWuImga wWImg3a' alt='none' />

<div className='EditCont'>
<p className='Headings'> Front-End Developer      <span className='tech'><Image src={WebDevelopment} className="wD" alt="none" />Tech & Develop   </span></p>
<p className='textCont'>Join our team of digital innovators,
                    shaping dynamic and responsive web designs to
                     elevate user experiences.</p>

</div>
</div>


</div>

</div>

<div className='col-lg-4 col-md-6 col-12'>
<div className='ImgCon ImgCon4 '>
<div className='DivContent1'>
<Image src={WorkWithUsImg4} className='wWuImg wWImg1' alt='1' />

</div>

<div className='DivContent2'>
<Image src={WorkWithUsImg4a} className='wWuImga wWImg4a' alt='none' />

<div className='EditCont'>
<p className='Headings'>  Business Development Assoc     <span className='tech'><Image src={WebDevelopment} className="wD" alt="none" /> Sales & Market  </span></p>
<p className='textCont'>
Join our team of digital innovators,
shaping dynamic and responsive web designs to elevate user experiences.
</p>

</div>
</div>


</div>

</div>

<div className='col-lg-4 col-md-6 col-12'>
<div className='ImgCon ImgCon5 '>
<div className='DivContent1'>
<Image src={WorkWithUsImg5} className='wWuImg wWImg1' alt='1' />

</div>

<div className='DivContent2'>
<Image src={WorkWithUsImg5a} className='wWuImga wWImg1a' alt='none' />

<div className='EditCont'>
<p className='Headings'>  Lead Generation Executive      <span className='tech'><Image src={WebDevelopment} className="wD" alt="none" /> Sales & Market  </span></p>
<p className='textCont'>
Fuel our success by driving strategic
                     lead generation efforts. Join the BytiBits team for
                      your growth and excellence.

</p>

</div>
</div>


</div>

</div>





  </div>
</div>





  )
  ;
}

export default Career;




