import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./antikorrupsiya.css";
import { useTranslation } from "react-i18next";

// Import document files
import file1 from "../../assets/antikorrupsiya/Aloqa kanallari orqali korrupsiyaviy xatti-harakatlar to‘g‘risida kelib tushgan.docx";
import file2 from "../../assets/antikorrupsiya/Davlat xaridlarini o‘tkazish to‘g‘risida nizom.docx";
import file3 from "../../assets/antikorrupsiya/Ishga qabul qilinayotgan nomzodlarni tekshirish bo‘yicha yo‘riqnoma.doc";
import file4 from "../../assets/antikorrupsiya/Kontragentlarni tekshirishga oid yo‘riqnoma.doc";
import file5 from "../../assets/antikorrupsiya/Korrupsiyaga qarshi kurashish bo‘yicha ichki idoraviy hujjatlarni tasdiqlash BUYRUQ.pdf";
import file6 from "../../assets/antikorrupsiya/Korrupsiyaga qarshi kurashish samaradorligini monitoring va nazorat qilish.doc";
import file7 from "../../assets/antikorrupsiya/Korrupsiyaga qarshi kurashish siyosati.docx";
import file8 from "../../assets/antikorrupsiya/Korrupsiyaga qarshi kurashish tizimining holati haqidagi hisobotni.docx";
import file9 from "../../assets/antikorrupsiya/Korrupsiyaviy xavf-xatarlarni baholash uslubiyoti.doc";
import file10 from "../../assets/antikorrupsiya/Manfaatlar to‘qnashuvini boshqarish bo‘yicha nizom.doc";
import file11 from "../../assets/antikorrupsiya/Markaziy apparat va hududiy boshqarmalar xodimlariga nisbatan  xizmat tekahiruvlarini tayinlash va otkazish togrisida nizom.pdf";
import file12 from "../../assets/antikorrupsiya/Xodimlarining korrupsiyaga qarshi kurashish sohasida o‘qitilishini tashkil.doc";
import file13 from "../../assets/antikorrupsiya/Xodimlarining odob-axloq qoidalari.doc";

const AntikorrupsiyaPage = () => {
  const { t } = useTranslation();

  // Array of files with their display names and imports
  const files = [
    {
      id: 1,
      name: "Aloqa kanallari orqali korrupsiyaviy xatti-harakatlar to'g'risida kelib tushgan xabarlarni qabul qilish va ko‘rib chiqish reglamenti",
      file: file1,
    },
    {
      id: 2,
      name: "Davlat xaridlarini o'tkazish to'g'risida nizom",
      file: file2,
    },
    {
      id: 3,
      name: "Ishga qabul qilinayotgan nomzodlarni tekshirish bo'yicha yo'riqnoma",
      file: file3,
    },
    { id: 4, name: "Kontragentlarni tekshirishga oid yo'riqnoma", file: file4 },
    {
      id: 5,
      name: "Korrupsiyaga qarshi kurashish bo'yicha ichki idoraviy hujjatlarni tasdiqlash to'g'risida buyruq",
      file: file5,
    },
    {
      id: 6,
      name: "Korrupsiyaga qarshi kurashish samaradorligini monitoring va nazorat qilish",
      file: file6,
    },
    { id: 7, name: "Korrupsiyaga qarshi kurashish siyosati", file: file7 },
    {
      id: 8,
      name: "Korrupsiyaga qarshi kurashish tizimining holati haqidagi hisobot",
      file: file8,
    },
    {
      id: 9,
      name: "Korrupsiyaviy xavf-xatarlarni baholash uslubiyoti",
      file: file9,
    },
    {
      id: 10,
      name: "Manfaatlar to'qnashuvini boshqarish bo'yicha nizom",
      file: file10,
    },
    {
      id: 11,
      name: "Markaziy apparat va hududiy boshqarmalar xodimlariga nisbatan xizmat tekshiruvlarini tayinlash va o'tkazish to'g'risida nizom",
      file: file11,
    },
    {
      id: 12,
      name: "Xodimlarning korrupsiyaga qarshi kurashish sohasida o'qitilishini tashkil etish",
      file: file12,
    },
    { id: 13, name: "Xodimlarning odob-axloq qoidalari", file: file13 },
  ];

  return (
    <div className="aboutContentBox">
      <Container>
        <Row>
          <Col lg="12" md="12" sm="12">
            <div className="AboutContent">
              <h3 className="secondTitle">{t("Antikorrupsiya.Title")}</h3>
            </div>
          </Col>
        </Row>
        <table className="table table-sm">
          <thead>
            <tr>
              <td className="first">№</td>
              <td style={{ width: "60%" }}>Nomi</td>
              <td style={{ width: "33.33%", textAlign: "center" }}>Fayl</td>
            </tr>
          </thead>
          <tbody>
            {files.map((file, index) => (
              <tr key={file.id} className={index % 2 === 1 ? "bgtr" : ""}>
                <td>
                  <p className="first">{file.id}</p>
                </td>
                <td style={{ width: "60%" }}>{file.name}</td>
                <td style={{ width: "33.33%", textAlign: "center" }}>
                  <a href={file.file} target="_blank" rel="noreferrer">
                    Yuklab olish
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </div>
  );
};

export default AntikorrupsiyaPage;
