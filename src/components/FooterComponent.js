import React from 'react';
import {Link} from 'react-router-dom';

function Footer (props){
        return(
        <div className="footer">
         <hr/>
          <div class="container">
           <hr/>
            <div class="row ">
                <div class="col-4 offset-1 col-sm-2">
                    <h5>Links</h5>
                    <ul class="list-unstyled">
                        <li><Link to="/home"> Home</Link></li>
                        <li><Link to="/aboutus">About</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div class="col-7 col-sm-5">
                    <p>Address</p>
                    <i class="fa fa-phone"></i> +98 93827268 <br/>
                    <i class="fa fa-fax"></i> +982 82767t87<br/>
                    <i class="fa fa-envelpe"></i> fantoniStore@gmail.com<br/>
                </div>
                <div class="col-12 col-sm-4 align-self-center">
                    <div class="text-center">
                        <a class="btn btn-social-icon btn-google" href="#"><i class="fa fa-google-plus"></i> </a>
                        <a class="btn btn-social-icon btn-facebook" href="#"><i class="fa fa-facebook"></i></a>
                        <a class="btn btn-social-icon btn-instagram" href="#"><i class="fa fa-instagram"></i></a>
                        <a class="btn btn-social-icon btn-linkedin" href="#"><i class="fa fa-linkedin"></i></a>
                        <a class="btn btn-social-icon btn-twitter" href="#"><i class="fa fa-twitter"></i></a>
                        <a class="btn btn-social-icon btn-whatsapp" href="#"><i class="fa fa-whatsapp"></i></a>
                    </div>

                </div>
            </div>
            <hr/>
            <div class="row justify-content-center">
                <div class="col-auto">
                    <p>@Copyright ....</p>
                </div>
            </div>
          </div>
        </div>
        )

}

export default Footer;