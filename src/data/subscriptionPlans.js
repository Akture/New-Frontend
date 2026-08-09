/**
 * The subscription plans, in one place.
 *
 * Both the pricing page (`components/Pricing/SubscriptionPricing`) and the
 * dashboard's subscription tab (`components/Dashboard/SubscriptionTab`) read
 * from here, so the two can't describe the same plan differently.
 *
 * When the subscriptions API is connected, the user's actual plan comes from
 * the server; this list stays the catalogue of what's on offer.
 */

export const SUBSCRIPTION_PLANS = [
  {
    id: 'rookie',
    name: 'Rookie',
    price: 'Free',
    suffix: '',
    popular: false,
    features: [
      '1080p HD Video',
      'Anytime Video Purchasing',
      'Unlimited Video Downloads',
      'Video access expires after 30 days',
    ],
  },
  {
    id: 'elite',
    name: 'Elite',
    price: '$4.99',
    suffix: '/mo',
    popular: true,
    features: [
      '1080p HD Video',
      'Anytime Video Purchasing',
      'Unlimited Video Downloads',
      '8 Hours of Akture Cloud Storage',
      '30 minutes of free video per month',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$9.99',
    suffix: '/mo',
    popular: false,
    features: [
      '1080p HD Video',
      'Anytime Video Purchasing',
      'Unlimited Video Downloads',
      '16 Hours of Akture Cloud Storage',
      '1 hour of free video per month',
    ],
  },
  {
    id: 'goat',
    name: 'GOAT',
    price: '$24.99',
    suffix: '/mo',
    popular: false,
    features: [
      '1080p HD Video',
      'Anytime Video Purchasing',
      'Unlimited Video Downloads',
      '50 Hours of Akture Cloud Storage',
      '2 hours of free video per month',
    ],
  },
];

/** Every account starts here until the subscriptions API says otherwise. */
export const DEFAULT_PLAN_ID = 'rookie';

export const getPlanById = (id) =>
  SUBSCRIPTION_PLANS.find((plan) => plan.id === id) ||
  SUBSCRIPTION_PLANS.find((plan) => plan.id === DEFAULT_PLAN_ID);
