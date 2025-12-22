'use client'
import React, { useState } from 'react';
import { 
  Heart, 
  Copy, 
  Check, 
  CreditCard, 
  ShieldCheck, 
  HandsPraying,
  Gift,
  ArrowRight,
  Info
} from 'lucide-react';

const page = () => {
  const [copied, setCopied] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Tithe');

  const churchBankDetails = {
    bankName: "First National Bank",
    accountName: "Grace Community Sanctuary",
    accountNumber: "0123456789",
    sortCode: "20-40-60",
    reference: "Offering"
  };

  const copyToClipboard = () => {
    // Standard clipboard fallback as per environment instructions
    const el = document.createElement('textarea');
    el.value = churchBankDetails.accountNumber;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const givingCategories = [
    { id: 'Tithe', label: 'Tithe', icon: '10%', desc: 'Faithful return of the first fruit.' },
    { id: 'Offering', label: 'Offering', icon: '🤲', desc: 'Free-will gift of gratitude.' },
    { id: 'Project', label: 'Building Fund', icon: '🏗️', desc: 'Supporting our new sanctuary.' },
    { id: 'Missions', label: 'Missions', icon: '🌍', desc: 'Reaching the world with love.' }
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans">
      {/* Hero Section */}
      <section className="bg-stone-900 text-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <Heart className="mx-auto mb-6 text-orange-400" size={48} />
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Support Our Mission</h1>
          <p className="text-lg text-stone-300 leading-relaxed italic">
            "Every man according as he purposeth in his heart, so let him give; not grudgingly, or of necessity: for God loveth a cheerful giver." 
            <span className="block mt-2 font-semibold">— 2 Corinthians 9:7</span>
          </p>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12">
        {/* Left Column: Bank Details */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-serif mb-6 flex items-center gap-2">
              <CreditCard className="text-stone-600" />
              Direct Bank Transfer
            </h2>
            <p className="text-stone-600 mb-8">
              You can give your tithes and offerings directly through your bank app using the details below.
            </p>

            <div className="bg-white border border-stone-200 rounded-2xl p-8 shadow-sm space-y-6">
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-widest text-stone-400 font-bold">Bank Name</p>
                <p className="text-lg font-medium">{churchBankDetails.bankName}</p>
              </div>
              
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-widest text-stone-400 font-bold">Account Name</p>
                <p className="text-lg font-medium">{churchBankDetails.accountName}</p>
              </div>

              <div className="space-y-1 relative group">
                <p className="text-xs uppercase tracking-widest text-stone-400 font-bold">Account Number</p>
                <div className="flex items-center justify-between bg-stone-50 p-4 rounded-xl border border-stone-100 mt-2">
                  <span className="text-2xl font-mono tracking-tighter text-stone-800">
                    {churchBankDetails.accountNumber}
                  </span>
                  <button 
                    onClick={copyToClipboard}
                    className="flex items-center gap-2 bg-stone-900 text-white px-4 py-2 rounded-lg hover:bg-stone-700 transition-all active:scale-95"
                  >
                    {copied ? <Check size={18} /> : <Copy size={18} />}
                    <span className="text-sm font-medium">{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-widest text-stone-400 font-bold">Sort Code</p>
                  <p className="text-lg font-medium">{churchBankDetails.sortCode}</p>
                </div>
                <div className="space-y-1 text-right">
                  <p className="text-xs uppercase tracking-widest text-stone-400 font-bold">Suggested Ref</p>
                  <p className="text-lg font-medium italic text-orange-600">"{selectedCategory}"</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 rounded-xl p-6 border border-orange-100 flex gap-4">
            <Info className="text-orange-500 shrink-0" />
            <p className="text-sm text-orange-800 italic leading-relaxed">
              Please include a reference (e.g., "Tithe" or "Seed") so we can allocate your gift correctly to our various ministries.
            </p>
          </div>
        </div>

        {/* Right Column: Giving Guide */}
        <div className="space-y-6">
          <h2 className="text-2xl font-serif mb-6 flex items-center gap-2">
            <Gift className="text-stone-600" />
            Where is your gift going?
          </h2>
          
          <div className="grid gap-4">
            {givingCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`text-left p-5 rounded-xl border transition-all flex items-center gap-5 ${
                  selectedCategory === cat.id 
                  ? 'bg-white border-orange-500 shadow-md ring-1 ring-orange-500' 
                  : 'bg-white border-stone-200 hover:border-stone-300'
                }`}
              >
                <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center text-xl">
                  {cat.icon}
                </div>
                <div>
                  <h3 className="font-bold text-stone-800">{cat.label}</h3>
                  <p className="text-sm text-stone-500">{cat.desc}</p>
                </div>
                {selectedCategory === cat.id && (
                  <div className="ml-auto text-orange-500">
                    <Check />
                  </div>
                )}
              </button>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-stone-200">
            <div className="flex items-center gap-3 text-stone-600 mb-4">
              <ShieldCheck className="text-green-600" />
              <span className="text-sm font-semibold tracking-wide uppercase">Secure Ministry Giving</span>
            </div>
            <p className="text-sm text-stone-500 leading-relaxed">
              We are committed to full transparency. All financial contributions are overseen by our church elders and used solely for the glory of God and the benefit of the community.
            </p>
          </div>
        </div>
      </main>

      {/* Footer Note */}
      <footer className="bg-stone-100 py-12 px-6 mt-12 border-t border-stone-200">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <p className="text-stone-600">
            Having trouble or need a receipt? Reach out to our finance department.
          </p>
          <button className="inline-flex items-center gap-2 text-stone-900 font-bold hover:underline">
            Contact Us <ArrowRight size={18} />
          </button>
        </div>
      </footer>
    </div>
  );
};

export default page;