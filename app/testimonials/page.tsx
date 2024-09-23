import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '@/components/Footer'

export default function Testimonials() {
  const testimonials = [
    { id: 1, name: 'Jane Doe', quote: 'Working with Layla has been transformative. I have never felt more empowered and in control of my life.' },
    { id: 2, name: 'Emily Smith', quote: 'Layla\'s approach to coaching is refreshing. She helped me achieve my goals without restrictive dieting.' },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Testimonials - Layla Ashcroft</title>
        <meta name="description" content="Read success stories from women who have worked with Layla Ashcroft." />
      </Head>

      <Header />

      <main className="flex-grow container mx-auto py-8">
        <h1 className="text-3xl font-bold text-purple-800 mb-6">Client Success Stories</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="bg-purple-100 p-6 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4">&quot;{testimonial.quote}&quot;</p>
              <p className="text-purple-800 font-semibold">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
