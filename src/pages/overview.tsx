import React, { Fragment } from "react";
// import { DollarSign, FileText } from "lucide-react";
import StatCard from "@/components/statCard";
// import TrackCard from "@/components/overview-track-card";
import RevenueChart from "@/components/revenue-chart";
import InvoiceList from "@/components/invoice-list";
// import { ChartTooltipDefault } from "@/components/charts/revenuebar-chart";
import { SiteHeader } from "@/components/dashboard/site-header";
import OverviewTrackCard from "@/components/overview-track-card";
import { useQuery } from "@tanstack/react-query";
import type { TrackResponse } from "@/types/track.type";
import { allTracks } from "@/services/track-services";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Loading from "@/components/loading";
import type { AllTrackResponse } from "@/types/invoices.types";
import { allInvoice } from "@/services/invoice-services";

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

export type TrackCardColors = { light: string; deep: string }[];

const Overview: React.FC = () => {
  const stats = [
    {
      title: "Total Learners",
      value: "12,450",
      change: "12%",
      changeType: "positive" as const,
      iconPath: "/images/learners-img.png",
    },
    {
      title: "Revenue",
      value: "$12,450",
      change: "12%",
      changeType: "positive" as const,
      iconPath: "/images/revenue-img.png",
    },
    {
      title: "Invoice",
      value: "100",
      change: "2%",
      changeType: "positive" as const,
      iconPath: "/images/invoice-img.png",
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

  const { data, isLoading: isloadingTacks } = useQuery<TrackResponse, Error>({
    queryKey: ["get-all-tracks"],
    queryFn: allTracks,
  });

  const trackDetails = data?.tracks || [];

  const trackCardColors: TrackCardColors[] = [
    [
      { light: "#ECFDF3", deep: "#027A48" },
      { light: "#F3F0FB", deep: "#6941C6" },
    ],
    [
      { light: "#F0F9FF", deep: "#026AA2" },
      { light: "#F8F9FC", deep: "#5A628C" },
    ],
    [
      { light: "#F7EDF6", deep: "#C11574" },
      { light: "#E9F3FB", deep: "#175CD3" },
    ],
    [
      { light: "#FFF4ED", deep: "#B93815" },
      { light: "#FFF1F3", deep: "#C01048" },
    ],
    [
      { light: "#F3F0FB", deep: "#827D08" },
      { light: "#F3F0FB", deep: "#6941C6" },
    ],
    [
      { light: "#555555", deep: "#146111" },
      { light: "#F3F0FB", deep: "#6941C6" },
    ],
  ];

  const { data: invoiceDetails, isLoading: isloadingInvoices } = useQuery<
    AllTrackResponse,
    Error
  >({
    queryKey: ["get-all-invoices"],
    queryFn: allInvoice,
  });
  const info = invoiceDetails || [];

  return (
    <>
      <SiteHeader
        title="Welcome Admin 👋"
        description="Track activity, trends, and popular destinations in real time"
      />
      <div className="min-h-screen bg-gray-50 p-6 ">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>

          {isloadingTacks && <span>{/* <Loading /> */}</span>}
          {/* Tracks Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Tracks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {trackDetails.map((track, index) => {
                const trackColors = trackCardColors[index];

                return (
                  <Fragment key={track._id + index}>
                    <OverviewTrackCard
                      track={track}
                      trackColors={trackColors}
                    />
                  </Fragment>
                );
              })}
            </div>
          </div>

          {/* Bottom Section */}
          {isloadingInvoices && <span>{/* <Loading /> */}</span>}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <RevenueChart data={revenueData} />
            {!isloadingInvoices && info && <InvoiceList info={info} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
