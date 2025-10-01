"use client"

import { useState } from "react"
import Sidebar from "@/components/Sidebar"
import LeafletMap from "@/components/LeafletMap"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, TrendingUp, Calendar, Edit, DollarSign, Users, Settings, Upload, LogOut } from "lucide-react"

const myProjects = [
  {
    id: 1,
    title: "Amazon Rainforest Conservation",
    location: "Brazil",
    coordinates: [-3.4653, -62.2159] as [number, number],
    status: "Active",
    invested: "$25,000",
    returns: "+18%",
    credits: "5,420",
    startDate: "Jan 2024",
    progress: 75,
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    title: "Solar Farm Development",
    location: "California, USA",
    coordinates: [36.7783, -119.4179] as [number, number],
    status: "Active",
    invested: "$15,000",
    returns: "+12%",
    credits: "3,200",
    startDate: "Mar 2024",
    progress: 60,
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    title: "Wind Energy Initiative",
    location: "Scotland",
    coordinates: [56.4907, -4.2026] as [number, number],
    status: "Active",
    invested: "$35,000",
    returns: "+22%",
    credits: "8,900",
    startDate: "Feb 2024",
    progress: 90,
    image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    title: "Mangrove Restoration",
    location: "Indonesia",
    coordinates: [-2.5489, 118.0149] as [number, number],
    status: "Active",
    invested: "$10,000",
    returns: "+9%",
    credits: "2,100",
    startDate: "Apr 2024",
    progress: 45,
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
  },
]

const portfolioStats = [
  { label: "Total Invested", value: "$85,000", icon: DollarSign, change: "+5.2%", color: "blue" },
  { label: "Carbon Credits", value: "19,620", icon: TrendingUp, change: "+12%", color: "green" },
  { label: "Active Projects", value: "4", icon: Users, change: "+1", color: "purple" },
  { label: "Total Returns", value: "$15,300", icon: TrendingUp, change: "+18%", color: "emerald" },
]

const recentTransactions = [
  { type: "investment", title: "Invested in Solar Farm Development", amount: "+$15,000", date: "2 days ago", status: "completed" },
  { type: "credit", title: "Received Carbon Credits from Amazon Project", amount: "+1,200 credits", date: "5 days ago", status: "completed" },
  { type: "return", title: "Project Return Payout - Wind Energy", amount: "+$2,400", date: "1 week ago", status: "completed" },
]

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("overview")

  const projectMarkers = myProjects.map(project => ({
    position: project.coordinates,
    title: project.title,
    description: project.location,
  }))

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Sidebar />
      
      <main className="flex-1 ml-20 transition-all duration-300">
        <div className="p-8">
          {/* Profile Header */}
          <Card className="border-none shadow-lg mb-8 overflow-hidden">
            <div className="h-32 bg-gradient-to-r from-blue-600 to-blue-800" />
            <CardContent className="relative pt-0 pb-6">
              <div className="flex items-end justify-between -mt-16 mb-6">
                <div className="flex items-end gap-6">
                  <Avatar className="h-32 w-32 border-4 border-white shadow-xl">
                    <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" />
                    <AvatarFallback>SA</AvatarFallback>
                  </Avatar>
                  <div className="mb-2">
                    <h1 className="text-3xl font-bold text-slate-900">Sabrina Aryan</h1>
                    <p className="text-slate-600">sabrina@gmail.com</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge className="bg-blue-100 text-blue-700 border-none">Verified Investor</Badge>
                      <Badge className="bg-green-100 text-green-700 border-none">Top Contributor</Badge>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" className="gap-2">
                    <Settings className="h-4 w-4" />
                    Settings
                  </Button>
                  <Button variant="outline" className="gap-2">
                    <Edit className="h-4 w-4" />
                    Edit Profile
                  </Button>
                </div>
              </div>

              {/* Portfolio Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {portfolioStats.map((stat) => (
                  <Card key={stat.label} className="border-none shadow-md">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`bg-${stat.color}-100 p-2 rounded-lg`}>
                          <stat.icon className={`h-5 w-5 text-${stat.color}-600`} />
                        </div>
                        <Badge variant="secondary" className="bg-green-100 text-green-700 border-none text-xs">
                          {stat.change}
                        </Badge>
                      </div>
                      <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                      <div className="text-sm text-slate-600">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Profile Location Section */}
          <Card className="border-none shadow-lg mb-8">
            <CardContent className="p-6 bg-slate-900 text-white">
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p className="text-sm mb-1">Sector 49, Badkhal, Faridabad, Haryana, 121001, India</p>
              <p className="text-sm opacity-75">Lat: 28.3960, Lng: 77.2726</p>
            </CardContent>
            <div className="h-64 w-full">
              <LeafletMap
                center={[28.3960, 77.2726]}
                zoom={13}
                markers={[{
                  position: [28.3960, 77.2726] as [number, number],
                  title: "Your Location",
                  description: "Faridabad, Haryana"
                }]}
                className="h-full w-full"
              />
            </div>
          </Card>

          {/* Profile Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
            {[
              { icon: Users, label: "Your Projects", color: "blue" },
              { icon: Upload, label: "Uploads", color: "green" },
              { icon: MapPin, label: "Location (Map above)", color: "purple" },
              { icon: TrendingUp, label: "Recent Transactions", color: "orange" },
              { icon: LogOut, label: "Log Out", color: "red" },
            ].map((action) => (
              <Card key={action.label} className="border-none shadow-lg hover:shadow-xl transition-all cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className={`bg-${action.color}-100 p-4 rounded-full inline-flex mb-3 group-hover:scale-110 transition-transform`}>
                    <action.icon className={`h-6 w-6 text-${action.color}-600`} />
                  </div>
                  <p className="text-sm font-semibold text-slate-900">{action.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Tabs Section */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="bg-white border-none shadow-md">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="projects">Your Projects</TabsTrigger>
              <TabsTrigger value="transactions">Recent Transactions</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Activity */}
                <Card className="border-none shadow-lg">
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {recentTransactions.map((activity, index) => (
                        <Card key={index} className="border border-slate-200 shadow-sm">
                          <CardContent className="p-4">
                            <div className="flex items-start justify-between mb-2">
                              <Badge className={
                                activity.type === "investment" ? "bg-blue-500" :
                                activity.type === "credit" ? "bg-green-500" : "bg-purple-500"
                              }>
                                {activity.type}
                              </Badge>
                              <span className="text-xs text-slate-600">{activity.date}</span>
                            </div>
                            <h4 className="font-semibold text-slate-900 text-sm mb-2">{activity.title}</h4>
                            <div className="flex justify-between items-center">
                              <span className="font-bold text-green-600">{activity.amount}</span>
                              <Badge variant="secondary" className="bg-green-100 text-green-700 text-xs">
                                {activity.status}
                              </Badge>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Performance Summary */}
                <Card className="border-none shadow-lg">
                  <CardHeader>
                    <CardTitle>Portfolio Performance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg flex items-center justify-center mb-4">
                      <div className="text-center">
                        <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-2" />
                        <div className="text-3xl font-bold text-slate-900 mb-1">+18%</div>
                        <div className="text-slate-600">Overall Returns</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-slate-50 rounded-lg">
                        <div className="text-2xl font-bold text-slate-900">$15.3K</div>
                        <div className="text-xs text-slate-600">Total Earnings</div>
                      </div>
                      <div className="text-center p-3 bg-slate-50 rounded-lg">
                        <div className="text-2xl font-bold text-slate-900">4</div>
                        <div className="text-xs text-slate-600">Active Projects</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="projects" className="space-y-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-slate-900">Your Projects</h3>
                <p className="text-slate-600">{myProjects.length} active investments</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {myProjects.map((project) => (
                  <Card key={project.id} className="border-none shadow-lg hover:shadow-xl transition-all group overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <Badge className="absolute top-4 right-4 bg-green-500 text-white border-none">
                        {project.status}
                      </Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg line-clamp-2">{project.title}</CardTitle>
                      <div className="flex items-center gap-2 text-slate-600 text-sm">
                        <MapPin className="h-3 w-3" />
                        {project.location}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-slate-600">Progress</span>
                            <span className="font-semibold text-slate-900">{project.progress}%</span>
                          </div>
                          <div className="w-full bg-slate-200 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all"
                              style={{ width: `${project.progress}%` }}
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <span className="text-xs text-slate-600">Invested</span>
                            <div className="font-bold text-slate-900">{project.invested}</div>
                          </div>
                          <div>
                            <span className="text-xs text-slate-600">Returns</span>
                            <div className="font-bold text-green-600">{project.returns}</div>
                          </div>
                        </div>
                        <div className="flex justify-between pt-3 border-t">
                          <div>
                            <span className="text-xs text-slate-600">Credits Earned</span>
                            <div className="font-bold text-blue-600">{project.credits}</div>
                          </div>
                          <div className="flex items-center gap-1 text-xs text-slate-600">
                            <Calendar className="h-3 w-3" />
                            {project.startDate}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="transactions">
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>Transaction History</CardTitle>
                  <p className="text-sm text-slate-600">All your recent activities and transactions</p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {recentTransactions.map((tx, index) => (
                      <Card key={index} className="border border-slate-200 shadow-sm">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <Badge className={
                              tx.type === "investment" ? "bg-blue-500" :
                              tx.type === "credit" ? "bg-green-500" : "bg-purple-500"
                            }>
                              {tx.type}
                            </Badge>
                            <Badge variant="secondary" className="bg-green-100 text-green-700">
                              {tx.status}
                            </Badge>
                          </div>
                          <h4 className="font-bold text-slate-900 mb-3 line-clamp-2">{tx.title}</h4>
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-slate-600">Amount</span>
                              <span className="font-bold text-lg text-green-600">{tx.amount}</span>
                            </div>
                            <div className="flex justify-between items-center text-xs">
                              <span className="text-slate-600">Date</span>
                              <span className="text-slate-900">{tx.date}</span>
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