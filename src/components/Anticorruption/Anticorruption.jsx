import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./anticorruption.css";
import { useTranslation } from "react-i18next";

const AnticorruptionPage = () => {
  const { t } = useTranslation();
 
  return (
    <div className="aboutContentBox">
      <Container>
        <Row>
          <Col lg="12" md="12" sm="12">
            <div className="AboutContent">
              <h3 className="secondTitle">{t("Anticorruption.Title")}</h3>
            </div>
          </Col>
        </Row>
        <Row className="str-chart">
          <Col lg="12" md="12" sm="12">
            <div className="anticorruption-content">
              <div className="content-section">
                <h4>{t("Anticorruption.LegalFramework")}</h4>
                <p>{t("Anticorruption.LegalFrameworkDesc")}</p>
              </div>
              
              <div className="content-section">
                <h4>{t("Anticorruption.Prevention")}</h4>
                <ul>
                  <li>{t("Anticorruption.PreventionItem1")}</li>
                  <li>{t("Anticorruption.PreventionItem2")}</li>
                  <li>{t("Anticorruption.PreventionItem3")}</li>
                  <li>{t("Anticorruption.PreventionItem4")}</li>
                </ul>
              </div>

              <div className="content-section">
                <h4>{t("Anticorruption.Reporting")}</h4>
                <p>{t("Anticorruption.ReportingDesc")}</p>
                <div className="contact-info">
                  <p><strong>{t("Anticorruption.Hotline")}</strong> <a href="tel:+998712592114">+998 (71) 259-21-14</a></p>
                  <p><strong>{t("Anticorruption.Email")}</strong> <a href="mailto:info@obyekt.uz">info@obyekt.uz</a></p>
                </div>
              </div>

              <div className="content-section">
                <h4>{t("Anticorruption.Documents")}</h4>
                <div className="documents-list">
                  <div className="document-item">
                    <span className="document-title">{t("Anticorruption.AnticorruptionLaw")}</span>
                    <span className="document-desc">{t("Anticorruption.AnticorruptionLawDesc")}</span>
                  </div>
                  <div className="document-item">
                    <span className="document-title">{t("Anticorruption.CodeOfEthics")}</span>
                    <span className="document-desc">{t("Anticorruption.CodeOfEthicsDesc")}</span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AnticorruptionPage;
