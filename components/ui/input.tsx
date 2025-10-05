"use client"
import React from "react"

type InputProps = React.InputHTMLAttributes<HTMLInputElement>

export function Input(props: InputProps) {
  const { className = "", ...rest } = props
  return <input {...rest} className={className} />
}

export default Input
