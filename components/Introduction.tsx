export default function Introduction() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-800 to-purple-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Welcome to Your Journey</h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-center mb-6">
          I&apos;m Layla Ashcroft, and my mission is to help women structure their lives and achieve their goals without the burden of restrictive dieting. Through personalized coaching and a holistic approach, we&apos;ll work together to create lasting change and empower you to love every step of your journey.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8">
          <div className="bg-white text-purple-800 p-6 rounded-lg shadow-lg mx-4 mb-4 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Personalized Coaching</h3>
            <p>Receive tailored guidance that fits your unique lifestyle and goals.</p>
          </div>
          <div className="bg-white text-purple-800 p-6 rounded-lg shadow-lg mx-4 mb-4 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Holistic Approach</h3>
            <p>Focus on mental, emotional, and physical well-being for sustainable results.</p>
          </div>
          <div className="bg-white text-purple-800 p-6 rounded-lg shadow-lg mx-4">
            <h3 className="text-xl font-semibold mb-2">Community Support</h3>
            <p>Join a supportive network of women on similar journeys.</p>
          </div>
        </div>
      </div>
    </section>
  );
}