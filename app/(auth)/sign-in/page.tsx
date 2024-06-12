import React from 'react'
import Link from "next/link"
import Image from 'next/image'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FormWrapper } from '@/components/auth/FormWrapper'
const SignIn = () => {
  return (
      <FormWrapper>
         <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-left">
            <div className='flex py-5 gap-2'>
                <Image src='/icons/logo-blue-upsidedown.svg' width={'30'} alt="PayHam logo"/>
                <p className='font-ibm-plex-serif font-bold text-2xl  text-gray-800'>PayHam</p>
            </div>
            
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                
              </div>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full bg-blue-500 text-white">
              Login
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/sign-up" className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      </FormWrapper>
  )
}

export default SignIn
