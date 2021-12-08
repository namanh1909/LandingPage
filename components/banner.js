import React from "react";
import { Row, Col } from "antd";
import { Input} from "antd";
import Image from "next/image";
const { Search } = Input;
const onSearch = (value) => console.log(value);
function BannerApp() {
  return (
    <div className="container">
      <Row className="row-banner">
        <Col span={14} className="banner-left">
          <h1 className="banner-h1">
            Take your relationships to the next level
          </h1>
          <p className="banner-p">
            The multichannel sales engagement platform which automates personal
            email outreach, calls, and tasks, while Sales can focus on what
            really matters - closing deals.
          </p>
          <Search
      placeholder="Email id"
      allowClear
      enterButton="Try it for free"
      size="large" className="button-banner"
      onSearch={onSearch}
    />
    <div className="span">
    <div className="span-banner">
      <Image
            src="/Vector.png"
            alt="Picture of the author"
            className="icon-banner"
            width={9.24}
            height={
              6.93} 
          />{" "}
          <span>Synced contacts
      </span>
    </div>
    <div className="span-banner">
      <Image
            src="/Vector.png"
            alt="Picture of the author"
            className="icon-banner"
            width={9.24}
            height={
              6.93} 
          />{" "}
          <span>Regular reminders
      </span>
    </div>
    <div className="span-banner">
      <Image

            src="/Vector.png"
            alt="Picture of the author"
            className="icon-banner"
            width={9.24}
            height={
              6.93} 
          /> {" "}
          <span>The multichannel
      </span>
    </div>
    </div>
   
        </Col>
        <Col span={10} className="col10">
          <Image
            src="/Image.png"
            alt="Picture of the author"
            className="Image-banner"
            height={458.74}
            width={230}
          />
        </Col>
      </Row>
    </div>
  );
}
export default BannerApp;
