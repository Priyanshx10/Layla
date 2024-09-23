import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Introduction from '../components/Introduction';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Head>
        <title>Layla Ashcroft - Empowering Women</title>
        <meta name="description" content="Layla Ashcroft helps women structure their lives and achieve their goals without restrictive dieting." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex-grow flex flex-col items-center justify-center">
        <Hero />
        <Introduction />
      </main>

      <Footer />
    </div>
  );
}