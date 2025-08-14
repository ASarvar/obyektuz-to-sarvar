import React, { useEffect, useCallback, memo } from "react";
import { Container } from "react-bootstrap";
import "./news.css";
import axios from "axios";
import { useApi } from "../../context/api";
import { useTranslation } from "react-i18next";
import mygov from "../../assets/news/mygov.jpg";
import tadbir1 from "../../assets/news/tadbir1.jpg";
import tadbir2 from "../../assets/news/tadbir2.jpg";
import corruption from "../../assets/news/corruption.jpg";

const News = () => {
  const { t } = useTranslation();
  const [api] = useApi();

  const getArticles = useCallback(async (apiUrl) => {
    if (!apiUrl) return;

    try {
      // Keep the API call for potential future use
      await axios.get(`${apiUrl}/articles`);
    } catch (err) {
      console.error("Failed to fetch articles:", err);
    }
  }, []);

  useEffect(() => {
    getArticles(api);
  }, [api, getArticles]);

  return (
    <div className="newsContent">
      <Container>
        <h3 className="newsTitle">{t("News.title")}</h3>
        <hr />
        <div className="MainContent line pb-100">
          <div className="newsTitle">E’LON!!!</div>

          <div className="newsText">
            <p>
              Davlat aktivlarini boshqarish agentligi huzuridagi Davlat mulki
              ob’ektlaridan samarali foydalanish markazi (keyingi o‘rinlarda -{" "}
              <strong>Markaz</strong>) fuqarolik-huquqiy xususiyatga ega
              shartnomalar asosida 4 nafar mutaxassislarni ishga jalb qilish
              bo‘yicha tanlov e’lon qiladi.
            </p>

            <p>
              Tanlovda qatnashish uchun talabgorlar Markazning internetdagi{" "}
              <a href="mailto:markaz@davaktiv.uz">markaz@davaktiv.uz</a>{" "}
              elektron manziliga 2025 yilning 28 iyuliga qadar:
            </p>
            <ul>
              <li>Nomzodlar ma’lumotnomasi (spravka - ob’ektivka)</li>
              <li>Ma’lumoti (diplom) to‘g‘risida</li>
              <li>Ish faoliyati (mehnat daftarchasidan ko‘chirma)</li>
              <li>Bog‘lanish uchun telefon raqam</li>
              <li>Va boshqa ma’lumotlarni yuborishi lozim</li>
            </ul>

            <p>
              Yuborilgan hujjatlar ko‘rib chiqilib, ma’qul bo‘lganda nomzodlar
              Markazga suhbatga taklif etiladi. Nomzodlar orasidan eng munosib
              nomzod suhbat asosida Markazning tanlov Komissiyasi tomonidan
              tanlab olinadi va u bilan 1 yilgacha bo‘lgan muddatga
              fuqarolik-huquqiy xususiyatga ega muddatli shartnoma tuziladi.
            </p>

            <p>
              Shartnomaga muvofiq, bajaradigan ish natijalariga qarab ish haqi
              belgilanadi.
            </p>

            <h4>Nomzodlarga qo‘yiladigan talablar:</h4>

            <h5>a) Metodologiya va axborot-tahlil bo‘limi uchun:</h5>
            <ul>
              <li>
                Iqtisodiyot, moliya yoki yuridik yo‘nalishlari bo‘yicha bakalavr
                darajasiga ega bo‘lishi (sohadagi tajribasi inobatga olingan
                holda boshqa mutaxassisliklar ham qabul qilinishi mumkin);
              </li>
              <li>
                Davlat tilini mukammal bilishi (rus, ingliz va boshqa tillarni
                bilishi afzallik hisoblanadi);
              </li>
              <li>
                Normativ-huquqiy hujjatlarni tushunishi, ular bilan ishlash va
                ijrosini nazorat qilishni bajara olishi;
              </li>
              <li>
                Word, Excel dasturlarida ishlay olishi va internet tarmog‘ida
                mustaqil foydalanish ko‘nikmasi bo‘lishi.
              </li>
            </ul>

            <h5>b) Buxgalteriya bo‘limi uchun:</h5>
            <ul>
              <li>
                Iqtisodiyot, moliya yoki buxgalteriya yo‘nalishlari bo‘yicha
                bakalavr darajasiga ega bo‘lishi (sohadagi tajribasi inobatga
                olingan holda boshqa mutaxassisliklar ham qabul qilinishi
                mumkin);
              </li>
              <li>
                Buxgalteriya yo‘nalishida kamida 3 yil ish stajiga ega bo‘lishi,
                kamida 1 yil bosh hisobchi lavozimida ishlagan bo‘lishi, UzAsbo
                dasturida mukammal ishlay olishi;
              </li>
              <li>
                Strategik va tahliliy fikr yurita olishi, qarorlarni tez va aniq
                qabul qila olishi;
              </li>
              <li>Davlat tilini mukammal bilishi;</li>
              <li>
                Word, Excel dasturlarida ishlay olishi va internet tarmog‘ida
                mustaqil foydalanish ko‘nikmasi bo‘lishi.
              </li>
            </ul>

            <p>
              <strong>Ma’lumot uchun telefonlar:</strong> (71) 259-(21-23),
              (20-85), (21-59)
            </p>
            <div className="newsTime">18.07.2025</div>
          </div>
        </div>
        
        <div className="MainContent line pb-100">
          <div className="row">
            <div className="newsTitle">Hurmatli tadbirkorlar!</div>
            <div className="newsText">
              <div className="content">
                <p>
                  Davlat aktivlarini boshqarish agentligi huzuridagi Davlat
                  mulki obyektlaridan samarali foydalanish markazining Navoiy
                  viloyati hududiy boshqarmasi tadbirkorlikni rivojlantirish va
                  tadbirkorlarga ko‘maklashish hamda davlat mulkidan yanada
                  samarali foydalanishni tashkil etish maqsadida quyidagi
                  ro‘yxatda keltirilgan, davlat tashkilotlari balansida bo‘lgan
                  bugungi kunda foydalanilmasdan bo‘sh turgan davlat mulki
                  obektlarini uch tomonlama ijara shartnomasi asosida
                  foydalanishga taklif etadi:
                </p>
                <div className=" tble">
                  <table class="table table-sm table-responsive">
                    <thead>
                      <tr>
                        <th>T/R</th>
                        <th>Obektning yuridik manzili</th>
                        <th>Balansda saqlovchi</th>
                        <th>Hudud maydoni kv.m</th>
                        <th>Faoliyat turi</th>
                        <th>Izoh</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="first">1</td>
                        <td>Konimex tuman Navro‘z MFY</td>
                        <td>Konimex tuman kasb-hunar maktabi</td>
                        <td>133 kv.m</td>
                        <td>Tikuvchilik sanoati</td>
                        <td rowSpan="7">
                          O‘zbekiston Respublikasi Prezidentining 2024-yil
                          12-dekabrdagi PQ-430 qaror hamda 2017-yil
                          29-sentabrdagi PQ-3301-sonli qaroriga asosan yangi ish
                          o‘rlarini yaratish sharti bilan 10 yilga “nol”
                          stavkada ijaraga berildi
                        </td>
                      </tr>
                      <tr>
                        <td className="first" rowSpan="2">
                          2
                        </td>
                        <td rowSpan="2">Navbahor tuman Sovungar MFY</td>
                        <td rowSpan="2">
                          Navbahor suv xo‘jaligi va melioratsiya koleji
                        </td>
                        <td>447 kv.m</td>
                        <td>Tikuvchilik sanoati</td>
                      </tr>
                      <tr>
                        <td>18 kv.m</td>
                        <td>Sartaroshxona</td>
                      </tr>
                      <tr>
                        <td className="first">3</td>
                        <td>G’azg’on shahar Tumor MFY</td>
                        <td>Ga’zg’on shahr politexnika texnikumi</td>
                        <td>72.15 kv.m</td>
                        <td>Tikuvchilik sanoati</td>
                      </tr>
                      <tr>
                        <td className="first">4</td>
                        <td>Xatirchi tuman Xonaqa MFY</td>
                        <td>Xatirchi tuman politexnikum</td>
                        <td>48 kv.m</td>
                        <td>Tikuvchilik sanoati</td>
                      </tr>
                      <tr>
                        <td className="first">5</td>
                        <td>Xatirchi tuman Tamabahrin MFY</td>
                        <td>Xatirchi agrotexnologiyalar texnikumi</td>
                        <td>31 kv.m</td>
                        <td>Ishlab chiqarish</td>
                      </tr>
                      <tr>
                        <td className="first">6</td>
                        <td>Nurota tuman, “Eshon Sudir” MFY</td>
                        <td>Nurota tuman 2-son politexnikumi</td>
                        <td>221 kv.m</td>
                        <td>Tikuvchilik, ishlab chiqarish</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p>
                  Jadvalda ko‘rsatilgan davlat obyektlar bo‘yicha to‘liq
                  ma’lumotlarni Davlat mulki obyektlardan samarali foydalanishni
                  tashkil etish markazidan olishingiz mumkin.
                </p>
                <p>
                  <strong>Manzil:</strong> Navoiy viloyati, Navoiy shahri,
                  S.Ayniy ko‘chasi, 27-uy (3-qavat)
                  <br />
                  <strong>Telefon:</strong> (436) 220-62-14
                </p>
              </div>
            </div>
            <div className="newsTime">16.05.2025</div>
          </div>
        </div>
        <div className="MainContent pb-100">
          <div className="row">
            <div className="newsTitle">Qonunchilikdagi yangiliklar</div>
            <div className="col-md-6">
              <img src={corruption} alt="" className="img-fluid newsImage" />
            </div>
            <div className="col-md-6">
              <div className="newsText">
                <div className="content">
                  <p>
                    Korrupsiyaga qarshi kurashish agentligi direktorining
                    “Mavjud manfaatlar to‘qnashuvi to‘g‘risidagi xabarnoma,
                    ehtimoliy manfaatlar to‘qnashuvi to‘g‘risidagi
                    deklaratsiyalar va manfaatlar to‘qnashuvini hisobga olish
                    reyestrining namunaviy shakllarini tasdiqlash haqida”gi
                    buyrug‘i
                    <a
                      href="https://aca.uz/storage/VtK8IS264kpJ2VFAdyDJXuiFAY7HPw-metaMzU2OS5wZGY=-.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      tasdiqlandi
                    </a>
                    .
                  </p>
                  <p>
                    Buyruq ilovasiga muvofiq, davlat organlari yoki boshqa
                    tashkilotlarda quyidagi namunaviy shakllar asosida hujjatlar
                    to‘ldiriladi va yuritiladi:
                  </p>
                  <ul>
                    <li>
                      Mavjud manfaatlar to‘qnashuvi to‘g‘risidagi xabarnoma;
                    </li>
                    <li>
                      Xodimning ehtimoliy manfaatlar to‘qnashuvi to‘g‘risidagi
                      deklaratsiyasi;
                    </li>
                    <li>
                      Aloqador shaxslarning ehtimoliy manfaatlar to‘qnashuvi
                      to‘g‘risidagi deklaratsiyasi;
                    </li>
                  </ul>
                  <p>Manfaatlar to‘qnashuvini hisobga olish reyestri:</p>
                  <ul>
                    <li>
                      Mavjud manfaatlar to‘qnashuvi to‘g‘risidagi xabarnoma
                      davlat organining yoki boshqa tashkilotning xodimida
                      manfaatlar to‘qnashuvi holati vujudga kelganda ushbu xodim
                      tomonidan;
                    </li>
                    <li>
                      Ehtimoliy manfaatlar to‘qnashuvi to‘g‘risidagi
                      deklaratsiya xodim ishga qabul qilinayotganda, boshqa
                      ishga o‘tkazilayotganda va yil yakuniga ko‘ra xodim
                      tomonidan;
                    </li>
                    <li>
                      Aloqador shaxslarning ehtimoliy manfaatlar to‘qnashuvi
                      to‘g‘risidagi deklaratsiya xodimga aloqador shaxslar
                      tomonidan to‘ldiriladi.
                    </li>
                  </ul>
                  <p>
                    Mavjud va ehtimoliy manfaatlar to‘qnashuvi Manfaatlar
                    to‘qnashuvini hisobga olish reyestriga kiritiladi.
                  </p>
                  <p>
                    Ushbu namunaviy shakllar davlat organlari yoki boshqa
                    tashkilotlarda manfaatlar to'qnashuviga oid yuqoridagi
                    hujjatlarning to‘ldirilishi va yuritilishi bo‘yicha bir xil
                    yondashuv va amaliyotni joriy etishni ko‘zda tutadi.
                  </p>
                  <p>
                    Mazkur buyruq joriy yilning 6-dekabr sanasidan eʼtiboran
                    kuchga kiradi.
                  </p>
                </div>
              </div>
              <div className="newsTime">05.11.2024</div>
            </div>
          </div>
        </div>
        <div className="MainContent line pb-100">
          <div className="newsTitle">
            Tizimda korrupsiyaga qarshi kurashish borasida amalga oshirilgan
            ishlar yuzasidan tadbir o‘tkazildi
          </div>

          <div className="newsText">
            <p>
              Joriy yilning 26-fevral kuni Davlat mulki obyektlaridan samarali
              foydalanish markazida Buxoro viloyati prokuraturasining
              “Qonunbuzilishi, uning kelib chiqish sabablari va bunga imkoniyat
              yaratib berayotgan shart-sharoitlarni bartaraf etish to‘g‘risida”
              taqdimnomasi muhokamasi va tizimda korrupsiyaga qarshi kurashish
              borasida amalga oshirilgan ishlar bo‘yicha tadbir o‘tkazildi.
            </p>
            <p>
              Tadbirda O‘zbekiston Respublikasi Bosh prokuraturasi boshqarma
              prokurori A.Yusupov, Davlat aktivlarini boshqarish agentligi
              Korrupsiyaga qarshi kurashish va komplaens bo‘limi boshlig‘i
              A.Rajabov, Davlat mulki obyektlaridan samarali foydalanish
              markaziining markaziy apparati va hududiy boshqarmalari xodimlari
              ishtirok etdi.
            </p>
            <div className="row">
              <div className="col-md-6">
                <img src={tadbir1} alt="" className="img-fluid newsImage" />
              </div>
              <div className="col-md-6">
                <img src={tadbir2} alt="" className="img-fluid newsImage" />
              </div>
            </div>

            <p>
              O‘zbekiston Respublikasi Bosh prokuraturasi boshqarma prokurori
              A.Yusupov Davlat mulki obyektlaridan samarali foydalanish markazi
              tizimida davlat mulkini ijaraga berish sohasida bir qancha ishlar
              amalga oshirilganligini, shu bilan bir qatorda faoliyatda uchrab
              turgan xato va kamchiliklarni, xususan Buxoro viloyati
              prokuraturasining taqdimnomasida qayd etilgan holatlarni inobatga
              olib, ularni bartaraf etish bo‘yicha zarur chora-tadbirlar
              belgilash, kelgusida bu kabi holatlar takrorlanmasligining oldini
              olish yuzasidan profilaktik tadbirlarni amalga oshirish maqsadga
              muvofiqligini ta’kidladi.
            </p>
            <p>
              Shundan so‘ng, Davaktiv agentligining Korrupsiyaga qarshi
              kurashish va komplaens bo‘limi boshlig‘i A.Rajabov so‘zga chiqib,
              Davaktiv agentligi, shu jumladan Davlat mulki obyektlaridan
              samarali foydalanish markazi tizimida korrupsiyaviy omillarni
              bartaraf etish, faoliyatga raqamli texnologiyalarni joriy etish,
              axborot texnologiyalari vositasida xizmatlar ko‘rsatish borasida
              bir qancha ishlar amalga oshirilganligini qayd etdi.
            </p>

            <p>
              Tadbir davomida, video-konferens aloqa orqali bog‘langan hududiy
              boshqarmalar boshliqlarining tushuntirishlari, korrupsiyaning
              oldini olish borasida amalga oshirilgan ishlar yuzasidan
              hisobotlari eshitildi.
            </p>
            <div className="newsTime">29.02.2024</div>
          </div>
        </div>
        <hr></hr>
        <div className="MainContent pb-100">
          <div className="row">
            <div className="newsTitle">
              "Bo‘sh turgan davlat mulki obyektlari to‘g‘risida ma’lumotlar"
              davlat xizmati joriy qilindi
            </div>
            <div className="col-md-6">
              <img src={mygov} alt="" className="img-fluid newsImage" />
            </div>
            <div className="col-md-6">
              <div className="newsText">
                Davlat aktivlarini boshqarish agentligi huzuridagi Davlat mulki
                obyektlaridan samarali foydalanish markazi tomonidan Yagonа
                interаktiv dаvlаt xizmаtlаri portаlidа аxborot berish tusidаgi
                Bo‘sh turgan davlat mulki obyektlari to‘g‘risida ma’lumotlar
                (ro‘yxat) bilan tanishish davlat xizmаti ko'rsatilmoqda.
                <br />
                Quyidagi havola orqali xizmatdan foydalanish mumkin:
                <br />
                <a
                  href="https://my.gov.uz/oz/service/756"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://my.gov.uz/oz/service/756
                </a>
              </div>
              <div className="newsTime">28.12.2023</div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default memo(News);
