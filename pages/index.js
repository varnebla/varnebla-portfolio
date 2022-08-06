import Head from 'next/head';
import PresentationSection from '../components/PresentationSection';
import DescriptionSection from '../components/DescriptionSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>Victor Arnedo Blanco</title>
        <meta name="description" content="Victor Arnedo portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PresentationSection />
      <DescriptionSection />
    </>
  );
}
