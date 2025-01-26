'use client';
import Login from '@/components/authentication/login';
import { Umbrella } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function LoginPage() {
  return (
    <div className="mx-auto w-full max-w-sm lg:w-96 rounded-lg p-0.5">
      <header className="text-center mb-4">
        <Umbrella className="m-2 size-6 text-teal-600 dark:text-teal-400" />
        <h1 className="mt-4 text-3xl font-bold leading-9 tracking-tight text-slate-900 dark:text-slate-200">
          Sign in to your account
        </h1>
        <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-300">
          Not a member?{' '}
          <Link
            href="/auth/register"
            className="text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300"
          >
            Sign Up
          </Link>
        </p>
      </header>
      <motion.div
        className="mt-4"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Login />
      </motion.div>
    </div>
  );
}
