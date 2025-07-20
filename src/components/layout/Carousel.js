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
                  Tallinn - Estonia
                  <br/>
                  Great Coworkers Professionals from Hub88
                </div>`
    },
   {
      image: to,
      caption: `<div>
                  Tallinn - Estonia
                  <br/>
                  Friends of API Integration - Hub88
                </div>`
    },
    {
      image: yolo,
      caption: `<div>
                  Tallinn - Estonia
                  <br/>
                  Coworkers from Igaming Industry - Yolo
                </div>`
    },
    {
      image: lagoasanta,
      caption: `<div>
                  Lagoa Santa - Brazil
                  <br/>
                  My Students of software applied in logistics management
                </div>`
    },
    {
      image: rj2,
      caption: `<div>
                  Rio de Janeiro - Brazil
                  <br/>
                  Friends at the Logistics Division of the Brazilian Air Force
                </div>`
    },
    {
      image: softwaredev,
      caption: `<div>
                  Rio de Janeiro - Brazil
                  <br/>
                  QA Partner in the Procurement App Project
                </div>`
    },
    {
      image: sgt,
      caption: `<div>
                  Rio de Janeiro - Brazil
                  <br/>
                  Friends Sergeants of the Logistics Division
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
        <h1>Grateful for all the friendships I've made at work in my life</h1>
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