import React, { useState } from "react";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import { Avatar, Card, Col, Row, Select, Typography } from "antd";
import { Link } from "react-router-dom";
import moment from "moment";
import { useGetCryptosQuery } from "../services/cryptoApi";

const { Title, Text } = Typography;

const demoImage =
  "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

const News = ({ simplified }) => {

  const [newsCategory, setNewsCategory] = useState("cryptocurrency");

  const { data: cryptoList } = useGetCryptosQuery(100);
  const {
    data: cryptoNews,
    isFetching,
    error,
  } = useGetCryptoNewsQuery({
    newsCategory,
    limit: simplified ? 6 : 12,
  });

   const coinNames = cryptoList?.data?.coins.map((coin)=> ({
    value: coin.name,
    label: coin.name,
  }) )
  
  if (isFetching) return "Loading...";

  if (error) return (
    `${error.data.message}`
  )

  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select
            placeholder="Select a Crypto"
            optionFilterProp="label"
            onChange={(value)=> setNewsCategory(value)} 
            options={[
              {
                value: "Cryptocurrency",
                label: "Cryptocurrency",
              },
              ...coinNames 
            ]}
          />
        </Col>
      )}

      {cryptoNews?.data?.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <Link to={news.url} target="_blank" rel="noopener noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>
                  {news.title}
                </Title>
                <div className="news-thumbnail-container">
                  <img src={news?.thumbnail || demoImage} alt="" />
                </div>
              </div>
              <p>
                {news?.excerpt?.length > 200
                  ? `${news?.excerpt?.substring(0, 100)}... Read More`
                  : `${news?.excerpt}`}
              </p>
              <div className="provider-container">
                <div>
                  <Avatar src={news?.publisher?.favicon || demoImage} alt="" />
                  <Text className="provider-name">{news?.publisher?.name}</Text>
                </div>
                <Text>{moment(news.date).startOf("ss").fromNow()}</Text>
              </div>
            </Link>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
