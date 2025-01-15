'use client';
import React, { useState } from 'react';

import * as z from 'zod';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

import { IconBrandGoogle } from '@tabler/icons-react';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { WEBSITE_NAME } from '@/constants/constants';
import { Loader2, Lock } from 'lucide-react';

const passwordSchema = z
  .string()
  .min(6, { message: 'Password must be at least 6 characters long' })
  .regex(/[a-z]/, {
    message: 'Password must contain at least one lowercase letter',
  })
  .regex(/[A-Z]/, {
    message: 'Password must contain at least one uppercase letter',
  })
  .regex(/[0-9]/, { message: 'Password must contain at least one number' })
  .regex(/[^a-zA-Z0-9]/, {
    message: 'Password must contain at least one symbol',
  });

const formSchema = z
  .object({
    firstname: z.string().min(2, {
      message: 'First name must be at least 2 characters.',
    }),
    lastname: z.string().min(2, {
      message: 'Last name must be at least 2 characters.',
    }),
    email: z.string().email({
      message: 'Please enter a valid email address.',
    }),
    password: passwordSchema,
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

export function SignupForm() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(values);
    // TODO: Implement email verification logic here
    setIsLoading(false);
  }

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome to ${WEBSITE_NAME}
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Join us to unlock possibilities and make your mark.
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="my-8">
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <FormField
                control={form.control}
                name="firstname"
                render={({ field }) => (
                  <FormItem>
                    <Label>
                      <FormLabel>First name</FormLabel>
                    </Label>
                    <FormControl>
                      <Input placeholder="Tyler" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <FormField
                control={form.control}
                name="lastname"
                render={({ field }) => (
                  <FormItem>
                    <Label>
                      <FormLabel>Last name</FormLabel>
                    </Label>
                    <FormControl>
                      <Input placeholder="Durden" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <Label>
                    <FormLabel>Email Address</FormLabel>
                  </Label>
                  <FormControl>
                    <Input placeholder="projectmayhem@fc.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <Label>
                    <FormLabel>Password</FormLabel>
                  </Label>
                  <FormControl>
                    <Input type="password" placeholder="••••••••" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-8">
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <Label>
                    <FormLabel>Confirm Password</FormLabel>
                  </Label>
                  <FormControl>
                    <Input type="password" placeholder="••••••••" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </LabelInputContainer>

          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin mx-auto" />
            ) : (
              <>
                Sign up
                <Lock className="inline-block ml-2 h-4 w-4" />
              </>
            )}
            <BottomGradient />
          </button>

          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

          <div className="flex flex-col space-y-4">
            <button
              className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
              type="button"
            >
              <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                Google
              </span>
              <BottomGradient />
            </button>
          </div>
        </form>
      </Form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn('flex flex-col space-y-2 w-full', className)}>
      {children}
    </div>
  );
};
