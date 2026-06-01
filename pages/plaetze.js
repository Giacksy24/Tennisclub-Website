import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function Plaetze() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedCourt, setSelectedCourt] = useState('');

  const courts = [
    { id: 1, name: 'Platz 1', surface: 'Clay', lights: true },
    { id: 2, name: 'Platz 2', surface: 'Clay', lights: true },
    { id: 3, name: 'Platz 3', surface: 'Hard Court', lights: false },
    { id: 4, name: 'Platz 4', surface: 'Hard Court', lights: true },
  ];

  const timeSlots = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navigation />
      <main className="flex-grow">
        <div className="gradient-tennis text-white py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4">Platzreservierungen</h1>
            <p className="text-lg opacity-90">Reservieren Sie Ihren persönlichen Tennisplatz</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-8 text-gray-900">Neue Reservierung</h2>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Tennisplatz *</label>
                  <select value={selectedCourt} onChange={(e) => setSelectedCourt(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-tennis-600">
                    <option value="">Platz auswählen</option>
                    {courts.map(court => (
                      <option key={court.id} value={court.id}>
                        {court.name} - {court.surface} {court.lights ? '(Beleuchtung)' : ''}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Datum *</label>
                  <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-tennis-600" />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Uhrzeit *</label>
                  <select value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-tennis-600">
                    <option value="">Uhrzeit auswählen</option>
                    {timeSlots.map(time => (
                      <option key={time} value={time}>{time} Uhr</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Dauer *</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-tennis-600">
                    <option>1 Stunde</option>
                    <option>1,5 Stunden</option>
                    <option>2 Stunden</option>
                  </select>
                </div>
              </div>

              <div className="pt-6 border-t">
                <button type="submit" className="button-tennis w-full">Reservierung bestätigen</button>
              </div>
            </form>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {courts.map(court => (
              <div key={court.id} className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-bold mb-3 text-gray-900">{court.name}</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Belag:</strong> {court.surface}</p>
                  <p><strong>Beleuchtung:</strong> {court.lights ? '✓ Ja' : '✗ Nein'}</p>
                  <p><strong>Preis:</strong> 25€/Stunde (Mitglieder: 15€/Stunde)</p>
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