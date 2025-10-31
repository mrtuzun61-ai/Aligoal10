
import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calculator, Gamepad2, TrendingUp, Users, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MatchDetailsPage = () => {
  const { id } = useParams();

  const matchData = {
    homeTeam: 'Manchester City',
    awayTeam: 'Arsenal',
    league: 'Premier League',
    prediction: 'Over 2.5 Goals',
    confidence: 85,
    homeForm: ['W', 'W', 'D', 'W', 'W'],
    awayForm: ['W', 'L', 'W', 'W', 'D'],
    headToHead: {
      homeWins: 3,
      draws: 1,
      awayWins: 1,
    },
    stats: {
      homeGoalsScored: 2.4,
      awayGoalsScored: 2.1,
      homeGoalsConceded: 0.8,
      awayGoalsConceded: 1.2,
    },
    analysis: `This Premier League clash promises to be an exciting encounter between two attacking sides. Manchester City's recent form has been exceptional, with their attack firing on all cylinders. Arsenal, despite their defensive vulnerabilities, have shown great attacking intent in recent matches. 

    Both teams average over 2 goals per game, and their head-to-head record suggests high-scoring affairs. The tactical battle between Guardiola and Arteta adds another layer of intrigue. Given the attacking prowess of both sides and their recent goal-scoring records, we're confident in predicting over 2.5 goals in this match.`,
  };

  return (
    <>
      <Helmet>
        <title>{`${matchData.homeTeam} vs ${matchData.awayTeam} - Match Analysis | AliGoal10`}</title>
        <meta name="description" content={`Expert analysis and prediction for ${matchData.homeTeam} vs ${matchData.awayTeam}. ${matchData.confidence}% confidence.`} />
      </Helmet>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/">
          <Button variant="ghost" className="mb-6 hover:bg-white/10">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 mb-8"
        >
          <div className="text-center mb-6">
            <span className="text-sm text-gray-400 uppercase tracking-wider">{matchData.league}</span>
          </div>

          <div className="flex items-center justify-center space-x-8 mb-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-2">{matchData.homeTeam}</h2>
              <div className="flex space-x-1 justify-center">
                {matchData.homeForm.map((result, i) => (
                  <span
                    key={i}
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                      result === 'W' ? 'bg-teal-500' : result === 'D' ? 'bg-amber-500' : 'bg-red-500'
                    }`}
                  >
                    {result}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-4xl font-bold text-gray-400">VS</div>

            <div className="text-center">
              <h2 className="text-3xl font-bold mb-2">{matchData.awayTeam}</h2>
              <div className="flex space-x-1 justify-center">
                {matchData.awayForm.map((result, i) => (
                  <span
                    key={i}
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                      result === 'W' ? 'bg-teal-500' : result === 'D' ? 'bg-amber-500' : 'bg-red-500'
                    }`}
                  >
                    {result}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-6 mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-lg text-gray-300">Our Prediction:</span>
              <span className="text-2xl font-bold text-amber-400">{matchData.prediction}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-teal-400" />
                <span className="text-gray-400">Confidence:</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-32 h-3 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-amber-400 to-teal-400"
                    style={{ width: `${matchData.confidence}%` }}
                  />
                </div>
                <span className="text-xl font-bold text-amber-400">{matchData.confidence}%</span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-6"
          >
            <div className="flex items-center space-x-2 mb-4">
              <Users className="h-5 w-5 text-amber-400" />
              <h3 className="text-xl font-bold">Head to Head</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">{matchData.homeTeam} Wins</span>
                <span className="font-bold text-teal-400">{matchData.headToHead.homeWins}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Draws</span>
                <span className="font-bold text-amber-400">{matchData.headToHead.draws}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">{matchData.awayTeam} Wins</span>
                <span className="font-bold text-teal-400">{matchData.headToHead.awayWins}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-6"
          >
            <div className="flex items-center space-x-2 mb-4">
              <Target className="h-5 w-5 text-amber-400" />
              <h3 className="text-xl font-bold">Goal Statistics</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">{matchData.homeTeam} Avg Goals</span>
                <span className="font-bold text-teal-400">{matchData.stats.homeGoalsScored}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">{matchData.awayTeam} Avg Goals</span>
                <span className="font-bold text-teal-400">{matchData.stats.awayGoalsScored}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Combined Average</span>
                <span className="font-bold text-amber-400">
                  {(matchData.stats.homeGoalsScored + matchData.stats.awayGoalsScored).toFixed(1)}
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass-card p-8 mb-8"
        >
          <h3 className="text-2xl font-bold mb-4">Expert Analysis</h3>
          <div className="text-gray-300 leading-relaxed whitespace-pre-line">
            {matchData.analysis}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <a
            href="https://bettools.ai"
            target="_blank"
            rel="nofollow noopener sponsored"
            className="glass-card p-6 hover:bg-white/10 transition-all duration-300 group"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-amber-500/20 p-4 rounded-xl group-hover:bg-amber-500/30 transition-colors">
                <Calculator className="h-8 w-8 text-amber-400" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Open Calculator</h3>
                <p className="text-gray-400 text-sm">Calculate potential winnings</p>
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
              <div className="bg-teal-500/20 p-4 rounded-xl group-hover:bg-teal-500/30 transition-colors">
                <Gamepad2 className="h-8 w-8 text-teal-400" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Play on 1xBet</h3>
                <p className="text-gray-400 text-sm">Place your bet now</p>
              </div>
            </div>
          </a>
        </motion.div>
      </div>
    </>
  );
};

export default MatchDetailsPage;
