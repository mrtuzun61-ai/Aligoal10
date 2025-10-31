
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Trophy, TrendingUp, Zap, Calculator, Gamepad2, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MatchCard from '@/components/MatchCard';

const HomePage = () => {
  const freeMatches = [
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
      isFree: false,
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
      isFree: false,
    },
  ];

  return (
    <>
      <Helmet>
        <title>AliGoal10 - Professional Football Predictions & Match Analysis</title>
        <meta name="description" content="Get expert football predictions and match analysis. 3 free daily matches or unlock 40+ premium insights monthly." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-2 mb-6">
            <Trophy className="h-5 w-5 text-amber-400" />
            <span className="text-amber-400 text-sm font-semibold">Professional Predictions</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-teal-100 bg-clip-text text-transparent">
            Professional Football Predictions & Match Analysis
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get 3 free daily matches — or unlock up to 40+ premium insights monthly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/auth">
              <Button className="gold-button rounded-full px-8 py-6 text-lg">
                Get Free Access
              </Button>
            </Link>
            <a
              href="https://buy.stripe.com/fZu8wP8Be3Hx1BUamk5EY09"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-full px-8 py-6 text-lg backdrop-blur-xl">
                Unlock Premium
              </Button>
            </a>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold flex items-center">
              <Zap className="h-8 w-8 text-amber-400 mr-3" />
              Free Daily Matches
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {freeMatches.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold flex items-center">
              <TrendingUp className="h-8 w-8 text-amber-400 mr-3" />
              Banker of the Week
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bankerMatches.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold flex items-center">
              <Trophy className="h-8 w-8 text-amber-400 mr-3" />
              Weekly Surprises
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {surpriseMatches.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="glass-card p-8"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Tools & Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a
              href="https://bettools.ai"
              target="_blank"
              rel="nofollow noopener sponsored"
              className="glass-card p-6 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-amber-500/20 p-3 rounded-xl group-hover:bg-amber-500/30 transition-colors">
                  <Calculator className="h-8 w-8 text-amber-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Bet Calculator</h3>
                  <p className="text-gray-400 text-sm">Calculate your potential winnings</p>
                </div>
              </div>
            </a>

            <a
              href="https://reffpa.com/L?tag=d_4903328m_97c_&site=4903328&ad=97"
              target="_blank"
              rel="nofollow noopener sponsored"
              className="glass-card p-6 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-teal-500/20 p-3 rounded-xl group-hover:bg-teal-500/30 transition-colors">
                  <Gamepad2 className="h-8 w-8 text-teal-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Play on 1xBet</h3>
                  <p className="text-gray-400 text-sm">Place your bets with confidence</p>
                </div>
              </div>
            </a>
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default HomePage;
