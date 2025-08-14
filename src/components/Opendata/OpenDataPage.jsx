import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Opendata.css";
import { useTranslation } from "react-i18next";

//1, 2, 3. Davlat mulki obyektlaridan samarali foydalanish markazi xarajatlar smetasining ijrosi bo‘yicha maʼlumotlar
// 1-chorak
import data11 from "../../assets/opendata/Марказнинг бюджетдан ташкари маблаглари ижроси 1 кв.xlsx";
import data12 from "../../assets/opendata/Марказнинг ривожлантириш жамгармаси ижроси  1 кв.xlsx";
import data13 from "../../assets/opendata/Бюджет маблаглари ижроси хисоботи 2 шакл 1 кв.xlsx";
// 2-chorak
import data21 from "../../assets/opendata/Марказнинг бюджетдан ташкари маблаглари ижроси 2 кв.xlsx";
import data22 from "../../assets/opendata/Марказнинг ривожлантириш жамгармаси ижроси  2 кв.xlsx";
import data23 from "../../assets/opendata/Бюджет маблаглари ижроси хисоботи 2 шакл 2 кв.xlsx";
// 3-chorak
import data31 from "../../assets/opendata/23-3/2. Давлат объектларидан фойдаланиш маркази Бюджетдан ташкари маблаглари ижроси 3 кв.xlsx";
import data32 from "../../assets/opendata/23-3/3. Давлат объектларидан фойдаланиш маркази Ривожлантириш жамгармаси ижроси  3 кв.xlsx";
import data33 from "../../assets/opendata/23-3/1. Давлат объектларидан фойдаланиш маркази Бюджет маблаглари ижроси 2 шакл 3 кв.xlsx";

// 4-chorak
import data141 from "../../assets/opendata/23-4/2. Давлат объектларидан фойдаланиш маркази Бюджетдан ташкари маблаглари ижроси 4 кв.xlsx";
import data142 from "../../assets/opendata/23-4/3. Давлат объектларидан фойдаланиш маркази Ривожлантириш жамгармаси ижроси  4 кв.xlsx";
import data143 from "../../assets/opendata/23-4/1. Давлат объектларидан фойдаланиш маркази Бюджет маблаглари ижроси 2 шакл 4 кв.xlsx";

//2024
// 1-chorak
import data2411 from "../../assets/opendata/24-1/1_Давлат_объектларидан_фойдаланиш_маркази_Бюджет_маблаглари_ижроси.xlsx";
import data2412 from "../../assets/opendata/24-1/2_Давлат_объектларидан_фойдаланиш_маркази_Бюджетдан_ташкари_маблаглари.xlsx";
import data2413 from "../../assets/opendata/24-1/3_Давлат_объектларидан_фойдаланиш_маркази_Ривожлантириш_жамгармаси.xlsx";
// 2-chorak
import data2421 from "../../assets/opendata/24-2/1_Давлат_объектларидан_фойдаланиш_маркази_Бюджет_маблаглари_ижроси.xlsx";
import data2422 from "../../assets/opendata/24-2/2_Давлат_объектларидан_фойдаланиш_маркази_Бюджетдан_ташкари_маблаглари.xlsx";
import data2423 from "../../assets/opendata/24-2/3_Давлат_объектларидан_фойдаланиш_маркази_Ривожлантириш_жамгармаси.xlsx";
// 3-chorak
import data2431 from "../../assets/opendata/24-3/1_Давлат_объектларидан_фойдаланиш_маркази_Бюджет_маблаглари_ижроси.xlsx";
import data2432 from "../../assets/opendata/24-3/2_Давлат_объектларидан_фойдаланиш_маркази_Бюджетдан_ташкари_маблаглари.xlsx";
import data2433 from "../../assets/opendata/24-3/3_Давлат_объектларидан_фойдаланиш_маркази_Ривожлантириш_жамгармаси.xlsx";

// 4-chorak
import data24_41 from "../../assets/opendata/24-4/1_Давлат_объектларидан_фойдаланиш_маркази_Бюджет_маблаглари_ижроси.xlsx";
import data24_42 from "../../assets/opendata/24-4/2_Давлат_объектларидан_фойдаланиш_маркази_Бюджетдан_ташкари_маблаглари.xlsx";
import data24_43 from "../../assets/opendata/24-4/3_Давлат_объектларидан_фойдаланиш_маркази_Ривожлантириш_жамгармаси.xlsx";

//2025
// 1-chorak
import data2511 from "../../assets/opendata/25-1/1_Давлат_объектларидан_фойдаланиш_маркази_Бюджет_маблаглари_ижроси.xlsx";
import data2512 from "../../assets/opendata/25-1/2_Давлат_объектларидан_фойдаланиш_маркази_Бюджетдан_ташкари_маблаглари.xlsx";
import data2513 from "../../assets/opendata/25-1/3_Давлат_объектларидан_фойдаланиш_маркази_Ривожлантириш_жамгармаси.xlsx";

// 2-chorak
import data2521 from "../../assets/opendata/25-2/1_Давлат_объектларидан_фойдаланиш_маркази_Бюджет_маблаглари_ижроси.xlsx";
import data2522 from "../../assets/opendata/25-2/2_Давлат_объектларидан_фойдаланиш_маркази_Бюджетдан_ташкари_маблаглари.xlsx";
import data2523 from "../../assets/opendata/25-2/3_Давлат_объектларидан_фойдаланиш_маркази_Ривожлантириш_жамгармаси.xlsx";


//4. Byudjet jarayonining ochiqligini taʼminlash maqsadida veb-saytlarga maʼlumotlarni joylashtirish tartibiga (ro‘yxat raqami -3299) muvofiq maʼlumotlar
// 2-3-4-chorak
import data4 from "../../assets/opendata/1-14 иловалар (2-чорак) Марказ.xlsx";
import data43 from "../../assets/opendata/23-3/4. Давлат объектларидан фойдаланиш маркази 1-14 иловалар (3-кв).xlsx";
import data44 from "../../assets/opendata/23-4/4. Давлат объектларидан фойдаланиш маркази 1-14 иловалар (4-кв).xlsx";

//2024
import data2441 from "../../assets/opendata/24-1/4_Давлат_объектларидан_фойдаланиш_маркази_1_14_иловалар_2024_1_кв.xlsx";
import data2442 from "../../assets/opendata/24-2/4_Давлат_объектларидан_фойдаланиш_маркази_1_14_иловалар_2024_2_кв.xlsx";
import data2443 from "../../assets/opendata/24-3/4_Давлат_объектларидан_фойдаланиш_маркази_1_14_иловалар_2024_3_кв.xlsx";
import data2444 from "../../assets/opendata/24-4/4_Давлат_объектларидан_фойдаланиш_маркази_1_14_иловалар_2024_4_кв.xlsx";

//2025
import data2541 from "../../assets/opendata/25-1/4_Давлат_объектларидан_фойдаланиш_маркази_1_14_иловалар_2025_1_кв.xlsx";
import data2542 from "../../assets/opendata/25-2/4_Давлат_объектларидан_фойдаланиш_маркази_1_14_иловалар_2025_2_кв.xlsx";

//5. Davlat mulki obyektlaridan samarali foydalanish markazi | Balans
// 1-2-3-4-chorak
import data51 from "../../assets/opendata/Баланс 1 кв 2023.xlsx";
import data52 from "../../assets/opendata/Баланс 2 кв 2023.xlsx";
import data53 from "../../assets/opendata/23-3/5. Давлат объектларидан фойдаланиш маркази Баланс 3 кв 2023.xlsx";
import data54 from "../../assets/opendata/23-4/5. Давлат объектларидан фойдаланиш маркази Баланс 4 кв 2023.xlsx";

// 2024
import data2451 from "../../assets/opendata/24-1/5_Давлат_объектларидан_фойдаланиш_маркази_Баланс_2024_1_кв.xlsx";
import data2452 from "../../assets/opendata/24-2/5_Давлат_объектларидан_фойдаланиш_маркази_Баланс_2024_2_кв.xlsx";
import data2453 from "../../assets/opendata/24-3/5_Давлат_объектларидан_фойдаланиш_маркази_Баланс_2024_3_кв.xlsx";
import data2454 from "../../assets/opendata/24-4/5_Давлат_объектларидан_фойдаланиш_маркази_Баланс_2024_4_кв.xlsx";

// 2025
import data2551 from "../../assets/opendata/25-1/5_Давлат_объектларидан_фойдаланиш_маркази_Баланс_2025_1_кв.xlsx";
import data2552 from "../../assets/opendata/25-2/5_Давлат_объектларидан_фойдаланиш_маркази_Баланс_2025_2_кв.xlsx";

//6. Davlat mulki obyektlaridan samarali foydalanish markazining debitor va kreditor qarzdorliklari yuzasidan maʼlumotlar
// 1-2-3-4-chorak
import data61 from "../../assets/opendata/Дебиторлик кредиторлик карздорлик тугрисида маълумот 1 кв 2023.xlsx";
import data62 from "../../assets/opendata/Дебиторлик кредиторлик карздорлик тугрисида маълумот 2 кв 2023.xlsx";
import data63 from "../../assets/opendata/23-3/6. Давлат объектларидан фойдаланиш маркази Деб Кред карздорлик 3 кв 2023.xlsx";
import data64 from "../../assets/opendata/23-4/6. Давлат объектларидан фойдаланиш маркази Деб Кред карздорлик 4 кв 2023.xlsx";

// 2024
import data2461 from "../../assets/opendata/24-1/6_Давлат_объектларидан_фойдаланиш_маркази_Деб_Кред_карздорлик_2024.xlsx";
import data2462 from "../../assets/opendata/24-2/6_Давлат_объектларидан_фойдаланиш_маркази_Деб_Кред_карздорлик_2024.xlsx";
import data2463 from "../../assets/opendata/24-3/6_Давлат_объектларидан_фойдаланиш_маркази_Деб_Кред_карздорлик_2024.xlsx";
import data2464 from "../../assets/opendata/24-4/6_Давлат_объектларидан_фойдаланиш_маркази_Деб_Кред_карздорлик_2024.xlsx";

// 2025
import data2561 from "../../assets/opendata/25-1/6_Давлат_объектларидан_фойдаланиш_маркази_Деб_Кред_карздорлик_2025.xlsx";
import data2562 from "../../assets/opendata/25-2/6_Давлат_объектларидан_фойдаланиш_маркази_Деб_Кред_карздорлик_2025.xlsx";

//7. Vazirlik va idoralar, boshqaruv organlari va boshqa tashkilotlar bo‘yicha tarmoq, shtatlar va kontingentga doir rejaning bajarilishi (byudjet mablag‘lari bo‘yicha) to‘g‘risida
// 1-2-3-4-chorak
import data71 from "../../assets/opendata/Сеть отчёт 1 кв.xlsx";
import data73 from "../../assets/opendata/23-3/7. Давлат объектларидан фойдаланиш маркази Сеть отчёт 3 кв.xlsx";
import data74 from "../../assets/opendata/23-4/7. Давлат объектларидан фойдаланиш маркази Сеть отчёт 4 кв.xlsx";
// 2024
import data2471 from "../../assets/opendata/24-1/7_Давлат_объектларидан_фойдаланиш_маркази_Сеть_отчёт_2024_1_кв.xlsx";
import data2472 from "../../assets/opendata/24-2/7_Давлат_объектларидан_фойдаланиш_маркази_Сеть_отчёт_2024_2_кв.xlsx";
import data2473 from "../../assets/opendata/24-3/7_Давлат_объектларидан_фойдаланиш_маркази_Сеть_отчёт_2024_3_кв.xlsx";
import data2474 from "../../assets/opendata/24-4/7_Давлат_объектларидан_фойдаланиш_маркази_Сеть_отчёт_2024_4_кв.xlsx";

// 2025
import data2571 from "../../assets/opendata/25-1/7_Давлат_объектларидан_фойдаланиш_маркази_Сеть_отчёт_2025_1_кв.xlsx";
import data2572 from "../../assets/opendata/25-2/7_Давлат_объектларидан_фойдаланиш_маркази_Сеть_отчёт_2025_2_кв.xlsx";

//8. Davlat mulki obyektlaridan samarali foydalanish markazining byudjet va byudjetdan tashqari mablag‘lari hisobiga amalga oshirilgan davlat xaridlari to‘g‘risida maʼlumot
// 2-3-4-chorak
import data82 from "../../assets/opendata/Давлат харидлари 2 кв 2023.xlsx";
import data83 from "../../assets/opendata/23-3/8. Давлат объектларидан фойдаланиш маркази Давлат харидлари 3 кв 2023.xlsx";
import data84 from "../../assets/opendata/23-4/8. Давлат объектларидан фойдаланиш маркази Давлат харидлари 4 кв 2023.xlsx";
// 2024
import data2481 from "../../assets/opendata/24-1/8_Давлат_объектларидан_фойдаланиш_маркази_Давлат_харидлари_2024.xlsx";
import data2482 from "../../assets/opendata/24-2/8_Давлат_объектларидан_фойдаланиш_маркази_Давлат_харидлари_2024.xlsx";
import data2483 from "../../assets/opendata/24-3/8_Давлат_объектларидан_фойдаланиш_маркази_Давлат_харидлари_2024.xlsx";
import data2484 from "../../assets/opendata/24-4/8_Давлат_объектларидан_фойдаланиш_маркази_Давлат_харидлари_2024.xlsx";

// 2025
import data2581 from "../../assets/opendata/25-1/8_Давлат_объектларидан_фойдаланиш_маркази_Давлат_харидлари_2025.xlsx";
import data2582 from "../../assets/opendata/25-2/8_Давлат_объектларидан_фойдаланиш_маркази_Давлат_харидлари_2025.xlsx";

//9. Davlat mulki obyektlaridan samarali foydalanish markazining xodimlarining xizmat safari xarajatlari to‘g‘risida maʼlumot
// 1-2-3-4-chorak
import data9 from "../../assets/opendata/Командировка  январь-июнь 2023 г.xlsx";
import data93 from "../../assets/opendata/23-3/9. Давлат объектларидан фойдаланиш маркази Командировка  январь-сентябрь 2023 г.xlsx";
import data94 from "../../assets/opendata/23-4/9_Давлат_объектларидан_фойдаланиш_маркази_Командировка_январь_декабрь.xlsx";
// 2024
import data2491 from "../../assets/opendata/24-1/9_Давлат_объектларидан_фойдаланиш_маркази_Командировка_2024_1_кв.xlsx";
import data2492 from "../../assets/opendata/24-2/9_Давлат_объектларидан_фойдаланиш_маркази_Командировка_2024_2_кв.xlsx";
import data2493 from "../../assets/opendata/24-3/9_Давлат_объектларидан_фойдаланиш_маркази_Командировка_2024_3_кв.xlsx";
import data2494 from "../../assets/opendata/24-4/9_Давлат_объектларидан_фойдаланиш_маркази_Командировка_2024_4_кв.xlsx";
// 2025
import data2591 from "../../assets/opendata/25-1/9_Давлат_объектларидан_фойдаланиш_маркази_Командировка_2025_1_кв.xlsx";
import data2592 from "../../assets/opendata/25-2/9_Давлат_объектларидан_фойдаланиш_маркази_Командировка_2025_2_кв.xlsx";
// import data94 from "../../assets/opendata/23-4/9_Давлат_объектларидан_фойдаланиш_маркази_Командировка_январь_декабрь.xlsx";

//Davlat mulki obyektlaridan samarali foydalanish markazining davlat byudjeti, davlat maqsadli jamg‘armalari hamda byudjet tashkilotlarining byudjetdan tashqari jamg‘armalari hisobiga xarid qilinishi rejalashtirilgan tovarlar (ishlar, xizmatlar) to‘g‘risidagi maʼlumot
// 3-4-chorak
//2024-1-chorak
import data10 from "../../assets/opendata/Харидлар режаси 3 кв 2023.xlsx";
import data103 from "../../assets/opendata/23-3/10. Давлат объектларидан фойдаланиш маркази Харидлар режаси 4 кв 2023.xlsx";
//2024
import data24101 from "../../assets/opendata/24-1/10_Давлат_объектларидан_фойдаланиш_маркази_Харидлар_режаси_2024.xlsx";
import data24102 from "../../assets/opendata/24-2/10_Давлат_объектларидан_фойдаланиш_маркази_Харидлар_режаси_2024.xlsx";
import data24103 from "../../assets/opendata/24-3/10_Давлат_объектларидан_фойдаланиш_маркази_Харидлар_режаси_2024.xlsx";
import data24104 from "../../assets/opendata/24-4/10_Давлат_объектларидан_фойдаланиш_маркази_Харидлар_режаси_2025.xlsx";

//2025
import data25101 from "../../assets/opendata/25-1/10_Давлат_объектларидан_фойдаланиш_маркази_Харидлар_режаси_2025.xlsx";
import data25102 from "../../assets/opendata/25-2/10_Давлат_объектларидан_фойдаланиш_маркази_Харидлар_режаси_2025.xlsx";

//O‘zbekiston Respublikasi Davlat aktivlarini boshqarish agentligi huzuridagi davlat mulki obyektlaridan samarali foydalanish Markaziga tegishli xizmat avtotransport holati to‘g‘risida maʼlumot
//2024
import data24111 from "../../assets/opendata/24-1/11_Давлат_объектларидан_фойдаланиш_Маркази_Хизмат_автотранспорт.xlsx";
import data24112 from "../../assets/opendata/24-2/11_Давлат_объектларидан_фойдаланиш_Маркази_Хизмат_автотранспорт.xlsx";
import data24113 from "../../assets/opendata/24-3/11_Давлат_объектларидан_фойдаланиш_Маркази_Хизмат_автотранспорт.xlsx";
import data24114 from "../../assets/opendata/24-4/11_Давлат_объектларидан_фойдаланиш_Маркази_Хизмат_автотранспорт.xlsx";

//2025
import data25111 from "../../assets/opendata/25-1/11_Давлат_объектларидан_фойдаланиш_Маркази_Хизмат_автотранспорт.xlsx";
import data25112 from "../../assets/opendata/25-2/11_Давлат_объектларидан_фойдаланиш_Маркази_Хизмат_автотранспорт.xlsx";

const OpenDataPage = () => {
  const { t } = useTranslation();

  return (
    <div className="aboutContentBox">
      <Container>
        <Row>
          <Col lg="12" md="12" sm="12">
            <div className="AboutContent">
              <h3 className="secondTitle">{t("Opendata.Title")}</h3>
            </div>
          </Col>
        </Row>
        <Row className="str-chart"></Row>
        <Row>
          <p className="title1">
            {" "}
            Davlat mulki obyektlaridan samarali foydalanish markazi xarajatlar
            smetasining ijrosi bo‘yicha maʼlumotlar{" "}
          </p>
        </Row>
        <table class="table table-sm">
          <thead>
            <tr>
              <td className="first">#</td>
              <td>Davr</td>
              <td>Fayl</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p className="first">1</p>
              </td>
              <td>2023-yil 1-chorak</td>
              <td>
                <a href={data11} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
                &nbsp; / &nbsp;{" "}
                <a href={data12} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
                &nbsp; / &nbsp;{" "}
                <a href={data13} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>
              </td>
            </tr>
            <tr className="bgtr">
              <td>
                <p className="first">2</p>
              </td>
              <td>2023-yil 2-chorak</td>
              <td>
                <a href={data21} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
                &nbsp; / &nbsp;{" "}
                <a href={data22} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
                &nbsp; / &nbsp;{" "}
                <a href={data23} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <p className="first">3</p>
              </td>
              <td>2023-yil 3-chorak</td>
              <td>
                <a href={data31} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
                &nbsp; / &nbsp;{" "}
                <a href={data32} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
                &nbsp; / &nbsp;{" "}
                <a href={data33} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>
              </td>
            </tr>
            <tr className="bgtr">
              <td>
                <p className="first">4</p>
              </td>
              <td>2023-yil 4-chorak</td>
              <td>
                <a href={data141} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
                &nbsp; / &nbsp;{" "}
                <a href={data142} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
                &nbsp; / &nbsp;{" "}
                <a href={data143} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>
              </td>
            </tr>
          </tbody>
        </table>

        <table class="table table-sm">
          <thead>
            <tr>
              <td className="first"></td>
              <td></td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p className="first">1</p>
              </td>
              <td>2024-yil 1-chorak</td>
              <td>
                <a href={data2411} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
                &nbsp; / &nbsp;{" "}
                <a href={data2412} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
                &nbsp; / &nbsp;{" "}
                <a href={data2413} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>
              </td>
            </tr>
            <tr className="bgtr">
              <td>
                <p className="first">2</p>
              </td>
              <td>2024-yil 2-chorak</td>
              <td>
                <a href={data2421} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
                &nbsp; / &nbsp;{" "}
                <a href={data2422} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
                &nbsp; / &nbsp;{" "}
                <a href={data2423} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <p className="first">3</p>
              </td>
              <td>2024-yil 3-chorak</td>
              <td>
                <a href={data2431} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
                &nbsp; / &nbsp;{" "}
                <a href={data2432} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
                &nbsp; / &nbsp;{" "}
                <a href={data2433} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>
              </td>
            </tr>
            <tr className="bgtr">
              <td>
                <p className="first">4</p>
              </td>
              <td>2024-yil 4-chorak</td>
              <td>
                <a href={data24_41} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
                &nbsp; / &nbsp;{" "}
                <a href={data24_42} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
                &nbsp; / &nbsp;{" "}
                <a href={data24_43} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        {/* 2025 */}
        <table class="table table-sm">
          <thead>
            <tr>
              <td className="first"></td>
              <td></td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p className="first">1</p>
              </td>
              <td>2025-yil 1-chorak</td>
              <td>
                <a href={data2511} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
                &nbsp; / &nbsp;{" "}
                <a href={data2512} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
                &nbsp; / &nbsp;{" "}
                <a href={data2513} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>
                <p className="first">1</p>
              </td>
              <td>2025-yil 2-chorak</td>
              <td>
                <a href={data2521} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
                &nbsp; / &nbsp;{" "}
                <a href={data2522} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
                &nbsp; / &nbsp;{" "}
                <a href={data2523} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>
              </td>
            </tr>
          </tbody>
        </table>

        <p className="title2">
          {" "}
          Byudjet jarayonining ochiqligini taʼminlash maqsadida veb-saytlarga
          maʼlumotlarni joylashtirish tartibiga (ro‘yxat raqami -3299) muvofiq
          maʼlumotlar{" "}
        </p>

        <table class="table table-sm">
          <thead>
            <tr>
              <td className="first">#</td>
              <td>Davr</td>
              <td>Fayl</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p className="first">1</p>
              </td>
              <td>2023-yil 2-chorak</td>
              <td>
                <a href={data4} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
              </td>
            </tr>
            <tr className="bgtr">
              <td>
                <p className="first">2</p>
              </td>
              <td>2023-yil 3-chorak</td>
              <td>
                <a href={data43} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
              </td>
            </tr>
            <tr>
              <td>
                <p className="first">3</p>
              </td>
              <td>2023-yil 4-chorak</td>
              <td>
                <a href={data44} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
              </td>
            </tr>
          </tbody>
        </table>

        {/* 2024  */}
        <table class="table table-sm">
          <thead>
            <tr>
              <td className="first"></td>
              <td></td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p className="first">1</p>
              </td>
              <td>2024-yil 1-chorak</td>
              <td>
                <a href={data2441} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
              </td>
            </tr>
            <tr className="bgtr">
              <td>
                <p className="first">2</p>
              </td>
              <td>2024-yil 2-chorak</td>
              <td>
                <a href={data2442} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
              </td>
            </tr>
            <tr>
              <td>
                <p className="first">3</p>
              </td>
              <td>2024-yil 3-chorak</td>
              <td>
                <a href={data2443} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
              </td>
            </tr>
            <tr className="bgtr">
              <td>
                <p className="first">4</p>
              </td>
              <td>2024-yil 4-chorak</td>
              <td>
                <a href={data2444} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
              </td>
            </tr>
          </tbody>
        </table>
        {/* 2025  */}
        <table class="table table-sm">
          <thead>
            <tr>
              <td className="first"></td>
              <td></td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p className="first">1</p>
              </td>
              <td>2025-yil 1-chorak</td>
              <td>
                <a href={data2541} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>
                <p className="first">1</p>
              </td>
              <td>2025-yil 2-chorak</td>
              <td>
                <a href={data2542} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
              </td>
            </tr>
          </tbody>
        </table>

        <p className="title2">
          {" "}
          Davlat mulki obyektlaridan samarali foydalanish markazi | Balans
          maʼlumotlar{" "}
        </p>

        <table class="table table-sm">
          <thead>
            <tr>
              <td className="first">#</td>
              <td>Davr</td>
              <td>Fayl</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p className="first">1</p>
              </td>
              <td>2023-yil 1-chorak</td>
              <td>
                <a href={data51} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
              </td>
            </tr>
            <tr className="bgtr">
              <td>
                <p className="first">2</p>
              </td>
              <td>2023-yil 2-chorak</td>
              <td>
                <a href={data52} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
              </td>
            </tr>
            <tr>
              <td>
                <p className="first">3</p>
              </td>
              <td>2023-yil 3-chorak</td>
              <td>
                <a href={data53} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
              </td>
            </tr>
            <tr className="bgtr">
              <td>
                <p className="first">4</p>
              </td>
              <td>2023-yil 4-chorak</td>
              <td>
                <a href={data54} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
              </td>
            </tr>
          </tbody>
        </table>

        {/* 2024 */}
        <table class="table table-sm">
          <thead>
            <tr>
              <td className="first"></td>
              <td></td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p className="first">1</p>
              </td>
              <td>2024-yil 1-chorak</td>
              <td>
                <a href={data2451} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
              </td>
            </tr>
            <tr className="bgtr">
              <td>
                <p className="first">2</p>
              </td>
              <td>2024-yil 2-chorak</td>
              <td>
                <a href={data2452} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
              </td>
            </tr>
            <tr>
              <td>
                <p className="first">3</p>
              </td>
              <td>2024-yil 3-chorak</td>
              <td>
                <a href={data2453} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
              </td>
            </tr>
            <tr className="bgtr">
              <td>
                <p className="first">4</p>
              </td>
              <td>2024-yil 4-chorak</td>
              <td>
                <a href={data2454} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
              </td>
            </tr>
          </tbody>
        </table>
        {/* 2025  */}
        <table class="table table-sm">
          <thead>
            <tr>
              <td className="first"></td>
              <td></td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p className="first">1</p>
              </td>
              <td>2025-yil 1-chorak</td>
              <td>
                <a href={data2551} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>
                <p className="first">1</p>
              </td>
              <td>2025-yil 2-chorak</td>
              <td>
                <a href={data2552} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
              </td>
            </tr>
          </tbody>
        </table>

        <p className="title2">
          {" "}
          Davlat mulki obyektlaridan samarali foydalanish markazining debitor va
          kreditor qarzdorliklari yuzasidan maʼlumotlar{" "}
        </p>

        <table class="table table-sm">
          <thead>
            <tr>
              <td className="first">#</td>
              <td>Davr</td>
              <td>Fayl</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p className="first">1</p>
              </td>
              <td>2023-yil 1-chorak</td>
              <td>
                <a href={data61} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
              </td>
            </tr>
            <tr className="bgtr">
              <td>
                <p className="first">2</p>
              </td>
              <td>2023-yil 2-chorak</td>
              <td>
                <a href={data62} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
              </td>
            </tr>
            <tr>
              <td>
                <p className="first">3</p>
              </td>
              <td>2023-yil 3-chorak</td>
              <td>
                <a href={data63} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
              </td>
            </tr>
            <tr className="bgtr">
              <td>
                <p className="first">4</p>
              </td>
              <td>2023-yil 4-chorak</td>
              <td>
                <a href={data64} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
              </td>
            </tr>
          </tbody>
        </table>
        {/* 2024 */}
        <table class="table table-sm">
          <thead>
            <tr>
              <td className="first"></td>
              <td></td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p className="first">1</p>
              </td>
              <td>2024-yil 1-chorak</td>
              <td>
                <a href={data2461} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
              </td>
            </tr>
            <tr className="bgtr">
              <td>
                <p className="first">2</p>
              </td>
              <td>2024-yil 2-chorak</td>
              <td>
                <a href={data2462} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
              </td>
            </tr>
            <tr>
              <td>
                <p className="first">3</p>
              </td>
              <td>2024-yil 3-chorak</td>
              <td>
                <a href={data2463} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
              </td>
            </tr>
            <tr className="bgtr">
              <td>
                <p className="first">4</p>
              </td>
              <td>2024-yil 4-chorak</td>
              <td>
                <a href={data2464} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
              </td>
            </tr>
          </tbody>
        </table>
        {/* 2025  */}
        <table class="table table-sm">
          <thead>
            <tr>
              <td className="first"></td>
              <td></td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p className="first">1</p>
              </td>
              <td>2025-yil 1-chorak</td>
              <td>
                <a href={data2561} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>
                <p className="first">1</p>
              </td>
              <td>2025-yil 2-chorak</td>
              <td>
                <a href={data2562} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
              </td>
            </tr>
          </tbody>
        </table>

        <p className="title2">
          {" "}
          Vazirlik va idoralar, boshqaruv organlari va boshqa tashkilotlar
          bo‘yicha tarmoq, shtatlar va kontingentga doir rejaning bajarilishi
          (byudjet mablag‘lari bo‘yicha) to‘g‘risida{" "}
        </p>

        <table class="table table-sm">
          <thead>
            <tr>
              <td className="first">#</td>
              <td>Davr</td>
              <td>Fayl</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p className="first">1</p>
              </td>
              <td>2023-yil 1-chorak</td>
              <td>
                <a href={data71} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
              </td>
            </tr>
            <tr className="bgtr">
              <td>
                <p className="first">2</p>
              </td>
              <td>2023-yil 3-chorak</td>
              <td>
                <a href={data73} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
              </td>
            </tr>
            <tr>
              <td>
                <p className="first">3</p>
              </td>
              <td>2023-yil 4-chorak</td>
              <td>
                <a href={data74} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
              </td>
            </tr>
          </tbody>
        </table>
        {/* 2024 */}
        <table class="table table-sm">
          <thead>
            <tr>
              <td className="first"></td>
              <td></td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p className="first">1</p>
              </td>
              <td>2024-yil 1-chorak</td>
              <td>
                <a href={data2471} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
              </td>
            </tr>
            <tr className="bgtr">
              <td>
                <p className="first">2</p>
              </td>
              <td>2024-yil 2-chorak</td>
              <td>
                <a href={data2472} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
              </td>
            </tr>
            <tr>
              <td>
                <p className="first">3</p>
              </td>
              <td>2024-yil 3-chorak</td>
              <td>
                <a href={data2473} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
              </td>
            </tr>
            <tr className="bgtr">
              <td>
                <p className="first">4</p>
              </td>
              <td>2024-yil 4-chorak</td>
              <td>
                <a href={data2474} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
              </td>
            </tr>
          </tbody>
        </table>
        {/* 2025  */}
        <table class="table table-sm">
          <thead>
            <tr>
              <td className="first"></td>
              <td></td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p className="first">1</p>
              </td>
              <td>2025-yil 1-chorak</td>
              <td>
                <a href={data2571} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>
                <p className="first">1</p>
              </td>
              <td>2025-yil 2-chorak</td>
              <td>
                <a href={data2572} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
              </td>
            </tr>
          </tbody>
        </table>

        <p className="title2">
          {" "}
          Davlat mulki obyektlaridan samarali foydalanish markazining byudjet va
          byudjetdan tashqari mablag‘lari hisobiga amalga oshirilgan davlat
          xaridlari to‘g‘risida maʼlumot{" "}
        </p>

        <table class="table table-sm">
          <thead>
            <tr>
              <td className="first">#</td>
              <td>Davr</td>
              <td>Fayl</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p className="first">1</p>
              </td>
              <td>2023-yil 2-chorak</td>
              <td>
                <a href={data82} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
              </td>
            </tr>
            <tr className="bgtr">
              <td>
                <p className="first">2</p>
              </td>
              <td>2023-yil 3-chorak</td>
              <td>
                <a href={data83} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
              </td>
            </tr>
            <tr>
              <td>
                <p className="first">3</p>
              </td>
              <td>2023-yil 4-chorak</td>
              <td>
                <a href={data84} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
              </td>
            </tr>
          </tbody>
        </table>
        {/* 2024 */}
        <table class="table table-sm">
          <thead>
            <tr>
              <td className="first"></td>
              <td></td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p className="first">1</p>
              </td>
              <td>2024-yil 1-chorak</td>
              <td>
                <a href={data2481} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
              </td>
            </tr>
            <tr className="bgtr">
              <td>
                <p className="first">2</p>
              </td>
              <td>2024-yil 2-chorak</td>
              <td>
                <a href={data2482} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
              </td>
            </tr>
            <tr>
              <td>
                <p className="first">3</p>
              </td>
              <td>2024-yil 3-chorak</td>
              <td>
                <a href={data2483} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
              </td>
            </tr>
            <tr className="bgtr">
              <td>
                <p className="first">4</p>
              </td>
              <td>2024-yil 4-chorak</td>
              <td>
                <a href={data2484} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
              </td>
            </tr>
          </tbody>
        </table>
        {/* 2025  */}
        <table class="table table-sm">
          <thead>
            <tr>
              <td className="first"></td>
              <td></td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p className="first">1</p>
              </td>
              <td>2025-yil 1-chorak</td>
              <td>
                <a href={data2581} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>
                <p className="first">1</p>
              </td>
              <td>2025-yil 2-chorak</td>
              <td>
                <a href={data2582} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
              </td>
            </tr>
          </tbody>
        </table>

        <p className="title2">
          {" "}
          Davlat mulki obyektlaridan samarali foydalanish markazining
          xodimlarining xizmat safari xarajatlari to‘g‘risida maʼlumot
        </p>

        <table class="table table-sm">
          <thead>
            <tr>
              <td className="first">#</td>
              <td>Davr</td>
              <td>Fayl</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p className="first">1</p>
              </td>
              <td>2023-yil 1-2-chorak</td>
              <td>
                <a href={data9} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
              </td>
            </tr>
            <tr className="bgtr">
              <td>
                <p className="first">2</p>
              </td>
              <td>2023-yil 3-chorak</td>
              <td>
                <a href={data93} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
              </td>
            </tr>
            <tr>
              <td>
                <p className="first">3</p>
              </td>
              <td>2023-yil 4-chorak</td>
              <td>
                <a href={data94} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
              </td>
            </tr>
          </tbody>
        </table>
        {/* 2024 */}
        <table class="table table-sm">
          <thead>
            <tr>
              <td className="first"></td>
              <td></td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p className="first">1</p>
              </td>
              <td>2024-yil 1-chorak</td>
              <td>
                <a href={data2491} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
              </td>
            </tr>
            <tr className="bgtr">
              <td>
                <p className="first">2</p>
              </td>
              <td>2024-yil 2-chorak</td>
              <td>
                <a href={data2492} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
              </td>
            </tr>
            <tr>
              <td>
                <p className="first">3</p>
              </td>
              <td>2024-yil 3-chorak</td>
              <td>
                <a href={data2493} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
              </td>
            </tr>
            <tr className="bgtr">
              <td>
                <p className="first">4</p>
              </td>
              <td>2024-yil 4-chorak</td>
              <td>
                <a href={data2494} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
              </td>
            </tr>
          </tbody>
        </table>
        {/* 2025  */}
        <table class="table table-sm">
          <thead>
            <tr>
              <td className="first"></td>
              <td></td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p className="first">1</p>
              </td>
              <td>2025-yil 1-chorak</td>
              <td>
                <a href={data2591} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>
                <p className="first">1</p>
              </td>
              <td>2025-yil 2-chorak</td>
              <td>
                <a href={data2592} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
              </td>
            </tr>
          </tbody>
        </table>

        <p className="title2">
          {" "}
          Davlat mulki obyektlaridan samarali foydalanish markazining davlat
          byudjeti, davlat maqsadli jamg‘armalari hamda byudjet
          tashkilotlarining byudjetdan tashqari jamg‘armalari hisobiga xarid
          qilinishi rejalashtirilgan tovarlar (ishlar, xizmatlar) to‘g‘risidagi
          maʼlumot
        </p>

        <table class="table table-sm">
          <thead>
            <tr>
              <td className="first">#</td>
              <td>Davr</td>
              <td>Fayl</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p className="first">1</p>
              </td>
              <td>2023-yil 3-chorak</td>
              <td>
                <a href={data10} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
              </td>
            </tr>
            <tr className="bgtr">
              <td>
                <p className="first">2</p>
              </td>
              <td>2023-yil 4-chorak</td>
              <td>
                <a href={data103} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
              </td>
            </tr>
          </tbody>
        </table>
        {/* 2024 */}
        <table class="table table-sm">
          <thead>
            <tr>
              <td className="first"></td>
              <td></td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p className="first">1</p>
              </td>
              <td>2024-yil 1-chorak</td>
              <td>
                <a href={data24101} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
              </td>
            </tr>
            <tr className="bgtr">
              <td>
                <p className="first">2</p>
              </td>
              <td>2024-yil 2-chorak</td>
              <td>
                <a href={data24102} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
              </td>
            </tr>
            <tr>
              <td>
                <p className="first">3</p>
              </td>
              <td>2024-yil 3-chorak</td>
              <td>
                <a href={data24103} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
              </td>
            </tr>
            <tr className="bgtr">
              <td>
                <p className="first">4</p>
              </td>
              <td>2024-yil 4-chorak</td>
              <td>
                <a href={data24104} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
              </td>
            </tr>
          </tbody>
        </table>
        {/* 2025  */}
        <table class="table table-sm">
          <thead>
            <tr>
              <td className="first"></td>
              <td></td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p className="first">1</p>
              </td>
              <td>2025-yil 1-chorak</td>
              <td>
                <a href={data25101} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>
                <p className="first">1</p>
              </td>
              <td>2025-yil 2-chorak</td>
              <td>
                <a href={data25102} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
              </td>
            </tr>
          </tbody>
        </table>

        <p className="title2">
          {" "}
          O‘zbekiston Respublikasi Davlat aktivlarini boshqarish agentligi
          huzuridagi davlat mulki obyektlaridan samarali foydalanish Markaziga
          tegishli xizmat avtotransport holati to‘g‘risida maʼlumot
        </p>

        <table class="table table-sm">
          <thead>
            <tr>
              <td className="first">#</td>
              <td>Davr</td>
              <td>Fayl</td>
            </tr>
            {/* 2024 */}
          </thead>
          <tbody>
            <tr>
              <td>
                <p className="first">1</p>
              </td>
              <td className="tdwidth">2024-yil 1-chorak</td>
              <td>
                <a href={data24111} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
              </td>
            </tr>
            <tr className="bgtr">
              <td>
                <p className="first">2</p>
              </td>
              <td className="tdwidth">2024-yil 2-chorak</td>
              <td>
                <a href={data24112} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
              </td>
            </tr>
            <tr>
              <td>
                <p className="first">3</p>
              </td>
              <td className="tdwidth">2024-yil 3-chorak</td>
              <td>
                <a href={data24113} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
              </td>
            </tr>
            <tr className="bgtr">
              <td>
                <p className="first">4</p>
              </td>
              <td className="tdwidth">2024-yil 4-chorak</td>
              <td>
                <a href={data24114} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
              </td>
            </tr>
          </tbody>
        </table>
        {/* 2025  */}
        <table class="table table-sm">
          <thead>
            <tr>
              <td className="first"></td>
              <td></td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p className="first">1</p>
              </td>
              <td>2025-yil 1-chorak</td>
              <td>
                <a href={data25111} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>
                <p className="first">1</p>
              </td>
              <td>2025-yil 2-chorak</td>
              <td>
                <a href={data25112} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>{" "}
              </td>
            </tr>
          </tbody>
        </table>
      </Container>
    </div>
  );
};

export default OpenDataPage;
