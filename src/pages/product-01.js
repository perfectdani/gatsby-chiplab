/* eslint-disable react/no-unescaped-entities */
import * as React from 'react';
import { Helmet } from 'react-helmet';
import Layout from 'src/components/layout/Layout';
import SubHeader from 'src/components/layout/SubHeader';
import Benefit from 'src/sections/home/Benefit';
import ByUse from 'src/sections/home/ByUse';
import PriceList from 'src/sections/product/PriceList';
import WithImageGrid from 'src/sections/product/WithImageGrid';
import CustomerSay from 'src/sections/home/CustomerSay';
import CustomPoker from 'src/sections/home/CustomPoker';
import Hero from 'src/sections/home/Hero';
import InstagramFeed from 'src/sections/home/InstagramFeed';
import Material from 'src/sections/home/Material';
import Style from 'src/sections/home/Style';
import TryBeforeBuy from 'src/sections/home/TryBeforeBuy';

import SignUpList from '../sections/home/SignUpList';

const IndexPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Create Custom Poker Chips and more - Chiplab </title>
      </Helmet>
      <main>
        <WithImageGrid /> 
        <Benefit />
        <Material />
        <Style />
        <CustomPoker />
        <ByUse />
        <InstagramFeed />
        <CustomerSay />
        <TryBeforeBuy />
        <SignUpList />
      </main>
    </Layout>
  );
};

export default IndexPage;
