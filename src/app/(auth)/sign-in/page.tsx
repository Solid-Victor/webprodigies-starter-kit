import SignInForm from "@/components/forms/sign-in/index"
import GoogleAuthButton from "@/components/global/auth/google-auth-button"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

const SignInPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="relative w-full max-w-md">
        {/* Animated background blobs */}
        <div className="absolute -top-40 -left-20 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute -top-40 -right-20 w-72 h-72 bg-yellow-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-20 left-20 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />

        {/* Main card */}
        <div className="relative backdrop-blur-lg bg-black/40 rounded-3xl p-8 shadow-2xl border border-white/10">
          {/* Logo or Brand Icon (optional) */}
          <div className="flex justify-center mb-6">
            <div className="p-2 bg-gradient-to-tr from-primary/20 to-primary/10 rounded-2xl backdrop-blur-sm border border-white/10">
              <svg 
                className="w-10 h-10 text-primary"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
          </div>

          {/* Header */}
          <div className="space-y-2 text-center mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Welcome Back
            </h1>
            <p className="text-zinc-400 text-sm">
              Access your School Management System dashboard
            </p>
          </div>

          {/* Sign In Form */}
          <SignInForm />

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full bg-white/10" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background/95 px-4 text-zinc-500 backdrop-blur-sm">
                Or continue with
              </span>
            </div>
          </div>

          {/* Google Auth */}
          <GoogleAuthButton method="signin" />

          {/* Sign Up Link */}
          <p className="text-zinc-400 text-sm text-center mt-8">
            Don't have an account?{" "}
            <Link 
              href="/sign-up" 
              className="text-primary hover:text-primary/80 font-medium hover:underline transition-colors"
            >
              Create an account
            </Link>
          </p>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <Link 
              href="/forgot-password" 
              className="text-xs text-zinc-500 hover:text-zinc-400 transition-colors"
            >
              Forgot your password?
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-xs text-zinc-500">
            Protected by reCAPTCHA and subject to the{" "}
            <Link href="/privacy" className="hover:text-zinc-400 transition-colors">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="/terms" className="hover:text-zinc-400 transition-colors">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignInPage