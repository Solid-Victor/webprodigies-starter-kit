import { cn } from '@/lib/utils'
import React from 'react'

type Props = {
    children: React.ReactNode
    className?: string
    container?: string
}

const BackDropGradient = ({children, className, container}: Props) => {
  return (
    <div className={cn(
        "relative w-full flex flex-col",
        container
    )}
    >
      <div className={cn(
        "absolute rounded-[50%] radial-blur wx-10",
        className
      )}
      />
        {children}
    </div>
  )
}

export default BackDropGradient