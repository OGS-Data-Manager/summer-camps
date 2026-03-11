import React, { useState, useEffect } from 'react';
import { ChevronRight, Calendar, Clock, Users, Sparkles } from 'lucide-react';
import './index.css';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [selectedCamp, setSelectedCamp] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const camps = [
    {
      id: 1,
      name: "Cricut Maker",
      emoji: "🎨",
      grades: "3rd grade & up",
      dates: "June 22–25",
      times: "9:00–12:00 p.m.",
      instructor: "Brittany Tromotola",
      description: "A hands-on creative camp where kids become designers using cutting machines to create DIY projects.",
      vibe: "Creative & Design-Focused"
    },
    {
      id: 2,
      name: "Stop-Motion Camp",
      emoji: "🎬",
      grades: "4th–8th grade",
      dates: "June 15–18",
      times: "9:00–12:00 p.m.",
      instructor: "Andy Eichorn-Martinez & Jason Meltzer",
      description: "Create stop-motion movies using cameras, paper, LEGOs, and greenscreen. Premiere showing at the end of camp!",
      vibe: "Tech & Filmmaking"
    },
    {
      id: 3,
      name: "Summer Sports",
      emoji: "⚽",
      grades: "K–8th grade",
      dates: "June 15–18 & June 29–July 2",
      times: "9:00–12:00 p.m. & 12:30–3:30 p.m.",
      instructor: "Nicole Cummins, Cody Callahan, Dave Izenstark",
      description: "Action-packed movement, teamwork, and fun! Learn fundamental sports skills with encouraging coaches.",
      vibe: "Athletic & High-Energy"
    },
    {
      id: 4,
      name: "The Fun Factory",
      emoji: "🎉",
      grades: "Incoming 1st–3rd",
      dates: "June 15–18",
      times: "9:00–12:00 p.m.",
      instructor: "Logan Farris",
      description: "Games, crafts, music, and water activities. An unforgettable week of pure fun and laughter!",
      vibe: "Playful & Creative"
    },
    {
      id: 5,
      name: "Happy Beats",
      emoji: "🎵",
      grades: "Incoming 1st–3rd",
      dates: "June 22–25",
      times: "9:00–12:00 p.m.",
      instructor: "Logan Farris",
      description: "Music, movement, and creativity. Play instruments, create art, and build friendships through team play.",
      vibe: "Musical & Cooperative"
    },
    {
      id: 6,
      name: "Sensory Science",
      emoji: "🔬",
      grades: "Rising 1st–2nd",
      dates: "June 15–18 & June 22–25",
      times: "9:00–12:00 p.m.",
      instructor: "Elaine East",
      description: "Hands-on exploration through textures, sounds, liquids, and light. Build early science skills while having fun!",
      vibe: "Exploratory & Scientific"
    },
    {
      id: 7,
      name: "Smiling Stars Musical Theatre",
      emoji: "🎭",
      grades: "K–6th",
      dates: "June 15–18 & June 22–25",
      times: "9:00–12:00 p.m. (+ optional afternoon)",
      instructor: "Susie Kiefer",
      description: "Sing, dance, and perform! Every child gets a speaking part. Two sessions available.",
      vibe: "Performative & Theatrical"
    },
    {
      id: 8,
      name: "Grades 3–5 Art",
      emoji: "🖌️",
      grades: "3rd–5th",
      dates: "June 15–18",
      times: "9:00–12:00 p.m.",
      instructor: "Erin Vance",
      description: "Take home finished projects using clay, chalk pastels, watercolors, and more. Unique to summer camp!",
      vibe: "Artistic & Expressive"
    },
    {
      id: 9,
      name: "Grades 6–8 Art",
      emoji: "🖌️",
      grades: "6th–8th",
      dates: "June 15–18",
      times: "12:30–3:30 p.m.",
      instructor: "Erin Vance",
      description: "Advanced artistic projects for middle schoolers. Materials include clay, pastels, watercolors, and more.",
      vibe: "Artistic & Advanced"
    },
    {
      id: 10,
      name: "Volleyball Camp",
      emoji: "🏐",
      grades: "3rd–6th",
      dates: "June 15–18 & June 22–25",
      times: "9:00–12:00 p.m.",
      instructor: "Aimee Brown",
      description: "Learn basics in a positive, supportive environment. Games, drills, and teamwork. No experience needed!",
      vibe: "Sporty & Inclusive"
    },
    {
      id: 11,
      name: "Sunshine Safari",
      emoji: "🦁",
      grades: "K–1st",
      dates: "June 29–July 2",
      times: "9:00–12:00 p.m.",
      instructor: "Jenna Sobey & Kelly Zanon",
      description: "Outdoor adventure & nature exploration! Learn about animals, plants, and wonders while making friends.",
      vibe: "Outdoor & Exploratory"
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFF8F0' }}>
      {/* HEADER */}
      <header className="relative overflow-hidden">
        {/* Animated background gradient */}
        <div 
          className="absolute inset-0 transition-transform duration-500"
          style={{
            background: 'linear-gradient(135deg, #003366 0%, #0052A3 100%)',
            transform: `translateY(${scrollY * 0.3}px)`
          }}
        />
        
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full" style={{ 
          background: 'rgba(255, 184, 28, 0.15)',
          transform: `translate(30%, -30%) scale(${1 + scrollY * 0.0001})`
        }} />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center">
          <div className="mb-4 inline-flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full">
            <Sparkles size={18} className="text-yellow-300" />
            <span className="text-white text-sm font-medium">Summer 2026</span>
          </div>
          
          <h1 className="text-7xl font-black text-white mb-6 leading-tight" style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: '-0.02em' }}>
            Summer Camps
          </h1>
          
          <p className="text-2xl text-amber-100 font-medium mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
            Explore. Create. Move. Perform. Play.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg">
              View All Camps →
            </button>
            <button className="px-8 py-4 bg-white/20 hover:bg-white/30 text-white font-bold rounded-lg transition-all backdrop-blur border border-white/30">
              Register Now
            </button>
          </div>
        </div>
      </header>

      {/* QUICK FACTS */}
      <section className="relative z-20 max-w-6xl mx-auto px-6 -mt-16 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Calendar, label: "Three Weeks", detail: "June 15–July 2" },
            { icon: Clock, label: "Flexible Times", detail: "9am–12pm & 12:30pm–3:30pm" },
            { icon: Users, label: "Grades K–8", detail: "Something for everyone" }
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform">
              <item.icon size={32} className="text-blue-700 mb-3" />
              <h3 className="text-lg font-bold text-gray-800">{item.label}</h3>
              <p className="text-gray-600">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CAMP GRID */}
      <section className="max-w-6xl mx-auto px-6 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-gray-800 mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Our Camps
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From creative design to athletic achievement, discover the perfect camp for your child.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {camps.map((camp) => (
            <button
              key={camp.id}
              onClick={() => setSelectedCamp(camp)}
              className="text-left group"
            >
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-l-4 border-blue-700 hover:border-blue-900 hover:-translate-y-2">
                <div className="p-6">
                  <div className="text-5xl mb-3 transition-transform group-hover:scale-125">{camp.emoji}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-700 transition-colors">
                    {camp.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">{camp.vibe}</p>
                  <p className="text-sm font-medium text-gray-700 mb-2">
                    <span className="text-blue-700">•</span> {camp.grades}
                  </p>
                  <div className="flex items-center gap-2 text-blue-700 group-hover:gap-3 transition-all text-sm font-medium">
                    Learn more <ChevronRight size={16} />
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* MODAL */}
      {selectedCamp && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-96 overflow-y-auto">
            <div className="bg-gradient-to-r from-blue-700 to-blue-900 p-6 sticky top-0">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <span className="text-6xl">{selectedCamp.emoji}</span>
                  <div className="text-white">
                    <h2 className="text-3xl font-bold">{selectedCamp.name}</h2>
                    <p className="text-blue-100">{selectedCamp.vibe}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedCamp(null)}
                  className="text-white text-2xl font-bold hover:text-blue-200"
                >
                  ✕
                </button>
              </div>
            </div>
            
            <div className="p-6 space-y-4">
              <div>
                <h3 className="font-bold text-gray-700 text-sm mb-2">INSTRUCTOR</h3>
                <p className="text-gray-800">{selectedCamp.instructor}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-bold text-gray-700 text-sm mb-2">GRADES</h3>
                  <p className="text-gray-800">{selectedCamp.grades}</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-700 text-sm mb-2">DATES</h3>
                  <p className="text-gray-800">{selectedCamp.dates}</p>
                </div>
              </div>
              
              <div>
                <h3 className="font-bold text-gray-700 text-sm mb-2">TIME</h3>
                <p className="text-gray-800">{selectedCamp.times}</p>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                <h3 className="font-bold text-gray-700 text-sm mb-2">ABOUT THIS CAMP</h3>
                <p className="text-gray-800 leading-relaxed">{selectedCamp.description}</p>
              </div>
              
              <button className="w-full mt-6 px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-lg transition-colors">
                Register for {selectedCamp.name}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CTA SECTION */}
      <section className="bg-gradient-to-r from-yellow-400 to-yellow-500 py-20 px-6 text-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black mb-6 text-gray-800" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Ready to Make This Summer Unforgettable?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Registration opens soon! Check back here or visit ogschool.org for schedules and pricing.
          </p>
          <button className="px-10 py-4 bg-blue-700 text-white font-bold rounded-lg hover:bg-blue-800 transition-all transform hover:scale-105 shadow-lg">
            Visit ogschool.org
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg font-semibold mb-2">Oak Grove School District</p>
          <p className="text-sm">Summer Camps 2026 • All Ages Welcome</p>
          <p className="text-xs text-gray-500 mt-4">For more information, visit ogschool.org</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
