"use client";

import { trpc } from "@/trpc/client";

const VerifyEmail = () => {
    const {} = trpc.auth
  return (
    <div>VerifyEmail</div>
  )
}

export default VerifyEmail