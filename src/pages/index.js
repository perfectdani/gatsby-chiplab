/* eslint-disable react/no-unescaped-entities */
import * as React from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../components/layout/Layout';
import { shopByMaterial, shopByStyle, shopByUse } from '../data/shop';
import CategoryPreview from '../sections/CategoryPreview';
import Cta from '../sections/Cta';
import CustomerSay from '../sections/CustomerSay';
import Feature from '../sections/Feature';
import Hero from '../sections/Hero';
import InstagramFeed from '../sections/InstagramFeed';
import NewsLetter from '../sections/NewsLetter';
import OrderingProcess from '../sections/OrderingProcess';

const IndexPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Create Custom Poker Chips and more - Chiplab </title>
      </Helmet>
      <main>
        <Hero />
        <Feature />
        <CategoryPreview category={shopByMaterial} type='material' />
        <CategoryPreview category={shopByStyle} type='style' />
        <OrderingProcess />
        <CategoryPreview category={shopByUse} type='use' />
        <InstagramFeed />
        <CustomerSay />
        <Cta />
        <NewsLetter />
      </main>
    </Layout>
  );
};

export default IndexPage;
