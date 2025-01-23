"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import MeteorBackground from '@/app/assets/Meteor.svg';
type AuthLayoutProps = {
  children: ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  const pathName = usePathname()
  const authType = pathName === '/auth/login' ? 'login' : 'register'
  console.log(pathName)
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Side - Desktop Only (60% width) */}
      <div className="hidden lg:flex lg:w-[60%] relative bg-[url('/auth-bg.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50 flex items-start justify-center p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white text-center"
          >
            <h1 className="text-4xl font-bold mb-4">{authType === 'login' ? 'Welcome Back' : 'Join Us'}</h1>
            <p className="text-xl">
              {authType === 'login'
                ? 'Sign in to access your personalized dashboard and continue your journey.'
                : 'Create an account to get started with our exclusive features.'}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Right Side - Mobile & Desktop (40% width on desktop) */}
      <div className="flex-1 lg:w-[40%] flex items-center justify-center p-4 lg:p-5 bg-gradient-to-br from-sky-100 via-white to-teal-100  dark:from-sky-900 dark:via-slate-600 dark:to-teal-700">
        <div className="w-full max-w-md lg:max-w-full lg:w-full "> {/* Modified this line */}
          <div className="min-h-[calc(100vh-2rem)] lg:min-h-full flex items-center justify-center w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="w-full"
            >
              {children}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}