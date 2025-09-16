import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

export default function WorkPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-24">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/img/9.jpg"
            alt="Our Work Hero"
            fill
            className="object-cover object-center"
            style={{ objectPosition: 'center 30%' }}
            priority
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/80"></div>
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
              Our <span className="text-gradient">Work</span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
              At Visibly Crowned, we believe that true empowerment means tackling gender inequality from every angle: education, safety, mentorship, skills, and advocacy. Each of our initiatives is designed to meet a real need facing women and girls in Africa today.
            </p>
          </div>
        </div>
      </section>

      {/* Her Mentor Match Initiative */}
      <section id="her-mentor-match" className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-8">
                Her Mentor Match Initiative
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-neutral-700 leading-relaxed">
                  Every girl deserves guidance, inspiration, and support as she navigates life. Through Her Mentor Match, we connect young girls with women mentors who can walk alongside them, offering advice, encouragement, and real-life tools to overcome challenges and unlock potential.
                </p>
                <div className="pt-4">
                  <Link href="/contact" className="inline-flex items-center space-x-3 text-primary-700 hover:text-primary-800 font-semibold text-lg group transition-all duration-300">
                    <span>Join as a Mentor</span>
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
                  src="/img/mentor.jpg"
                  alt="Her Mentor Match Initiative"
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

      {/* Stand Safe Initiative */}
      <section id="stand-safe" className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-3xl shadow-large">
                <Image
                  src="/img/8.jpg"
                  alt="Stand Safe Initiative"
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
                Stand Safe Initiative
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-neutral-700 leading-relaxed">
                  Safety is not a privilege; it&apos;s a right. The Stand Safe Initiative equips women and girls with self-defence training and tools, including pepper sprays and personal alarms. We also host awareness workshops on how to recognise, prevent, and respond to gender-based violence. The goal is simple: to help women and girls feel safer, stronger, and more prepared in their daily lives.
                </p>
                <div className="pt-4">
                  <Link href="/contact" className="inline-flex items-center space-x-3 text-primary-700 hover:text-primary-800 font-semibold text-lg group transition-all duration-300">
                    <span>Join Stand Safe</span>
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

      {/* Educate Her Initiative */}
      <section id="educate-her" className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-8">
                Educate Her Initiative
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-neutral-700 leading-relaxed">
                  Education is the key to breaking cycles of poverty and inequality. This initiative ensures that no girl is left behind because of school fees, lack of stationery, or sanitary products. From fundraising for tuition support to pad drives and school supply campaigns, Educate Her creates real opportunities for girls to stay in school and succeed.
                </p>
                <div className="pt-4">
                  <Link href="/contact" className="inline-flex items-center space-x-3 text-primary-700 hover:text-primary-800 font-semibold text-lg group transition-all duration-300">
                    <span>Support Education</span>
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
                  src="/img/2.jpg"
                  alt="Educate Her Initiative"
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

      {/* Empower Her Initiative */}
      <section id="empower-her" className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-3xl shadow-large">
                <Image
                  src="/img/empower her.jpg"
                  alt="Empower Her Initiative"
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
                Empower Her Initiative
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-neutral-700 leading-relaxed">
                  Empowerment goes beyond words; it&apos;s about building tangible skills and opportunities. Empower Her focuses on training programmes, workshops, and resources that help women gain confidence, entrepreneurial skills, and financial independence. From soft skills to practical skills, this initiative gives women the tools to take control of their futures.
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

      {/* Voices for Change Initiative */}
      <section id="voices-for-change" className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-8">
                Voices for Change Initiative
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-neutral-700 leading-relaxed">
                  Awareness is power, but action brings change. Voices for Change is our advocacy arm, where we amplify issues affecting women and girls, from gender-based violence to systemic inequality. Through campaigns, social media activism, and community dialogues, we push for conversations that dismantle harmful systems and inspire collective action.
                </p>
                <div className="pt-4">
                  <Link href="/contact" className="inline-flex items-center space-x-3 text-primary-700 hover:text-primary-800 font-semibold text-lg group transition-all duration-300">
                    <span>Join the Movement</span>
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
                  src="/img/voices.jpg"
                  alt="Voices for Change Initiative"
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
            Get Involved in Our Work
          </h2>
          {/* <p className="text-xl md:text-2xl text-primary-100 mb-12 max-w-3xl mx-auto">
            Join us in creating lasting change and empowering women and girls across Africa
          </p> */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-700 hover:bg-primary-50 font-semibold py-4 px-8 rounded-lg shadow-medium hover:shadow-large transform hover:-translate-y-1 transition-all duration-300 text-lg">
              Contact Us
            </Link>
            {/* <Link href="/gallery" className="border-2 border-white text-white hover:bg-white hover:text-primary-700 font-semibold py-4 px-8 rounded-lg transition-all duration-300 text-lg">
              See Our Impact
            </Link> */}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
