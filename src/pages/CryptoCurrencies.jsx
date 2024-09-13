import React, { useEffect, useState } from "react";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { Card, Col, Input, Row, Spin } from "antd";
import millify from "millify";
import { Link } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";

let count=0;

const CryptoCurrencies = ({simplified}) => {
  const limit = simplified ? 10 : 100;  // limit of getting cryptos
  const { data: cryptoList, isFetching} = useGetCryptosQuery(limit);

  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const filterCryptos = () => {
      const coins = cryptoList?.data?.coins || [];
      return coins.filter(coin =>
        coin.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    };

    if (cryptoList) {
      setCryptos(filterCryptos());
    }
  }, [cryptoList, searchTerm]);

  if(isFetching) return <div className="loading"><Spin indicator={ <LoadingOutlined style={{fontSize: 48, }} spin/> }/></div>;;

  return (
    <>

      {!simplified && (
        <div className="search-crypto">
        <Input placeholder="Search Cryptocurrency" onChange={(e)=>setSearchTerm(e.target.value)}  />
      </div>
      )}
      <Row gutter={[32, 32]} className="crypto-card-container" >
        {cryptos && cryptos.map((currency) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.uuid}>
            <Link to={`/crypto/${currency.uuid}`} >
            <Card
              title={`${currency.rank}. ${currency.name}`}
              extra={ <img src={currency.iconUrl} className="crypto-image" /> }
              hoverable
            >
              <p>Price: {millify(currency.price)}</p>
              <p>Market Cap: {millify(currency.marketCap)}</p>
              <p>Daily Change: {millify(currency.change)}%</p>
            </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default CryptoCurrencies;
