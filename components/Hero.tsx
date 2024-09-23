import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-purple-200 py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-purple-800 mb-4">Unlock Your Inner Strength</h1>
        <p className="text-xl md:text-2xl text-purple-700 mb-8 max-w-3xl mx-auto">
          Break free from dieting and discover a healthier, happier you. Embrace a lifestyle that focuses on self-love, balance, and wellness.
        </p>
        <Link href="/services" className="bg-purple-600 text-white py-3 px-8 rounded-full hover:bg-purple-700 transition duration-300 shadow-lg">
          Begin Your Journey
        </Link>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-purple-200 bg-opacity-50 py-4 text-purple-800 text-center">
        <p className="text-sm md:text-base">Join a community that celebrates self-love and self-care. Together, we can achieve our goals!</p>
      </div>
      {/* Decorative Elements */}
      <div className="absolute inset-x-0 top-0 -z-10">
        <svg viewBox="0 0 1440 320" className="w-full">
          <path fill="#E9D8FD" fillOpacity="1" d="M0,128L30,144C60,160,120,192,180,202.7C240,213,300,203,360,186.7C420,171,480,149,540,138.7C600,128,660,128,720,144C780,160,840,192,900,202.7C960,213,1020,192,1080,170.7C1140,149,1200,127,1260,117.3C1320,107,1380,109,1410,110.7L1440,112L1440 320L1410 320C1380 320 1320 320 1260 320C1200 320 1140 320 1080 320C1020 320 960 320 900 320C840 320 780 320 720 320C660 320 600 320 540 320C480 320 420 320 360 320C300 320 240 320 180 320C120 320 60 320 30 320H0Z"></path>
        </svg>
      </div>
    </section>
  );
}