import { HeroSection } from '@/components/hero-section'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { 
  BarChart3, 
  Shield, 
  Zap, 
  Users, 
  DollarSign, 
  TrendingUp,
  ArrowRight,
  Star
} from 'lucide-react'

export default function Home() {
  const features = [
    {
      icon: BarChart3,
      title: "Smart Analytics",
      description: "Real-time market intel powered by next-gen ML algorithms",
      color: "text-purple-400"
    },
    {
      icon: Shield,
      title: "ETH Shield",
      description: "Keep your Ethereum safe when the market gets spicy",
      color: "text-blue-400"
    },
    {
      icon: Zap,
      title: "Lightning Speed",
      description: "Trades execute faster than you can say 'to the moon'",
      color: "text-cyan-400"
    },
    {
      icon: Users,
      title: "Elite Squad",
      description: "Run by quants who actually know what they're doing",
      color: "text-green-400"
    }
  ]

  const stakingPools = [
    {
      name: "Ethereum 2.0",
      apy: "5.2%",
      tvl: "$247M",
      risk: "Low",
      badge: "Fan Favorite"
    },
    {
      name: "DeFi Mixer",
      apy: "12.8%",
      tvl: "$89M",
      risk: "Medium",
      badge: "Yield Hunter"
    },
    {
      name: "Layer 2 Stack",
      apy: "18.5%",
      tvl: "$34M",
      risk: "High",
      badge: "Fresh Drop"
    }
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Portfolio Manager",
      content: "NexusFund's AI consistently outperforms my traditional plays. It's like having a crystal ball.",
      rating: 5
    },
    {
      name: "Michael Torres",
      role: "Crypto Investor",
      content: "The staking pools are pure passive income magic. Set it and forget it vibes.",
      rating: 5
    },
    {
      name: "Elena Rodriguez",
      role: "Hedge Fund Analyst",
      content: "Their risk management is chef's kiss. Actually institutional-grade stuff.",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen">
      <HeroSection />

      {/* Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Hedgr</span> Hits Different
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Where bleeding-edge tech meets proven money moves
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 bg-background/50 backdrop-blur-lg border-border/50 hover:scale-105 transition-all duration-300 group">
                <feature.icon className={`h-12 w-12 ${feature.color} mb-4 group-hover:scale-110 transition-transform`} />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Staking Pools Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Premium <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Yield Farms</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Make your crypto work while you sleep
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stakingPools.map((pool, index) => (
              <Card key={index} className="p-6 bg-background/80 backdrop-blur-lg border-border/50 hover:shadow-lg transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{pool.name}</h3>
                  <Badge variant="secondary" className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 border-purple-500/30">
                    {pool.badge}
                  </Badge>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">APY</span>
                    <span className="font-bold text-green-400">{pool.apy}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">TVL</span>
                    <span className="font-semibold">{pool.tvl}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Risk</span>
                    <Badge variant={pool.risk === 'Low' ? 'default' : pool.risk === 'Medium' ? 'secondary' : 'destructive'}>
                      {pool.risk}
                    </Badge>
                  </div>
                </div>
        <Link href="/hedge">
       
                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  Start Earning
                </Button>
        </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
   

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Level Up?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of investors who've already made the switch to smarter Web3 investing. Start with just $1K.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-6 text-lg group">
              Let's Go
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Link href="/hedge">
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg border-purple-500/50 hover:bg-purple-500/10 group">
                Shield Your ETH
                <Shield className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}