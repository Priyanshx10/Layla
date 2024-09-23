import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link'; // Added import statement for Link

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Head>
        <title>About Layla Ashcroft</title>
        <meta name="description" content="Discover Layla Ashcroft's inspiring journey and philosophy in empowering women." />
      </Head>

      <Header />

      <main className="flex-grow container mx-auto py-8 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-8 text-center">About Layla Ashcroft</h1>
        
        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-purple-800 mb-6">My Journey</h2>
          <p className="text-gray-800 mb-6">
            Layla Ashcroft&apos;s personal story is one of resilience, determination, and a passion for empowering women. With a background in coaching and wellness, Layla has dedicated her life to helping women unlock their full potential through personalized guidance and support.
          </p>
          <p className="text-gray-800 mb-6">
            After overcoming her own challenges with self-esteem and body image, she realized the importance of self-love and balance in achieving true happiness. This realization led her to create a community where women can come together to share their experiences and grow.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-purple-800 mb-6">Vision and Values</h2>
          <ul className="list-disc list-inside text-gray-800 mb-6">
            <li>Empowerment through Education</li>
            <li>Authenticity in Leadership</li>
            <li>Community Support and Collaboration</li>
            <li>Inclusivity and Diversity</li>
          </ul>
          <p className="text-gray-800">
            Layla believes that by fostering these values, we can create a supportive environment where every woman feels valued and empowered to pursue her dreams.
          </p>
        </section>

        <section>
          <h2 className="text-3xl md:text-4xl font-semibold text-purple-800 mb-6">Join Us</h2>
          <p className="text-gray-800 mb-6">
            If you’re ready to take the next step in your journey, connect with us today! Together, we can achieve your goals and create a life filled with purpose and joy.
          </p>
          <Link href="/contact" className="bg-purple-600 text-white py-3 px-8 rounded-full hover:bg-purple-700 transition duration-300 shadow-lg inline-block">
            Get in Touch
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}