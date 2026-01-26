import React from 'react'

// const services = [
//   {
//     icon: Code2,
//     title: "Web Development",
//     description: "Custom web applications built with modern frameworks. From MVPs to enterprise-grade platforms, we deliver performant, scalable solutions.",
//   },
//   {
//     icon: Palette,
//     title: "Product Design",
//     description: "User-centered design that converts. We craft intuitive interfaces, design systems, and experiences that users love.",
//   },
//   {
//     icon: Cloud,
//     title: "Cloud & Scaling",
//     description: "Infrastructure that grows with you. Cloud architecture, DevOps, and performance optimization for seamless scaling.",
//   },
//   {
//     icon: Lightbulb,
//     title: "Digital Strategy",
//     description: "Data-driven roadmaps for digital success. We align technology initiatives with business goals for maximum impact.",
//   },
// ];

const Services = () => {
  return (
    <div 
        className='flex items-center justify-center py-12 px-6'>
            <div className='w-full max-w-4xl text-center mt-8'>
                <p
                    style={{ color: "hsl(var(--primary))" }}
                    className='font-medium text-sm uppercase tracking-wider mb-2 block'
                >
                    Services
                </p>
                <h1 
                    style={{
                        color: "hsl(var(--foreground))"
                    }}
                    className='text-3xl md:text-4xl lg:text-5xl font-bold mb-6'>
                    What We 
                    <span style={{ color: "hsl(var(--primary))" }}> Do Best </span> 
                </h1>
                <p
                    style={{ color: "hsl(var(--muted-foreground))" }}
                    className='max-w-2xl mx-auto text-lg'
                >
                    End-to-end digital solutions designed to transform your business and deliver measurable results.
                </p>
            </div>
    </div>
  )
}

export default Services