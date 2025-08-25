import { z } from "zod";

// Schema for dashboard data requests
export const DashboardQuerySchema = z.object({
  period: z
    .enum(["day", "week", "month", "quarter", "year"])
    .optional()
    .default("month"),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
});

// Schema for summary cards response
export const SummaryCardSchema = z.object({
  label: z.string(),
  value: z.string(),
  iconBg: z.string(),
  iconColor: z.string(),
  bg: z.string(),
});

// Schema for performance metrics
export const PerformanceMetricSchema = z.object({
  label: z.string(),
  value: z.string(),
  color: z.string(),
});

// Schema for customer data points
export const CustomerDataPointSchema = z.object({
  name: z.string(),
  current: z.number(),
  last: z.number(),
});

// Schema for profit metrics
export const ProfitMetricSchema = z.object({
  label: z.string(),
  value: z.string(),
  sub: z.string(),
  change: z.string(),
  color: z.string(),
});

// Schema for dashboard response
export const DashboardResponseSchema = z.object({
  summaryCards: z.array(SummaryCardSchema),
  performanceMetrics: z.array(PerformanceMetricSchema),
  customerData: z.array(CustomerDataPointSchema),
  profitMetrics: z.array(ProfitMetricSchema),
  settlements: z.object({
    title: z.string(),
    amount: z.string(),
    description: z.string(),
    change: z.object({
      value: z.string(),
      text: z.string(),
    }),
  }),
  salesOverview: z.object({
    title: z.string(),
    amount: z.string(),
    period: z.string(),
    highlights: z.object({
      bestMonth: z.string(),
      yoyGrowth: z.string(),
    }),
  }),
  revenueForecast: z.array(
    z.object({
      height: z.number(),
      isCenter: z.boolean(),
    })
  ),
  revenueByProduct: z.array(
    z.object({
      product: z.string(),
      progress: z.string(),
      priority: z.string(),
      priorityColor: z.string(),
      budget: z.string(),
    })
  ),
});

export type DashboardQuery = z.infer<typeof DashboardQuerySchema>;
export type DashboardResponse = z.infer<typeof DashboardResponseSchema>;
