import { Carousel } from 'react-carousel-minimal';
import styles from "./Carousel.module.css";
import lagoasanta from "../../img/lagoasanta.jpg";
import to from "../../img/to.jpg";
import hub88 from "../../img/hub88.jpg";
import rj2 from "../../img/rj2.jpg";
import softwaredev from "../../img/softwaredev.jpg";
import sgt from "../../img/sgt.jpg";
import yolo from "../../img/yolo.jpg";

function Aboutimg() {
 const data = [
      {
      image: hub88,
      caption: `<div>
                  Estonia
                  <br/>
                  Hub88 Team
                </div>`
    },
   {
      image: to,
      caption: `<div>
                  Estonia
                  <br/>
                  API Integration Team - Hub88
                </div>`
    },
    {
      image: yolo,
      caption: `<div>
                  Estonia
                  <br/>
                  Coworkers from Igaming Industry - Yolo
                </div>`
    },
    {
      image: lagoasanta,
      caption: `<div>
                  Lagoa Santa - Brazil
                  <br/>
                  My Students - Software Applied in Logistics Management
                </div>`
    },
    {
      image: rj2,
      caption: `<div>
                  Rio de Janeiro - Brazil
                  <br/>
                  Logistics Division<br/>Brazilian Air Force Friends
                </div>`
    },
    {
      image: softwaredev,
      caption: `<div>
                  Rio de Janeiro - Brazil
                  <br/>
                  Procurement App Project - QA Partner
                </div>`
    },
    {
      image: sgt,
      caption: `<div>
                  Rio de Janeiro - Brazil
                  <br/>
                  Team Event<br/>Logistical Centre Brazilian Air Force
                </div>`
    }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className={styles.App}>
      <div style={{ textAlign: "center" }}>
        <h1>Grateful for all the friends I've made at work</h1>
        <p>Coworkers and Friends</p>
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={7000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Aboutimg;