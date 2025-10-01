"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, MapPin, TrendingUp, Wallet, User, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Projects", href: "/projects", icon: MapPin },
  { name: "Market", href: "/market", icon: TrendingUp },
  { name: "Wallet", href: "/wallet", icon: Wallet },
  { name: "Profile", href: "/profile", icon: User },
]

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false)
  const pathname = usePathname()

  return (
    <>
      {/* Mobile Overlay */}
      {isExpanded && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsExpanded(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-50 h-screen bg-gradient-to-b from-blue-600 to-blue-800 text-white transition-all duration-300 ease-in-out flex flex-col",
          isExpanded ? "w-64" : "w-20"
        )}
      >
        {/* Header with Logo and Hamburger */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <div className={cn("flex items-center gap-3 transition-all", !isExpanded && "justify-center w-full")}>
            <div className="bg-white/10 backdrop-blur-sm p-2 rounded-lg">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Screenshot-2025-09-24-144814-1759323103034.png" 
                alt="Neeledger Logo"
                width={24}
                height={24}
                className="h-6 w-6 object-contain"
              />
            </div>
            {isExpanded && (
              <div className="flex flex-col">
                <span className="font-bold text-lg">Neeledger</span>
                <span className="text-xs text-blue-200">Climate Action</span>
              </div>
            )}
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsExpanded(!isExpanded)}
            className={cn(
              "text-white hover:bg-white/10",
              !isExpanded && "absolute left-1/2 -translate-x-1/2 top-20"
            )}
          >
            {isExpanded ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-3">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-5 rounded-lg transition-all duration-200",
                  "hover:bg-white/10 group",
                  isActive && "bg-white/20 shadow-lg",
                  !isExpanded && "justify-center"
                )}
              >
                <item.icon className={cn(
                  "h-6 w-6 transition-transform group-hover:scale-110",
                  isActive && "text-green-400"
                )} />
                {isExpanded && (
                  <span className={cn(
                    "font-medium text-base",
                    isActive && "text-white"
                  )}>
                    {item.name}
                  </span>
                )}
              </Link>
            )
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-white/10">
          {isExpanded ? (
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
              <div className="text-xs text-blue-200 mb-1">Total Projects</div>
              <div className="text-2xl font-bold">8</div>
              <div className="text-xs text-green-400 mt-1">+12% this month</div>
            </div>
          ) : (
            <div className="flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2">
                <span className="text-xs font-bold">8</span>
              </div>
            </div>
          )}
        </div>
      </aside>
    </>
  )
}