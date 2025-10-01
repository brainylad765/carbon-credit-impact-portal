"use client"

import Sidebar from "@/components/Sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendingUp, TrendingDown, Search, ArrowUpRight, ArrowDownRight, ShoppingCart, Wallet } from "lucide-react"

const marketData = [
  { name: "Amazon Conservation Credits", symbol: "ACC", price: "$45.50", change: "+5.2%", volume: "125K", trend: "up" },
  { name: "Solar Energy Credits", symbol: "SEC", price: "$32.80", change: "+3.8%", volume: "98K", trend: "up" },
  { name: "Wind Power Credits", symbol: "WPC", price: "$52.20", change: "-1.4%", volume: "156K", trend: "down" },
  { name: "Mangrove Restoration", symbol: "MRC", price: "$28.90", change: "+7.1%", volume: "67K", trend: "up" },
  { name: "Ocean Cleanup Credits", symbol: "OCC", price: "$38.40", change: "+2.5%", volume: "89K", trend: "up" },
  { name: "Forest Preservation", symbol: "FPC", price: "$41.70", change: "-0.8%", volume: "112K", trend: "down" },
]

const walletAssets = [
  { name: "Amazon Conservation Credits", symbol: "ACC", amount: "542", value: "$24,661", allocation: "35%" },
  { name: "Solar Energy Credits", symbol: "SEC", amount: "320", value: "$10,496", allocation: "15%" },
  { name: "Wind Power Credits", symbol: "WPC", amount: "890", value: "$46,458", allocation: "50%" },
]

const transactions = [
  { type: "buy", asset: "Wind Power Credits", amount: "150", symbol: "WPC", price: "$52.20", total: "$7,830", date: "2025-09-30T00:37:10.617Z", status: "completed" },
  { type: "sell", asset: "Solar Energy Credits", amount: "75", symbol: "SEC", price: "$32.80", total: "$2,460", date: "2025-09-29T00:37:10.617Z", status: "completed" },
  { type: "buy", asset: "Amazon Conservation", amount: "200", symbol: "ACC", price: "$45.50", total: "$9,100", date: "2025-09-28T00:37:10.617Z", status: "pending" },
]

export default function MarketPage() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Sidebar />
      
      <main className="flex-1 ml-20 transition-all duration-300">
        <div className="p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-slate-900 mb-2">Market & Wallet</h1>
            <p className="text-lg text-slate-600">Trade carbon credits and manage your portfolio</p>
          </div>

          <Tabs defaultValue="market" className="space-y-6">
            <TabsList className="bg-white border-none shadow-md">
              <TabsTrigger value="market" className="gap-2">
                <TrendingUp className="h-4 w-4" />
                Market
              </TabsTrigger>
              <TabsTrigger value="wallet" className="gap-2">
                <Wallet className="h-4 w-4" />
                Wallet
              </TabsTrigger>
            </TabsList>

            <TabsContent value="market" className="space-y-6">
              {/* Market Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { label: "Market Cap", value: "$2.4B", change: "+8.5%", trend: "up" },
                  { label: "24h Volume", value: "$45.2M", change: "+12.3%", trend: "up" },
                  { label: "Active Credits", value: "847K", change: "+5.1%", trend: "up" },
                  { label: "Avg. Price", value: "$39.80", change: "-0.3%", trend: "down" },
                ].map((stat) => (
                  <Card key={stat.label} className="border-none shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-slate-600">{stat.label}</span>
                        <Badge
                          variant="secondary"
                          className={`${
                            stat.trend === "up"
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                          } border-none`}
                        >
                          {stat.change}
                        </Badge>
                      </div>
                      <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Current Market Price Section */}
              <Card className="border-none shadow-lg bg-gradient-to-br from-blue-600 to-blue-800 text-white">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h2 className="text-xl font-semibold mb-2 opacity-90">Current Market Price</h2>
                    <div className="text-5xl font-bold mb-2">$25.00 <span className="text-2xl opacity-75">per tCO₂e</span></div>
                  </div>
                  <div className="flex gap-4 justify-center">
                    <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-12">
                      Buy 100 Credits
                    </Button>
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-12">
                      Sell 50 Credits
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Search Bar */}
              <Card className="border-none shadow-lg">
                <CardContent className="p-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <Input
                      placeholder="Search carbon credits..."
                      className="pl-10"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Market Cards Grid */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Available Credits</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {marketData.map((credit) => (
                    <Card key={credit.symbol} className="border-none shadow-lg hover:shadow-xl transition-all group">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-3">
                          <div className="h-14 w-14 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-lg">{credit.symbol.slice(0, 2)}</span>
                          </div>
                          <Badge
                            className={`${
                              credit.trend === "up"
                                ? "bg-green-500 hover:bg-green-600"
                                : "bg-red-500 hover:bg-red-600"
                            } text-white border-none`}
                          >
                            {credit.trend === "up" ? (
                              <ArrowUpRight className="h-3 w-3 mr-1" />
                            ) : (
                              <ArrowDownRight className="h-3 w-3 mr-1" />
                            )}
                            {credit.change}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg line-clamp-2">{credit.name}</CardTitle>
                        <p className="text-sm text-slate-600">{credit.symbol}</p>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-slate-600">Current Price</span>
                            <span className="text-2xl font-bold text-slate-900">{credit.price}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-slate-600">24h Volume</span>
                            <span className="text-lg font-semibold text-slate-900">{credit.volume}</span>
                          </div>
                          <Button className="w-full bg-blue-600 hover:bg-blue-700 gap-2">
                            <ShoppingCart className="h-4 w-4" />
                            Buy Credits
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Recent Transactions */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>Recent Transactions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {transactions.map((tx, index) => (
                      <Card key={index} className="border border-slate-200 shadow-sm">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <Badge className={tx.type === "buy" ? "bg-green-500" : "bg-blue-500"}>
                              {tx.type} - {tx.amount} {tx.symbol}
                            </Badge>
                            <Badge variant="secondary" className={
                              tx.status === "completed" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"
                            }>
                              {tx.status}
                            </Badge>
                          </div>
                          <h4 className="font-bold text-slate-900 mb-2 line-clamp-1">{tx.asset}</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-slate-600">Date:</span>
                              <span className="font-medium text-slate-900">
                                {new Date(tx.date).toLocaleDateString()}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-600">Price:</span>
                              <span className="font-medium text-slate-900">{tx.price}</span>
                            </div>
                            <div className="flex justify-between pt-2 border-t">
                              <span className="text-slate-600">Total:</span>
                              <span className="font-bold text-lg text-slate-900">{tx.total}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="wallet" className="space-y-6">
              {/* Wallet Overview */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { label: "Total Balance", value: "$81,615", icon: Wallet },
                  { label: "Total Credits", value: "1,752", icon: TrendingUp },
                  { label: "Portfolio Value", value: "+18.5%", icon: ArrowUpRight },
                ].map((stat) => (
                  <Card key={stat.label} className="border-none shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-blue-100 p-3 rounded-lg">
                          <stat.icon className="h-6 w-6 text-blue-600" />
                        </div>
                      </div>
                      <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                      <div className="text-sm text-slate-600">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Wallet Assets Grid */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-slate-900">Your Assets</h3>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Add Funds
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {walletAssets.map((asset) => (
                    <Card key={asset.symbol} className="border-none shadow-lg hover:shadow-xl transition-all">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-4">
                          <div className="h-14 w-14 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-lg">{asset.symbol.slice(0, 2)}</span>
                          </div>
                          <Badge className="bg-blue-100 text-blue-700 border-none">
                            {asset.allocation}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg line-clamp-2">{asset.name}</CardTitle>
                        <p className="text-sm text-slate-600">{asset.symbol}</p>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-slate-600">Credits Owned</span>
                            <span className="text-2xl font-bold text-slate-900">{asset.amount}</span>
                          </div>
                          <div className="flex justify-between items-center pt-3 border-t">
                            <span className="text-sm text-slate-600">Total Value</span>
                            <span className="text-xl font-bold text-green-600">{asset.value}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Transaction History */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>Transaction History</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {transactions.map((tx, index) => (
                      <Card key={index} className="border border-slate-200 shadow-sm">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <Badge className={tx.type === "buy" ? "bg-green-500" : "bg-blue-500"}>
                              {tx.type} - {tx.amount} {tx.symbol}
                            </Badge>
                            <Badge variant="secondary" className={
                              tx.status === "completed" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"
                            }>
                              {tx.status}
                            </Badge>
                          </div>
                          <h4 className="font-bold text-slate-900 mb-2 line-clamp-1">{tx.asset}</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-slate-600">Date:</span>
                              <span className="font-medium text-slate-900">
                                {new Date(tx.date).toLocaleDateString()}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-600">Price:</span>
                              <span className="font-medium text-slate-900">{tx.price}</span>
                            </div>
                            <div className="flex justify-between pt-2 border-t">
                              <span className="text-slate-600">Total:</span>
                              <span className="font-bold text-lg text-slate-900">{tx.total}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}