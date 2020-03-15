import React from 'react'

export default function Footer() {
    return (
        <div>
             <footer class="footer-area">
        <div class="container">
            <div class="row">

                <div class="col-lg-3 col-sm-6 mb-4 mb-xl-0 single-footer-widget">
                    <h4>About Us</h4>
                    <p>IoT Agenda is a very interesting website that covers all aspects related to the IoT ecosystem. In more detail, this IoT blog covers aspects related to enterprise IoT, IoT platforms, IoT security, and IoT vertical markets. It is updated regularly and it offers a deep insight into the Internet of Things world.</p>
                    {/* <div class="footer-logo">
                        <img src="img/logo.png" alt="" />
                    </div> */}
                </div>

                <div class="col-lg-3 col-sm-6 mb-4 mb-xl-0 single-footer-widget">
                    <h4>Contact Info</h4>
                    <div class="footer-address">
                        <p>Address :E-Clan,India</p>
                        <span>Phone : +91 8109612733</span>
                        <span>Email : eclan4you@gmail.com</span>
                    </div>
                </div>

                <div class="col-lg-3 col-sm-6 mb-4 mb-xl-0 single-footer-widget">
                    <h4>Important Link</h4>
                    <ul>
                        <li><a href="#">Iot</a></li>
                        <li><a href="#">Frontend</a></li>
                        <li><a href="#">Backend</a></li>
                        <li><a href="#">FullStack</a></li>
                        <li><a href="#">Embedded System</a></li>
                    </ul>
                </div>

                <div class="col-lg-3 col-md-8 mb-4 mb-xl-0 single-footer-widget">
                    <h4>Newsletter</h4>
                    <p>There is still time to register for the upcoming "The Internet of Things (IoT) and the mmWave Frontier".  This informative and interactive session is a 1 1/2 day Summit which will address the important role that mmWaves play in the IoT ecosystem. Please visit the website for more information and to register today.</p>



            </div>
        </div>

    </div>
</footer>
        </div>
    )
}
