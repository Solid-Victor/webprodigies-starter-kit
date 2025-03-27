// return an error function 

import { useSignIn } from "@clerk/nextjs"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "sonner"
import { z } from "zod"
import { signInSchema } from "./schema"

export const useAuthSignin = () => {
    const { isLoaded, setActive, signIn } = useSignIn()
    const router = useRouter()
    const [isPending, setIsPending] = useState(false)

    const onClerkAuth = async (data: z.infer<typeof signInSchema>) => {
        if (!isLoaded) {
            return toast.error("Authentication service not ready")
        }

        try {
            setIsPending(true)
            const authenticated = await signIn.create({
                identifier: data.email,
                password: data.password,
            })

            if (authenticated.status === "complete") {
                await setActive({ session: authenticated.createdSessionId })
                toast.success("Welcome back!")
                router.push("/callback/sign-in")
            }
        } catch (error: any) {
            if (error.errors?.[0]?.code === "form_password_incorrect") {
                toast.error("Email or password is incorrect")
            }
            throw error; // Re-throw the error so the form component can handle it
        } finally {
            setIsPending(false) // Reset loading state whether success or failure
        }
    }

    const { mutate: InitiateLoginFlow } = useMutation({
        mutationFn: (data: { email: string; password: string }) => onClerkAuth(data)
    })

    return { onClerkAuth, isLoaded, isPending }
}

