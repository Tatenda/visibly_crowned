import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-24">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/img/4.jpg"
            alt="About Us Hero"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/80"></div>
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
              About <span className="text-gradient">Us</span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
              Visibly Crowned is a pan-African movement dedicated to empowering women and girls, ending gender-based violence, and advancing gender equality. We create safe spaces, drive advocacy, and provide practical tools from mentorship, education support and skills development. At our core, we believe that when women rise, communities transform.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Our Story
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-3xl shadow-large">
                <Image
                  src="/img/ourstory.jpg"
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
                Visibly Crowned was born out of a deep passion to see women and girls in Africa live free from violence, inequality, and silenced dreams.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed">
                What began as a vision to create safe spaces and platforms of empowerment has evolved into a movement, one that uplifts voices, equips girls with practical tools, and challenges the systems that hold them back.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed">
                We believe every woman and girl deserves to be seen, heard, and supported. Whether it&apos;s through advocacy campaigns, self-defence initiatives, mentorship, or education support, Visibly Crowned exists to remind women and girls that their lives have purpose, their voices carry power, and their future is worth fighting for.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed">
                Our story is not just ours; it is every girl&apos;s story of resilience, courage, and possibility. And together, we are rewriting it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-neutral-50">
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
                    At Visibly Crowned, our mission is to create a safe and empowering space for women and girls across Africa, a space where their voices are heard, their rights are defended, and their dreams are nurtured. We exist to challenge and dismantle systems that perpetuate violence and inequality, while equipping women and girls with the tools to rise, lead, and thrive. Because when one woman rises, generations rise with her, and every crown lifted makes the world stronger.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary-700 mb-3">Vision</h3>
                  <p className="text-lg text-neutral-700 leading-relaxed">
                    We envision an Africa where every woman and girl lives free from violence, stands equal in opportunity, and leads with confidence. A continent where gender no longer defines limits, where voices are heard, rights are respected, and women and girls thrive as changemakers shaping a just and inclusive future.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right Side - Image */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-3xl shadow-large">
                <Image
                  src="/img/11.jpg"
                  alt="Women Empowerment"
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                  style={{ objectPosition: 'center 30%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Dignity & Respect",
                description: "Every woman and girl deserve to be valued, safe, and heard.",
                color: "from-primary-500 to-primary-600"
              },
              {
                title: "Courage",
                description: "We challenge harmful systems and boldly speak truth to power.",
                color: "from-accent-500 to-accent-600"
              },
              {
                title: "Empowerment",
                description: "We equip women and girls with the tools, skills, and opportunities they need to thrive.",
                color: "from-primary-600 to-accent-500"
              },
              {
                title: "Solidarity",
                description: "We rise together, building networks of sisterhood and collective strength.",
                color: "from-accent-600 to-primary-500"
              },
              {
                title: "Integrity",
                description: "We remain accountable, transparent, and driven by purpose.",
                color: "from-primary-500 to-accent-700"
              },
              {
                title: "Hope & Transformation",
                description: "We believe change is possible, and every action brings us closer to a just and equal society.",
                color: "from-accent-500 to-primary-700"
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

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-br from-primary-700 to-primary-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Help Us Make a Difference
          </h2>
          {/* <p className="text-xl md:text-2xl text-primary-100 mb-12 max-w-3xl mx-auto">
            Together, we can create a world where every woman and girl is empowered to reach their full potential
          </p> */}
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
