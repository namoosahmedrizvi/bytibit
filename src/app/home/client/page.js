"use client";
import React from 'react';
import Image from 'next/image';
import '/public/style/logoBarStyle.css'
import Link from 'next/link';

import SocialBu from '/public/images/SocialBu.png';
import ChatFai from '/public/images/ChatFai.png';
import LinkMngr from '/public/images/LinkMngr.png';
import teacheasy from '/public/images/teacheasy.png';
import FPC from '/public/images/FPC.png';

const Client = () => {
  return (
<div className='container-fluid LogoMain' id='Client'>


<Link href="https://socialbu.com/"> <Image src={SocialBu} alt='SocialBu' className='img-fluid LogoDe  SocialBu' /></Link>


<Link href="https://chatfai.com/"><Image src={ChatFai} alt='ChatFai' className='img-fluid LogoDe set ChatFai' /></Link>

  <Link href="https://app.linkmngr.com/"> <Image src={LinkMngr} alt='LinkMngr' className='img-fluid LogoDe set LinkMngr' /></Link>

  <Link href="https://teacheasy.ai/"  > <Image src={teacheasy} alt='teacheasy' className='img-fluid LogoDe set te' /></Link>

<Link href="https://fpc.punjab.gov.pk/"> <Image src={FPC} alt='FPC' className='img-fluid LogoDe set FPC' /></Link>












</div>

  );}

export default Client;
