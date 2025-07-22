import React from "react";
import { Users, DollarSign, FileText } from "lucide-react";
import StatCard from "@/components/statCard";
import TrackCard from "@/components/trackCard";
import RevenueChart from "@/components/revenue-chart";
import InvoiceList from "@/components/invoice-list";
import { ChartTooltipDefault } from "@/components/charts/revenuebar-chart";

interface RevenueData {
  month: string;
  value: number;
}

interface InvoiceItem {
  id: string;
  name: string;
  amount: number;
  avatar: string;
}

const Overview: React.FC = () => {
  const stats = [
    {
      title: "Total Learners",
      value: "12,450",
      change: "12%",
      changeType: "positive" as const,
      icon: <Users className="w-5 h-5" />,
    },
    {
      title: "Revenue",
      value: "$12,450",
      change: "12%",
      changeType: "positive" as const,
      icon: <DollarSign className="w-5 h-5" />,
    },
    {
      title: "Invoice",
      value: "100",
      change: "2%",
      changeType: "positive" as const,
      icon: <FileText className="w-5 h-5" />,
    },
  ];

  const tracks = [
    {
      title: "Software Engineering",
      duration: "12 weeks",
      price: 400,
      image: "/api/placeholder/280/128",
      tags: ["Node.js", "React.js"],
      gradient: "bg-gradient-to-br from-teal-400 to-cyan-500",
    },
    {
      title: "Cloud Computing",
      duration: "12 weeks",
      price: 350,
      image: "/api/placeholder/280/128",
      tags: ["Azure", "AWS"],
      gradient: "bg-gradient-to-br from-orange-400 to-red-500",
    },
    {
      title: "Data Science",
      duration: "12 weeks",
      price: 400,
      image: "/api/placeholder/280/128",
      tags: ["PowerBI", "Python"],
      gradient: "bg-gradient-to-br from-purple-500 to-indigo-600",
    },
    {
      title: "UI/UX",
      duration: "8 weeks",
      price: 250,
      image: "/api/placeholder/280/128",
      tags: ["Figma", "Sketch"],
      gradient: "bg-gradient-to-br from-blue-400 to-cyan-500",
    },
  ];

  const revenueData: RevenueData[] = [
    { month: "Jan", value: 2200 },
    { month: "Feb", value: 1800 },
    { month: "Mar", value: 3200 },
    { month: "Apr", value: 2800 },
    { month: "May", value: 2900 },
    { month: "Jun", value: 2600 },
  ];

  const invoices: InvoiceItem[] = [
    {
      id: "1",
      name: "James Anderson",
      amount: 320,
      avatar: "/api/placeholder/40/40",
    },
    {
      id: "2",
      name: "Michael Johnson",
      amount: 210,
      avatar: "/api/placeholder/40/40",
    },
    {
      id: "3",
      name: "David Brown",
      amount: 315,
      avatar: "/api/placeholder/40/40",
    },
    {
      id: "4",
      name: "Orlando Diggs",
      amount: 250,
      avatar: "/api/placeholder/40/40",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        {/* Tracks Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Tracks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tracks.map((track, index) => (
              <TrackCard key={index} {...track} />
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RevenueChart data={revenueData} />
          <InvoiceList invoices={invoices} />
        </div>
      </div>
      <ChartTooltipDefault />
    </div>
  );
};

export default Overview;
