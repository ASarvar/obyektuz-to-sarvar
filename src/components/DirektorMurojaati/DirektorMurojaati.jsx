import React from "react";
import { Container } from "react-bootstrap";
import "./direktormurojaati.css";

const DirektorMurojaati = () => {
  const phone = "71-259-22-09";
  const telegramBot = "@rentCenter_bot";
  const email = "markaz@davaktiv.uz";
  const phoneHref = phone.replace(/-/g, "");
  const telegramUsername = telegramBot.replace(/^@/, "");

  return (
    <div className="direktorPage">
      <Container>
        {/* <div className="direktorHeader">
          <h3 className="direktorTitle">Direktor murojaati</h3>
        </div> */}

        <div className="direktorCard">
          <h4 className="direktorCardTitle">
            DAVLAT MULKI OBYEKTLARIDAN SAMARALI FOYDALANISH MARKAZI DIREKTORINING MUROJAATI
          </h4>
          <div className="direktorDivider" />

          <div className="direktorContent">
            <p>
              Davlat mulki obyektlaridan samarali foydalanish markazi direktori
              Usmonov Bekzod Shavkat oʻgʻlining korrupsiyaga qarshi kurashish
              boʻyicha jamoatchilik va tizim xodimlariga murojaati.
            </p>

            <p><strong>Qadrli yurtdoshlar, hurmatli hamkasblar!</strong></p>

            <p>
              Yurtimizda tadbirkorlikni rivojlantirish, ish oʻrnini yaratish,
              investitsiyalarni jalb qilish, innovatsiya va eksportni koʻpaytirish
              eng asosiy yoʻnalishlar etib belgilangan.
            </p>

            <p>
              Davlat mulki obyektlaridan samarali foydalanish markazimiz tomonidan
              tadbirkorlik subyektlarini doimo qoʻllab-quvvatlash, ularga ishlab
              chiqarish va xizmatlar koʻrsatish maqsadida davlat mulki boʻlgan
              obyektlarini ijaraga berishda bizga katta mas’uliyat yuklatilgan.
            </p>

            <p>
              Markazimiz faoliyati halollik, shaffoflik va javobgarlik tamoyillariga
              tayanadi. Biz korrupsiyaga nisbatan "toqatsizlik" siyosatini yuritamiz
              va bu faqat shior emas, balki kundalik ish uslubimizdir.
            </p>

            <p>
              Davlat boshqaruvining koʻplab tarmoqlari qatorida Markaz tizimida
              korrupsiyaning oldini olish, faoliyatni raqamlashtirish, ochiqlikni
              ta’minlash borasida bir qator ishlar amalga oshirildi.
            </p>

            <p>
              Xususan, oʻtgan qisqa vaqt mobaynida davlat koʻchmas mulk obyektlarini
              xususiy sektorga auksion orqali ijaraga berish, ijaradan tushumlarni
              avtomat taqsimlash, ijara tushumlarini undirishni oʻz ichiga olgan
              tizim joriy etildi.
            </p>

            <p>
              Markaz tizimida korrupsiyaga qarshi kurashish boʻyicha mas’ul boʻlim
              faoliyati yoʻlga qoʻyilib, korrupsiyaviy holatlar tizimli ravishda
              oʻrganilib, bunday holatlarni keltirib chiqaruvchi sabab va
              shart-sharoitlarni bartaraf etish yuzasidan aniq choralar koʻrilmoqda.
            </p>

            <p>
              Shu bilan birga, xodimlar oʻrtasida halollik va ochiqlik tamoyillarini
              mustahkamlashga qaratilgan tushuntirish va profilaktik ishlar muntazam
              amalga oshirilmoqda.
            </p>

            <p>
              Ta’kidlash joizki, Markaz tizimida <strong>"korrupsiyadan holi"</strong> muhitni
              yaratish, byurokratiya va manfaatlar toʻqnashuvi holatlariga batamom
              chek qoʻyish boʻyicha amaliy harakatlarni izchil davom ettiramiz.
            </p>

            <p><strong>Aziz yurtdoshlar, sohaning fidoyi zahmatkashlari!</strong></p>

            <p>
              Halollik bizning eng katta kuchimiz, shaffoflik bizning ish uslubimiz,
              ishonch bizning eng katta kapitalimiz.
            </p>

            <p>
              Har bir qadam ortida xalq manfaati turishi kerak, har bir harakatimiz
              mas’uliyat, har bir jarayon ochiq va adolatli boʻlishi shart.
            </p>

            <p><strong>Men sizlarni:</strong></p>
            <ul>
              <li>manfaatlar toʻqnashuviga yoʻl qoʻymaslikka;</li>
              <li>har qanday noqonuniy ta’sirni rad etishga;</li>
              <li>elektron auksion va raqamli nazorat orqali shaffoflikni mustahkamlashga;</li>
              <li>jamoada halollik madaniyatini kuchaytirishga chaqiraman.</li>
            </ul>

            <p>
              Shunday ekan, Markaz tizimidagi har bir xodim oʻz faoliyatida
              korrupsiya holatlarining oldini olishga va unga chek qoʻyishga mas’ul
              ekanligini yana bir bor ta’kidlab oʻtmoqchiman.
            </p>

            <p>
              Oʻz navbatida, barchaga tizim xodimlarining har qanday korrupsiyaviy
              yoki boshqa turdagi noqonuniy xatti-harakatlariga guvoh boʻlganingizda,
              shuningdek xodimlarning bunday harakatlarga aloqasi borligi haqida
              ishonchli ma’lumotlarga ega boʻlganingizda,
              Davlat mulki obyektlaridan samarali foydalanish markazining
              <a href={`tel:${phoneHref}`} className="direktorInlineLink direktorNoWrap"> {phone}</a> telefoni, <a href={`https://t.me/${telegramUsername}`} className="direktorInlineLink direktorNoWrap">{telegramBot}</a> rasmiy telegram boti yoki
              <a href={`mailto:${email}`} className="direktorInlineLink direktorNoWrap"> {email}</a> elektron pochta manzili orqali oʻz
              murojaatlaringizni yoʻllashingizni soʻrayman.
            </p>

            <p>
              Markaz tizimida mehnat qilayotgan barcha xodimlarni korrupsiya
              holatlarining har qanday koʻrinishlariga nisbatan murosasiz
              munosabatda boʻlishga, oʻz xizmat vazifalarini halol va xolis
              bajarishga chaqirib qolaman.
            </p>

            <p className="direktorSign">
              <strong>Hurmat bilan,</strong> Bekzod Usmonov
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DirektorMurojaati;
