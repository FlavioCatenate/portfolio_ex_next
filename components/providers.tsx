'use client'
import { ThemeProvider, useTheme } from "next-themes"

export default function providers({children}: {children: React.ReactNode}) {
  return (
    <ThemeProvider attribute="class">
        {children}
    </ThemeProvider>
  )
}
