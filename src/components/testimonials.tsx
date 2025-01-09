'use client';

import { AnimatedTestimonials } from '@/components/animated-testimonials';
import { useEffect, useState } from 'react';

const testimonials = [
  {
    quote:
      'SSCPrep helped me crack my exam in the first attempt. The practice tests and performance analytics were invaluable.',
    name: 'Rahul Sharma',
    designation: 'SSC CGL 2023 Qualifier',
    src: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    quote:
      'The weekly live mocks and detailed solutions helped me understand my weak areas and improve systematically.',
    name: 'Priya Patel',
    designation: 'SSC CHSL Topper',
    src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    quote:
      'The comprehensive study material and expert guidance made my preparation journey smooth and effective.',
    name: 'Amit Kumar',
    designation: 'SSC MTS Selected Candidate',
    src: 'https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    quote:
      'The typing test practice modules significantly improved my speed and accuracy. Highly recommended!',
    name: 'Sneha Gupta',
    designation: "SSC Stenographer Grade 'C'",
    src: 'https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    quote:
      'The previous year papers analysis and topic-wise practice questions were game-changers in my preparation.',
    name: 'Arjun Singh',
    designation: 'SSC CPO Success Story',
    src: 'https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export function Testimonials() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // or a loading spinner
  }
  return <AnimatedTestimonials testimonials={testimonials} autoplay />;
}
