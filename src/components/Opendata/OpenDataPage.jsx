import React from "react";
import { Container } from "react-bootstrap";
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

// 3-chorak
import data2531 from "../../assets/opendata/25-3/1_Давлат_объектларидан_фойдаланиш_маркази_Бюджет_маблаглари_ижроси.xlsx";
import data2532 from "../../assets/opendata/25-3/2_Давлат_объектларидан_фойдаланиш_маркази_Бюджетдан_ташкари_маблаглари.xlsx";
import data2533 from "../../assets/opendata/25-3/3_Давлат_объектларидан_фойдаланиш_маркази_Ривожлантириш_жамгармаси.xlsx";
// 4-chorak
import data254_1 from "../../assets/opendata/25-4/1_Давлат_объектларидан_фойдаланиш_маркази_Бюджет_маблаглари_ижроси.xlsx";
import data254_2 from "../../assets/opendata/25-4/2_Давлат_объектларидан_фойдаланиш_маркази_Бюджетдан_ташкари_маблаглари.xlsx";
import data254_3 from "../../assets/opendata/25-4/3_Давлат_объектларидан_фойдаланиш_маркази_Ривожлантириш_жамгармаси.xlsx";

//2026
// 1-chorak
import data2611 from "../../assets/opendata/26-1/1_Давлат_объектларидан_фойдаланиш_маркази_Бюджет_маблаглари_ижроси.xlsx";
import data2612 from "../../assets/opendata/26-1/2_Давлат_объектларидан_фойдаланиш_маркази_Бюджетдан_ташкари_маблаглари.xlsx";
import data2613 from "../../assets/opendata/26-1/3_Давлат_объектларидан_фойдаланиш_маркази_Ривожлантириш_жамгармаси.xlsx";

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
import data2543 from "../../assets/opendata/25-3/4_Давлат_объектларидан_фойдаланиш_маркази_1_14_иловалар_2025_3_кв.xlsx";
import data2544 from "../../assets/opendata/25-4/4_Давлат_объектларидан_фойдаланиш_маркази_1_14_иловалар_2025_4_кв.xlsx";

// 2026
import data2641 from "../../assets/opendata/26-1/4_Давлат_объектларидан_фойдаланиш_маркази_1_14_иловалар_2026_1_кв.xlsx";

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
import data2553 from "../../assets/opendata/25-3/5_Давлат_объектларидан_фойдаланиш_маркази_Баланс_2025_3_кв.xlsx";
import data2554 from "../../assets/opendata/25-4/5_Давлат_объектларидан_фойдаланиш_маркази_Баланс_2025_4_кв.xlsx";

// 2026
import data2651 from "../../assets/opendata/26-1/5_Давлат_объектларидан_фойдаланиш_маркази_Баланс_2026_1_кв.xlsx";

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
import data2563 from "../../assets/opendata/25-3/6_Давлат_объектларидан_фойдаланиш_маркази_Деб_Кред_карздорлик_2025.xlsx";
import data2564 from "../../assets/opendata/25-4/6_Давлат_объектларидан_фойдаланиш_маркази_Деб_Кред_карздорлик_2025.xlsx";

// 2026
import data2661 from "../../assets/opendata/26-1/6_Давлат_объектларидан_фойдаланиш_маркази_Деб_Кред_карздорлик_2026.xlsx";

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
import data2573 from "../../assets/opendata/25-3/7_Давлат_объектларидан_фойдаланиш_маркази_Сеть_отчёт_2025_3_кв.xlsx";
import data2574 from "../../assets/opendata/25-4/7_Давлат_объектларидан_фойдаланиш_маркази_Сеть_отчёт_2025_4_кв.xlsx";

// 2026
import data2671 from "../../assets/opendata/26-1/7_Давлат_объектларидан_фойдаланиш_маркази_Сеть_отчёт_2026_1_кв.xlsx";

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
import data2583 from "../../assets/opendata/25-3/8_Давлат_объектларидан_фойдаланиш_маркази_Давлат_харидлари_2025.xlsx";
import data2584 from "../../assets/opendata/25-4/8_Давлат_объектларидан_фойдаланиш_маркази_Давлат_харидлари_2025.xlsx";

// 2026
import data2681 from "../../assets/opendata/26-1/8_Давлат_объектларидан_фойдаланиш_маркази_Давлат_харидлари_2026.xlsx";

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
import data2593 from "../../assets/opendata/25-3/9_Давлат_объектларидан_фойдаланиш_маркази_Командировка_2025_3_кв.xlsx";
import data2594 from "../../assets/opendata/25-4/9_Давлат_объектларидан_фойдаланиш_маркази_Командировка_2025_4_кв.xlsx";
// 2026
import data2691 from "../../assets/opendata/26-1/9_Давлат_объектларидан_фойдаланиш_маркази_Командировка_2026_1_кв.xlsx";


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
import data25103 from "../../assets/opendata/25-3/10_Давлат_объектларидан_фойдаланиш_маркази_Харидлар_режаси_2025.xlsx";
import data25104 from "../../assets/opendata/25-4/10_Давлат_объектларидан_фойдаланиш_маркази_Харидлар_режаси_2025.xlsx";
//2026
import data26101 from "../../assets/opendata/26-1/10_Давлат_объектларидан_фойдаланиш_маркази_Харидлар_режаси_2026.xlsx";

//O‘zbekiston Respublikasi Davlat aktivlarini boshqarish agentligi huzuridagi davlat mulki obyektlaridan samarali foydalanish Markaziga tegishli xizmat avtotransport holati to‘g‘risida maʼlumot
//2024
import data24111 from "../../assets/opendata/24-1/11_Давлат_объектларидан_фойдаланиш_Маркази_Хизмат_автотранспорт.xlsx";
import data24112 from "../../assets/opendata/24-2/11_Давлат_объектларидан_фойдаланиш_Маркази_Хизмат_автотранспорт.xlsx";
import data24113 from "../../assets/opendata/24-3/11_Давлат_объектларидан_фойдаланиш_Маркази_Хизмат_автотранспорт.xlsx";
import data24114 from "../../assets/opendata/24-4/11_Давлат_объектларидан_фойдаланиш_Маркази_Хизмат_автотранспорт.xlsx";

//2025
import data25111 from "../../assets/opendata/25-1/11_Давлат_объектларидан_фойдаланиш_Маркази_Хизмат_автотранспорт.xlsx";
import data25112 from "../../assets/opendata/25-2/11_Давлат_объектларидан_фойдаланиш_Маркази_Хизмат_автотранспорт.xlsx";
import data25113 from "../../assets/opendata/25-3/11_Давлат_объектларидан_фойдаланиш_Маркази_Хизмат_автотранспорт.xlsx";
import data25114 from "../../assets/opendata/25-4/11_Давлат_объектларидан_фойдаланиш_Маркази_Хизмат_автотранспорт.xlsx";
//2026
import data26111 from "../../assets/opendata/26-1/11_Давлат_объектларидан_фойдаланиш_Маркази_Хизмат_автотранспорт.xlsx";

const DownloadBtn = ({ href, num }) => (
  <a href={href} target="_blank" rel="noreferrer" className="od-btn">
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
    {num ? num + '-fayl' : 'Yuklab olish'}
  </a>
);

const OdSection = ({ num, title, rows }) => {
  const byYear = rows.reduce((acc, row) => {
    if (!acc[row.year]) acc[row.year] = [];
    acc[row.year].push(row);
    return acc;
  }, {});

  return (
    <div className="od-card">
      <div className="od-card-head">
        <span className="od-badge">{num}</span>
        <p className="od-card-title">{title}</p>
      </div>
      <div className="od-body">
        {Object.entries(byYear).map(([year, yearRows]) => (
          <div key={year} className="od-year-group">
            <div className="od-year-label">{year}-yil</div>
            <div className="od-quarters-grid">
              {yearRows.map((row, i) => (
                <div key={i} className="od-quarter-card">
                  <div className="od-quarter-period">{row.period}</div>
                  <div className="od-quarter-files">
                    {row.files.map((f, j) => (
                      <DownloadBtn key={j} href={f} num={row.files.length > 1 ? j + 1 : null} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const OpenDataPage = () => {
  const { t } = useTranslation();

  const sections = [
    {
      num: '1–3',
      title: "Davlat mulki obyektlaridan samarali foydalanish markazi xarajatlar smetasining ijrosi boʼyicha maʼlumotlar",
      rows: [
        { year: 2023, period: '1-chorak', files: [data11, data12, data13] },
        { year: 2023, period: '2-chorak', files: [data21, data22, data23] },
        { year: 2023, period: '3-chorak', files: [data31, data32, data33] },
        { year: 2023, period: '4-chorak', files: [data141, data142, data143] },
        { year: 2024, period: '1-chorak', files: [data2411, data2412, data2413] },
        { year: 2024, period: '2-chorak', files: [data2421, data2422, data2423] },
        { year: 2024, period: '3-chorak', files: [data2431, data2432, data2433] },
        { year: 2024, period: '4-chorak', files: [data24_41, data24_42, data24_43] },
        { year: 2025, period: '1-chorak', files: [data2511, data2512, data2513] },
        { year: 2025, period: '2-chorak', files: [data2521, data2522, data2523] },
        { year: 2025, period: '3-chorak', files: [data2531, data2532, data2533] },
        { year: 2025, period: '4-chorak', files: [data254_1, data254_2, data254_3] },
        { year: 2026, period: '1-chorak', files: [data2611, data2612, data2613] },
      ],
    },
    {
      num: '4',
      title: "Byudjet jarayonining ochiqligini taʼminlash maqsadida veb-saytlarga maʼlumotlarni joylashtirish tartibiga (roʼyxat raqami−3299) muvofiq maʼlumotlar",
      rows: [
        { year: 2023, period: '2-chorak', files: [data4] },
        { year: 2023, period: '3-chorak', files: [data43] },
        { year: 2023, period: '4-chorak', files: [data44] },
        { year: 2024, period: '1-chorak', files: [data2441] },
        { year: 2024, period: '2-chorak', files: [data2442] },
        { year: 2024, period: '3-chorak', files: [data2443] },
        { year: 2024, period: '4-chorak', files: [data2444] },
        { year: 2025, period: '1-chorak', files: [data2541] },
        { year: 2025, period: '2-chorak', files: [data2542] },
        { year: 2025, period: '3-chorak', files: [data2543] },
        { year: 2025, period: '4-chorak', files: [data2544] },
        { year: 2026, period: '1-chorak', files: [data2641] },
      ],
    },
    {
      num: '5',
      title: "Davlat mulki obyektlaridan samarali foydalanish markazi | Balans",
      rows: [
        { year: 2023, period: '1-chorak', files: [data51] },
        { year: 2023, period: '2-chorak', files: [data52] },
        { year: 2023, period: '3-chorak', files: [data53] },
        { year: 2023, period: '4-chorak', files: [data54] },
        { year: 2024, period: '1-chorak', files: [data2451] },
        { year: 2024, period: '2-chorak', files: [data2452] },
        { year: 2024, period: '3-chorak', files: [data2453] },
        { year: 2024, period: '4-chorak', files: [data2454] },
        { year: 2025, period: '1-chorak', files: [data2551] },
        { year: 2025, period: '2-chorak', files: [data2552] },
        { year: 2025, period: '3-chorak', files: [data2553] },
        { year: 2025, period: '4-chorak', files: [data2554] },
        { year: 2026, period: '1-chorak', files: [data2651] },
      ],
    },
    {
      num: '6',
      title: "Davlat mulki obyektlaridan samarali foydalanish markazining debitor va kreditor qarzdorliklari yuzasidan maʼlumotlar",
      rows: [
        { year: 2023, period: '1-chorak', files: [data61] },
        { year: 2023, period: '2-chorak', files: [data62] },
        { year: 2023, period: '3-chorak', files: [data63] },
        { year: 2023, period: '4-chorak', files: [data64] },
        { year: 2024, period: '1-chorak', files: [data2461] },
        { year: 2024, period: '2-chorak', files: [data2462] },
        { year: 2024, period: '3-chorak', files: [data2463] },
        { year: 2024, period: '4-chorak', files: [data2464] },
        { year: 2025, period: '1-chorak', files: [data2561] },
        { year: 2025, period: '2-chorak', files: [data2562] },
        { year: 2025, period: '3-chorak', files: [data2563] },
        { year: 2025, period: '4-chorak', files: [data2564] },
        { year: 2026, period: '1-chorak', files: [data2661] },
      ],
    },
    {
      num: '7',
      title: "Vazirlik va idoralar, boshqaruv organlari va boshqa tashkilotlar boʼyicha tarmoq, shtatlar va kontingentga doir rejaning bajarilishi (byudjet mablagʼlari boʼyicha) toʼgʼrisida",
      rows: [
        { year: 2023, period: '1-chorak', files: [data71] },
        { year: 2023, period: '3-chorak', files: [data73] },
        { year: 2023, period: '4-chorak', files: [data74] },
        { year: 2024, period: '1-chorak', files: [data2471] },
        { year: 2024, period: '2-chorak', files: [data2472] },
        { year: 2024, period: '3-chorak', files: [data2473] },
        { year: 2024, period: '4-chorak', files: [data2474] },
        { year: 2025, period: '1-chorak', files: [data2571] },
        { year: 2025, period: '2-chorak', files: [data2572] },
        { year: 2025, period: '3-chorak', files: [data2573] },
        { year: 2025, period: '4-chorak', files: [data2574] },
        { year: 2026, period: '1-chorak', files: [data2671] },
      ],
    },
    {
      num: '8',
      title: "Davlat mulki obyektlaridan samarali foydalanish markazining byudjet va byudjetdan tashqari mablagʼlari hisobiga amalga oshirilgan davlat xaridlari toʼgʼrisida maʼlumot",
      rows: [
        { year: 2023, period: '2-chorak', files: [data82] },
        { year: 2023, period: '3-chorak', files: [data83] },
        { year: 2023, period: '4-chorak', files: [data84] },
        { year: 2024, period: '1-chorak', files: [data2481] },
        { year: 2024, period: '2-chorak', files: [data2482] },
        { year: 2024, period: '3-chorak', files: [data2483] },
        { year: 2024, period: '4-chorak', files: [data2484] },
        { year: 2025, period: '1-chorak', files: [data2581] },
        { year: 2025, period: '2-chorak', files: [data2582] },
        { year: 2025, period: '3-chorak', files: [data2583] },
        { year: 2025, period: '4-chorak', files: [data2584] },
        { year: 2026, period: '1-chorak', files: [data2681] },
      ],
    },
    {
      num: '9',
      title: "Davlat mulki obyektlaridan samarali foydalanish markazining xodimlarining xizmat safari xarajatlari toʼgʼrisida maʼlumot",
      rows: [
        { year: 2023, period: '1–2-chorak', files: [data9] },
        { year: 2023, period: '3-chorak', files: [data93] },
        { year: 2023, period: '4-chorak', files: [data94] },
        { year: 2024, period: '1-chorak', files: [data2491] },
        { year: 2024, period: '2-chorak', files: [data2492] },
        { year: 2024, period: '3-chorak', files: [data2493] },
        { year: 2024, period: '4-chorak', files: [data2494] },
        { year: 2025, period: '1-chorak', files: [data2591] },
        { year: 2025, period: '2-chorak', files: [data2592] },
        { year: 2025, period: '3-chorak', files: [data2593] },
        { year: 2025, period: '4-chorak', files: [data2594] },
        { year: 2026, period: '1-chorak', files: [data2691] },
      ],
    },
    {
      num: '10',
      title: "Davlat mulki obyektlaridan samarali foydalanish markazining davlat byudjeti, davlat maqsadli jamgʼamlari hamda byudjet tashkilotlarining byudjetdan tashqari jamgʼamlari hisobiga xarid qilinishi rejalashtirilgan tovarlar (ishlar, xizmatlar) toʼgʼrisidagi maʼlumot",
      rows: [
        { year: 2023, period: '3-chorak', files: [data10] },
        { year: 2023, period: '4-chorak', files: [data103] },
        { year: 2024, period: '1-chorak', files: [data24101] },
        { year: 2024, period: '2-chorak', files: [data24102] },
        { year: 2024, period: '3-chorak', files: [data24103] },
        { year: 2024, period: '4-chorak', files: [data24104] },
        { year: 2025, period: '1-chorak', files: [data25101] },
        { year: 2025, period: '2-chorak', files: [data25102] },
        { year: 2025, period: '3-chorak', files: [data25103] },
        { year: 2025, period: '4-chorak', files: [data25104] },
        { year: 2026, period: '1-chorak', files: [data26101] },
      ],
    },
    {
      num: '11',
      title: "Oʼbekiston Respublikasi Davlat aktivlarini boshqarish agentligi huzuridagi davlat mulki obyektlaridan samarali foydalanish Markaziga tegishli xizmat avtotransport holati toʼgʼrisida maʼlumot",
      rows: [
        { year: 2024, period: '1-chorak', files: [data24111] },
        { year: 2024, period: '2-chorak', files: [data24112] },
        { year: 2024, period: '3-chorak', files: [data24113] },
        { year: 2024, period: '4-chorak', files: [data24114] },
        { year: 2025, period: '1-chorak', files: [data25111] },
        { year: 2025, period: '2-chorak', files: [data25112] },
        { year: 2025, period: '3-chorak', files: [data25113] },
        { year: 2025, period: '4-chorak', files: [data25114] },
        { year: 2026, period: '1-chorak', files: [data26111] },
      ],
    },
  ];

  return (
    <div className="od-page">
      <Container>
        <div className="od-hero">
          <h1 className="od-hero-title">{t('Opendata.Title')}</h1>
          <p className="od-hero-sub">Ochiq maʼlumotlar roʼyxati</p>
        </div>
        <div className="od-sections">
          {sections.map((s, i) => (
            <OdSection key={i} num={s.num} title={s.title} rows={s.rows} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default OpenDataPage;
