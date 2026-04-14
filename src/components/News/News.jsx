import React, { memo } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./news.css";
import { useTranslation } from "react-i18next";
import { useLang } from "../../context/language";
import { mockNewsData } from "./mockNewsData";

const News = () => {
  const { t } = useTranslation();
  const [lang] = useLang();

  return (
    <div className="newsContent">
      <Container>
        <h3 className="newsTitle">{t("News.title")}</h3>
        <div className="newsTitleBar" />

        {mockNewsData.length > 0 && (
          <div className="newsList">
            {mockNewsData.map((item) => {
              const title = lang === "uz" ? item.title : item.titleRu || item.title;
              const imageSrc = item.image || "";

              return (
                <Link to={`/articles/${item.id}`} className="newsItem" key={item.id}>
                  <div className="newsItemImageWrap">
                    {imageSrc ? (
                      <img src={imageSrc} alt={title || "news"} className="newsItemImage" />
                    ) : (
                      <div className="newsItemImagePlaceholder">Yangiliklar</div>
                    )}
                  </div>

                  <div className="newsItemBody">
                    <h4 className="newsItemTitle">{title || "Sarlavhasiz yangilik"}</h4>
                    <div className="newsItemMeta">
                      <span>{new Date(item.createdAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        {mockNewsData.length === 0 && (
          <div className="newsState">Hozircha yangiliklar mavjud emas.</div>
        )}
      </Container>
    </div>
  );
};

export default memo(News);
