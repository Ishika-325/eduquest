"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

// Avatar Root
const Avatar = React.forwardRef(({ className = "", ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={`relative flex overflow-hidden ${className}`}
    {...props}
  />
))
Avatar.displayName = AvatarPrimitive.Root.displayName

// Avatar Image
const AvatarImage = React.forwardRef(({ className = "", ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={`object-cover h-full w-full ${className}`}
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

// Avatar Fallback
const AvatarFallback = React.forwardRef(({ className = "", ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={`flex h-full w-full items-center justify-center rounded-full bg-muted ${className}`}
    {...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }
