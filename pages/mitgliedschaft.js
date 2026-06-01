import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { FiCheck } from 'react-icons/fi';

export default function Mitgliedschaft() {
  const plans = [
    { name: 'Basis', price: '19', period: 'pro Monat', description: 'Perfekt für Anfänger', features: ['Unbegrenzter Zugang zu den Courts', '2 Kurse pro Monat', 'Mitglieder-Rabatt auf Platzreservierung', 'Newsletter'] },
    { name: 'Premium', price: '39', period: 'pro Monat', description: 'Am beliebtesten', features: ['Unbegrenzter Zugang zu den Courts', 'Unbegrenzte Kurse', '30% Rabatt auf Platzreservierung', 'Priorität bei Turnieren', 'Kostenlose Getränke', 'Persönliches Training (1x/Monat)'], featured: true },
    { name: 'Professionell', price: '79', period: 'pro Monat', description: 'Für ernsthafte Spieler', features: ['Alles aus dem Premium Plan', 'Kostenloses Training (4x/Monat)', 'Exklusive Turniere', 'Kostenloser Ausrüstungsvermietung', 'Physiotherapie-Beratung', 'VIP-Events', 'Freier Platz beim Turnier'] },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navigation />
      <main className="flex-grow">
        <div className="gradient-tennis text-white py-16">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">Mitgliedschaften</h1>
            <p className="text-lg opacity-90">Wählen Sie den perfekten Plan für Ihr Tennistraining</p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, idx) => (
              <div key={idx} className={`rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 ${plan.featured ? 'ring-2 ring-tennis-600 md:scale-105 bg-gradient-to-br from-tennis-50 to-white' : 'bg-white'}`}>
                {plan.featured && (
                  <div className="gradient-tennis text-white text-center py-2">
                    <span className="font-semibold">⭐ BELIEBT</span>
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-tennis-600">{plan.price}€</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                  <button className={`w-full py-3 rounded-lg font-semibold transition-colors mb-8 ${plan.featured ? 'button-tennis' : 'border-2 border-tennis-600 text-tennis-600 hover:bg-tennis-50'}`}>
                    Jetzt beitreten
                  </button>
                  <div className="space-y-4">
                    {plan.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-start">
                        <FiCheck className="text-tennis-600 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}