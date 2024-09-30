"use client"
import react from 'react';


import Link from 'next/link';

import '../../../public/style/contactUsStyle.css';
import Image from 'next/image';
import Vector8 from '../../../public/images/Vector8.png'
import DoubleRect from '../../../public/images/DoubleRect.png'
import PatternAYR from '../../../public/images/PatternAYR.png'
const ContactUs = () => {
  




  return (


<div className='container-fluid connctWithUsCf' id='Contact'>
<div className=' row areyouready'>
<div className='col-12'>
  <div  className='Vector8'>

<Image src={Vector8} alt='Vector8' className='Vector8' />
  </div>
<div className='row maindiv'>
<div className='col-lg-6 col-md-6 col-12'>
<Image src={PatternAYR} alt='patternAYR' className='patternAYR setlled' /> 
</div>

<div className='col-lg-6 col-md-6 col-12'>
<div className='text  setlled'>
<h1 className='ReadyHead'>
ARE YOU READY?
</h1>
<p className='ayrgraph'>
Connect With Us ToBuild Or Improve Your  <span className='digitspan'>  Digital Product</span>

<Link href="/#ContactUs"  aria-current="page"><button className='btn btn-lg btn-dark d-flex ReBtn2'>Reach Out</button></Link>

</p>

</div>
</div>
  
</div>

</div>



</div>
<div className='row grouprow'>

<Image src={DoubleRect} className='DoubleRect1' alt='DoubleRect1' />
</div>

</div>
  );
}

export default ContactUs;
