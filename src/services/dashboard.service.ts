import { DashboardQuery, DashboardResponse } from "../schemas/dashboard.schema";

export class DashboardService {
  // In a real application, this would fetch data from your database
  async getDashboardData(query: DashboardQuery): Promise<DashboardResponse> {
    // Simulate database query delay
    await new Promise((resolve) => setTimeout(resolve, 100));

    // Mock data - replace with actual database queries
    return {
      summaryCards: [
        {
          label: "Total Orders",
          value: "16,689",
          iconBg: "bg-indigo-100",
          iconColor: "text-indigo-600",
          bg: "bg-gradient-to-br from-indigo-50 to-white",
        },
        {
          label: "Return Item",
          value: "148",
          iconBg: "bg-yellow-100",
          iconColor: "text-yellow-600",
          bg: "bg-gradient-to-br from-yellow-50 to-white",
        },
        {
          label: "Annual Budget",
          value: "$156K",
          iconBg: "bg-teal-100",
          iconColor: "text-teal-600",
          bg: "bg-gradient-to-br from-teal-50 to-white",
        },
        {
          label: "Cancel Orders",
          value: "64",
          iconBg: "bg-pink-100",
          iconColor: "text-pink-600",
          bg: "bg-gradient-to-br from-pink-50 to-white",
        },
        {
          label: "Total Income",
          value: "$36,715",
          iconBg: "bg-green-100",
          iconColor: "text-green-600",
          bg: "bg-gradient-to-br from-green-50 to-white",
        },
      ],
      performanceMetrics: [
        {
          label: "On-time Delivery",
          value: "96%",
          color: "text-green-600 bg-green-100",
        },
        {
          label: "Positive Feedback",
          value: "87%",
          color: "text-blue-600 bg-blue-100",
        },
        {
          label: "Return Rate",
          value: "2.3%",
          color: "text-red-600 bg-red-100",
        },
      ],
      customerData: [
        { name: "Mon", current: 900, last: 500 },
        { name: "Tue", current: 1100, last: 750 },
        { name: "Wed", current: 950, last: 800 },
        { name: "Thu", current: 1050, last: 950 },
        { name: "Fri", current: 1150, last: 900 },
        { name: "Sat", current: 1200, last: 700 },
        { name: "Sun", current: 1230, last: 600 },
      ],
      profitMetrics: [
        {
          label: "Added to Cart",
          value: "$21,120.70",
          sub: "5 clicks",
          change: "+13.2%",
          color: "text-emerald-600",
        },
        {
          label: "Reached to Checkout",
          value: "$16,100.00",
          sub: "12 clicks",
          change: "-7.4%",
          color: "text-rose-500",
        },
        {
          label: "Conversion Rate",
          value: "$6,400.50",
          sub: "24 views",
          change: "+9.3%",
          color: "text-green-500",
        },
      ],
      settlements: {
        title: "Settlement Overview",
        amount: "$12,300",
        description: "Pending Payouts",
        change: {
          value: "+ $3,100",
          text: "since last cycle",
        },
      },
      salesOverview: {
        title: "Sales Overview",
        amount: "$79K",
        period: "This Quarter",
        highlights: {
          bestMonth: "March",
          yoyGrowth: "+6.2%",
        },
      },
      revenueForecast: [40, 70, 60, 50, 45, 90, 30, 60, 50, 70, 95, 80].map(
        (height, index) => ({
          height,
          isCenter: index === 6,
        })
      ),
      revenueByProduct: [
        {
          product: "Shoes",
          progress: "73.2%",
          priority: "Low",
          priorityColor: "bg-green-100 text-green-700",
          budget: "$3.5k",
        },
        {
          product: "T-shirts",
          progress: "73.2%",
          priority: "Medium",
          priorityColor: "bg-yellow-100 text-yellow-700",
          budget: "$3.5k",
        },
        {
          product: "Jackets",
          progress: "73.2%",
          priority: "Very High",
          priorityColor: "bg-cyan-100 text-cyan-700",
          budget: "$3.5k",
        },
        {
          product: "Jeans",
          progress: "73.2%",
          priority: "High",
          priorityColor: "bg-rose-100 text-rose-700",
          budget: "$3.5k",
        },
      ],
    };
  }

  // Additional methods for specific dashboard components
  async getSalesData(period: string) {
    // Implement sales data retrieval
    return {
      sales: 79000,
      growth: 6.2,
      bestMonth: "March",
    };
  }

  async getRevenueData(period: string) {
    // Implement revenue data retrieval
    return {
      revenue: 36715,
      forecast: [40, 70, 60, 50, 45, 90, 30, 60, 50, 70, 95, 80],
    };
  }
}

export const dashboardService = new DashboardService();
