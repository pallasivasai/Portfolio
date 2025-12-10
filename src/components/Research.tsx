import React from 'react';
import { ExternalLink, FileText, Award, Cpu, Shield, Clock, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Research = () => {
  return (
    <section id="research" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-purple-300 border-purple-500/50">
            <Award className="w-3 h-3 mr-1" />
            Personal Research
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Research Publications
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Contributing to the field of cybersecurity through innovative algorithm design and real-world implementations
          </p>
        </div>

        <Card className="bg-gradient-to-br from-slate-800/80 to-purple-900/40 border-purple-500/30 backdrop-blur-sm overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <CardHeader className="relative">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge className="bg-purple-600 hover:bg-purple-700">
                <FileText className="w-3 h-3 mr-1" />
                Research Proposal
              </Badge>
              <Badge variant="outline" className="text-green-400 border-green-500/50">
                December 2025
              </Badge>
              <Badge variant="outline" className="text-blue-400 border-blue-500/50">
                DOI: 10.13140/RG.2.2.28578.08648
              </Badge>
            </div>
            <CardTitle className="text-2xl md:text-3xl text-white leading-tight">
              SAI Algorithm: A Lightweight Real-Time DDoS Detection Algorithm
            </CardTitle>
            <p className="text-purple-300 mt-2">
              Design, Implementation and Reproducible Results (Colab Demo)
            </p>
          </CardHeader>

          <CardContent className="relative space-y-8">
            {/* Author */}
            <div className="flex flex-wrap items-center gap-4 text-gray-300">
              <span className="font-semibold text-white">Author:</span>
              <span>PALLA SIVASAI</span>
            </div>

            {/* Abstract */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                <Shield className="w-5 h-5 text-purple-400" />
                Abstract
              </h3>
              <p className="text-gray-300 leading-relaxed">
                DDoS attacks continue to threaten online services worldwide. Many detection approaches rely on heavy models 
                or large feature sets unsuitable for low-resource environments. <strong className="text-cyan-400 font-bold">SAI (Simple Anomaly Identifier)</strong> — named after 
                its creator, <strong className="text-white">SIVASAI</strong> — is
                a lightweight algorithm for real-time DDoS detection that uses a minimal feature set combining IP-derived statistics 
                and inter-packet timing with a compact classifier for fast detection on constrained hardware.
              </p>
            </div>

            {/* Key Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                <div className="flex items-center gap-2 mb-2">
                  <Cpu className="w-5 h-5 text-blue-400" />
                  <h4 className="font-semibold text-white">Hybrid Approach</h4>
                </div>
                <p className="text-sm text-gray-400">
                  Combines K-th Nearest Neighbor concepts with statistical anomaly detection for enhanced accuracy
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-green-400" />
                  <h4 className="font-semibold text-white">Time-Delay Analysis</h4>
                </div>
                <p className="text-sm text-gray-400">
                  Monitors inter-arrival delays and short-window aggregates for real-time threat identification
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-5 h-5 text-red-400" />
                  <h4 className="font-semibold text-white">Source IP Tracking</h4>
                </div>
                <p className="text-sm text-gray-400">
                  Analyzes per-source packet rates and distinct-source ratios to detect repeated malicious requests
                </p>
              </div>
            </div>

            {/* Key Results */}
            <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-500/30">
              <h3 className="text-xl font-semibold text-white mb-4">Key Results</h3>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400">99.89%</div>
                  <div className="text-sm text-gray-400 mt-1">Detection Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400">&lt;10ms</div>
                  <div className="text-sm text-gray-400 mt-1">Detection Latency</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400">Minimal</div>
                  <div className="text-sm text-gray-400 mt-1">Memory Footprint</div>
                </div>
              </div>
            </div>

            {/* Methodology */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Methodology</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  Computes short-window aggregates of per-source packet rate and inter-arrival delays
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  Applies simple scoring + thresholding classifier (or shallow decision tree) for anomaly detection
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  Evaluated on public datasets and internal captures with reproducible results
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  Enables efficient, interpretable detection for edge devices where complex models are not feasible
                </li>
              </ul>
            </div>

            {/* Keywords */}
            <div className="flex flex-wrap gap-2">
              {['Cybersecurity', 'DDoS Detection', 'Anomaly Detection', 'Real-time Systems', 'Lightweight Algorithms', 'Machine Learning'].map((keyword) => (
                <Badge key={keyword} variant="secondary" className="bg-slate-700/50 text-gray-300">
                  {keyword}
                </Badge>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild className="bg-purple-600 hover:bg-purple-700">
              <a 
                  href="https://www.researchgate.net/publication/398484579_SAI_Algorithm_A_Lightweight_Real-Time_DDoS_Detection_Algorithm_Design_Implementation_and_Reproducible_Results_Colab_Demo" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  View on ResearchGate
                </a>
              </Button>
              <Button asChild variant="outline" className="border-purple-500/50 text-purple-300 hover:bg-purple-500/20">
                <a 
                  href="https://colab.research.google.com/drive/1EuKGDZ1VZr1fJN5X_0MHfzZcuVX2SNLG" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Try Colab Demo
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Research;
