import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Users, 
  Award, 
  TrendingUp, 
  Shield,
  Brain,
  Globe,
  Target,
  Lightbulb
} from 'lucide-react'


export default function About() {
  const team = [
    {
      name: "Utkarsh Saxena",
      role: "Builder, Maintainer",
      background: "3rd year student at JIIT",
      expertise: "De-Fi, Blockchain Architecture"
    }
  ]

  const milestones = [
    {
      year: "2025 April",
      title: "Genesis",
      description: "Hedgr thought of as a summer Project  "
    },
    {
      year: "2025 May", 
      title: "Code writing starts ",
      description: "Deployed first-gen autonomous trading algorithms"
    },
    {
      year: "2025 June",
      title: "DeFi Integration",
      description: "Launched staking pools and yield farming strategies"
    },
  
  ]

  const values = [
    {
      icon: Shield,
      title: "Security First",
      description: "Bank-grade security with multi-sig protocols and cold storage that actually works"
    },
    {
      icon: Brain,
      title: "Innovation",
      description: "Bleeding-edge AI and machine learning that drives our investment strategies"
    },
    {
      icon: Globe,
      title: "Transparency",
      description: "Real-time reporting and honest communication with all stakeholders"
    },
    {
      icon: Target,
      title: "Performance",
      description: "Obsessed with delivering superior risk-adjusted returns, period"
    }
  ]

  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Hedgr</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're building the future of autonomous investment management through advanced Algorithms and Blockchain tech.
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="p-8 mb-16 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border-purple-500/20">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              To democratize access to sophisticated investment strategies by decentralized finance, enabling both institutional and retail investors to participate in the 
              next generation of wealth creation through Web3 technologies.
            </p>
          </div>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">$1000</div>
            <div className="text-muted-foreground">Assets Under Management</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">5</div>
            <div className="text-muted-foreground">Smart Investors</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">2</div>
            <div className="text-muted-foreground">Trading Strategies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">1</div>
            <div className="text-muted-foreground">Global Exchanges</div>
          </div>
        </div>

        {/* Team Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4"> Team</h2>
            <p className="text-xl text-muted-foreground">
              Made by Utkarsh Saxena
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="p-6 bg-background/50 backdrop-blur-lg border-border/50 hover:scale-105 transition-transform duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-purple-400 mb-2">{member.role}</p>
                    <p className="text-sm text-muted-foreground mb-3">{member.background}</p>
                    <div className="flex flex-wrap gap-1">
                      {member.expertise.split(', ').map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Company Timeline */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground">
              Key milestones in our growth and evolution
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="flex-1 px-8">
                    <Card className={`p-6 bg-background/50 backdrop-blur-lg border-border/50 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <div className="text-2xl font-bold text-purple-400 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </Card>
                  </div>
                  
                  <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full border-4 border-background z-10"></div>
                  
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center bg-background/50 backdrop-blur-lg border-border/50 hover:scale-105 transition-transform duration-300">
                <value.icon className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}