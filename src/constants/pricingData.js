export const pricingPlans = [
  {
    id: 'starter',
    name: 'Starter',
    desc: 'Perfect for small businesses just getting started.',
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: [
      'Basic POS System',
      'Up to 100 Products',
      'Community Support',
      'Standard Analytics',
      '1 User Account'
    ],
    notIncluded: [
      'Online Store Builder',
      'Inventory Alerts',
      'Priority Support',
      'API Access'
    ],
    buttonText: 'Get Started Free',
    isPopular: false
  },
  {
    id: 'pro',
    name: 'Professional',
    desc: 'Ideal for growing businesses needing advanced tools.',
    monthlyPrice: 29,
    yearlyPrice: 24, 
    features: [
      'Advanced POS System',
      'Unlimited Products',
      'Online Store Builder',
      'Inventory Alerts',
      'Priority Email Support',
      'Advanced Analytics',
      '5 User Accounts'
    ],
    notIncluded: [
      'Dedicated Account Manager',
      'Custom API Integration'
    ],
    buttonText: 'Start Free Trial',
    isPopular: true 
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    desc: 'For large retailers needing custom solutions.',
    monthlyPrice: 99,
    yearlyPrice: 89,
    features: [
      'Everything in Professional',
      'Dedicated Account Manager',
      'Custom API Integration',
      'Multi-Store Management',
      '24/7 Phone Support',
      'Custom Training',
      'Unlimited Users'
    ],
    notIncluded: [],
    buttonText: 'Contact Sales',
    isPopular: false
  }
];