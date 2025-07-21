import { Carousel } from 'react-carousel-minimal';
import styles from "./Vibes.module.css";
import vibe1 from "../../img/vibe1.png";
import vibe2 from "../../img/vibe2.png";
import vibe3 from "../../img/vibe3.png";
import vibe4 from "../../img/vibe4.png";
import vibe5 from "../../img/vibe5.png";
import vibe6 from "../../img/vibe6.png";
import vibe7 from "../../img/vibe7.png";
import vibe8 from "../../img/vibe8.png";


function VibesImg() {
 const vibesdata = [
    {
      image: vibe8,
      caption: ""
    },
    {
      image: vibe7,
      caption: ""
    },
    {
      image: vibe6,
      caption: ""
    }, 
    {
      image: vibe5,
      caption: ""
    },
    {
      image: vibe4,
      caption: ""
    },
    {
      image: vibe3,
      caption: ""
    },
    {
      image: vibe2,
      caption: ""
    },
   {
      image: vibe1,
      caption: ""
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
    <div className={styles.vibesApp}>
      <div style={{ textAlign: "center" }}>
        <h1>Feedback From My Team</h1>
        <p>Coworkers and Leaders</p>
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={vibesdata}
            time={10000}
            width="700px"
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
              maxWidth: "700px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default VibesImg;