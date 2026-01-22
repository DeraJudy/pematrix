import React from 'react'
import { FaTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

const footerLinks = {
  company: [
    { name: "About", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Blog", href: "#" },
  ],
  services: [
    { name: "Web Development", href: "#services" },
    { name: "Product Design", href: "#services" },
    { name: "Cloud Solutions", href: "#services" },
  ],
  legal: [
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
    { name: "Cookies", href: "#" },
  ],
};

const socialLinks = [
  { icon: FaTwitter, href: "#", label: "Twitter" },
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  { icon: FaFacebookF, href: "#", label: "Facebook" },
];

const Footer = () => {
  return (
    <footer
      style={{
        borderColor: "hsl(var(--border))",
      }}
      className="pt-16 pb-8 border-t w-full px-4 md:px-12 sm:px-20 lg:px-8 py-4">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-block mb-4">
              <span
                style={{
                  color: "hsl(var(--primary))",
                }}
                className="text-3xl font-black">
                Pematrix
              </span>
            </a>
            <p
              style={{
                color: "hsl(var(--muted-foreground))",
              }}
              className="mb-6 max-w-sm">
              Empowering businesses with innovative digital solutions.
              Let's build something extraordinary together.
            </p>

          </div>

          {/* Links */}
          <div>
            <h4
              style={{
                color: "hsl(var(--secondary-foreground))",
              }}
              className="font-display font-semibold text-lg">Company</h4>
            <ul className="space-y-3 mt-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    style={{
                      color: "hsl(var(--muted-foreground))",
                    }}
                    className="hover:text-blue-500 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              style={{
                color: "hsl(var(--secondary-foreground))",
              }}
              className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    style={{
                      color: "hsl(var(--muted-foreground))",
                    }}
                    className="hover:text-blue-500 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              style={{
                color: "hsl(var(--secondary-foreground))",
              }}
              className="font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    style={{
                      color: "hsl(var(--muted-foreground))",
                    }}
                    className="hover:text-blue-500 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p
            style={{
              color: "hsl(var(--foreground))",
            }}
            className="font-medium text-sm">
            © {new Date().getFullYear()} Pematrix. All rights reserved.
          </p>

          <div className="flex items-center gap-4">

            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  style={{
                    color: "hsl(var(--foreground))"
                  }}
                  className="
                    hover:text-[hsl(var(--foreground))]
                    transition-colors"
                  >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer