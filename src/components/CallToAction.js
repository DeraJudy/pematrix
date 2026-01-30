import Link from 'next/link'
import React from 'react'
import { FaArrowRight, FaEnvelope } from 'react-icons/fa'

const CallToAction = () => {
    return (
        <section
            className="relative overflow-hidden w-full flex items-center justify-center px-6 lg:px-0 py-10 pb-24"
            style={{ backgroundColor: "hsl(var(--secondary))" }}
        >

            <div className="mx-auto max-w-7xl w-full">

                <div
                    className='flex flex-col items-center rounded-2xl mt-28 md:mt-10 px-9 py-10 md:py-20  '
                    style={{
                        backgroundColor: "hsl(var(--primary))",
                    }}
                >
                    <p
                        style={{
                            borderColor: "hsl(var(--ring))",
                            backgroundColor: "hsl(var(--card) / 80%)",
                        }}
                        className='flex items-center lg:max-w-1/5 gap-2 rounded-full border px-4 py-2'
                    >
                        <FaEnvelope size={17} style={{ color: "hsl(var(--primary))" }} />
                        Let's Talk
                    </p>
                    <div className='text-center mt-7'>
                        <h2
                            className='text-3xl sm:text-5xl mx-auto max-w-xl md:max-w-lg mb-5 font-bold'
                            style={{
                                color: "hsl(var(--background))",
                            }}
                        >
                            Ready to Transform Your Digital Presence?
                        </h2>
                        <p
                            className='text-sm md:text-lg max-w-sm md:max-w-2xl mx-auto font-semibold'
                            style={{
                                color: "hsl(var(--background))",
                            }}
                        >
                            Let's discuss your next project. Our team is ready to help you build something extraordinary.
                        </p>
                    </div>
                    <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:justify-start sm:gap-4 lg:max-w-4xl">
                        <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:gap-4 sm:justify-center lg:max-w-4xl lg:mx-auto">
                            <Link
                                href="/contact"
                                className="inline-flex w-full items-center justify-center gap-2 rounded-lg font-bold transition duration-300
                                px-6 py-3 text-sm hover:bg-gray-100 sm:w-auto sm:px-10 sm:text-base lg:px-12 lg:py-3"
                                style={{
                                    color: "hsl(var(--foreground))",
                                    backgroundColor: "hsl(var(--background))",
                                }}
                            >
                                Get Started
                                <FaArrowRight size={16} />
                            </Link>

                            <Link
                                href="/portfolio"
                                className="inline-flex w-full items-center justify-center rounded-lg border font-bold transition duration-300 
                                px-6 py-3 text-sm hover:bg-gray-100 sm:w-auto sm:px-10 sm:text-base lg:px-12 lg:py-3"
                                style={{
                                    color: "hsl(var(--foreground))",
                                    borderColor: "hsl(var(--border))",
                                }}
                            >
                                View Our Work
                            </Link>
                        </div>

                    </div>


                </div>

            </div>
        </section>
    )
}

export default CallToAction