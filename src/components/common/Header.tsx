"use client";

import React from "react";
import { NavBar } from "@/components/ui/tubelight-navbar";

const navItems = [
  { name: 'Home', url: '/' },
  { name: 'Domains', url: '/#domains' },
  { name: 'Enterprise', url: '/enterprise' },
  {
    name: 'Explore',
    url: '#',
    subItems: [
      { name: 'Machine Learning', url: '/machine-learning' },
      { name: 'Industrial Robotics', url: '/industrial-robotics' },
      { name: 'HealthMate', url: '/healthmate' },
      { name: 'Innovate With Us', url: '/innovate' },
    ]
  },
  { name: 'About', url: '/about' },
  { name: 'Insights', url: '/blog' },
  { name: 'Contact', url: '/contact' },
];

export function Header() {
  return (
    <>
      {/* Floating Tubelight Navigation */}
      <NavBar items={navItems} />
    </>
  );
}
