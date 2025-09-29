'use client';

import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

export default function GetInvolvedPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-24">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/img/volunteer.jpg"
            alt="Get Involved Hero"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
              Get <span className="text-gradient">Involved</span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
              Join us in our mission to empower women and girls across Africa
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Ways to Get Involved
            </h2>
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
              There are many ways you can support our mission and make a difference
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Volunteer",
                description: "Join our team of dedicated volunteers and contribute your time and skills to our programs.",
                icon: "🤝",
                color: "from-primary-500 to-primary-600",
                link: "/contact",
                linkText: "Contact Us to Volunteer"
              },
              {
                title: "Partner",
                description: "Partner with us to expand our reach and create greater impact across Africa.",
                icon: "🤝",
                color: "from-accent-500 to-accent-600",
                link: "/contact",
                linkText: "Explore Partnership"
              },
              {
                title: "Support",
                description: "Support our work through donations and help us continue our mission.",
                icon: "💝",
                color: "from-primary-600 to-accent-500",
                bankingDetails: {
                  accountName: "Visibly Crowned NPC",
                  bank: "FNB Bank",
                  accountNumber: "63175360080",
                  branchCode: "255355"
                }
              }
            ].map((item) => (
              <div key={item.title} className="text-center group">
                <div className="mb-6">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-2xl`}>
                      {item.icon}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-neutral-900 mb-4 group-hover:text-primary-700 transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-neutral-700 leading-relaxed mb-6">
                  {item.description}
                </p>
                
                {item.bankingDetails && (
                  <div className="bg-gradient-to-br from-primary-50 to-accent-50 p-6 rounded-lg border border-primary-200 mb-6">
                    <h4 className="text-lg font-semibold text-neutral-900 mb-4 text-center">
                      Banking Details
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="font-medium text-neutral-700">Account Name:</span>
                        <span className="text-neutral-900">{item.bankingDetails.accountName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium text-neutral-700">Bank:</span>
                        <span className="text-neutral-900">{item.bankingDetails.bank}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium text-neutral-700">Account Number:</span>
                        <span className="text-neutral-900 font-mono">{item.bankingDetails.accountNumber}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium text-neutral-700">Branch Code:</span>
                        <span className="text-neutral-900 font-mono">{item.bankingDetails.branchCode}</span>
                      </div>
                    </div>
                    <p className="text-xs text-neutral-600 mt-4 text-center italic">
                      Please use your name as reference when making donations
                    </p>
                  </div>
                )}
                
                {item.link && (
                  <div className="mb-6">
                    <Link 
                      href={item.link}
                      className="inline-flex items-center space-x-2 bg-primary-700 hover:bg-primary-800 text-white font-semibold py-3 px-6 rounded-lg shadow-medium hover:shadow-large transform hover:-translate-y-1 transition-all duration-300"
                    >
                      <span>{item.linkText}</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                )}
                
                <div className="h-1 w-16 mx-auto bg-gradient-to-r from-primary-400 to-accent-500 rounded-full group-hover:w-24 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Connection */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-8">
                Join Our Community
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-neutral-700 leading-relaxed">
                  Connect with like-minded individuals who are passionate about women&apos;s empowerment and gender equality across Africa.
                </p>
                <p className="text-lg text-neutral-700 leading-relaxed">
                  Stay updated on our latest initiatives, success stories, and opportunities to make a difference in your community.
                </p>
                <div className="pt-4">
                  <Link href="/about" className="inline-flex items-center space-x-3 text-primary-700 hover:text-primary-800 font-semibold text-lg group transition-all duration-300">
                    <span>Learn More About Us</span>
                    <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Right Side - Image */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-3xl shadow-large">
                <Image
                  src="/img/10.jpg"
                  alt="Community Connection"
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-br from-primary-700 to-primary-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl md:text-2xl text-primary-100 mb-12 max-w-3xl mx-auto">
            Join us in our mission to empower women and girls across Africa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/work" className="bg-white text-primary-700 hover:bg-primary-50 font-semibold py-4 px-8 rounded-lg shadow-medium hover:shadow-large transform hover:-translate-y-1 transition-all duration-300 text-lg">
              Learn About Our Work
            </Link>
            <Link href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-primary-700 font-semibold py-4 px-8 rounded-lg transition-all duration-300 text-lg">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
