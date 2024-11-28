// Home.tsx
import React from "react";
import { Brain, Target } from "lucide-react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="bg-slate-800/30 rounded-xl p-6 hover:bg-slate-800/40 transition-all cursor-pointer flex flex-col items-center text-center">
    <div className="w-16 h-16 bg-slate-700/50 rounded-xl flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="text-2xl font-semibold text-white mb-3">{title}</h3>
    <p className="text-slate-400 text-lg">{description}</p>
  </div>
);

const DotGrid: React.FC = () => (
  <div className="grid grid-cols-3 gap-4 w-fit mx-auto">
    {[...Array(9)].map((_, i) => (
      <div
        key={i}
        className={`w-5 h-5 rounded-full ${
          i % 3 === 0
            ? "bg-cyan-400"
            : i % 3 === 1
            ? "bg-green-400"
            : "bg-red-400"
        }`}
      />
    ))}
  </div>
);

const Home: React.FC = () => {
  return (
    <div
      className="min-h-screen bg-slate-900 text-white p-1 mt-28"
      style={{ backgroundColor: "#001A27" }}
    >
      <div className="max-w-5xl mx-auto">
        <main className="space-y-8">
          {/* Hero Section */}
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-5xl font-bold">
              Learn Machine Learning{" "}
              <span className="text-cyan-400">The Interactive Way</span>
            </h1>
            <p className="text-xl text-slate-400">
              Master ML concepts through hands-on experiments and real-time
              visualizations. No prior experience needed.
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-4 justify-center mt-8">
              <button className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors">
                Start Learning
                <span className="text-lg">→</span>
              </button>
              <button className="border border-slate-600 hover:bg-slate-800 px-6 py-3 rounded-lg font-medium transition-colors">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Video Container Section */}
          <div className="bg-slate-800/10 rounded-2xl border border-slate-700/30 aspect-video w-full mb-12 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <DotGrid />
            </div>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FeatureCard
              icon={<Brain className="w-8 h-8 text-cyan-400" />}
              title="Interactive Learning"
              description="Experiment with ML models in real-time and see immediate results"
            />
            <FeatureCard
              icon={<Target className="w-8 h-8 text-green-400" />}
              title="Guided Modules"
              description="Step-by-step modules with practical Applications"
            />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
