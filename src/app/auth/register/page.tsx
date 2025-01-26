'use client';
import Register from '@/components/authentication/register';
import { Umbrella } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function RegisterPage() {
  return (
    <div className="mx-auto w-full max-w-sm lg:w-96 rounded-lg p-0.5">
      <header>
        <Umbrella className="m-2 size-6" />
        <h1 className="mt-4 text-2xl font-bold leading-9 tracking-tight text-slate-900 dark:text-slate-200">
          Create an account
        </h1>
        <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-300">
          Already a member?{' '}
          <Link
            href="/auth/login"
            className="text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300"
          >
            Login
          </Link>
        </p>
      </header>
      <motion.div
        className="mt-4"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Register />
      </motion.div>
    </div>
  );
}
