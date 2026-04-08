"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { FooterBackgroundGradient, TextHoverEffect } from "@/components/ui/hover-footer";
import Link from "next/link";
import { WaitlistDialog } from "../healthmate/WaitlistDialog";
import {
  COMPANY_CITY,
  COMPANY_EMAIL,
  COMPANY_PHONE_DISPLAY,
  COMPANY_PHONE_TEL,
} from "@/lib/site";
import {
  MENNIE_NAME,
  MENNIE_PRIVACY_LABEL,
  MENNIE_WAITLIST_LABEL,
  MENNIE_LEGAL_LABEL,
} from "@/lib/mennie";

export function Footer() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const footerLinks = [
    {
      title: "Explore",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Domains", href: "/domains" },
        { label: "Insights", href: "/blog" },
        { label: "Contact Us", href: "/contact" },
      ],
    },
    {
      title: "Actions",
      links: [
        { label: "Discuss a Project", href: "/contact" },
        { label: MENNIE_WAITLIST_LABEL, href: "#", pulse: true, onClick: () => setIsWaitlistOpen(true) },
        { label: "Innovate With Us", href: "/innovate" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Terms of Service", href: "/terms" },
        { label: "Privacy Policy", href: "/privacy" },
        { label: MENNIE_LEGAL_LABEL, href: "/healthmate-terms" },
        { label: MENNIE_PRIVACY_LABEL, href: "/healthmate-privacy" },
      ],
    },
  ];

  const contactInfo = [
    {
      icon: <Mail size={18} className="text-[#3ca2fa]" />,
      text: COMPANY_EMAIL,
      href: `mailto:${COMPANY_EMAIL}`,
    },
    {
      icon: <Phone size={18} className="text-[#3ca2fa]" />,
      text: COMPANY_PHONE_DISPLAY,
      href: COMPANY_PHONE_TEL,
    },
    {
      icon: <MapPin size={18} className="text-[#3ca2fa]" />,
      text: COMPANY_CITY,
    },
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/pratham-shrivastav-b81180251/",
    },
  ];

  return (
    <footer className="relative mx-4 mb-8 mt-16 h-fit overflow-hidden rounded-3xl border border-border/10 bg-background md:mx-8">
      <div className="relative z-50 mx-auto max-w-7xl p-8 pointer-events-none md:p-14">
        <div className="grid grid-cols-1 gap-12 pb-12 pointer-events-auto md:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr_1fr_1.2fr] lg:gap-10">
          <div className="flex flex-col space-y-4 lg:col-span-2">
            <div className="flex items-center space-x-2">
              <span className="flex items-center justify-center text-3xl font-extrabold text-[#3ca2fa]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current text-[#3ca2fa]"
                >
                  <path
                    d="M12 2L22 7.77V16.22L12 22L2 16.22V7.77L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-3xl font-bold tracking-tight text-foreground">
                PRAVERSE
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Praverse Tech builds AI products and applied intelligent systems
              for healthcare, pharma, and industrial intelligence teams.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              From applied AI systems to healthcare innovation, we help turn
              complex ideas into deployable products.
            </p>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="mb-6 text-lg font-semibold text-foreground">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label} className="relative flex items-center">
                    {link.onClick ? (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          link.onClick();
                        }}
                        className="text-left text-muted-foreground transition-colors hover:text-[#3ca2fa]"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-muted-foreground transition-colors hover:text-[#3ca2fa]"
                      >
                        {link.label}
                      </Link>
                    )}
                    {link.pulse && (
                      <span className="relative ml-2 flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#3ca2fa] opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-[#3ca2fa]" />
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="mb-6 text-lg font-semibold text-foreground">
              Contact
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-start space-x-3 text-muted-foreground">
                  <span className="mt-1">{item.icon}</span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="transition-colors hover:text-[#3ca2fa]"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-8 flex flex-col items-center justify-between space-y-4 text-sm text-muted-foreground pointer-events-auto md:flex-row md:space-y-0">
          <div className="flex space-x-6">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="transition-colors hover:text-[#3ca2fa]"
              >
                {icon}
              </a>
            ))}
          </div>

          <div className="text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} Praverse Tech Pvt Ltd. All rights reserved.</p>
            <p className="mt-1 text-xs">{MENNIE_NAME} is currently in development.</p>
          </div>
        </div>

        <hr className="my-8 border-t border-border/40 mix-blend-overlay" />
      </div>

      <div className="relative z-10 -mb-36 -mt-52 hidden h-[30rem] pointer-events-none lg:flex">
        <TextHoverEffect text="PRAVERSE" className="z-10 pointer-events-auto" />
      </div>

      <FooterBackgroundGradient />

      <WaitlistDialog open={isWaitlistOpen} onOpenChange={setIsWaitlistOpen}>
        <span className="sr-only">Open Waitlist</span>
      </WaitlistDialog>
    </footer>
  );
}
