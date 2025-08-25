import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/img/1.jpg"
            alt="About Us Hero"
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
              About <span className="text-gradient">Us</span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
              Discover the story behind Visibly Crowned and our mission to empower women across Africa
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-8">
                Our Mission & Vision
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-primary-700 mb-3">Mission</h3>
                  <p className="text-lg text-neutral-700 leading-relaxed">
                    To advocate for gender equality, end violence against women and girls, and create opportunities for empowerment across Africa through education, support, and recognition.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary-700 mb-3">Vision</h3>
                  <p className="text-lg text-neutral-700 leading-relaxed">
                    A continent where every woman and girl is empowered to reach their full potential, free from discrimination and violence, and celebrated for their contributions to society.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right Side - Image */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-3xl shadow-large">
                <Image
                  src="/img/2.jpg"
                  alt="Women Empowerment"
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

      {/* Our Story */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Our Story
            </h2>
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
              From humble beginnings to a Pan-African movement for change
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-3xl shadow-large">
                <Image
                  src="/img/3.jpg"
                  alt="Our Journey"
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>
            </div>
            
            {/* Right Side - Content */}
            <div className="space-y-6">
              <p className="text-lg text-neutral-700 leading-relaxed">
                Visibly Crowned was born from a simple yet powerful belief: that every woman and girl deserves to be seen, heard, and empowered. What started as a local initiative has grown into a Pan-African movement.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed">
                We've witnessed the transformative power of community support, education, and recognition. Through our work, we've seen women break barriers, girls pursue their dreams, and communities come together to create lasting change.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed">
                Today, we continue to expand our reach, working with partners across the continent to build a future where African women and girls can thrive, lead, and inspire change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Empowerment",
                description: "We believe in providing women and girls with the tools, knowledge, and support they need to take control of their lives and futures.",
                color: "from-primary-500 to-primary-600"
              },
              {
                title: "Equality",
                description: "We advocate for equal rights, opportunities, and treatment for all women and girls, regardless of their background or circumstances.",
                color: "from-accent-500 to-accent-600"
              },
              {
                title: "Community",
                description: "We build strong, supportive communities that uplift and inspire women and girls to reach their full potential.",
                color: "from-primary-600 to-accent-500"
              }
            ].map((value, index) => (
              <div key={value.title} className="text-center group">
                <div className="mb-6">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${value.color} flex items-center justify-center text-white text-2xl font-bold`}>
                      {index + 1}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-neutral-900 mb-4 group-hover:text-primary-700 transition-colors duration-300">
                  {value.title}
                </h3>
                
                <p className="text-neutral-700 leading-relaxed mb-6">
                  {value.description}
                </p>
                
                <div className="h-1 w-16 mx-auto bg-gradient-to-r from-primary-400 to-accent-500 rounded-full group-hover:w-24 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact & Recognition */}
      <section className="section-padding bg-neutral-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-8">
                Our Impact & Recognition
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-neutral-700 leading-relaxed">
                  Over the years, we've made significant strides in our mission to empower women and girls across Africa. Our programs have touched thousands of lives and created lasting change in communities.
                </p>
                <p className="text-lg text-neutral-700 leading-relaxed">
                  We've been recognized for our innovative approaches and commitment to gender equality, but our greatest achievement is the success stories of the women and girls we've supported.
                </p>
                <div className="pt-4">
                  <Link href="/gallery" className="inline-flex items-center space-x-3 text-primary-700 hover:text-primary-800 font-semibold text-lg group transition-all duration-300">
                    <span>See Our Impact</span>
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
                  src="/img/4.jpg"
                  alt="Our Impact"
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
            Join Our Mission
          </h2>
          <p className="text-xl md:text-2xl text-primary-100 mb-12 max-w-3xl mx-auto">
            Together, we can create a world where every woman and girl is empowered to reach their full potential
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-700 hover:bg-primary-50 font-semibold py-4 px-8 rounded-lg shadow-medium hover:shadow-large transform hover:-translate-y-1 transition-all duration-300 text-lg">
              Get Involved
            </Link>
            <Link href="/work" className="border-2 border-white text-white hover:bg-white hover:text-primary-700 font-semibold py-4 px-8 rounded-lg transition-all duration-300 text-lg">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
