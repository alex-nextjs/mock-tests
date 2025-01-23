'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

const faqData = [
  {
    question: 'What is this app about?',
    answer:
      'This app is designed for SSC aspirants, offering features like AI-driven personalized recommendations, interactive practice tests, and progress tracking to help you achieve your goals.',
  },
  {
    question: "What's included in the Free Plan?",
    answer:
      "The Free Plan gives you access to basic courses, limited practice tests, and community forums. It's perfect for beginners who want to explore the platform.",
  },
  {
    question: 'How does the AI-driven personalized recommendation work?',
    answer:
      'Our AI analyzes your performance in practice tests and tracks your progress to suggest courses and study materials tailored to your strengths and weaknesses.',
  },
  {
    question: 'How can I upgrade to Pro or Pro Plus?',
    answer:
      'You can upgrade anytime by visiting the Pricing section, selecting your preferred plan, and following the payment process.',
  },
  {
    question: 'Are the plans refundable?',
    answer:
      "Unfortunately, we don't offer refunds. However, you can cancel your subscription at any time, and you won't be charged for the next billing cycle.",
  },
  {
    question: 'How do I track my progress?',
    answer:
      'Progress tracking is available under the Dashboard section. You can view detailed analytics, including test scores, time spent, and areas for improvement.',
  },
  {
    question: 'Can I access the app on mobile?',
    answer:
      'Yes! The app is fully optimized for mobile devices, ensuring a seamless experience on both Android and iOS.',
  },
  {
    question: 'What is included in the Typing Practice feature?',
    answer:
      'The Typing Practice feature offers tests for improving speed and accuracy, with feedback to help you master typing, a crucial skill for SSC exams.',
  },
  {
    question: 'Is there a community for aspirants?',
    answer:
      'Yes, our Aspirants Community allows you to connect, discuss, and share tips with fellow students and mentors.',
  },
  {
    question: 'How do I contact support?',
    answer:
      'You can reach out to our support team through the Contact Us page or use the live chat option for immediate assistance.',
  },
];

export function FAQ() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-slate-200 sm:text-4xl mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-slate-400">
            Got questions? We&#39;ve got answers to help you get started.
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="w-full max-w-3xl mx-auto"
        >
          {faqData.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left data-[state=open]:text-teal-600">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 dark:text-slate-300 mb-4">
            Still have questions? Reach out to our support team.
          </p>
          <Button className="bg-teal-600 dark:bg-teal-400 hover:bg-teal-700">
            <MessageCircle className="mr-2 h-4 w-4" /> Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
