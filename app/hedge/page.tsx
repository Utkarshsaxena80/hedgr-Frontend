"use client"

import { useState,useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import {ethers,BrowserProvider} from 'ethers'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Shield, 
  TrendingDown,
  TrendingUp,
  DollarSign,
  BarChart3,
  Clock,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Wallet,
  Lock,
  Zap,
  Target,
  Activity
} from 'lucide-react'

import abi from './/../abi/abi.json';

declare global {
  interface Window {
    ethereum?: any;
  }
}

export default function HedgePage() {
  const [depositAmount, setDepositAmount] = useState('')
  const [selectedStrategy, setSelectedStrategy] = useState('conservative')
  const [isConnected, setIsConnected] = useState(false)
  const [isDepositing, setIsDepositing] = useState(false)
  const [mainContract, setMainContract] = useState<ethers.Contract | null>(null);
  const[price,setPrice]=useState<number |null>(null);
 //console.log(abi);
 //let mainContract:any;
const add:string ="0x36CD2dafc9149B2dea2497B299D34f9D5478569B";
  async function loadBlockchainData(){
    const provider= new BrowserProvider(window.ethereum);
          
             const signer= await provider.getSigner();
             if(!add){
                console.log('no address found');
             }
       //      console.log(abi);
       const  mainContract1= new ethers.Contract(add,abi,signer);
       console.log(mainContract1); 
 setMainContract(mainContract1);
const result= await mainContract1.getChainlinkDataFeedLatestAnswer();
const formatted = Number(result) / 1e8;
setPrice(formatted);
console.log(`Price: $${formatted}`);

  }
  useEffect(()=>{
    loadBlockchainData();
  },[]);
async function handleMainCallToContract(){

}

  const hedgingStrategies = [
    {
      id: 'conservative',
      name: 'Diamond Hands',
      protection: '85%',
      cost: '2.5%',
      duration: '30 days',
      description: 'Sleep easy while the market goes wild. Maximum protection, minimal stress.',
      minDeposit: '0.1 ETH',
      maxProtection: '15% decline',
      expectedReturn: '3-8%',
      risk: 'Chill'
    },
    {
      id: 'balanced',
      name: 'Smart Money',
      protection: '80%',
      cost: '1.8%',
      duration: '60 days',
      description: 'Perfect balance of protection and growth. For the strategically minded.',
      minDeposit: '0.5 ETH',
      maxProtection: '25% decline',
      expectedReturn: '5-12%',
      risk: 'Balanced'
    },
    {
      id: 'aggressive',
      name: 'Moon Mission',
      protection: '70%',
      cost: '1.2%',
      duration: '90 days',
      description: 'Maximum upside potential with basic safety nets. For the bold.',
      minDeposit: '1.0 ETH',
      maxProtection: '35% decline',
      expectedReturn: '8-18%',
      risk: 'Spicy'
    }
  ]

  const marketData = {
    ethPrice: '$2,847.32',
    change24h: '+2.4%',
    volatility: '68.5%',
    fearGreed: '42',
    hedgeVolume: '$127.8M',
    activeHedges: '2,847'
  }

  const recentHedges = [
    {
      amount: '12.5 ETH',
      strategy: 'Diamond Hands',
      protection: '85%',
      duration: '30 days',
      status: 'Active',
      pnl: '+$1,247'
    },
  ]

  const handleConnectWallet = () => {
    setIsConnected(true)
  }

  const handleDeposit = async (e:any) => {
    
    // Simulate transaction
    setTimeout(() => {
      
      setDepositAmount('')
    }, 3000)
    console.log(depositAmount);
   if(selectedStrategyData?.protection=='85%'){
   console.log("hello");
   //tolerance one 
   if (mainContract) {
     const call = await mainContract.register(true,1,{
      value:ethers.parseEther(depositAmount)
     });
     setIsDepositing(true)
     await call.wait();
     setIsDepositing(false)

   } else {
     console.error("mainContract is not initialized");
   }
   }
      if(selectedStrategyData?.protection=='80%'){
   console.log("hello1");
   //tolerance one 

   }
      if(selectedStrategyData?.protection=='70%'){
   console.log("hello2");
   //tolerance one 

   }
   
 
 
  }

  const selectedStrategyData = hedgingStrategies.find(s => s.id === selectedStrategy)

  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            Shield Your <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">ETH</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Protect your Ethereum bag from market chaos with our battle-tested hedging strategies
          </p>
        </div>

        {/* Market Overview */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-12">
          <Card className="p-4 bg-background/50 backdrop-blur-lg border-border/50 text-center">
            <div className="text-sm text-muted-foreground mb-1">ETH Price</div>
            <div className="text-lg font-bold">{marketData.ethPrice}</div>
            <div className="text-xs text-green-400">{marketData.change24h}</div>
          </Card>
          <Card className="p-4 bg-background/50 backdrop-blur-lg border-border/50 text-center">
            <div className="text-sm text-muted-foreground mb-1">Volatility</div>
            <div className="text-lg font-bold">{marketData.volatility}</div>
          </Card>
          <Card className="p-4 bg-background/50 backdrop-blur-lg border-border/50 text-center">
            <div className="text-sm text-muted-foreground mb-1">Fear & Greed</div>
            <div className="text-lg font-bold">{marketData.fearGreed}</div>
          </Card>
          <Card className="p-4 bg-background/50 backdrop-blur-lg border-border/50 text-center">
            <div className="text-sm text-muted-foreground mb-1">Hedge Volume</div>
            <div className="text-lg font-bold">{marketData.hedgeVolume}</div>
          </Card>
          <Card className="p-4 bg-background/50 backdrop-blur-lg border-border/50 text-center">
            <div className="text-sm text-muted-foreground mb-1">Active Hedges</div>
            <div className="text-lg font-bold">{marketData.activeHedges}</div>
          </Card>
          <Card className="p-4 bg-background/50 backdrop-blur-lg border-border/50 text-center">
            <div className="text-sm text-muted-foreground mb-1">Success Rate</div>
            <div className="text-lg font-bold text-green-400">94.2%</div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Hedging Strategies */}
          <div className="lg:col-span-2">
            <Card className="p-8 bg-background/50 backdrop-blur-lg border-border/50">
              <h2 className="text-2xl font-bold mb-6">Pick Your Protection Level</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {hedgingStrategies.map((strategy) => (
                  <Card 
                    key={strategy.id}
                    className={`p-6 cursor-pointer transition-all duration-300 hover:scale-105 ${
                      selectedStrategy === strategy.id 
                        ? 'bg-gradient-to-r from-purple-500/20 to-blue-500/20 border-purple-500/50' 
                        : 'bg-background/30 backdrop-blur-lg border-border/50'
                    }`}
                    onClick={() => setSelectedStrategy(strategy.id)}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-semibold">{strategy.name}</h3>
                      <Badge variant={strategy.risk === 'Chill' ? 'default' : strategy.risk === 'Balanced' ? 'secondary' : 'destructive'}>
                        {strategy.risk}
                      </Badge>
                    </div>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Protection</span>
                        <span className="font-semibold text-green-400">{strategy.protection}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Cost</span>
                        <span className="font-semibold">{strategy.cost}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Duration</span>
                        <span className="font-semibold">{strategy.duration}</span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground">{strategy.description}</p>
                  </Card>
                ))}
              </div>

              {/* Deposit Form */}
              <div className="border-t border-border pt-8">
                <h3 className="text-xl font-semibold mb-6">Deposit ETH to Get Protected</h3>
                
              
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="amount">Deposit Amount (ETH)</Label>
                        <Input
                          id="amount"
                          type="number"
                          placeholder="0.0"
                          value={depositAmount}
                          onChange={(e) => setDepositAmount(e.target.value)}
                          className="mt-1 text-lg"
                        />
                        <div className="text-sm text-muted-foreground mt-1">
                          Min: 0.01 ETH 
                        </div>
                      </div>
                      
                      <div>
                        <Label>Selected Strategy</Label>
                        <div className="mt-1 p-3 rounded-lg bg-background/50 border border-border">
                          <div className="font-semibold">{selectedStrategyData?.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {selectedStrategyData?.protection} protection • {selectedStrategyData?.cost} cost
                          </div>
                        </div>
                      </div>
                    </div>

                    {depositAmount && (
                      <Card className="p-6 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border-purple-500/20">
                        <h4 className="font-semibold mb-4">Protection Summary</h4>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-muted-foreground">Deposit Amount:</span>
                            <div className="font-semibold">{depositAmount} ETH</div>
                          </div>
                          <div>
                            <span className="text-muted-foreground">USD Value:</span>
                            <div  className="font-semibold">${price * Number(depositAmount)}</div>
                          <div>
                            <span className="text-muted-foreground">Duration:</span>
                            <div className="font-semibold">{selectedStrategyData?.duration}</div>
                          </div>
                        </div>
                        </div>

                      </Card>
                    )}

                    <Button 
                      onClick={handleDeposit}
                      disabled={!depositAmount || isDepositing}
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 py-6 text-lg group"
                    >
                      {isDepositing ? (
                        <>
                          <Activity className="mr-2 h-5 w-5 animate-spin" />
                          Processing Transaction...
                        </>
                      ) : (
                        <>
                          <Shield className="mr-2 h-5 w-5" />
                          Protect {depositAmount || '0'} ETH
                          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </Button>
                  </div>
                
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Strategy Details */}
            <Card className="p-6 bg-background/50 backdrop-blur-lg border-border/50">
              <h3 className="text-lg font-semibold mb-4">Strategy Breakdown</h3>
              {selectedStrategyData && (
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Shield className="h-5 w-5 text-purple-400" />
                    <div>
                      <div className="font-semibold">{selectedStrategyData.name}</div>
                      <div className="text-sm text-muted-foreground">Protection Level</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Min Deposit</span>
                      <span className="font-semibold">{selectedStrategyData.minDeposit}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Max Protection</span>
                      <span className="font-semibold text-green-400">{selectedStrategyData.maxProtection}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Expected Return</span>
                      <span className="font-semibold text-green-400">{selectedStrategyData.expectedReturn}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Duration</span>
                      <span className="font-semibold">{selectedStrategyData.duration}</span>
                    </div>
                  </div>
                </div>
              )}
            </Card>

            {/* Risk Metrics */}
            <Card className="p-6 bg-background/50 backdrop-blur-lg border-border/50">
              <h3 className="text-lg font-semibold mb-4">Risk Intel</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <TrendingDown className="h-4 w-4 text-red-400" />
                    <span className="text-sm">Max Drawdown</span>
                  </div>
                  <span className="font-semibold">-8.2%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <BarChart3 className="h-4 w-4 text-blue-400" />
                    <span className="text-sm">Volatility</span>
                  </div>
                  <span className="font-semibold">24.5%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Target className="h-4 w-4 text-green-400" />
                    <span className="text-sm">Success Rate</span>
                  </div>
                  <span className="font-semibold text-green-400">94.2%</span>
                </div>
              </div>
            </Card>

            {/* How It Works */}
            <Card className="p-6 bg-background/50 backdrop-blur-lg border-border/50">
              <h3 className="text-lg font-semibold mb-4">How It Works</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs font-bold">1</div>
                  <div>
                    <div className="font-semibold text-sm">Deposit ETH</div>
                    <div className="text-xs text-muted-foreground">Pick your amount and strategy</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold">2</div>
                  <div>
                    <div className="font-semibold text-sm">AI Protection</div>
                    <div className="text-xs text-muted-foreground">Algorithms monitor and hedge automatically</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold">3</div>
                  <div>
                    <div className="font-semibold text-sm">Earn Returns</div>
                    <div className="text-xs text-muted-foreground">Protected growth with upside potential</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}