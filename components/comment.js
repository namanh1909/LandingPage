import React from "react";
import { Row, Col } from "antd";
import { Comment, List } from "antd";
import { Image } from "antd";
import { Card } from "antd";
import { Checkbox, Button } from "antd";

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}
class ButtonSize extends React.Component {
  state = {
    size: "large",
  };
  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  };
}
const data = [
  {
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    content: (
      <p>
        You have a meeting with Surbhi to help her with her portfolio. She got a
        new pet (Dog named Tiger).
      </p>
    ),
  },
  {
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    content: (
      <p>
        Ripal has recently been to Thailand and she wants to discuss about new
        Job opportunity.
      </p>
    ),
  },
  {
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    content: (
      <p>
        Prashasti hasn’t responded to your Email from 22 Jan, 2020 <br />
        <span>Want to check up on her?</span> <a>Follow up</a>
      </p>
    ),
  },
];

function CommentApp() {
  return (
    <div className="container">
      <Row>
        <Col span={12}>
          <List
            className="comment-list"
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
              <li className="comment-item">
                <Comment avatar={item.avatar} content={item.content} />
              </li>
            )}
          />
        </Col>
        <Col span={12} className="left-comment">
          <h3>Get reminders to follow up</h3>
          <p>
            Copy We remind you of everything important and track everything
            that’s important to your important ones so you always stay
            connected. We only tell you the details when you need them the most.
          </p>
          <Row>
            <Col span="10">
              <div className="span-comment-item">
                <Image
                  src="/Vector2.png"
                  alt="Picture of the author"
                  width={9.24}
                  height={6.93}
                />{" "}
                <span>Birthdays</span>
              </div>
              <div className="span-comment-item">
                <Image
                  src="/Vector2.png"
                  alt="Picture of the author"
                  width={9.24}
                  height={6.93}
                />{" "}
                <span>Friends & Family</span>
              </div>
            </Col>
            <Col span="14">
              <div className="span-comment-item">
                <Image
                  src="/Vector2.png"
                  alt="Picture of the author"
                  width={9.24}
                  height={6.93}
                />{" "}
                <span>Business Meetings</span>
              </div>
              <div className="span-comment-item">
                <Image
                  src="/Vector2.png"
                  alt="Picture of the author"
                  width={9.24}
                  height={6.93}
                />{" "}
                <span>Surroundings</span>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="row2">
        <Col span="12" className="col2-left">
          <h3>Our sync remembers everything</h3>
          <p>
            We build a huge databasse of all your contacts with all the possible
            details they share with you and you can access it anywhere, anytime.
            It’s works so well that you will love it like we do
          </p>
          <Row>
            <Col span="10">
              <div className="span-comment-item">
                <Image
                  src="/Vector2.png"
                  alt="Picture of the author"
                  width={9.24}
                  height={6.93}
                />{" "}
                <span>Available on devices</span>
              </div>
              <div className="span-comment-item">
                <Image
                  src="/Vector2.png"
                  alt="Picture of the author"
                  width={9.24}
                  height={6.93}
                />{" "}
                <span>Seatch details</span>
              </div>
            </Col>
            <Col span="14">
              <div className="span-comment-item">
                <Image
                  src="/Vector2.png"
                  alt="Picture of the author"
                  width={9.24}
                  height={6.93}
                />{" "}
                <span>Can be accesed via phonebook</span>
              </div>
              <div className="span-comment-item">
                <Image
                  src="/Vector2.png"
                  alt="Picture of the author"
                  width={9.24}
                  height={6.93}
                />{" "}
                <span>Seatch details</span>
              </div>
            </Col>
          </Row>
        </Col>
        <Col span="12">
          <Card className="info">
            <div className="topcard">
              <Image src="/avt.png" width={41.58} height={41.58} />
              <div>
                <h4>Archana Deshmukh</h4>
                <p>Product Design Consultant Copy</p>
              </div>
            </div>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
          ,
        </Col>
      </Row>
      <Row className="row3">
        <Col span="12">
          <Card
            title="Send content around anxiety"
            extra={<a href="#">...</a>}
            style={{ width: 300 }}
          >
            <span>Sending to:</span>
            <div className="user-span">
              <div className="user-comment-item">
                <Image
                  src="/Ellipse.png"
                  alt="Picture of the author"
                  width={16.63}
                  height={16.63}
                />{" "}
                <span> Archana Kamath</span>
              </div>
              <div className="user-comment-item">
                <Image
                  src="/Ellipse2.png"
                  alt="Picture of the author"
                  width={16.63}
                  height={16.63}
                />{" "}
                <span>Surojit Saraswat</span>
              </div>
              <div className="user-comment-item">
                <Image
                  className="user-comment-item-img"
                  src="/Ellipse3.png"
                  alt="Picture of the author"
                  width={16.63}
                  height={16.63}
                />{" "}
                <span>Surbhi Gangwar</span>
              </div>
            </div>
            <textarea className="textarea-comment">
              We all worry and get upset from time to time. It’s a normal part
              of life, right? But what happens when that anxiety or anger takes
              over, and you can’t calm down? Being able to calm yourself in the
              mome...
            </textarea>
            <div className="footer-card">
              <Checkbox onChange={onChange}>Send on Email as well</Checkbox>
              <Button shape="round" className="footercard_button">
                Send
              </Button>
            </div>
          </Card>
        </Col>
        <Col span="12" className="row3-left">
          <h3>Stay connected in a few clicks</h3>
          <p>
            The multichannel sales engagement platform which automates personal
            email outreach, calls, and tasks, while Sales can focus on what
            really matters - closing
          </p>
          <Row>
            <Col span="10">
              <div className="span-comment-item">
                <Image
                  src="/Vector2.png"
                  alt="Picture of the author"
                  width={9.24}
                  height={6.93}
                />{" "}
                <span>The multichannel</span>
              </div>
              <div className="span-comment-item">
                <Image
                  src="/Vector2.png"
                  alt="Picture of the author"
                  width={9.24}
                  height={6.93}
                />{" "}
                <span>The multichannel</span>
              </div>
            </Col>
            <Col span="14">
              <div className="span-comment-item">
                <Image
                  src="/Vector2.png"
                  alt="Picture of the author"
                  width={9.24}
                  height={6.93}
                />{" "}
                <span>The multichannel</span>
              </div>
              <div className="span-comment-item">
                <Image
                  src="/Vector2.png"
                  alt="Picture of the author"
                  width={9.24}
                  height={6.93}
                />{" "}
                <span>The multichannel</span>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default CommentApp;
