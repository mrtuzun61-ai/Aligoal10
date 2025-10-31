
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Lock, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MatchCard = ({ match }) => {
  const { id, homeTeam, awayTeam, prediction, confidence, league, isFree } = match;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="glass-card p-6 relative overflow-hidden group"
    >
      {!isFree && (
        <div className="absolute inset-0 backdrop-blur-sm bg-black/40 z-10 flex items-center justify-center">
          <div className="text-center">
            <Lock className="h-12 w-12 text-amber-400 mx-auto mb-3" />
            <p className="text-white font-semibold mb-4">Premium Content</p>
            <a
              href="https://buy.stripe.com/fZu8wP8Be3Hx1BUamk5EY09"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="gold-button rounded-full">
                Subscribe to Unlock
              </Button>
            </a>
          </div>
        </div>
      )}

      <div className="mb-4">
        <span className="text-xs text-gray-400 uppercase tracking-wider">{league}</span>
      </div>

      <div className="space-y-3 mb-4">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-lg">{homeTeam}</span>
          <span className="text-gray-400">vs</span>
          <span className="font-semibold text-lg">{awayTeam}</span>
        </div>
      </div>

      <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-3 mb-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-300">Prediction:</span>
          <span className="font-semibold text-amber-400">{prediction}</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <TrendingUp className="h-4 w-4 text-teal-400" />
          <span className="text-sm text-gray-400">Confidence:</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-24 h-2 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-amber-400 to-teal-400"
              style={{ width: `${confidence}%` }}
            />
          </div>
          <span className="text-sm font-semibold text-amber-400">{confidence}%</span>
        </div>
      </div>

      {isFree && (
        <Link to={`/match/${id}`}>
          <Button className="w-full mt-4 bg-white/5 hover:bg-white/10 border border-white/10">
            View Details
          </Button>
        </Link>
      )}
    </motion.div>
  );
};

export default MatchCard;
