import { CheckCircle, Zap, Shield, Clock } from 'lucide-react';

export const LOAN_CONFIG = {
  min: 1000,
  max: 50000,
  step: 1000,
  defaultAmount: 15000,
  feeRate: 0.12, // 12% fixed fee
  repaymentRate: 10, // 10% of daily sales
};

export const FUNDING_CONTENT = {
  badge: "Rehem Capital",
  headline: {
    start: "Get capital to",
    highlight: "grow your business",
  },
  description: "No lengthy applications or hidden interest rates. Get funding based on your sales history and pay it back automatically as you earn.",
  benefits: [
    { text: "Funds in account next business day", icon: Clock },
    { text: "Auto-repayment from daily sales", icon: Zap },
    { text: "One flat fee. No compounding interest.", icon: Shield },
  ],
  ctaText: "Check Your Offer",
};