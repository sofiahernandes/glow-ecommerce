'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, ShoppingBag, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Badge } from '@/components/ui/badge'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="md:container flex h-16 items-center justify-between px-2">
        <div className="flex items-center gap-2 md:gap-4">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <div className="flex items-center justify-between border-b pb-4">
                <Link
                  href="/"
                  className="font-bold text-xl"
                  onClick={() => setIsOpen(false)}
                >
                  Glow
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="sr-only">Close Toggle menu</span>
                </Button>
              </div>
              <nav className="flex flex-col gap-4 py-8">
                <Link
                  href="/"
                  className="text-base font-medium transition-colors hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/products"
                  className="text-base font-medium transition-colors hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  Products
                </Link>
                <Link
                  href="/about"
                  className="text-base font-medium transition-colors hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  About us
                </Link>
                <Link
                  href="/contact"
                  className="text-base font-medium transition-colors hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  Contact us
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="font-bold text-xl">
            Glow
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium transition-colors hover:text-blue-600"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="text-sm font-medium transition-colors hover:text-blue-600"
          >
            Products
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium transition-colors hover:text-blue-600"
          >
            About Glow
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium transition-colors hover:text-blue-600"
          >
            Contact us
          </Link>
        </nav>
      </div>
    </header>
  )
}
