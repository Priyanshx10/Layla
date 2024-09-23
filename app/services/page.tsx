import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import CoachingInquiryForm from '../../components/CoachingInquiryForm'

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Head>
        <title>Services - Layla Ashcroft</title>
        <meta name="description" content="Explore Layla Ashcroft's coaching services for women's empowerment and life structuring." />
      </Head>

      <Header />

      <main className="flex-grow container mx-auto py-8">
        <h1 className="text-4xl font-bold text-purple-800 mb-6">Our Services</h1>
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-purple-700 mb-4">1-1 Online Coaching</h2>
          <p className="text-gray-700 mb-4">
            [Description of personalized coaching sessions and benefits of working with Layla]
          </p>
        </section>
        <section>
          <h2 className="text-3xl font-semibold text-purple-700 mb-4">Coaching Inquiry Form</h2>
          <p className="text-gray-700 mb-4">Fill in the form below for more information:</p>
          <CoachingInquiryForm />
        </section>
      </main>

      <Footer />
    </div>
  )
}
