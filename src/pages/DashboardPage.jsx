
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Trophy, TrendingUp, Zap, BarChart3, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MatchCard from '@/components/MatchCard';

const DashboardPage = () => {
  const [userPlan] = useState('free');

  const todayMatches = [
    {
      id: 1,
      homeTeam: 'Manchester City',
      awayTeam: 'Arsenal',
      prediction: 'Over 2.5 Goals',
      confidence: 85,
      league: 'Premier League',
      isFree: true,
    },
    {
      id: 2,
      homeTeam: 'Real Madrid',
      awayTeam: 'Barcelona',
      prediction: 'BTTS Yes',
      confidence: 78,
      league: 'La Liga',
      isFree: true,
    },
    {
      id: 3,
      homeTeam: 'Bayern Munich',
      awayTeam: 'Dortmund',
      prediction: 'Home Win',
      confidence: 82,
      league: 'Bundesliga',
      isFree: true,
    },
  ];

  const bankerMatches = [
    {
      id: 4,
      homeTeam: 'Liverpool',
      awayTeam: 'Chelsea',
      prediction: 'Over 1.5 Goals',
      confidence: 92,
      league: 'Premier League',
      isFree: true,
    },
    {
      id: 5,
      homeTeam: 'PSG',
      awayTeam: 'Lyon',
      prediction: 'Home Win',
      confidence: 88,
      league: 'Ligue 1',
      isFree: userPlan !== 'free',
    },
  ];

  const surpriseMatches = [
    {
      id: 6,
      homeTeam: 'Napoli',
      awayTeam: 'Inter Milan',
      prediction: 'Away Win',
      confidence: 75,
      league: 'Serie A',
      isFree: true,
    },
    {
      id: 7,
      homeTeam: 'Atletico Madrid',
      awayTeam: 'Sevilla',
      prediction: 'Under 2.5',
      confidence: 80,
      league: 'La Liga',
      isFree: userPlan !== 'free',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Dashboard - AliGoal10</title>
        <meta name="description" content="Access your personalized football predictions and match analysis dashboard." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-teal-100 bg-clip-text text-transparent">
            Your Dashboard
          </h1>
          <p className="text-gray-300 text-lg">Welcome back! Here are your latest predictions.</p>
        </motion.div>

        {userPlan === 'free' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card p-6 mb-8 border-2 border-amber-500/30"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <div className="bg-amber-500/20 p-3 rounded-xl">
                  <Crown className="h-8 w-8 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Unlock Premium Features</h3>
                  <p className="text-gray-300 mb-4">
                    Get access to 40+ monthly predictions, all bankers & surprises, and full tactical analysis.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="https://buy.stripe.com/fZufZh8Bedi7eoGgKI5EY08"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-full">
                        Get Starter - $2.99/mo
                      </Button>
                    </a>
                    <a
                      href="https://buy.stripe.com/fZu8wP8Be3Hx1BUamk5EY09"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="gold-button rounded-full">
                        Go Premium - $4.99/mo
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Tabs defaultValue="today" className="w-full">
            <TabsList className="glass-card p-1 mb-8 grid w-full grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="today" className="data-[state=active]:bg-amber-500/20">
                <Zap className="h-4 w-4 mr-2" />
                Today's Picks
              </TabsTrigger>
              <TabsTrigger value="banker" className="data-[state=active]:bg-amber-500/20">
                <TrendingUp className="h-4 w-4 mr-2" />
                Bankers
              </TabsTrigger>
              <TabsTrigger value="surprises" className="data-[state=active]:bg-amber-500/20">
                <Trophy className="h-4 w-4 mr-2" />
                Surprises
              </TabsTrigger>
              <TabsTrigger value="stats" className="data-[state=active]:bg-amber-500/20">
                <BarChart3 className="h-4 w-4 mr-2" />
                My Stats
              </TabsTrigger>
            </TabsList>

            <TabsContent value="today">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {todayMatches.map((match) => (
                  <MatchCard key={match.id} match={match} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="banker">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {bankerMatches.map((match) => (
                  <MatchCard key={match.id} match={match} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="surprises">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {surpriseMatches.map((match) => (
                  <MatchCard key={match.id} match={match} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="stats">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="glass-card p-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-amber-400 mb-2">85%</div>
                    <div className="text-gray-400">Success Rate</div>
                  </div>
                </div>
                <div className="glass-card p-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-teal-400 mb-2">127</div>
                    <div className="text-gray-400">Total Predictions</div>
                  </div>
                </div>
                <div className="glass-card p-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-400 mb-2">42</div>
                    <div className="text-gray-400">This Month</div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </>
  );
};

export default DashboardPage;
