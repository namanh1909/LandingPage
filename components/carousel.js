import React from "react";
import Image from "next/image";
import { Carousel } from "antd";

const contentStyle = {
  width: "501.77px",
  height: "301.48px",
  color: "black",
  textAlign: "center",
  background: "white",
  margin: "0 auto",
};
function CarouselApp() {
  return (
    <div className="container">
      <div className="caroucel">
        <h3>What our customers are saying</h3>

        <Carousel effect="fade">
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <Image
                src="/Rectanglee.png"
                alt="Picture of the author"
                width={86.63}
                height={86.63}
              />
              <br />
              <span className="name">Michelle Johnson, Australia</span>
              <p className="sub-name">
                The multichannel sales engagement platform which automates
                personal email outreach, calls, and tasks, while Sales can focus
                on what really matters - closing while Sales can focus on what
                really matters - closing
              </p>
              <Image
                src="/name.png"
                alt="Picture of the author"
                width={110.89}
                height={49.9}
              />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
          <div>
            <h3 style={contentStyle}>5</h3>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
export default CarouselApp;
