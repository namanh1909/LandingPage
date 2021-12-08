import React from "react";
import { Row, Col } from "antd";
import {Button} from "antd";

function FooterApp() {
  return (
    <div className="container">
    <div className="Footer">
      <div className="footer-top">
      <Row className="Row-top_footer">
         <Col span="17" className="col-top_footerleft">
             <h3>Form better relationships with everyone</h3>
             <p>Start your free 14 days trial.</p>
         </Col>
         <Col span="7" className="col-top_footerright">
         <Button shape="round" className="footer__button">
          Try it for free
          </Button>
         </Col>
     </Row>
     </div>
     <div className="footer-bottom">
     <Row>
      <Col span={6}>
        <h4>Relationz</h4>
          <a>Product Tour</a><br/>
          <a>Pricing</a><br/>
          <a>Founding Members</a><br/>
          <a>Case Studies</a> <br/>
      </Col>
      <Col span={6}><h4>Company</h4>
          <a> Blog</a><br/>
          <a>Career</a><br/>
          <a>Privacy</a><br/>
          <a>About</a> </Col>
      <Col span={6}><h4>Support</h4>
          <a>Documentation</a><br/>
          <a>Security</a><br/>
          <a>Mobility Guide</a><br/>
          <a>FAQs </a> </Col>
      <Col span={6}><h4>Legal</h4>
          <a>Privacy Policy </a><br/>
          <a>Cookie Information</a><br/>
          <a>Mobility Guide</a><br/>
          <a>GDPR Commitment</a> </Col>
    </Row>
    <div className="under-footer">
      <h3>Relationz </h3>
      <p>Copyright © 2010 - 2019 Relationz Ltd. All rights reserved.</p>
    </div>
    
     </div>
    </div>
    </div>
  );
}
export default FooterApp;
