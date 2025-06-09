"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight, TrendingUp, Shield, Zap } from 'lucide-react'
import Link from 'next/link'

export function HeroSection() {
  const [currentStat, setCurrentStat] = useState(0)
  
  const stats = [
    { label: "Assets Under Management", value: "$100", prefix: "" },
    { label: "Annual Returns", value: "10", prefix: "%" },
    { label: "Active Strategies", value: "1", prefix: "" },
    { label: "Client Satisfaction", value: "98.3", prefix: "%" }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [stats.length])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.1),transparent_50%)]" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-purple-500/30 rounded-full animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-blue-500/30 rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-cyan-500/30 rounded-full animate-pulse delay-2000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Next-Gen Web3 Fund
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Autonomous
              </span>
              <br />
              <span className="text-foreground">DeFi Trading</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Algorithms that actually work, executing profitable trades while you earn passive income through premium staking pools.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/hedge">

            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg group">
              Start Making Money
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            </Link>
            
          </div>

          {/* Stats Display */}
          <div className="mt-16">
            <Card className="bg-background/50 backdrop-blur-lg border-purple-500/20 p-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className={`text-center transition-all duration-500 ${
                      currentStat === index ? 'scale-105 text-purple-400' : 'text-muted-foreground'
                    }`}
                  >
                    <div className="text-2xl sm:text-3xl font-bold">
                      {stat.prefix}{stat.value}
                    </div>
                    <div className="text-sm mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Feature Cards */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-background/30 backdrop-blur-lg border-purple-500/20 p-6 hover:scale-105 transition-transform duration-300">
              <TrendingUp className="h-12 w-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Automation  That Actually Works</h3>
              <p className="text-muted-foreground"> Algorithms that trade 24/7 across multiple exchanges without breaking a sweat.</p>
            </Card>
            
            <Card className="bg-background/30 backdrop-blur-lg border-blue-500/20 p-6 hover:scale-105 transition-transform duration-300">
              <Shield className="h-12 w-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Bulletproof Staking</h3>
              <p className="text-muted-foreground">Earn passive income through battle-tested DeFi protocols that we've personally vetted.</p>
            </Card>
            
            <Card className="bg-background/30 backdrop-blur-lg border-cyan-500/20 p-6 hover:scale-105 transition-transform duration-300">
              <Zap className="h-12 w-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Real-Time Intel</h3>
              <p className="text-muted-foreground">Track your portfolio performance with institutional-grade analytics that update in real-time.</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}