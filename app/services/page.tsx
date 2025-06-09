import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { 
  Bot, 
  Coins, 
  Shield, 
  BarChart3,
  Zap,
  Users,
  TrendingUp,
  Brain,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

export default function Services() {
  const mainServices = [
    {
      icon: Bot,
      title: "Autonomous Trading",
      description: "Chainlink-backed algorithms that execute thousands of trades daily across multiple exchanges",
      features: [
        "24/7 market monitoring",
        "Multi-exchange arbitrage",
        "Risk-adjusted position sizing",
        "Real-time portfolio rebalancing"
      ],
      pricing: "0.3% management fee",
      highlight: "Fan Favorite"
    },
    {
      icon: Coins,
      title: "DeFi Yield Farms",
      description: "Earn passive income through carefully vetted decentralized finance protocols",
      features: [
        "Ethereum 2.0 staking",
        "Layer 2 yield farming",
        "Liquid staking derivatives",
        "Auto-compounding rewards"
      ],
      pricing: "0.5% service fee",
      highlight: "High Yield"
    },
    {
      icon: BarChart3,
      title: "Portfolio Management",
      description: "Institutional-grade portfolio construction and risk management",
      features: [
        "Dynamic asset allocation",
        "Risk parity strategies",
        "Sector rotation models",
        "ESG compliance options"
      ],
      pricing: "1.5% management fee",
      highlight: "Enterprise"
    }
  ]

  const additionalServices = [
    {
      icon: Shield,
      title: "Risk Assessment",
      description: "Comprehensive risk analysis and stress testing"
    },
    {
      icon: Users,
      title: "Institutional Services",
      description: "White-label solutions for financial institutions"
    },
    {
      icon: Zap,
      title: "API Access",
      description: "Direct integration with our trading infrastructure"
    }
  ]

  const stakingDetails = [
    {
      protocol: "Ethereum 2.0",
      apy: "5.2%",
      minAmount: "32 ETH",
      lockPeriod: "Until merge completion",
      risk: "Chill"
    },
    {
      protocol: "Lido stETH",
      apy: "4.8%",
      minAmount: "0.01 ETH", 
      lockPeriod: "Liquid",
      risk: "Chill"
    },
    {
      protocol: "Curve Finance",
      apy: "12.5%",
      minAmount: "$1,000",
      lockPeriod: "None",
      risk: "Balanced"
    },
    {
      protocol: "Uniswap V3",
      apy: "18.7%",
      minAmount: "$5,000",
      lockPeriod: "None", 
      risk: "Spicy"
    }
  ]

  const tradingStrategies = [
    {
      name: "Momentum Alpha",
      description: "Captures short-term price movements using technical indicators",
      returns: "+23.4% YTD",
      sharpe: "1.8"
    },
    {
      name: "Mean Reversion",
      description: "Profits from temporary price dislocations and market inefficiencies",
      returns: "+18.9% YTD",
      sharpe: "2.1"
    },
    {
      name: "Cross-Exchange Arbitrage", 
      description: "Exploits price differences across multiple trading venues",
      returns: "+15.2% YTD",
      sharpe: "3.4"
    },
    {
      name: "Volatility Harvesting",
      description: "Generates returns from options market volatility mispricing",
      returns: "+28.1% YTD",
      sharpe: "1.6"
    }
  ]

  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive investment solutions powered by Chainlink and blockchain technology
          </p>
        </div>

        {/* Main Services */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="p-8 bg-background/50 backdrop-blur-lg border-border/50 hover:scale-105 transition-all duration-300 relative overflow-hidden">
                {service.highlight && (
                  <Badge className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                    {service.highlight}
                  </Badge>
                )}
                
                <service.icon className="h-16 w-16 text-purple-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-border pt-6">
                  <div className="text-lg font-semibold text-purple-400 mb-4">{service.pricing}</div>
                  <Link href="/hedge">

                  <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 group">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Trading Strategies */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4"> Trading Strategies</h2>
            <p className="text-xl text-muted-foreground">
              Our proprietary algorithms employ multiple strategies for optimal risk-adjusted returns
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tradingStrategies.map((strategy, index) => (
              <Card key={index} className="p-6 bg-background/30 backdrop-blur-lg border-border/50">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{strategy.name}</h3>
                  <Badge variant="secondary" className="text-green-400 bg-green-400/10">
                    {strategy.returns}
                  </Badge>
                </div>
                <p className="text-muted-foreground mb-4">{strategy.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Sharpe Ratio</span>
                  <span className="font-semibold">{strategy.sharpe}</span>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Staking Pools Details */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Yield Farm Details</h2>
            <p className="text-xl text-muted-foreground">
              Compare our available staking opportunities across different protocols
            </p>
          </div>

          <Card className="p-8 bg-background/50 backdrop-blur-lg border-border/50">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4">Protocol</th>
                    <th className="text-left py-4 px-4">APY</th>
                    <th className="text-left py-4 px-4">Min Amount</th>
                    <th className="text-left py-4 px-4">Lock Period</th>
                    <th className="text-left py-4 px-4">Risk Level</th>
                    <th className="text-left py-4 px-4">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {stakingDetails.map((pool, index) => (
                    <tr key={index} className="border-b border-border/50">
                      <td className="py-4 px-4 font-semibold">{pool.protocol}</td>
                      <td className="py-4 px-4 text-green-400 font-bold">{pool.apy}</td>
                      <td className="py-4 px-4">{pool.minAmount}</td>
                      <td className="py-4 px-4">{pool.lockPeriod}</td>
                      <td className="py-4 px-4">
                        <Badge variant={pool.risk === 'Chill' ? 'default' : pool.risk === 'Balanced' ? 'secondary' : 'destructive'}>
                          {pool.risk}
                        </Badge>
                      </td>
                      <td className="py-4 px-4">
                        <Button size="sm" variant="outline" className="hover:bg-purple-500/10">
                          Start Earning
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </section>

        {/* Additional Services */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Additional Services</h2>
            <p className="text-xl text-muted-foreground">
              Specialized solutions for sophisticated investors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="p-6 text-center bg-background/30 backdrop-blur-lg border-border/50 hover:scale-105 transition-transform duration-300">
                <service.icon className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </section>

      
      </div>
    </div>
  )
}