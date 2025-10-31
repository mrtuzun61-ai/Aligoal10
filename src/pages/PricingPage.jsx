
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Check, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const PricingPage = () => {
  const plans = [
    {
      name: 'Free Plan',
      price: '$0',
      period: '/month',
      features: [
        '3 matches per day',
        '1 free banker',
        '1 free surprise',
        'Basic stats',
        'Community access',
      ],
      cta: 'Get Started',
      link: '/auth',
      popular: false,
    },
    {
      name: 'Starter Plan',
      price: '$2.99',
      period: '/month',
      features: [
        '20 matches per month',
        '4 bankers weekly',
        '2 surprises weekly',
        'Partial stats & analysis',
        'Email support',
      ],
      cta: 'Choose Starter',
      link: 'https://buy.stripe.com/fZufZh8Bedi7eoGgKI5EY08',
      popular: false,
    },
    {
      name: 'Premium Plan',
      price: '$4.99',
      period: '/month',
      features: [
        '40+ matches monthly',
        'All bankers & surprises',
        'Full tactical analysis',
        'No ads',
        'Priority support',
        'Advanced statistics',
      ],
      cta: 'Go Premium',
      link: 'https://buy.stripe.com/fZu8wP8Be3Hx1BUamk5EY09',
      popular: true,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - AliGoal10</title>
        <meta name="description" content="Choose the perfect plan for your football prediction needs. From free daily matches to premium insights." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-teal-100 bg-clip-text text-transparent">
            Choose Your Plan
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Select the perfect plan for your football prediction needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`glass-card p-8 relative ${
                plan.popular ? 'border-2 border-amber-500/50' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-amber-400">{plan.price}</span>
                  <span className="text-gray-400 ml-2">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="h-5 w-5 text-teal-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              {plan.link.startsWith('http') ? (
                <a href={plan.link} target="_blank" rel="noopener noreferrer">
                  <Button
                    className={`w-full rounded-full ${
                      plan.popular ? 'gold-button' : 'bg-white/10 hover:bg-white/20'
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </a>
              ) : (
                <Link to={plan.link}>
                  <Button
                    className={`w-full rounded-full ${
                      plan.popular ? 'gold-button' : 'bg-white/10 hover:bg-white/20'
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </Link>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center glass-card p-6"
        >
          <div className="flex items-center justify-center space-x-2 text-teal-400">
            <Shield className="h-5 w-5" />
            <span className="font-semibold">7-Day Money-Back Guarantee • Cancel Anytime</span>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default PricingPage;
