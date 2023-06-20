import { Carousel } from 'react-carousel-minimal';
import styles from "./Carousel.module.css";

function Aboutimg() {
 const data = [
    {
      image: "https://cdn.discordapp.com/attachments/823623035428536350/1120702620743503902/07.jpg",
      caption: `<div>
                  Lagoa Santa - Brazil
                  <br/>
                  My Students of software applied in logistics management
                </div>`
    },
    {
      image: "https://cdn.discordapp.com/attachments/823623035428536350/1120702618747027516/01.jpg",
      caption: `<div>
                  Belo Horizonte - Brazil
                  <br/>
                  Officer Heimar and his beautiful family
                </div>`
    },
    {
      image: "https://cdn.discordapp.com/attachments/823623035428536350/1120702619086749756/02.jpg",
      caption: `<div>
                  Rio de Janeiro - Brazil
                  <br/>
                  Friends at the Logistics Division of the Brazilian Air Force
                </div>`
    },
    {
      image: "https://cdn.discordapp.com/attachments/823623035428536350/1120702619636207689/04.jpg",
      caption: `<div>
                  São José dos Campos - Brazil
                  <br/>
                  Pilot and Engineer Friends
                </div>`
    },
    {
      image: "https://cdn.discordapp.com/attachments/823623035428536350/1120702619879473242/05.jpg",
      caption: `<div>
      Varginha - Brazil
                  <br/>
                  Family and New Family Members
                </div>`
    },
    {
      image: "https://cdn.discordapp.com/attachments/823623035428536350/1120702619359395920/03.jpg",
      caption: `<div>
                  Rio de Janeiro - Brazil
                  <br/>
                  Friends at the Logistics Division of the Brazilian Air Force
                </div>`
    },
    {
      image: "https://cdn.discordapp.com/attachments/823623035428536350/1120702621011935332/08.jpg",
      caption: `<div>
                  Rio de Janeiro - Brazil
                  <br/>
                  Partner in the Logistical Software Development Project
                </div>`
    },
    {
      image: "https://cdn.discordapp.com/attachments/823623035428536350/1120702621234249828/09.jpg",
      caption: `<div>
                  São Paulo - Brazil
                  <br/>
                  Friends of Air Force Procurement Planning
                </div>`
    },
    {
      image: "https://cdn.discordapp.com/attachments/823623035428536350/1120702621485895701/10.jpg",
      caption: `<div>
                  Rio de Janeiro - Brazil
                  <br/>
                  Friends Sergeants of the Logistics Division
                </div>`
    },
    {
      image: "https://cdn.discordapp.com/attachments/823623035428536350/1120702670278242314/11.jpg",
      caption: `<div>
                  Curitiba - Brazil
                  <br/>
                  Officer Diogenes and his beautiful family
                </div>`
    },
    {
      image: "https://cdn.discordapp.com/attachments/823623035428536350/1120710925415096461/BB.jpg",
      caption: `<div>
                  My Partner
                  <br/>
                  The One Who Supports All my Professional and Personal Projects
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