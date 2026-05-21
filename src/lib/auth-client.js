import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    baseURL: `https://medi-queue-wine.vercel.app`
})

export const { signIn, signUp, signOut, useSession } = createAuthClient()