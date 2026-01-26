import Link from 'next/link'
import React from 'react'
import { FaEnvelope } from 'react-icons/fa'

const CallToAction = () => {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center px-5 sm:px-8">
        <div 
            className="relative z-10 flex min-h-screen items-center px-5 sm:px-8"
        >
           
            <div
                className='w-full max-w-4xl mt-28 md:mt-10'
                style={{
                    backgroundColor: "hsl(var(--primary))",
                }}
            >
                <p>
                    <FaEnvelope />
                    Let's Talk
                </p>
                <div>
                    <h2>
                        Ready to Transform Your Digital Presence?
                    </h2>
                    <p>
                        Let's discuss your next project. Our team is ready to help you build something extraordinary.
                    </p>
                </div>
                <div>
                    <Link href="/contact">
                        <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition duration-300">
                            Get Started
                        </button>
                    </Link>
                    <Link href="/Portfolio" className="ml-4">
                        <button className="text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition duration-300">
                            View Our Work
                        </button>
                    </Link>
                </div>

            </div>

        </div>
    </section>
  )
}

export default CallToAction