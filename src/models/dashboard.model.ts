import React from "react";

// Performance Panel Interfaces
export interface PerformanceMetric {
  label: string;
  value: string;
  color: string;
}

export interface PerformancePanelProps {
  metrics: PerformanceMetric[];
}

// Customers Panel Interfaces
export interface CustomerDataPoint {
  name: string;
  current: number;
  last: number;
}

export interface CustomersPanelProps {
  title: string;
  timeframe: string;
  growth: string;
  data: CustomerDataPoint[];
  currentPeriod: {
    label: string;
    value: string;
    color: string;
  };
  previousPeriod: {
    label: string;
    value: string;
    color: string;
  };
}

// Annual Profit Chart Interfaces
export interface ProfitMetric {
  label: string;
  value: string;
  sub: string;
  change: string;
  color: string;
}

export interface AnnualProfitChartProps {
  title: string;
  conversionRate: {
    label: string;
    value: string;
  };
  metrics: ProfitMetric[];
}

// Summary Card Interfaces (from previous)
export interface SummaryCard {
  label: string;
  value: string;
  iconBg: string;
  iconColor: string;
  bg: string;
  icon: React.ReactNode;
}

export interface SummaryCardsProps {
  cards: SummaryCard[];
}

// Settlement Interfaces (from previous)
export interface SettlementData {
  title: string;
  amount: string;
  description: string;
  change: {
    value: string;
    text: string;
  };
}

export interface SettlementsCardProps {
  data: SettlementData;
}

// Sales Overview Interfaces (from previous)
export interface SalesOverviewData {
  title: string;
  amount: string;
  period: string;
  highlights: {
    bestMonth: string;
    yoyGrowth: string;
  };
}

export interface SalesOverviewPanelProps {
  data: SalesOverviewData;
}

// Revenue Forecast Interfaces (from previous)
export interface BarData {
  height: number;
  isCenter: boolean;
}

export interface RevenueForecastChartProps {
  data: BarData[];
}

// Revenue by Product Interfaces (from previous)
export interface ProductRevenueData {
  product: string;
  progress: string;
  priority: string;
  priorityColor: string;
  budget: string;
}

export interface RevenueByProductTableProps {
  title: string;
  period: string;
  data: ProductRevenueData[];
}
