"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import React, { useState } from 'react'
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { Label } from "@/components/ui/label"
import { FormWrapper } from '@/components/auth/FormWrapper'
import { signupSchema } from "@/schemas"
import { z } from "zod"
import { auth } from "@/actions/auth"
import { useRouter } from "next/navigation"


const SignUp = () => {
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: "",
      password: ""
    },
  })

  async function onSubmit(data: z.infer<typeof signupSchema>) {
    setLoading(true);
    const datas = await auth.createAccount(data);
    console.log(datas)
    if(datas.success){
      toast({
        title: "Account Created Successfully",
      description: "Redirecting......"})
    }
    setTimeout(() => {
      router.push("/")
    }, 3000)
    setLoading(false)
  }
  return (
      <FormWrapper>
         <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-left">
          <div className='flex py-5 gap-2'>
                <img src='/icons/logo-blue-upsidedown.svg' width={'30'}/>
                <p className='font-ibm-plex-serif font-bold text-2xl text-gray-800'>PayHam</p>
            </div>
            <h1 className="text-3xl font-bold">Sign Up</h1>
            <p className="text-balance text-muted-foreground">
              Fill in your details to get started
            </p>
          </div>
          <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid gap-4">
            <div className="grid gap-2">
            <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                {...field}
                disabled={isLoading}
                required
              />
              </FormControl>
              <FormMessage className="text-red-500"/>
            </FormItem>
          )}
        />  
            </div>
            <div className="grid gap-2">
            <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
              <Input
                id="password"
                type="password"
                {...field}
                disabled={isLoading}
                required
              />
              </FormControl>
              <FormMessage className="text-red-500"/>
            </FormItem>
          )}
        />  
            </div>
            <Button type="submit" disabled={isLoading} className="w-full bg-blue-500  text-white">
              {isLoading ? (
                <>Authenticating......</>
              ) : (
                <>Sign Up</>
              )}
            </Button>
          </div>
          </form>
          </Form>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/sign-in" className="underline">
              Sign in
            </Link>
          </div>
        </div>
      </div>
      </FormWrapper>
  )
}

export default SignUp
