"use client";

import { trpc } from "@/trpc/client";
import { Loader2, XCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

interface VerifyEmailProps {
  token: string
}

const VerifyEmail = ({token}: VerifyEmailProps) => {
    const {data,isLoading,isError} = trpc.auth.verifyEmail.useQuery({
      token
    })
    if(isError){
      return (
        <div className="flex flex-col items-center gap-2">
          <XCircle className="w-8 h-8 text-red-600" />
          <h3 className="font-semibold text-xl">
            There was a problem !
          </h3>
          <p className="text-muted-foreground text-sm">
            This link is not valid or might be expired.
            Please try again.
          </p>
        </div>
      )
    }
    if(data?.success){
      return (
        <div className="flex h-full flex-col items-center justify-center">
          <div className="relative mb-4 h-60 w-60 text-muted-foreground">
            <Image 
              src="/email-verified.png"
              fill
              alt="email verified image"
            />
          </div>
          <h3 className="font-semibold text-2xl">
              You&apos;re all set !
          </h3>
          <p className="text-muted-foreground text-center mt-1">
            Thanks for verifying your email.
          </p>
          <Link href="/sign-in" className={buttonVariants({className:"mt-4"})}>
            Sign in
          </Link>
        </div>
      )
    }

    if(isLoading){
      return (
        <div className="flex flex-col items-center gap-2">
          <Loader2 className="animate-spin w-8 h-8 text-zinc-300" />
          <h3 className="font-semibold text-xl">
            Verifing...
          </h3>
          <p className="text-muted-foreground text-sm">
            This Won&apos;t take long.
          </p>
        </div>
      )
    }
}

export default VerifyEmail