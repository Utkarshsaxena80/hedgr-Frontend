"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ethers, BrowserProvider } from "ethers";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  BarChart3,
  PieChart,
  Calendar,
  Download,
  Filter,
} from "lucide-react";
import abi from ".//../abi/abi.json";
declare global {
  interface Window {
    ethereum?: any;
  }
}

export default function Portfolio() {
  const [selectedPeriod, setSelectedPeriod] = useState("1Y");
  const [mainContract, setMainContract] = useState<ethers.Contract | null>(
    null
  );
  const [userBalance, setUserBalance] = useState<number | null>(null);
  const [price, setPrice] = useState<number | null>(null);
  const [lastPrice, setLastPrice] = useState<number | null>(null);
  const [useTolerance, setUserTolerance] = useState<number | null>(null);
  const add: string = "0x36CD2dafc9149B2dea2497B299D34f9D5478569B";
  const[strategyName,setStrategyName]=useState<string|null>(null);
  async function loadBlockchainData() {
    const provider = new BrowserProvider(window.ethereum);

    const signer = await provider.getSigner();
    if (!add) {
      console.log("no address found");
    }
    //      console.log(abi);
    const mainContract1 = new ethers.Contract(add, abi, signer);
    console.log(mainContract1);
    setMainContract(mainContract1);

    const bal = await mainContract1.getUserBalance();
    console.log(bal);
    const formatted = ethers.formatEther(bal);
    setUserBalance(Number(formatted));
    console.log(`Price:  ${formatted} ETH `);

    const result = await mainContract1.getChainlinkDataFeedLatestAnswer();
    const formatted1 = Number(result) / 1e8;
    setPrice(formatted1);
    console.log(formatted1);

    const last = await mainContract1.getUserLastPrice();
    const formatted2 = Number(last) / 1e8;
    setLastPrice(formatted2);

    const tol = await mainContract1.getUserToleranceLevel();
    const formatted3 = Number(tol);
    setUserTolerance(formatted3);
    console.log(formatted3);

    if(formatted3==1){
      setStrategyName("Diamond hands");

    }

    else if(formatted3==2){
      setStrategyName("Smart Money")
    }
    else{
      setStrategyName("Moon Mission")
    }
  }
  useEffect(() => {
    loadBlockchainData();
  }, []);
 async function handleWithdraw() {
  if (!mainContract) {
    console.error("Main contract is not initialized.");
    return;
  }
  const result = await mainContract.withdraw();
  await result.wait();
 }
  const performanceData = {
    "1M": { return: "+2.8%", value: "$2,432,180", change: "+68,420" },
  };
  // Calculate APY and related values safely
  const apy =
    userBalance !== null &&
    price !== null &&
    lastPrice !== null &&
    !isNaN(userBalance) &&
    !isNaN(price) &&
    !isNaN(lastPrice)
      ? userBalance * (price - lastPrice)
      : 0;

  const holdings = [
    {
      asset: "Ethereum",
      symbol: "ETH",
      allocation: "100",
      value: userBalance,
      change: apy,
      apy: (
        ((userBalance ?? 0) * ((price ?? 0) - (lastPrice ?? 0)) / ((userBalance ?? 0) * (lastPrice ?? 1))) *
        100
      ).toFixed(2),
      status: "Hedge Fund",
    },
  ];

  const transactions = [
    {
      type: "Staking Reward",
      asset: "ETH",
      amount: "+0.0247 ETH",
      value: "+$58.42",
      date: "2024-10-28 14:32",
      status: "Completed",
    },
  ];
 
  const strategies = [
    {
      name: strategyName,
      allocation: "100%",
      return: apy.toFixed(2),
      sharpe: (
                    ((userBalance ?? 0) * ((price ?? 0) - (lastPrice ?? 0)) /
                      ((userBalance ?? 0) * (lastPrice ?? 1))) *
                    100
                  ).toFixed(2),
      status: "Active",
    },
  ];

  const riskMetrics = [
    {
      metric: "Portfolio Beta",
      value: "0.85",
      description: "Lower volatility than market",
    },
  ];

  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Portfolio Dashboard</h1>
            <p className="text-muted-foreground">
              Real-time performance and analytics
            </p>
          </div>
          <div className="flex gap-2 mt-4 sm:mt-0">
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>

        {/* Performance Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="lg:col-span-2 p-6 bg-background/50 backdrop-blur-lg border-border/50">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Portfolio Performance</h2>
              <div className="flex gap-2">
                {Object.keys(performanceData).map((period) => (
                  <Button
                    key={period}
                    variant={selectedPeriod === period ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedPeriod(period)}
                    className={selectedPeriod === period ? "bg-purple-600" : ""}
                  >
                    {period}
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-sm text-muted-foreground mb-1">
                  Total Value
                </div>
                <div className="text-3xl font-bold">
                  {" "}
                  $ {(userBalance !== null && price !== null ? (userBalance * price).toFixed(2) : "0.00")}{" "}
                </div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">
                  Period Return
                </div>
                <div
                  className={`text-3xl font-bold ${
                    apy >= 0 ? "text-green-400" : "text-red-400"
                  }`}
                >
                  ${apy.toFixed(2)}
                </div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">
                  Absolute Gain
                </div>
                <div className="text-3xl font-bold text-green-400">
                  {(
                    (((userBalance ?? 0) * ((price ?? 0) - (lastPrice ?? 0))) /
                      ((userBalance ?? 0) * (lastPrice ?? 1))) *
                    100
                  ).toFixed(2)}{" "}
                  %
                </div>
              </div>
            </div>

            {/* Chart Placeholder */}
            <div className="mt-8 h-64 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <BarChart3 className="h-12 w-12 text-purple-400 mx-auto mb-2" />
                <p className="text-muted-foreground">Performance Chart</p>
                <p className="text-sm text-muted-foreground">
                  Interactive chart would be implemented here
                </p>
              </div>
            </div>
          </Card>

          <div className="space-y-6"></div>
        </div>

        {/* Detailed Tabs */}
        <Tabs defaultValue="holdings" className="space-y-3">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger className="w-full" value="holdings">Holdings</TabsTrigger>
            <TabsTrigger  className="w-full" value="strategies">Strategies</TabsTrigger>
           
          </TabsList>

          <TabsContent value="holdings">
            <Card className="p-6 bg-background/50 backdrop-blur-lg border-border/50">
              <h3 className="text-xl font-semibold mb-6">Current Holdings</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3">Asset</th>
                      <th className="text-left py-3">Allocation</th>
                      <th className="text-left py-3">Value</th>
                      <th className="text-left py-3">24h Change</th>
                      <th className="text-left py-3">APY</th>
                      <th className="text-left py-3">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {holdings.map((holding, index) => (
                      <tr key={index} className="border-b border-border/50">
                        <td className="py-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">
                              {holding.symbol.slice(0, 2)}
                            </div>
                            <div>
                              <div className="font-semibold">
                                {holding.asset}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {holding.symbol}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 font-semibold">
                          {holding.allocation}
                        </td>
                        <td className="py-4 font-semibold">{holding.value}</td>
                        <td className="py-4">
                          <span
                            className={`text-3l font-bold ${
                              apy >= 0 ? "text-green" : "text-red-400"
                            }`}
                          >
                            {apy.toFixed(2)} %
                          </span>
                        </td>
                        <td className="py-4 text-green-400">{holding.apy}</td>
                        <td className="py-4">
                          <Badge
                            variant={
                              holding.status === "Staking"
                                ? "default"
                                : "secondary"
                            }
                          >
                            {holding.status}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="strategies">
            <Card className="p-6 bg-background/50 backdrop-blur-lg border-border/50">
              <h3 className="text-xl font-semibold mb-6">Active Strategies</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {strategies.map((strategy, index) => (
                  <Card
                    key={index}
                    className="p-6 bg-background/30 backdrop-blur-lg border-border/50"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-lg font-semibold">{strategy.name}</h4>
                      <Badge className="bg-green-500/20 text-green-400">
                        {strategy.status}
                      </Badge>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          Allocation
                        </span>
                        <span className="font-semibold">
                          {strategy.allocation}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          YTD Return
                        </span>
                        <span className="text-green-400 font-semibold">
                          {strategy.return}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          Sharpe Ratio
                        </span>
                        <span className="font-semibold">{strategy.sharpe}</span>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="transactions">
            <Card className="p-6 bg-background/50 backdrop-blur-lg border-border/50">
              <h3 className="text-xl font-semibold mb-6">
                Recent Transactions
              </h3>
              <div className="space-y-4">
                {transactions.map((tx, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-lg bg-background/30"
                  >
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          tx.type === "Staking Reward"
                            ? "bg-green-500/20 text-green-400"
                            : tx.type === "Yield Claim"
                            ? "bg-blue-500/20 text-blue-400"
                            : "bg-purple-500/20 text-purple-400"
                        }`}
                      >
                        {tx.type === "Staking Reward" ? (
                          <TrendingUp className="h-5 w-5" />
                        ) : tx.type === "Yield Claim" ? (
                          <DollarSign className="h-5 w-5" />
                        ) : (
                          <BarChart3 className="h-5 w-5" />
                        )}
                      </div>
                      <div>
                        <div className="font-semibold">{tx.type}</div>
                        <div className="text-sm text-muted-foreground">
                          {tx.asset}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">{tx.amount}</div>
                      <div className="text-sm text-muted-foreground">
                        {tx.value}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">
                        {tx.date}
                      </div>
                      <Badge
                        variant="secondary"
                        className="text-green-400 bg-green-400/10"
                      >
                        {tx.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="p-6 bg-background/50 backdrop-blur-lg border-border/50">
                <h3 className="text-xl font-semibold mb-6">Risk Metrics</h3>
                <div className="space-y-4">
                  {riskMetrics.map((metric, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg bg-background/30"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold">{metric.metric}</span>
                        <span className="text-lg font-bold">
                          {metric.value}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {metric.description}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6 bg-background/50 backdrop-blur-lg border-border/50">
                <h3 className="text-xl font-semibold mb-6">Asset Allocation</h3>
                <div className="h-64 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <PieChart className="h-12 w-12 text-purple-400 mx-auto mb-2" />
                    <p className="text-muted-foreground">Allocation Chart</p>
                    <p className="text-sm text-muted-foreground">
                      Interactive pie chart would be here
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  {holdings.slice(0, 4).map((holding, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <span className="text-sm text-muted-foreground">
                        {holding.asset}
                      </span>
                      <span className="font-semibold">
                        {holding.allocation}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
        <Button
  onClick={handleWithdraw}
  className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-semibold py-2 px-4 rounded-xl shadow-md transition-all duration-300"
>
  Withdraw ETH
</Button>

      </div>
    </div>
  );
}
