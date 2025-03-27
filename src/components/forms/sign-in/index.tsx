"use client"

import { FormGenerator } from "@/components/global/form-generator"
import { Loader } from "@/components/global/loader"
import { Button } from "@/components/ui/button"
import { GROUPLE_CONSTANTS } from "@/constants"
import { useAuthSignin } from "@/hooks/authentication"
import { useForm } from "react-hook-form"


type Props = {}

const SignInForm = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm()

  const { isPending, onClerkAuth } = useAuthSignin()

  const onSubmit = async (data: any) => {
    try {
      await onClerkAuth(data);
    } catch (error: any) {
      // Set form-level error
      setError('root', {
        type: 'manual',
        message: 'Invalid email or password'
      });
    }
  }

  return (
    <form
      className="flex flex-col gap-3 mt-10"
      onSubmit={handleSubmit(onSubmit)}
    >
      {GROUPLE_CONSTANTS.signInForm.map((field) => (
        <FormGenerator
          {...field}
          key={field.id}
          register={register}
          errors={errors}
          required
        />
      ))}
      <Button type="submit" className="rounded-2xl" disabled={isPending}>
        {isPending && <Loader loading={true} className="mr-2 h-4 w-4 animate-spin">Loading</Loader>}
        {isPending ? "Signing in..." : "Sign in"}
      </Button>
      {errors.root && (
        <p className="text-red-400 text-sm text-center mt-2">
          {errors.root.message}
        </p>
      )}
    </form>
  )
}

export default SignInForm