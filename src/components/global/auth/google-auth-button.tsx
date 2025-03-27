"use client"

import { Button } from "@/components/ui/button"
import { useSignIn } from "@clerk/nextjs"
import { useRouter } from "next/navigation"
import { FcGoogle } from "react-icons/fc"
import { toast } from "sonner"

type GoogleAuthButtonProps = {
  method: 'signin' | 'signup'
}

const GoogleAuthButton = ({ method }: GoogleAuthButtonProps) => {
  const { signIn, isLoaded } = useSignIn()
  const router = useRouter()

  const signInWithGoogle = async () => {
    if (!isLoaded) {
      return toast.error("Authentication service not ready")
    }

    try {
      await signIn.authenticateWithRedirect({
        strategy: "oauth_google",
        redirectUrl: "/callback/sign-in",
        redirectUrlComplete: "/dashboard"
      })
    } catch (error) {
      console.error(error)
      toast.error("Could not sign in with Google")
    }
  }

  return (
    <Button 
      variant="outline" 
      className="w-full h-11 bg-background/50 backdrop-blur-sm hover:bg-white/10 transition-colors"
      onClick={signInWithGoogle}
      disabled={!isLoaded}
    >
      <FcGoogle className="mr-2 h-5 w-5" />
      Continue with Google
    </Button>
  )
}

export default GoogleAuthButton