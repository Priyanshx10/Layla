import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const BlogPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-grow container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold text-purple-900 mb-8">Blog</h1>
        <p className="text-gray-800 mb-6">
          Explore our latest insights and articles on personal growth, empowerment, and self-improvement.
        </p>
        {/* Content goes here */}
      </main>
      <Footer />
    </div>
  )
}

export default BlogPage