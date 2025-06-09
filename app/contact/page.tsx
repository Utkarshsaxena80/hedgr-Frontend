"use client"

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  MessageSquare,
  CheckCircle,
  ArrowRight
} from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    investmentAmount: '',
    message: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "hello@nexusfund.ai",
      subtitle: "We'll respond within 2 hours"
    },
    {
      icon: Phone,
      title: "Phone", 
      details: "+1 (555) 123-4567",
      subtitle: "Mon-Fri 9AM-6PM EST"
    },
    {
      icon: MapPin,
      title: "Office",
      details: "123 Wall Street, New York, NY 10005",
      subtitle: "By appointment only"
    },
    {
      icon: Clock,
      title: "Trading Hours",
      details: "24/7 Automated Trading",
      subtitle: "Support: 9AM-6PM EST"
    }
  ]

  const faqs = [
    {
      question: "What's the minimum to get started?",
      answer: "Our minimum investment is $10,000 for individual accounts and $50,000 for institutional accounts."
    },
    {
      question: "How do you keep funds secure?",
      answer: "We use institutional-grade security including multi-signature wallets, cold storage, and 24/7 monitoring."
    },
    {
      question: "What are your fees?",
      answer: "We charge a 2% annual management fee and 20% performance fee on profits above 10% annual returns."
    },
    {
      question: "Can I withdraw my funds anytime?",
      answer: "Yes, for liquid strategies. Some staking pools may have lock-up periods which are clearly disclosed."
    }
  ]

  const investmentTiers = [
    {
      tier: "Starter",
      minimum: "$10,000",
      features: ["AI Trading Access", "Basic Staking Pools", "Monthly Reports", "Email Support"]
    },
    {
      tier: "Professional", 
      minimum: "$100,000",
      features: ["Premium Strategies", "All Staking Pools", "Weekly Reports", "Phone Support", "Dedicated Manager"]
    },
    {
      tier: "Institutional",
      minimum: "$1,000,000", 
      features: ["Custom Strategies", "White-label Solutions", "Daily Reports", "24/7 Support", "On-site Meetings"]
    }
  ]

  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            Let's <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Connect</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your journey with institutional-grade Web3 investments? Our team is here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <Card className="p-8 bg-background/50 backdrop-blur-lg border-border/50">
            <h2 className="text-2xl font-bold mb-6">Start Your Investment Journey</h2>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                <p className="text-muted-foreground">
                  Thanks for reaching out. Our team will contact you within 2 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="company">Company (Optional)</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company Name"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="investmentAmount">Investment Amount</Label>
                    <Input
                      id="investmentAmount"
                      name="investmentAmount"
                      value={formData.investmentAmount}
                      onChange={handleChange}
                      placeholder="$50,000"
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your investment goals and any questions you have..."
                    rows={4}
                    className="mt-1"
                  />
                </div>

                <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 group">
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            )}
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="grid grid-cols-1 gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="p-6 bg-background/30 backdrop-blur-lg border-border/50 hover:scale-105 transition-transform duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{info.title}</h3>
                        <p className="text-lg mb-1">{info.details}</p>
                        <p className="text-sm text-muted-foreground">{info.subtitle}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Investment Tiers */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Investment Tiers</h2>
              <div className="space-y-4">
                {investmentTiers.map((tier, index) => (
                  <Card key={index} className="p-6 bg-background/30 backdrop-blur-lg border-border/50">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-semibold">{tier.tier}</h3>
                      <span className="text-purple-400 font-bold">{tier.minimum}</span>
                    </div>
                    <ul className="space-y-2">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-400" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Get answers to common questions about our services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6 bg-background/50 backdrop-blur-lg border-border/50">
                <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Card className="p-12 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border-purple-500/30">
            <MessageSquare className="h-16 w-16 text-purple-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Ready to Level Up?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of investors who trust NexusFund with their digital assets. 
              Schedule a free consultation to discuss your investment strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8">
                Schedule Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-purple-500/50 hover:bg-purple-500/10 px-8">
                Download Investment Guide
              </Button>
            </div>
          </Card>
        </section>
      </div>
    </div>
  )
}