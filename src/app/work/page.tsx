import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

export default function WorkPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/img/5.jpg"
            alt="Our Work Hero"
            fill
            className="object-cover object-center"
            style={{ objectPosition: 'center 30%' }}
            priority
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
              Our <span className="text-gradient">Work</span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
              Discover how we&apos;re making a difference through advocacy, empowerment, and recognition across Africa
            </p>
          </div>
        </div>
      </section>

      {/* Advocacy Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-8">
                Advocacy
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-neutral-700 leading-relaxed">
                  We confront injustices such as gender-based violence, child marriages, discrimination, and exclusion. Our advocacy work raises awareness, pushes for accountability, and educates communities about rights.
                </p>
                <p className="text-lg text-neutral-700 leading-relaxed">
                  Through strategic campaigns, community engagement, and policy advocacy, we work to create systemic change that protects and empowers women and girls across the continent.
                </p>
                <div className="pt-4">
                  <Link href="/contact" className="inline-flex items-center space-x-3 text-primary-700 hover:text-primary-800 font-semibold text-lg group transition-all duration-300">
                    <span>Join Our Advocacy</span>
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
                  src="/img/6.jpg"
                  alt="Advocacy Work"
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

      {/* Empowerment Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-3xl shadow-large">
                <Image
                  src="/img/7.jpg"
                  alt="Empowerment Programs"
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>
            </div>
            
            {/* Right Side - Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-8">
                Empowerment
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-neutral-700 leading-relaxed">
                  We provide tools, mentorship, education, self-defense initiatives, and mental health support so women and girls can thrive. Our empowerment programs are designed to build confidence, skills, and resilience.
                </p>
                <p className="text-lg text-neutral-700 leading-relaxed">
                  From vocational training to leadership development, we create opportunities for women and girls to take control of their futures and become agents of change in their communities.
                </p>
                <div className="pt-4">
                  <Link href="/contact" className="inline-flex items-center space-x-3 text-primary-700 hover:text-primary-800 font-semibold text-lg group transition-all duration-300">
                    <span>Get Empowered</span>
                    <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Recognition
            </h2>
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
              We spotlight women and girls across Africa who are breaking barriers, inspiring change, and rising above challenges
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Community Leaders",
                description: "Women who are transforming their communities through leadership, innovation, and dedication.",
                image: "/img/8.jpg"
              },
              {
                title: "Young Changemakers",
                description: "Girls who are breaking barriers and inspiring others to pursue their dreams.",
                image: "/img/9.jpg"
              },
              {
                title: "Trailblazers",
                description: "Women who are pioneering new paths and creating opportunities for others.",
                image: "/img/10.jpg"
              }
            ].map((item) => (
              <div key={item.title} className="group">
                <div className="relative overflow-hidden rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources & Materials */}
      <section className="section-padding bg-neutral-100">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Resources & Materials
            </h2>
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
              Access our educational materials, training resources, and advocacy tools
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Training Manuals", icon: "📚" },
              { title: "Advocacy Guides", icon: "📢" },
              { title: "Educational Videos", icon: "🎥" },
              { title: "Community Toolkits", icon: "🛠️" }
            ].map((resource) => (
              <div key={resource.title} className="text-center group">
                <div className="mb-4">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                    {resource.icon}
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-primary-700 transition-colors duration-300">
                  {resource.title}
                </h3>
                
                <div className="h-1 w-12 mx-auto bg-gradient-to-r from-primary-400 to-accent-500 rounded-full group-hover:w-16 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-br from-primary-700 to-primary-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get Involved in Our Work
          </h2>
          <p className="text-xl md:text-2xl text-primary-100 mb-12 max-w-3xl mx-auto">
            Join us in creating lasting change and empowering women and girls across Africa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-700 hover:bg-primary-50 font-semibold py-4 px-8 rounded-lg shadow-medium hover:shadow-large transform hover:-translate-y-1 transition-all duration-300 text-lg">
              Contact Us
            </Link>
            <Link href="/gallery" className="border-2 border-white text-white hover:bg-white hover:text-primary-700 font-semibold py-4 px-8 rounded-lg transition-all duration-300 text-lg">
              See Our Impact
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
