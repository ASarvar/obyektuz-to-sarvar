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
import file14 from "../../assets/antikorrupsiya/Buyruq.pdf";
import file15 from "../../assets/antikorrupsiya/1-ilova. Сиёсат.pdf";
import file16 from "../../assets/antikorrupsiya/2-ilova. Хавфларни баҳолаш услубиёти.pdf";
import file17 from "../../assets/antikorrupsiya/3-ilova. Алоқа каналлар.pdf";
import file18 from "../../assets/antikorrupsiya/4-ilova. ўқитиш.pdf";
import file19 from "../../assets/antikorrupsiya/5-ilova. Контрагентларни текшириш.pdf";
import file20 from "../../assets/antikorrupsiya/6-ilova. Номзодларни текшириш.pdf";
import file21 from "../../assets/antikorrupsiya/7-ilova. Мониторинг ва назорат.pdf";
import file22 from "../../assets/antikorrupsiya/8-ilova. Ҳисоботларни тақдим қилиш.pdf";
import file23 from "../../assets/antikorrupsiya/9-ilova. Манфаатлар тўқнашуви.pdf";
import file24 from "../../assets/antikorrupsiya/10-ilova. sovg'alar.pdf";
import file25 from "../../assets/antikorrupsiya/11-ilova. Рағбатлантириш.pdf";
import file26 from "../../assets/antikorrupsiya/12-ilova. харид тартиб-таомили.pdf";

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
    { id: 14, name: "Ichki idoraviy hujjatlarini tasdiqlash toʻgʻrisida buyruq", file: file14 },
    { id: 15, name: "1-ilova. Korrupsiyaga qarshi kurashish siyosati", file: file15 },
    { id: 16, name: "2-ilova. Korrupsiyaviy xavf-xatarlarni baholash uslubiyoti", file: file16 },
    { id: 17, name: "3-ilova. Korrupsiyaviy xatti-harakatlar toʻgʻrisida kelib tushgan xabarlarni qabul qilish va koʻrib chiqish reglamenti", file: file17 },
    { id: 18, name: "4-ilova. Xodimlarning korrupsiyaga qarshi kurashish sohasida oʻqitilishini tashkil qilish boʻyicha yo'riqnoma", file: file18 },
    { id: 19, name: "5-ilova. Agentlikda kontragentlarni tekshirishga oid yo'riqnoma", file: file19 },
    { id: 20, name: "6-ilova. Agentlik tizimida ishga qabul qilinayotgan nomzodlarni tekshirish boʻyicha yo'riqnoma", file: file20 },
    { id: 21, name: "7-ilova. Agentlik tizimida korrupsiyaga qarshi kurashish samaradorligini monitoring va nazorat qilish uslubiyoti", file: file21 },
    { id: 22, name: "8-ilova. Agentlikda korrupsiyaga qarshi kurash tizimining holati haqidagi hisobotni shakllantirish va taqdim etish reglamenti", file: file22 },
    { id: 23, name: "9-ilova. Agentlik tizimida manfaatlar toʻqnashuvini boshqarish toʻgʻrisida nizom", file: file23 },
    { id: 24, name: "10-ilova. Agentlik tizimida xizmat safarlari, xalqaro va boshqa rasmiy tadbirlar munosabati bilan olinishi mumkin boʻlgan sovgʻa qiymati, shuningdek uni tasarruf etish tartibi toʻgʻrisidagi nizom", file: file24 },
    { id: 25, name: "11-ilova. Agentlikda korrupsiyaga oid huquqbuzarlik va manfaatlar toʻqnashuvi haqida xabar bergan yoki korrupsiyaga qarshi kurashishda boshqacha tarzda koʻmaklashgan xodimlarni ragʻbatlantirish tartibi toʻgʻrisidagi nizom", file: file25 },
    { id: 26, name: "12-ilova. Davlat xaridlarini amalga oshirish bilan bogʻliq tartib-taomillarni tashkil etish va oʻtkazish tartibi toʻgʻrisidagi nizom", file: file26 },
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
