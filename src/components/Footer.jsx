
import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="glass-card border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Trophy className="h-8 w-8 text-amber-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                AliGoal10
              </span>
            </div>
            <p className="text-gray-400 text-sm max-w-md">
              Professional football predictions and match analysis platform. Get expert insights and maximize your winning potential.
            </p>
          </div>

          <div>
            <span className="font-semibold text-white mb-4 block">Legal</span>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-amber-400 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="block text-gray-400 hover:text-amber-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="block text-gray-400 hover:text-amber-400 text-sm transition-colors">
                Contact
              </a>
            </div>
          </div>

          <div>
            <span className="font-semibold text-white mb-4 block">Partners</span>
            <div className="space-y-2">
              <a
                href="https://bettools.ai"
                target="_blank"
                rel="nofollow noopener sponsored"
                className="flex items-center text-gray-400 hover:text-amber-400 text-sm transition-colors"
              >
                BetTools AI <ExternalLink className="h-3 w-3 ml-1" />
              </a>
              <a
                href="https://reffpa.com/L?tag=d_4903328m_97c_&site=4903328&ad=97"
                target="_blank"
                rel="nofollow noopener sponsored"
                className="flex items-center text-gray-400 hover:text-amber-400 text-sm transition-colors"
              >
                1xBet <ExternalLink className="h-3 w-3 ml-1" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-xs">
            We may receive commissions from our partners. 18+ only. Play responsibly.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            © 2025 AliGoal10. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
