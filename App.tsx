import React from 'react';
import { Header } from './components/Header';
import { Section } from './components/Section';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-white selection:bg-gray-100">
      <div className="w-full max-w-2xl px-6 md:px-8">
        <Header />
        
        <main className="mt-10">
          <Section title="What is Recova?">
            <p>
              Recova is a recovery awareness app designed to help active people understand how ready their body feels for training on a given day.
            </p>
            <p>
              Instead of using wearables or medical data, Recova focuses on how your body perceives recovery based on two everyday signals:
            </p>
            <ul className="list-disc pl-5 space-y-1 my-2 marker:text-gray-400">
              <li>How hard you trained recently</li>
              <li>How well you slept last night</li>
            </ul>
            <p>
              Recova does not claim to measure your exact physical recovery. It provides a directional signal to help you become more aware of fatigue, strain, and readiness over time.
            </p>
          </Section>

          <Section title="Who is Recova for?">
            <p>
              Recova is built for people who train regularly and want a simple way to stay aware of recovery trends without wearing devices.
            </p>
            <p>This includes:</p>
            <ul className="list-disc pl-5 space-y-1 my-2 marker:text-gray-400">
              <li>Gym and strength-training athletes</li>
              <li>Runners and endurance athletes</li>
              <li>Calisthenics and bodyweight athletes</li>
              <li>Anyone training consistently and managing fatigue</li>
            </ul>
          </Section>

          <Section title="How Recova Works">
            <p>
              Recova works by combining recent training stress with sleep quality to estimate how ready your body may feel today.
            </p>
            <p>Each day, Recova looks at:</p>
            <ul className="list-disc pl-5 space-y-1 my-2 marker:text-gray-400">
              <li><strong>Training intensity</strong> from the previous day (how much strain your body experienced)</li>
              <li><strong>Sleep quality</strong> from last night (how well your body had time to recover)</li>
            </ul>
            <p>
              These two inputs are blended into a single recovery readiness score that reflects:
            </p>
            <ul className="list-disc pl-5 space-y-1 my-2 marker:text-gray-400">
              <li>Long-term capacity built over time</li>
              <li>Short-term readiness influenced by rest and fatigue</li>
            </ul>
            <p>
              Because recovery is a continuous biological process, Recova updates your readiness only when new information is available, such as sleep or training logs. This approach helps avoid guessing, sudden fluctuations, or overconfidence based on incomplete data.
            </p>
          </Section>

          <Section title="Why Perceived Recovery Matters">
            <p>
              Recovery is not something that can be perfectly measured without advanced equipment.
            </p>
            <p>
              Many athletes rely on perceived recovery readiness — how rested, fatigued, or prepared they feel — to guide daily decisions.
            </p>
            <p>
              Recova is built around this idea: consistent reflection leads to better awareness, and better awareness leads to better decisions.
            </p>
          </Section>

          <div className="p-6 bg-gray-50 border border-gray-100 rounded-lg my-12">
            <h3 className="text-lg font-medium mb-3 text-black">What Recova Is NOT</h3>
            <div className="text-gray-700 space-y-3 font-light text-sm leading-relaxed">
              <p>
                Recova is not a medical device. It does not diagnose conditions, predict injuries, or replace professional advice.
              </p>
              <p>
                All insights provided by Recova are informational and intended to support self-awareness, not medical decisions.
              </p>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;