"use client"
import React from "react"

type CardProps = React.HTMLAttributes<HTMLDivElement>

export function Card({ children, className = "", ...props }: CardProps) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  )
}

export default Card
