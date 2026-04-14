import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useLang } from "../../context/language";
import { mockNewsData } from "./mockNewsData";
import "./news.css";

const NewsSingleMock = () => {
  const { id } = useParams();
  const [lang] = useLang();

  const item = mockNewsData.find((news) => news.id === id);

  if (!item) {
    return (
      <div className="newsContent">
        <Container>
          <div className="newsState newsStateError">Yangilik topilmadi.</div>
        </Container>
      </div>
    );
  }

  const title = lang === "uz" ? item.title : item.titleRu || item.title;
  const content = lang === "uz" ? item.content : item.contentRu || item.content;

  return (
    <div className="newsContent">
      <Container>
        <div className="newsSingleWrap">
          <h2 className="newsSingleTitle">{title}</h2>
          

          {item.image && (
            <img src={item.image} alt={title} className="newsSingleImage" />
          )}

          {item.extraImages && item.extraImages.length >= 1 && (
            <Row className="g-3 mb-3">
              {item.extraImages.map((img, index) => (
                <Col md={6} key={index}>
                  <img src={img} alt={`${title} ${index + 1}`} className="newsSingleImage" />
                </Col>
              ))}
            </Row>
          )}

          <div
            className="newsSingleContent"
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <div className="newsSingleDate">{new Date(item.createdAt).toLocaleDateString()}</div>
        </div>
      </Container>
    </div>
  );
};

export default NewsSingleMock;
