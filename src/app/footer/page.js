"use client";
import React from 'react';
import '../../../public/style/footerStyle.css'
import Image from 'next/image';
import Link from 'next/link';
import Logobb from '../../../public/images/logoFooter.png'
import facebook from '../../../public/images/facebook.png'
import instagram from '../../../public/images/instagram.png'
import twitter from '../../../public/images/LinkedIn.png'


const footer = () => {
  return (
<div className="container-fluid mt-5 mb-5" id='ContactUs'>
<div className='row'>

<div className='col-lg-1 col-md-12 col-12'></div>
<div className='col-lg-3 col-md-12 col-12'>
<div className='mainLogo'>
<Link href="/#Home"  aria-current="page"> <Image src={Logobb} alt='Logobb' className='Logobb' /></Link>

<div className='textF'>
<li className='pF'>
BytiBits focuses on value-based upscaling, ensuring clients' 
success from learning to implementation.

</li>

</div>
</div>

</div>
<ul className='col-lg-2 col-md-6 col-12  Set'>

<li className=' heads'>Quick Links</li> <br />
 <Link href="/#Home"  aria-current="page"> <li className='p p2'>Home</li> </Link>
 <Link href="/#About"  aria-current="page"> <li className='p p2'>About</li> </Link>
 <Link href="/#Portfolio" aria-current="page"> <li className='p p2'>Portfolio</li> </Link>
 <Link href="/#Career"  aria-current="page"><li className='p p2'>Career</li></Link>
 <Link href="/#Services"  aria-current="page"> <li className='p p2'>Servies</li> </Link>



</ul>
<ul className='col-lg-2 col-md-6 col-6  Set' >

<li className='heads'> Head Office</li><br />

<li className='p loc'>337G- Rehmanpure</li>
<li className='p loc'> Lahore 54000,</li>
<li className='p loc'> Pakistan </li>
<li className='p loc'> Phone Number </li>
<li className='p loc'> 0322-4846656 </li>
<li className='p loc'> Email </li>
<li className='p loc'> bilaltariq6@gmail.com</li>


</ul>
<ul className='col-lg-2 col-md-12 col-12  Set'>
<li className='heads'>Our Socials</li><br />
<div className='SocDiv'>
<Link href="//facebook.com/Bytibits"><Image src={facebook} className='socialL' alt='facebook' /></Link> 
 <Link href="//instagram.com/bytibits"><Image src={instagram} className='socialL' alt='instagram' /></Link> 
 <Link href="https://www.linkedin.com/company/bytibits">  <Image src={twitter} className='socialL' alt='twitter' /></Link>

</div>


</ul>
<div className='col-lg-2 col-md-2 col-12'></div>




</div>









</div>

  
  );
};
export default footer;
