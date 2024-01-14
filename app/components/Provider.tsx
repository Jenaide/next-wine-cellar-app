"use client"

import { SessionProvider } from 'next-auth/react';
import React from 'react'


interface ProviderProps {
    children: React.ReactNode | React.ReactNode[];
}

const Provider = ({ children }: ProviderProps) => {
  return (
    <SessionProvider>
        {children}
    </SessionProvider>
  )
}

export default Provider;

// The purpose of this code is to encapsulate the session provider logic, 
// making it easy to integrate authentication-related functionality into 
// different parts of a Next.js application. The SessionProvider is responsible 
// for managing user sessions and exposing the session data to the components within its scope.