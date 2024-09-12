import { Col, Row, Statistic, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { useGetCryptosQuery } from '../services/cryptoApi';
import millify from 'millify';
import { Link, useNavigate } from 'react-router-dom';
import CryptoCurrencies from './CryptoCurrencies';
import News from './News';

const { Title } = Typography;

const Homepage = () => {

  const {data, isFetching, error} = useGetCryptosQuery();
  const [globalStats,setGlobalStats] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (data?.data?.coins) {
      setGlobalStats(data.data.stats);
    }
  }, [data]);

  if(isFetching) return 'Loading...';


  const customMillify = (data)=>{
    if(!data) return 0;

    return millify(data);
  }

  return (
    <>
      <Title level={2} className='heading' >Global Crypto Stats</Title>
      <Row>
        <Col span={12}> <Statistic title="Total Cryptocurrencies" value={globalStats?.total} /> </Col>
        <Col span={12}> <Statistic title="Total Exchanges" value={customMillify(globalStats?.totalExchanges)} /> </Col>
        <Col span={12}> <Statistic title="Total Market Cap" value={customMillify(globalStats?.totalMarketCap)} /> </Col>
        <Col span={12}> <Statistic title="Total 24h Volume" value={customMillify(globalStats?.total24hVolume)} /> </Col>
        <Col span={12}> <Statistic title="Total Markets" value={customMillify(globalStats?.totalMarkets)} /> </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className='home-title' >Top 10 Cryptocurrencies in the World</Title>
        <Title level={3} className='show-more' ><Link to='/cryptocurrencies'>Show more</Link></Title>
      </div>
      <CryptoCurrencies simplified />
      <div className="home-heading-container">
        <Title level={2} className='home-title' >Latest Crypto News</Title>
        <Title level={3} className='show-more' ><Link to='/news'>Show more</Link></Title>
      </div>
      <News simplified />
    </>
  );
}

export default Homepage