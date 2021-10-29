import React from 'react';
import {SocialMediaIconsReact} from 'social-media-icons-react';

const Footer=()=>{

return(
<>
<footer>
<div className="container-fluid">
<div className="row">
<div className="col-12 col-lg-10 mx-auto">
<div className="row">
<div className="col-5 col-lg-3">
<h3>Location Map</h3>
<p><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14971.401301265787!2d85.8117119!3d20.2650413!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8637f30c4b70a955!2sOdisha%20University%20of%20Agriculture%20%26%20Technology!5e0!3m2!1sen!2sin!4v1635409008736!5m2!1sen!2sin" width="250" height="200" style={{border:0}} allowfullscreen="" loading="lazy"></iframe></p>
</div>
<div className="col-6 col-lg-3">
<h3>USEFUL LINKS</h3>
<ul>
<li>
<a href="#">ICAR</a>
</li>
<li>
<a href="#">edistrict</a>
</li>
<li>
<a href="#">Notice For OUAT Pensioner</a>
</li>
<li>
<a href="#">Agricultural Technology</a>
</li>
<li>
<a href="#">Information center based</a>
</li>
<li>
<a href="#">e-KrishiShiksya</a>
</li>
<li>
<a href="#">Mahindra Samridhi India AGRI</a>
</li>
<li>
<a href="#">Awards 2014</a>
</li>
</ul>
</div>
<div className="col-6 col-lg-3">
<h3>CONTACT</h3>
<p>
Odisha University of Agriculture & Technology Bhubaneswar-751003 Odisha, India.
Email: registrarouat[at]gmail[dot]com
PBX Phone -: (0674)-2397970/2397818/ 2397719/ 2397669 / 2397719 / 2397919 / 2397868
</p>
</div>
<div className="col-6 col-lg-3">
<h2>FOLLOW US</h2>
<div className="row">
<div className="col-3 mx-auto">
<a href="#">
</a>
</div>
</div>
</div>
<hr />
<div className="mt-10">
<p className="main-hero-para text-center w-100"> Disclaimer: This is the Official Web Portal of Odisha University of Agriculture & Technology. The portal is developed and hosted by National Informatics Centre. Orissa University of Agriculture & Technology is the owner of the portal.</p>
</div>
</div>
</div>
</div>
</div>
</footer>

</>
);
};

export default Footer;
