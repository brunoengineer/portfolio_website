import { Carousel } from 'react-carousel-minimal';
import styles from "./Carousel.module.css";
import lagoasanta from "../../img/lagoasanta.jpg";
import bh from "../../img/bh.jpg";
import rj from "../../img/rj.jpg";
import sj from "../../img/sj.jpg";
import rj2 from "../../img/rj2.jpg";
import softwaredev from "../../img/softwaredev.jpg";
import sp from "../../img/sp.jpg";
import sgt from "../../img/sgt.jpg";
import dio from "../../img/dio.jpg";

function Aboutimg() {
 const data = [
    {
      image: lagoasanta,
      caption: `<div>
                  Lagoa Santa - Brazil
                  <br/>
                  My Students of software applied in logistics management
                </div>`
    },
    {
      image: bh,
      caption: `<div>
                  Belo Horizonte - Brazil
                  <br/>
                  Officer Heimar and his beautiful family
                </div>`
    },
    {
      image: rj,
      caption: `<div>
                  Rio de Janeiro - Brazil
                  <br/>
                  Friends at the Logistics Division of the Brazilian Air Force
                </div>`
    },
    {
      image: sj,
      caption: `<div>
                  São José dos Campos - Brazil
                  <br/>
                  Pilot and Engineer Friends
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
                  Partner in the Logistical Software Development Project
                </div>`
    },
    {
      image: sp,
      caption: `<div>
                  São Paulo - Brazil
                  <br/>
                  Friends of Air Force Procurement Planning
                </div>`
    },
    {
      image: sgt,
      caption: `<div>
                  Rio de Janeiro - Brazil
                  <br/>
                  Friends Sergeants of the Logistics Division
                </div>`
    },
    {
      image: dio,
      caption: `<div>
                  Curitiba - Brazil
                  <br/>
                  Officer Diogenes and his beautiful family
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
            time={4000}
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