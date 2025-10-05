"use client"
import React from "react"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: string
  size?: string
}

export function Button({ children, className = "", variant, size, ...props }: ButtonProps) {
  // Minimal styling passthrough. Project already uses Tailwind classes where Button is used.
  return (
    <button {...props} className={className}>
      {children}
    </button>
  )
}

export default Button
