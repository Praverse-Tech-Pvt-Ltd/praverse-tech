
"use client";
import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Globe,
} from "lucide-react";
import { FooterBackgroundGradient, TextHoverEffect } from "@/components/ui/hover-footer";
import Link from "next/link";
import { WaitlistDialog } from "../healthmate/WaitlistDialog";

export function Footer() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  // Footer link data
  const footerLinks = [
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Domains", href: "/#domains" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Privacy Policy", href: "/privacy" },
      ],
    },
    {
      title: "Products",
      links: [
        { label: "HealthMate", href: "/healthmate" },
        { label: "HealthMate Terms", href: "/healthmate-terms" },
        { label: "Join Waitlist", href: "#", pulse: true, onClick: () => setIsWaitlistOpen(true) },
      ],
    },
  ];

  // Contact info data
  const contactInfo = [
    {
      icon: <Mail size={18} className="text-[#3ca2fa]" />,
      text: "pratham@praversetech.com",
      href: "mailto:pratham@praversetech.com",
    },
    {
      icon: <Phone size={18} className="text-[#3ca2fa]" />,
      text: "+91 86373 73116",
      href: "tel:+918637373116",
    },
    {
      icon: <MapPin size={18} className="text-[#3ca2fa]" />,
      text: "Vadodara, Gujarat, India",
    },
  ];

  // Social media icons
  const socialLinks = [
    { icon: <Linkedin size={20} />, label: "LinkedIn", href: "https://www.linkedin.com/in/pratham-shrivastav-b81180251/" },
  ];

  return (
    <footer className="bg-background relative h-fit rounded-3xl overflow-hidden mb-8 mt-16 mx-4 md:mx-8 border border-border/10">
      <div className="max-w-7xl mx-auto p-8 md:p-14 z-50 relative pointer-events-none">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-16 pb-12 pointer-events-auto">
          {/* Brand section */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-[#3ca2fa] text-3xl font-extrabold flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#3ca2fa] fill-current">
                   <path d="M12 2L22 7.77V16.22L12 22L2 16.22V7.77L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span className="text-foreground text-3xl font-bold tracking-tight">PRAVERSE</span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground mt-2">
              Praverse Tech pioneers intelligent systems that learn, perceive, and collaborate. Bringing validated innovations to market.
            </p>
          </div>

          {/* Footer link sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-foreground text-lg font-semibold mb-6">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label} className="relative flex items-center">
                    {link.onClick ? (
                       <button
                         onClick={(e) => { e.preventDefault(); link.onClick(); }}
                         className="text-muted-foreground hover:text-[#3ca2fa] transition-colors text-left"
                       >
                         {link.label}
                       </button>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-muted-foreground hover:text-[#3ca2fa] transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                    {link.pulse && (
                      <span className="relative ml-2 flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3ca2fa] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3ca2fa]"></span>
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact section */}
          <div>
            <h4 className="text-foreground text-lg font-semibold mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-start space-x-3 text-muted-foreground">
                  <span className="mt-1">{item.icon}</span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="hover:text-[#3ca2fa] transition-colors"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="hover:text-[#3ca2fa] transition-colors">
                      {item.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0 text-muted-foreground mb-8 pointer-events-auto">
          {/* Social icons */}
          <div className="flex space-x-6">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="hover:text-[#3ca2fa] transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p>
              &copy; {new Date().getFullYear()} Praverse Tech Pvt Ltd. All rights reserved.
            </p>
            <p className="text-xs mt-1">HealthMate is proprietary and patent-pending.</p>
          </div>
        </div>

        <hr className="border-t border-border/40 my-8 mix-blend-overlay" />
      </div>

      {/* Text hover effect */}
      <div className="lg:flex hidden h-[30rem] -mt-52 -mb-36 pointer-events-none relative z-10">
        <TextHoverEffect text="PRAVERSE" className="z-10 pointer-events-auto" />
      </div>

      <FooterBackgroundGradient />
      
      <WaitlistDialog open={isWaitlistOpen} onOpenChange={setIsWaitlistOpen}>
        <span className="sr-only">Open Waitlist</span>
      </WaitlistDialog>
    </footer>
  );
}
