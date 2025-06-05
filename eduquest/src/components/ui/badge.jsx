"use client"

import * as React from "react"

// Manual mapping of variant styles
const variantClasses = {
  default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
  secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
  destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
  outline: "text-foreground",
}

// Default badge styles
const baseBadgeClass =
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"

// Badge component
function Badge({ className = "", variant = "default", ...props }) {
  const variantClass = variantClasses[variant] || variantClasses["default"]
  const combinedClass = `${baseBadgeClass} ${variantClass} ${className}`
  return <div className={combinedClass} {...props} />
}

export { Badge }
