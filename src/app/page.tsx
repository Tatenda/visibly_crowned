import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const corePillars = [
    {
      title: 'Advocacy',
      description: 'We confront injustices such as gender-based violence, child marriages, discrimination, and exclusion. We raise awareness, push for accountability, and educate communities about rights.',
      icon: '🗣️',
      color: 'from-primary-600 to-primary-700',
      href: '/work#advocacy'
    },
    {
      title: 'Empowerment',
      description: 'We provide tools, mentorship, education, self-defense initiatives, and mental health support so women and girls can thrive.',
      icon: '💪',
      color: 'from-accent-600 to-accent-700',
      href: '/work#empowerment'
    },
    {
      title: 'Recognition',
      description: 'We spotlight women and girls across Africa who are breaking barriers, inspiring change, and rising above challenges. Representation matters.',
      icon: '👑',
      color: 'from-primary-700 to-accent-600',
      href: '/work#recognition'
    }
  ];



  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Main Container with Snap Scroll */}
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden snap-start">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/img/landing.jpg"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-float" style={{ animationDelay: '2s' }}></div>
        
        <div className="container-custom relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Logo and Title */}
                          <div className="mb-8">
                <div className="relative w-24 h-24 mx-auto mb-6 overflow-hidden rounded-2xl shadow-large bg-white/80 p-2">
                <Image
                  src="/logo.png"
                  alt="Visibly Crowned Logo"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
                Visibly{' '}
                <span className="text-gradient">Crowned</span>
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
                A movement for the empowerment of women and girls in Africa
              </p>
            </div>

            {/* Mission Subheading */}
            <div className="max-w-4xl mx-auto mb-8">
              <p className="text-lg md:text-xl text-white/95 leading-relaxed drop-shadow-lg">
                We believe every woman and girl is born crowned with dignity, purpose, and power. Our mission is to end violence, champion gender equality, and create opportunities that allow women and girls to rise, lead, and thrive.
              </p>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/about" className="btn-primary text-lg px-8 py-4">
                Learn More
              </Link>
                              <Link href="/contact" className="bg-transparent text-white font-semibold text-lg px-8 py-4 rounded-lg border-2 border-white shadow-soft hover:shadow-medium transform hover:-translate-y-0.5 transition-all duration-300">
                  Get Involved
                </Link>
            </div>

            {/* Creative Tagline */}
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-24 h-px bg-white/30 mx-auto mb-4"></div>
              <p className="text-lg md:text-xl text-white/90 font-light tracking-wider drop-shadow-md">
                &quot;Empowering women & girls. Ending violence. Building equality.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

        {/* Mission Statement */}
        <section className="section-padding bg-white snap-start">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-8">
                What We Believe
              </h2>
              <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-3xl p-8 md:p-12">
                <p className="text-lg md:text-xl text-neutral-800 leading-relaxed font-medium">
                  We believe that every woman and girl deserves to be seen, heard, and empowered. 
                  Through our three core pillars, we&apos;re building a future where African women and girls 
                  can thrive, lead, and inspire change across the continent.
                </p>
              </div>
            </div>
            
            {/* Right Side - Image */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-3xl shadow-large">
                <Image
                  src="/img/girl.jpg"
                  alt="What We Believe"
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

        {/* Core Pillars */}
        <section className="section-padding bg-neutral-100 snap-start">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
                Our Core Pillars
              </h2>
              <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
                We work across three fundamental areas to create lasting change and empowerment
              </p>
            </div>

            {/* Full-Width Hero Image */}
            <div className="relative mb-16">
              <div className="relative overflow-hidden rounded-3xl shadow-large">
                <Image
                  src="/img/pillars.jpg"
                  alt="Diverse African Women Empowerment"
                  width={1200}
                  height={500}
                  className="w-full h-96 md:h-[500px] object-cover object-center"
                  style={{ objectPosition: 'center 30%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Core Pillars - Clean Design */}
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {corePillars.map((pillar, index) => (
                  <div
                    key={pillar.title}
                    className="text-center group"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="mb-6">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-600 flex items-center justify-center text-white text-2xl font-bold">
                          {index + 1}
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-neutral-900 mb-4 group-hover:text-primary-700 transition-colors duration-300">
                      {pillar.title}
                    </h3>
                    
                    <p className="text-neutral-700 leading-relaxed mb-6 text-base">
                      {pillar.description}
                    </p>
                    
                    <div className="h-1 w-16 mx-auto bg-gradient-to-r from-primary-400 to-accent-500 rounded-full group-hover:w-24 transition-all duration-300"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-16">
              <Link href="/work" className="inline-flex items-center space-x-3 text-primary-700 hover:text-primary-800 font-semibold text-lg group transition-all duration-300">
                <span>Explore Our Work</span>
                <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="section-padding bg-gradient-to-br from-primary-700 to-primary-800 text-white snap-start">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join Us in Making a Difference
          </h2>
          {/* <p className="text-xl md:text-2xl text-primary-100 mb-12 max-w-3xl mx-auto">
            Together, we can create a world where every woman and girl is empowered to reach their full potential
          </p> */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-700 hover:bg-primary-50 font-semibold py-4 px-8 rounded-lg shadow-medium hover:shadow-large transform hover:-translate-y-1 transition-all duration-300 text-lg">
              Get Involved Today
            </Link>
            <Link href="/gallery" className="border-2 border-white text-white hover:bg-white hover:text-primary-700 font-semibold py-4 px-8 rounded-lg transition-all duration-300 text-lg">
              See Our Impact
            </Link>
          </div>
        </div>
      </section>
        </div> {/* Close main container */}
      <Footer />
    </main>
  );
}
