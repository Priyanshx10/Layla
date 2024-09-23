'use client'

import { useState } from 'react'

export default function CoachingInquiryForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    instagramHandle: '',
    phoneNumber: '',
    goals: '',
    struggles: '',
    desiredOutcome: '',
    startRightAway: false
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend or a service like Formspree
    console.log(formData)
    alert('Form submitted successfully!')
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg space-y-4">
      <div>
        <label htmlFor="fullName" className="block text-gray-700 font-bold mb-2">Full Name *</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:ring-2"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email Address *</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:ring-2"
        />
      </div>
      <div>
        <label htmlFor="instagramHandle" className="block text-gray-700 font-bold mb-2">Instagram Handle</label>
        <input
          type="text"
          id="instagramHandle"
          name="instagramHandle"
          value={formData.instagramHandle}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:ring-2"
        />
      </div>
      <div>
        <label htmlFor="phoneNumber" className="block text-gray-700 font-bold mb-2">Phone Number *</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:ring-2"
        />
      </div>
      <div>
        <label htmlFor="goals" className="block text-gray-700 font-bold mb-2">What&apos;s the #1 thing you want to achieve? *</label>
        <textarea
          id="goals"
          name="goals"
          value={formData.goals}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:ring-2"
        ></textarea>
      </div>
      <div>
        <label htmlFor="struggles" className="block text-gray-700 font-bold mb-2">What&apos;s your biggest struggle with [specific area]? *</label>
        <textarea
          id="struggles"
          name="struggles"
          value={formData.struggles}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:ring-2"
        ></textarea>
      </div>
      <div>
        <label htmlFor="desiredOutcome" className="block text-gray-700 font-bold mb-2">In the next 60 days, what&apos;s the best possible outcome of us working together? *</label>
        <textarea
          id="desiredOutcome"
          name="desiredOutcome"
          value={formData.desiredOutcome}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:ring-2"
        ></textarea>
      </div>
      <div>
        <label className="flex items-center">
          <input
            type="checkbox"
            name="startRightAway"
            checked={formData.startRightAway}
            onChange={handleChange}
            className="mr-2"
          />
          <span className="text-gray-700">Is this something you would like to start right away?</span>
        </label>
      </div>
      <button type="submit" className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300 shadow-lg">
        Submit Inquiry
      </button>
    </form>
  )
}