import React from 'react';
import { ExternalLink, FileText, Award, Cpu, Shield, Clock, Target, Lock, Key, Brain, Zap, Wallet, Undo2, ArrowLeftRight, ShieldCheck, Database, Landmark } from 'lucide-react';
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

        <div className="space-y-8">
          {/* Paper 0 — 24-Hour Wrong Payment Recovery Framework */}
          <Card className="bg-gradient-to-br from-slate-800/80 to-amber-900/40 border-amber-500/30 backdrop-blur-sm overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <CardHeader className="relative">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <Badge className="bg-amber-600 hover:bg-amber-700">
                  <FileText className="w-3 h-3 mr-1" />
                  Research Proposal
                </Badge>
                <Badge variant="outline" className="text-green-400 border-green-500/50">
                  September 2026
                </Badge>
                <Badge variant="outline" className="text-amber-400 border-amber-500/50">
                  <Landmark className="w-3 h-3 mr-1" />
                  Digital Banking & FinTech
                </Badge>
                <Badge variant="outline" className="text-blue-400 border-blue-500/50">
                  DOI: 10.13140/RG.2.2.20508.24960
                </Badge>
              </div>
              <CardTitle className="text-2xl md:text-3xl text-white leading-tight">
                A 24-Hour Time-Bound Wrong Payment Recovery Framework for Secure Digital Banking Transactions
              </CardTitle>
              <p className="text-amber-300 mt-2">
                P. Siva Sai, Independent Researcher — A Proposed Architecture for Transaction Reversal, Negative-Balance Recovery, and Financial Scam Exposure Reduction
              </p>
            </CardHeader>

            <CardContent className="relative space-y-8">
              {/* Author */}
              <div className="flex flex-wrap items-center gap-4 text-gray-300">
                <span className="font-semibold text-white">Author:</span>
                <span>PALLA SIVASAI (Independent Researcher)</span>
              </div>

              {/* Abstract */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                  <Shield className="w-5 h-5 text-amber-400" />
                  Abstract
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  When money is sent to the wrong account or a digital payment is made by mistake, users often have
                  no structured way to get it back. This proposal presents a conceptual architecture for a
                  <strong className="text-amber-400 font-bold"> 24-hour time-bound wrong-payment recovery framework</strong> that
                  provides a structured recovery mechanism within a proposed 24-hour reporting window. The framework
                  explores transaction verification, recipient-fund restriction, negative-balance recovery, outgoing
                  transaction controls, future-credit recovery, database-level controls, audit logging, and transaction
                  consistency. It builds on the working <strong className="text-cyan-400 font-bold">SAI Bank</strong> prototype,
                  which already demonstrates a 30-minute wrong-payment reversal workflow, extended here into a broader
                  24-hour recovery framework for safer digital payments.
                </p>
              </div>

              {/* Framework Pillars Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                  <div className="flex items-center gap-2 mb-2">
                    <ShieldCheck className="w-5 h-5 text-green-400" />
                    <h4 className="font-semibold text-white">Transaction Verification</h4>
                  </div>
                  <p className="text-sm text-gray-400">
                    Validates the reported wrong payment before any recovery action is triggered
                  </p>
                </div>

                <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                  <div className="flex items-center gap-2 mb-2">
                    <Lock className="w-5 h-5 text-amber-400" />
                    <h4 className="font-semibold text-white">Recipient-Fund Restriction</h4>
                  </div>
                  <p className="text-sm text-gray-400">
                    Restricts the recipient's funds early in the window so the amount cannot be withdrawn or spent
                  </p>
                </div>

                <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                  <div className="flex items-center gap-2 mb-2">
                    <Undo2 className="w-5 h-5 text-blue-400" />
                    <h4 className="font-semibold text-white">Negative-Balance Recovery</h4>
                  </div>
                  <p className="text-sm text-gray-400">
                    Reverses the payment even when the balance is insufficient, recording a recoverable negative balance
                  </p>
                </div>

                <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                  <div className="flex items-center gap-2 mb-2">
                    <ArrowLeftRight className="w-5 h-5 text-purple-400" />
                    <h4 className="font-semibold text-white">Outgoing Transaction Controls</h4>
                  </div>
                  <p className="text-sm text-gray-400">
                    Controls further outgoing transfers from the recipient account until recovery is settled
                  </p>
                </div>

                <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-5 h-5 text-cyan-400" />
                    <h4 className="font-semibold text-white">Future-Credit Recovery</h4>
                  </div>
                  <p className="text-sm text-gray-400">
                    Recovers the amount from future incoming credits when it cannot be reversed immediately
                  </p>
                </div>

                <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                  <div className="flex items-center gap-2 mb-2">
                    <Database className="w-5 h-5 text-emerald-400" />
                    <h4 className="font-semibold text-white">Database Controls & Audit</h4>
                  </div>
                  <p className="text-sm text-gray-400">
                    Database-level controls, audit logging, and transaction consistency across the full recovery workflow
                  </p>
                </div>
              </div>

              {/* Key Highlights */}
              <div className="bg-gradient-to-r from-amber-900/30 to-yellow-900/30 rounded-xl p-6 border border-amber-500/30">
                <h3 className="text-xl font-semibold text-white mb-4">Key Highlights</h3>
                <div className="grid sm:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-amber-400">24 Hours</div>
                    <div className="text-sm text-gray-400 mt-1">Time-Bound Recovery Window</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-400">30 Min</div>
                    <div className="text-sm text-gray-400 mt-1">Working Reversal in SAI Bank Prototype</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-400">Multi-Layer</div>
                    <div className="text-sm text-gray-400 mt-1">Fraud & Scam Exposure Reduction</div>
                  </div>
                </div>
              </div>

              {/* Methodology */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Methodology</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 mt-1">•</span>
                    Verifies the reported wrong payment and immediately restricts the recipient's funds
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 mt-1">•</span>
                    Applies negative-balance recovery and outgoing transaction controls during the 24-hour window
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 mt-1">•</span>
                    Recovers funds from future credits when the balance is insufficient for immediate reversal
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 mt-1">•</span>
                    Enforces database-level controls, audit logging, and transaction consistency end to end
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 mt-1">•</span>
                    Builds on the SAI Bank prototype, which demonstrates a working 30-minute reversal workflow
                  </li>
                </ul>
              </div>

              {/* Keywords */}
              <div className="flex flex-wrap gap-2">
                {['Digital Banking', 'Payment Recovery', 'Transaction Reversal', 'FinTech Security', 'Fraud Prevention', 'Cybersecurity'].map((keyword) => (
                  <Badge key={keyword} variant="secondary" className="bg-slate-700/50 text-gray-300">
                    {keyword}
                  </Badge>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Button asChild className="bg-amber-600 hover:bg-amber-700">
                  <a
                    href="https://www.researchgate.net/publication/414356347_A_24-Hour_Time-Bound_Wrong_Payment_Recovery_Framework_for_Secure_Digital_Banking_Transactions_P_Siva_Sai_Independent_Researcher_A_Proposed_Architecture_for_Transaction_Reversal_Negative-Balance_Recovery_and_Financial_Scam_Exposure_Reduction"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    View on ResearchGate
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-amber-500/50 text-amber-300 hover:bg-amber-500/20">
                  <a
                    href="https://saibank.lovable.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Wallet className="w-4 h-4 mr-2" />
                    Try SAI Bank Prototype
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Paper 1 — SAI Algorithm */}
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

          {/* Paper 2 — AI-Based Secure Forgot Password System */}
          <Card className="bg-gradient-to-br from-slate-800/80 to-indigo-900/40 border-indigo-500/30 backdrop-blur-sm overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <CardHeader className="relative">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <Badge className="bg-indigo-600 hover:bg-indigo-700">
                  <FileText className="w-3 h-3 mr-1" />
                  Research Article
                </Badge>
                <Badge variant="outline" className="text-green-400 border-green-500/50">
                  September 2026
                </Badge>
                <Badge variant="outline" className="text-blue-400 border-blue-500/50">
                  DOI: 10.13140/RG.2.2.11916.48006
                </Badge>
              </div>
              <CardTitle className="text-2xl md:text-3xl text-white leading-tight">
                AI-Based Secure Forgot Password System with DDoS Attack Detection and Prevention
              </CardTitle>
              <p className="text-indigo-300 mt-2">
                A unified authentication-recovery framework with AI-powered threat mitigation (Colab Demo)
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
                  <Shield className="w-5 h-5 text-indigo-400" />
                  Abstract
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Forgot-password flows are a common attack surface for account takeover, credential stuffing, and 
                  DDoS abuse. This work proposes an <strong className="text-cyan-400 font-bold">AI-based secure forgot-password system</strong> that hardens the recovery pipeline 
                  with intelligent rate-limiting, behavior profiling, and integrated <strong className="text-white">DDoS attack detection and prevention</strong>. 
                  By embedding the proprietary <strong className="text-cyan-400 font-bold">SAI (Simple Anomaly Identifier)</strong> algorithm, the framework distinguishes 
                  legitimate users from automated bots and volumetric attackers in real time, blocking malicious reset-request 
                  floods while preserving usability for genuine users.
                </p>
              </div>

              {/* Key Features Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                  <div className="flex items-center gap-2 mb-2">
                    <Brain className="w-5 h-5 text-pink-400" />
                    <h4 className="font-semibold text-white">AI-Powered Recovery</h4>
                  </div>
                  <p className="text-sm text-gray-400">
                    Uses behavior scoring and request profiling to validate password-reset requests before tokens are issued
                  </p>
                </div>

                <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-5 h-5 text-yellow-400" />
                    <h4 className="font-semibold text-white">Real-Time DDoS Defense</h4>
                  </div>
                  <p className="text-sm text-gray-400">
                    SAI algorithm monitors incoming traffic patterns and blocks malicious request floods at the edge
                  </p>
                </div>

                <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                  <div className="flex items-center gap-2 mb-2">
                    <Lock className="w-5 h-5 text-emerald-400" />
                    <h4 className="font-semibold text-white">Secure Token Lifecycle</h4>
                  </div>
                  <p className="text-sm text-gray-400">
                    Time-bound, single-use reset tokens with entropy validation and expiration enforcement
                  </p>
                </div>

                <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700 md:col-span-2 lg:col-span-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Key className="w-5 h-5 text-orange-400" />
                    <h4 className="font-semibold text-white">Multi-Layer Anomaly Detection</h4>
                  </div>
                  <p className="text-sm text-gray-400">
                    Combines IP reputation, inter-arrival timing, request payload analysis, and user-behavior anomalies 
                    for robust attack identification
                  </p>
                </div>
              </div>

              {/* Key Results */}
              <div className="bg-gradient-to-r from-indigo-900/30 to-blue-900/30 rounded-xl p-6 border border-indigo-500/30">
                <h3 className="text-xl font-semibold text-white mb-4">Key Results</h3>
                <div className="grid sm:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-400">~98%</div>
                    <div className="text-sm text-gray-400 mt-1">Attack Detection Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-400">&lt;15ms</div>
                    <div className="text-sm text-gray-400 mt-1">Response Latency</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-indigo-400">Zero</div>
                    <div className="text-sm text-gray-400 mt-1">Brute-Force Recoveries</div>
                  </div>
                </div>
              </div>

              {/* Methodology */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Methodology</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 mt-1">•</span>
                    Captures per-request features: source IP, timestamp, inter-arrival delay, and payload signatures
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 mt-1">•</span>
                    Applies SAI-based scoring + thresholding to classify reset traffic as benign, suspicious, or malicious
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 mt-1">•</span>
                    Enforces adaptive rate limits and temporary blocks only on confirmed attack patterns
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 mt-1">•</span>
                    Generates cryptographically secure, short-lived reset tokens and validates entropy on every request
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 mt-1">•</span>
                    Evaluated through simulated bot floods and legitimate user flows with reproducible Colab results
                  </li>
                </ul>
              </div>

              {/* Keywords */}
              <div className="flex flex-wrap gap-2">
                {['Cybersecurity', 'Authentication', 'DDoS Prevention', 'Password Recovery', 'AI', 'SAI Algorithm', 'Account Security'].map((keyword) => (
                  <Badge key={keyword} variant="secondary" className="bg-slate-700/50 text-gray-300">
                    {keyword}
                  </Badge>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Button asChild className="bg-indigo-600 hover:bg-indigo-700">
                  <a 
                    href="https://www.researchgate.net/publication/414205110_AI-Based_Secure_Forgot_Password_System_with_DDoS_Attack_Detection_and_Prevention" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    View on ResearchGate
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-indigo-500/50 text-indigo-300 hover:bg-indigo-500/20">
                  <a 
                    href="https://colab.research.google.com/drive/1YVwGX6hzM2gbB_nCIwf8tumKolGXfvuU?usp=sharing" 
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
      </div>
    </section>
  );
};

export default Research;
