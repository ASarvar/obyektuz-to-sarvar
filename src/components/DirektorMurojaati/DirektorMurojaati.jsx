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
            DAVLAT MULK OB'EKTLARIDAN SAMARALI FOYDALANISH MARKAZI DIREKTORINING MUROJAATI
          </h4>
          <div className="direktorDivider" />

          <div className="direktorContent">
            <p>
              Davlat mulk ob'ektlaridan samarali foydalanish markazi direktori
              Usmonov Bekzod Shavkat o'g'lining korrupsiyaga qarshi kurashish
              bo'yicha jamoatchilik va tizim xodimlariga murojaati.
            </p>

            <p><strong>Qadrli yurtdoshlar, hurmatli hamkasblar!</strong></p>

            <p>
              Yurtimizda tadbirkorlikni rivojlantirish, ish o'rnini yaratish,
              investitsiyalarni jalb qilish, innovatsiya va eksportni ko'paytirish
              eng asosiy yo'nalishlar etib belgilangan.
            </p>

            <p>
              Davlat mulki obyektlaridan samarali foydalanish markazimiz tomonidan
              tadbirkorlik subyektlarini doimo qo'llab-quvvatlash, ularga ishlab
              chiqarish va xizmatlar ko'rsatish maqsadida davlat mulki bo'lgan
              ob'ektlarini ijaraga berishda bizga katta mas'uliyat yuklatilgan.
            </p>

            <p>
              Markazimiz faoliyati halollik, shaffoflik va javobgarlik tamoyillariga
              tayanadi. Biz korrupsiyaga nisbatan "toqatsizlik" siyosatini yuritamiz
              va bu faqat shior emas, balki kundalik ish uslubimizdir.
            </p>

            <p>
              Davlat boshqaruvining ko'plab tarmoqlari qatorida Markaz tizimida
              korrupsiyaning oldini olish, faoliyatni raqamlashtirish, ochiqlikni
              ta'minlash borasida bir qator ishlar amalga oshirildi.
            </p>

            <p>
              Xususan, o'tgan qisqa vaqt mobaynida davlat ko'chmas mulk obyektlarini
              xususiy sektorga auksion orqali ijaraga berish, ijaradan tushumlarni
              avtomat taqsimlash, ijara tushumlarini undirishni o'z ichiga olgan
              tizim joriy etildi.
            </p>

            <p>
              Markaz tizimida korrupsiyaga qarshi kurashish bo'yicha mas'ul bo'lim
              faoliyati yo'lga qo'yilib, korrupsiyaviy holatlar tizimli ravishda
              o'rganilib, bunday holatlarni keltirib chiqaruvchi sabab va
              shart-sharoitlarni bartaraf etish yuzasidan aniq choralar ko'rilmoqda.
            </p>

            <p>
              Shu bilan birga, xodimlar o'rtasida halollik va ochiqlik tamoyillarini
              mustahkamlashga qaratilgan tushuntirish va profilaktik ishlar muntazam
              amalga oshirilmoqda.
            </p>

            <p>
              Ta'kidlash joizki, Markaz tizimida <strong>"korrupsiyadan holi"</strong> muhitni
              yaratish, byurokratiya va manfaatlar to'qnashuvi holatlariga batamom
              chek qo'yish bo'yicha amaliy harakatlarni izchil davom ettiramiz.
            </p>

            <p><strong>Aziz yurtdoshlar, sohaning fidoyi zahmatkashlari!</strong></p>

            <p>
              Halollik bizning eng katta kuchimiz, shaffoflik bizning ish uslubimiz,
              ishonch bizning eng katta kapitalimiz.
            </p>

            <p>
              Har bir qadam ortida xalq manfaati turishi kerak, har bir harakatimiz
              mas'uliyat, har bir jarayon ochiq va adolatli bo'lishi shart.
            </p>

            <p><strong>Men sizlarni:</strong></p>
            <ul>
              <li>manfaatlar to'qnashuviga yo'l qo'ymaslikka;</li>
              <li>har qanday noqonuniy ta'sirni rad etishga;</li>
              <li>elektron auksion va raqamli nazorat orqali shaffoflikni mustahkamlashga;</li>
              <li>jamoada halollik madaniyatini kuchaytirishga chaqiraman.</li>
            </ul>

            <p>
              Shunday ekan, Markaz tizimidagi har bir xodim o'z faoliyatida
              korrupsiya holatlarining oldini olishga va unga chek qo'yishga mas'ul
              ekanligini yana bir bor ta'kidlab o'tmoqchiman.
            </p>

            <p>
              O'z navbatida, barchaga tizim xodimlarining har qanday korrupsiyaviy
              yoki boshqa turdagi noqonuniy xatti-harakatlariga guvoh bo'lganingizda,
              shuningdek xodimlarning bunday harakatlarga aloqasi borligi haqida
              ishonchli ma'lumotlarga ega bo'lganingizda,
              Davlat mulk obyektlaridan samarali foydalanish markazining
              <a href={`tel:${phoneHref}`} className="direktorInlineLink direktorNoWrap"> {phone}</a> telefoni, <a href={`https://t.me/${telegramUsername}`} className="direktorInlineLink direktorNoWrap">{telegramBot}</a> rasmiy telegram boti yoki
              <a href={`mailto:${email}`} className="direktorInlineLink direktorNoWrap"> {email}</a> elektron pochta manzili orqali o'z
              murojaatlaringizni yo'llashingizni so'rayman.
            </p>

            <p>
              Markaz tizimida mehnat qilayotgan barcha xodimlarni korrupsiya
              holatlarining har qanday ko'rinishlariga nisbatan murosasiz
              munosabatda bo'lishga, o'z xizmat vazifalarini halol va xolis
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
