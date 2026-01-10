import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./antikorrup_media.css";
import { useTranslation } from "react-i18next";

// Import video files
import video1 from "../../assets/antikorrupsiya/media/davlat_aktivlari.mp4";
import video2 from "../../assets/antikorrupsiya/media/jizzax.webm";
import video3 from "../../assets/antikorrupsiya/media/navoiy.webm";

const Antikorrup_mediaPage = () => {
  const { t } = useTranslation();

  // Array of videos with their display names and local paths
  const videos = [
    {
      id: 1,
      name: "Davlat aktivlaridan foydalanish va ularni boshqarish tizimida islohotlar",
      videoUrl: video1,
      thumbnail: "../../assets/antikorrupsiya/thumbnails/thumb1.jpg",
    },
    {
      id: 2,
      name: "Anvar Tog’ayev- Davlat mulki obektlaridan samarali foydalanish markazining Jizzax viloyat hududiy boshqarmasi boshlig’i o’rinbosari",
      videoUrl: video2,
      thumbnail: "../../assets/antikorrupsiya/thumbnails/thumb2.jpg",
    },
    {
      id: 3,
      name: "Davlat mulki: rivoj va bandlik manbai!",
      videoUrl: video3,
      thumbnail: "../../assets/antikorrupsiya/thumbnails/thumb3.jpg",
    },
  ];

  return (
    <div className="aboutContentBox">
      <Container>
        <Row>
          <Col lg="12" md="12" sm="12">
            <div className="AboutContent">
              <h3 className="secondTitle">{t("Antikorrupsiya.mediaTitle")}</h3>
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          {videos.map((video) => (
            <Col lg="6" md="6" sm="12" key={video.id} className="mb-4">
              <div className="video-card">
                <div className="video-wrapper">
                  <video
                    className="video-player"
                    controls
                    controlsList="nodownload"
                    preload="metadata"
                  >
                    <source src={video.videoUrl} type="video/mp4" />
                    Sizning brauzeringiz video qo'llab-quvvatlamaydi.
                  </video>
                </div>
                <div className="video-info">
                  <h5 className="video-title">{video.name}</h5>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Antikorrup_mediaPage;
