// import { css } from '@emotion/react';
import Head from 'next/head';
// import Link from 'next/link';
import HeroImage from '../components/HeroImage';
import Layout from '../components/Layout';
import ProductSection from '../components/ProductSection';

// import heroPicture from '../public/images/bayc-mutant-hero.jpeg';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>N.F.T. Marketplace</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <section>
        <HeroImage />
      </section>

      <section>
        <h2>Collection of the week</h2>
        <ProductSection />
      </section>
    </Layout>
  );
}
