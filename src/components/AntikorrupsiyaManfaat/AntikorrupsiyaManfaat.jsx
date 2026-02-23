import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./antikorrupsiya.css";
import { useTranslation } from "react-i18next";

// Import document files
import file5 from "../../assets/antikorrupsiya/manfaat/1-файл мавжуд манфаатлар тўқнашуви ҳақида хабарнома.docx";
import file6 from "../../assets/antikorrupsiya/manfaat/2-файл ходимнинг эҳтимолий манфаатлар тўқнашуви тўғрисидаги декларацияси.docx";
import file7 from "../../assets/antikorrupsiya/manfaat/3-файл алоқадар шахсларнинг эҳтимолий манфаатлар тўқнашуви тўғрисидаги декларацияси.docx";
import file8 from "../../assets/antikorrupsiya/manfaat/Коррупция қарши курашиш агентлиги директорининг 2024 йил 21 октябрдаги 65-сон буйруғи.pdf";
const AntikorrupsiyaManfaatPage = () => {
  const { t } = useTranslation();
  // Array for conflict of interest declaration forms
  const declarationForms = [
    {
      id: 1,
      name: "Mavjud manfaatlar toʻqnashuvi haqida xabarnoma.docx",
      file: file5,
    },
    {
      id: 2,
      name: "Xodimning ehtimoliy manfaatlar toʻqnashuvi toʻgʻrisidagi deklaratsiyasi.docx",
      file: file6,
    },
    {
      id: 3,
      name: "Aloqador shaxslarning ehtimoliy manfaatlar toʻqnashuvi toʻgʻrisidagi deklaratsiyasi.docx",
      file: file7,
    },
    {
      id: 4,
      name: "Korrupsiyaga qarshi kurashish agentligi direktorining 2024 yil 21 oktabrdagi 65-son buyrug'i.pdf",
      file: file8,
    },
  ];
  return (
    <div className="aboutContentBox">
      <Container>
        {/* New section for conflict of interest declarations */}
        <Row>
          <Col lg="12" md="12" sm="12">
            <div className="AboutContent">
              <h3 className="secondTitle" style={{ marginTop: "20px", }}>
                Mavjud manfaatlar toʻqnashuvi toʻgʻrisidagi xabarnoma, ehtimoliy
                manfaatlar toʻqnashuvi toʻgʻrisidagi deklaratsiyalar va
                manfaatlar toʻqnashuvini hisobga olish reyestrining
              </h3>
              <h5
                className="secondTitle"
                style={{ marginTop: "20px", textAlign: "center" }}
              >
                NAMUNAVIY SHAKLLARI
              </h5>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg="12" md="12" sm="12">
            <div className="text-content" style={{ marginBottom: "30px" }}>
              <p style={{ marginBottom: "15px" }}>
                <i>
                  Ushbu namunaviy shakllarda quyidagi asosiy tushunchalardan
                  foydalaniladi:
                </i>
              </p>
              <p style={{ marginBottom: "10px" }}>
                <strong>
                  davlat organining yoki boshqa tashkilotning xodimi
                </strong>{" "}
                (bundan buyon matnda xodim deb yuritiladi) – davlat organlarida
                va mahalliy davlat hokimiyati organlarida, davlat
                muassasalarida, davlat unitar korxonalarida, davlat maqsadli
                jamgʻarmalarida, shuningdek ustav fondida (ustav kapitalida)
                davlat ulushi 50 foiz miqdorda va undan ortiq boʻlgan
                aksiyadorlik jamiyatlarida mehnat shartnomasi (kontrakt) asosida
                yoxud saylab qoʻyiladigan yoki tayinlanadigan lavozimlarda
                mehnat (xizmat) faoliyatini amalga oshirayotgan boshqaruv
                xodimi;
              </p>
              <p style={{ marginBottom: "10px" }}>
                <strong>xodimga aloqador shaxslar</strong> (bundan buyon matnda
                aloqador shaxslar deb yuritiladi) – xodimning yaqin
                qarindoshlari hamda xodim va (yoki) uning yaqin qarindoshlari
                qaysi yuridik shaxsning ustav fondi (ustav kapitali)
                aksiyalariga yoki ulushlariga egalik qilsa yoxud unda boshqaruv
                organining rahbari yoki aʼzosi boʻlsa, oʻsha yuridik shaxs;
              </p>
              <p style={{ marginBottom: "10px" }}>
                <strong>manfaatlar toʻqnashuvi</strong> – shaxsning shaxsiy
                (bevosita yoki bilvosita) manfaatdorligi uning oʻz lavozim yoki
                xizmat majburiyatlarini lozim darajada bajarishiga taʼsir
                koʻrsatayotgan yoxud taʼsir koʻrsatishi mumkin boʻlgan hamda
                shaxsiy manfaatdorlik bilan fuqarolarning, tashkilotlarning,
                jamiyatning yoki davlatning huquqlari, qonuniy manfaatlari
                oʻrtasida qaramaqarshilik yuzaga kelayotgan (mavjud manfaatlar
                toʻqnashuvi) yoki yuzaga kelishi mumkin boʻlgan (ehtimoliy
                manfaatlar toʻqnashuvi) vaziyat;
              </p>
              <p style={{ marginBottom: "10px" }}>
                <strong>yaqin qarindoshlar</strong> – ota-onalar, aka-ukalar,
                opa-singillar, oʻgʻillar, qizlar, er-xotinlar, shuningdek
                er-xotinlarning ota-onalari, aka-ukalari, opa-singillari va
                farzandlari.
              </p>
              <i style={{ fontWeight: "300"}}>
                <p style={{ marginTop: "20px", marginBottom: "15px" }}>
                  <strong>*Izoh:</strong>
                </p>
                <p style={{ marginBottom: "15px" }}>
                  Mazkur namunaviy shakllar Oʻzbekiston Respublikasi
                  Korrupsiyaga qarshi kurashish agentligi direktorining 2024-yil
                  21-oktabrdagi 65-son buyrugʻi (Adliya vazirligida 2024-yil
                  5-noyabrda 3569-son bilan roʻyxatga olingan) bilan
                  tasdiqlangan.
                </p>
                <p style={{ marginBottom: "10px" }}>
                  <strong>
                    Davlat organining yoki boshqa tashkilotning xodimi
                  </strong>{" "}
                  mavjud manfaatlar toʻqnashuvi oʻziga maʼlum boʻlib qolgan
                  paytdan eʼtiboran <strong>bir ish kuni ichida</strong> mavjud{" "}
                  <u>
                    manfaatlar toʻqnashuvi haqidagi belgilangan shakldagi
                    xabarnomani
                  </u>{" "}
                  (1-fayl) toʻldirishi va oʻzining bevosita rahbariga (tashkilot
                  rahbariga — yuqori turuvchi rahbarga) yoki Davaktiv
                  agentligining Korrupsiyaga qarshi kurashish va komplaens
                  boʻlimi (markaz@davaktiv.uz elektron pochtasi orqali yoki
                  bevosita)ga taqdim etishi shart;
                </p>
                <p style={{ marginBottom: "10px" }}>
                  <strong>
                    Davlat organining yoki boshqa tashkilotning xodimi
                  </strong>{" "}
                  shaxsga doir maʼlumotlari oʻzgargan taqdirda,{" "}
                  <u>
                    ehtimoliy manfaatlar toʻqnashuvi toʻgʻrisidagi deklaratsiya
                  </u>{" "}
                  (2-fayl)ni toʻldirishi va
                  <strong>har yili 15-yanvardan kechiktirmay</strong>, davlat
                  organining yoki boshqa tashkilotning xodimligiga{" "}
                  <strong>nomzod ishga qabul qilinayotganda</strong> yoxud{" "}
                  <strong>
                    davlat organi yoki boshqa tashkilot xodimi boshqa ishga
                    oʻtkazilayotganda
                  </strong>
                  ,{" "}
                  <u>
                    ehtimoliy manfaatlar toʻqnashuvi toʻgʻrisidagi deklaratsiya
                  </u>{" "}
                  (2-fayl)ni Davaktiv agentligining Korrupsiyaga qarshi
                  kurashish va komplaens boʻlimi (markaz@davaktiv.uz elektron
                  pochtasi orqali yoki bevosita)ga taqdim etishi kerak;
                </p>
                <p style={{ marginBottom: "10px" }}>
                  <strong>Xodimga aloqador shaxslar</strong> ehtimoliy
                  manfaatlar toʻqnashuvi toʻgʻrisidagi deklaratsiya (3-fayl)ni
                  Davaktiv agentligining Korrupsiyaga qarshi kurashish va
                  komplaens boʻlimi (markaz@davaktiv.uz elektron pochtasi orqali
                  yoki bevosita)ga taqdim etadi.
                </p>
              </i>
            </div>
          </Col>
        </Row>

        {/* Files as simple links */}
        <Row>
          <Col lg="12" md="12" sm="12">
            <div
              className="files-list"
              style={{ marginBottom: "100px", padding: "0 15px" }}
            >
              {declarationForms.map((file, index) => (
                <div
                  key={file.id}
                  style={{
                    color: "#0142EC",
                    marginBottom: "15px",
                    fontSize: "18px",
                  }}
                >
                  {file.id}.{" "}
                  <a
                    href={file.file}
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    {file.name}
                  </a>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AntikorrupsiyaManfaatPage;
