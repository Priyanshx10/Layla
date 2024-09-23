import Link from 'next/link'
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter, FaPinterest, FaYoutube } from 'react-icons/fa'
import { BiEnvelope } from 'react-icons/bi'

export default function Footer() {
  return (
    <footer className="bg-purple-100 py-8 transition-all duration-300 ease-in-out hover:bg-purple-200">
      <div className="container mx-auto text-center">
        <p className="text-purple-800 transition-colors duration-300 ease-in-out hover:text-purple-600 mb-4">&copy; {new Date().getFullYear()} Layla Ashcroft. All rights reserved.</p>
        <div className="flex flex-wrap justify-center mb-4">
          <Link href="/privacy-policy" className="text-purple-800 hover:text-purple-600 mx-2 transition-colors duration-300 ease-in-out">Privacy Policy</Link>
          <Link href="/terms-of-service" className="text-purple-800 hover:text-purple-600 mx-2 transition-colors duration-300 ease-in-out">Terms of Service</Link>
          <a href="mailto:info@laylaashcroft.com" className="text-purple-800 hover:text-purple-600 mx-2 transition-colors duration-300 ease-in-out"><BiEnvelope /></a>
        </div>
        <div className="flex justify-center mb-4">
          <a href="#" className="text-purple-800 hover:text-purple-600 mx-2 transition-colors duration-300 ease-in-out"><FaInstagram /></a>
          <a href="#" className="text-purple-800 hover:text-purple-600 mx-2 transition-colors duration-300 ease-in-out"><FaFacebook /></a>
          <a href="#" className="text-purple-800 hover:text-purple-600 mx-2 transition-colors duration-300 ease-in-out"><FaLinkedin /></a>
          <a href="#" className="text-purple-800 hover:text-purple-600 mx-2 transition-colors duration-300 ease-in-out"><FaTwitter /></a>
          <a href="#" className="text-purple-800 hover:text-purple-600 mx-2 transition-colors duration-300 ease-in-out"><FaPinterest /></a>
          <a href="#" className="text-purple-800 hover:text-purple-600 mx-2 transition-colors duration-300 ease-in-out"><FaYoutube /></a>
        </div>
        <p className="text-purple-700">Stay connected with us on social media for the latest updates and insights.</p>
      </div>
    </footer>
  )
}