import { Link } from 'react-router-dom';
import { DEFAULT_PLAN_ID, getPlanById } from '../../data/subscriptionPlans';

/**
 * Shows the plan the account is on, described exactly as the pricing page
 * describes it — both read `data/subscriptionPlans`.
 *
 * `planId` comes from the subscriptions API once it's connected; until then
 * every account is on the free plan, which is what this falls back to.
 */
export default function SubscriptionTab({ planId = DEFAULT_PLAN_ID }) {
  const plan = getPlanById(planId);

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <div className="rounded-2xl border shadow-sm p-8 bg-white border-gray-200 dark:bg-surface dark:border-white/10">
        <h2 className="text-2xl font-bold text-onyx dark:text-white mb-2">My Subscription</h2>

        <p className="text-gray-500 dark:text-gray-400 mb-6 text-sm">
          Manage your current plan and upgrade for more features.
        </p>

        <div className="rounded-xl border-2 p-6 mb-6 border-ember bg-ember/5 dark:bg-ember/10">
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-gradient-ember italic">
                Current Plan
              </span>

              <h3 className="text-xl font-extrabold text-onyx dark:text-white mt-1">
                {plan.name}
                {plan.price !== 'Free' && (
                  <span className="text-base font-bold text-gray-500 dark:text-gray-400">
                    {' '}
                    {plan.price}
                    {plan.suffix}
                  </span>
                )}
              </h3>
            </div>

            <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-emerald">
              Active
            </span>
          </div>

          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2">
                <i className="ph-bold ph-check-circle text-emerald text-base shrink-0"></i>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <Link
          to="/pricing"
          className="block w-full py-3.5 rounded-lg font-bold text-sm uppercase tracking-wider text-white text-center transition-all duration-200 hover:-translate-y-0.5 bg-gradient-ember shadow-[0_10px_15px_-3px_rgba(189,32,38,0.3)] hover:shadow-[0_10px_15px_-3px_rgba(189,32,38,0.5)]"
        >
          See all plans
        </Link>
      </div>
    </div>
  );
}
