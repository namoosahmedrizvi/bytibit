"use client";
import React from 'react';
import '/public/style/bannerStyle.css';
import Image from 'next/image';
import Link from 'next/link';
import Spring from '/public/images/Spring.png';
import Rectangle from '/public/images/Rectangle.png';
import LeftImg from '/public/images/LeftImg.png';
import RightImg from '/public/images/RightImg.png';

const Banner = () => {
  return (



<div className='container-fluid BanConF'>
<div className='row'>
<div className='col-lg-2 col-md-12 col-12'>
<Image src={Spring} className='BanSpring' alt='bansp' />
</div>

<div className='col-lg-2 col-md-12 col-12'>
<Image src={Rectangle} className='RectBan' alt='Rectangle' />

</div>

<div className='col-lg-8 col-md-12 col-12'></div>
</div>

<div className='row'>

<div className='col-lg-3 col-12 col-md-12'></div>
<div className='col-lg-6 col-12 col-md-12'>

<div className="content">
               <h1 className="ExpText">
                Explore Limitless <br />
                Possibilities               </h1>

              <p className="LetText">
                LET'S TURN YOUR IDEAS INTO <br />
                DIGITAL BRILLIANCE!               </p>
                  </div> 


</div>

<div className='col-lg-3 col-12 col-md-12'></div>

</div>





<div className='row'>
<div className='col-lg-3 col-3 col-md-3'>



</div>

<div className='col-lg-6 col-6 col-md-6'>

{/* <Link href="/emailus" legacyBehavior>
     <a className="nav-link" aria-current="page"> */}
                <Link href="/#ContactUs"  aria-current="page"><button type='button' className='btn btn-lg btn-dark ReBtn'>Reach Out</button></Link>
     {/* </a>
   </Link> */}
  
</div>
<div className='col-lg-6 col-6 col-md-6'>


  
</div>

</div>

<div className='row '>
<div className="row ImgRL">
         
             <div className="col-12 col-md-12 col-lg-3 text-center imgSet">
               <Image src={LeftImg} alt="LeftImg" className="LeftImg img-fluid" />
             </div>
                 
             <div className="col-12 col-md-12 col-lg-4 text-center"></div>
             <div className="col-12 col-md-12 col-lg-4 text-center imgSet">
               <Image src={RightImg} alt="RightImg" className="RightImg img-fluid" />
             </div>
             <div className="col-12 col-md-12 col-lg-1 text-center imgSet"></div>

           </div>



</div>

</div>



//     <div className="container-fluid ContBan">
//       <div className="MainDiv">
//         <div className="row bg-danger">
//           <div className="col-12 col-md-12 col-lg-2 bg-warning">
//             <Image src={Spring} className="SpringBan" alt="Spring" />
//           </div>
//           <div className="col-12 col-md-12 col-lg-1 text-center">
//             <Image src={Rectangle} className="RectangleBan" alt="Rectangle" />
//           </div>
//           <div className="col-12 col-md-12 col-lg-"></div>
//         </div>

//         <div className="row align-items-center justify-content-center bg-success">
//           <div className="col-12 col-md-12 col-lg-8 text-center bg-primary">
//             <div className="content">
//               <h1 className="ExpText">
//                 Explore Limitless <br />
//                 Possibilities
//               </h1>
//               <p className="LetText">
//                 LET'S TURN YOUR IDEAS INTO <br />
//                 DIGITAL BRILLIANCE!
//               </p>
            
//      </div>

     
//           </div>
  
//         </div>


// <div className='row'>

// <div className='col col-lg-4 col-md-4 col-4'></div>
// <div className='col col-lg-4 col-md-4 col-4'>



// </div>
// <div className='col col-lg-4 col-md-4 col-4'></div>


// </div>


//         <div className="row ImgRL bg-dark">
         
//           <div className="col-12 col-md-12 col-lg-3 text-center imgSet">
//             <Image src={LeftImg} alt="LeftImg" className="LeftImg img-fluid" />
//           </div>
        
//           <div className="col-12 col-md-12 col-lg-5 BtnSet">
// {/* <Link href="/emailus" legacyBehavior>
//   <a className="nav-link" aria-current="page"> */}
// <button type='button' className='btn btn-lg btn-dark ReBtn'>Reach Out</button>
//   {/* </a>
// </Link> */}

//           </div>
//           <div className="col-12 col-md-12 col-lg-4 text-center imgSet">
//             <Image src={RightImg} alt="RightImg" className="RightImg img-fluid" />
//           </div>
//         </div>
//       </div>

    







//     </div>
  );
};

export default Banner;
 