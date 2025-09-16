import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-24">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/img/privacy.jpg"
            alt="Privacy Policy Hero"
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
              Privacy <span className="text-gradient">Policy</span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
              Your privacy and data protection are important to us
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-neutral-700 leading-relaxed mb-8">
                Visibly Crowned NPC respects your privacy and is committed to protecting your personal information. This policy explains how we collect, use, and safeguard your data in line with the Protection of Personal Information Act (POPIA) of South Africa.
              </p>

              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-neutral-900 mb-4">1. Information We Collect</h2>
                  <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                    When you interact with us, we may collect:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-lg text-neutral-700 leading-relaxed ml-4">
                    <li>Your name and contact details (email, phone number, social media handle).</li>
                    <li>Information you choose to share with us (e.g., stories, applications for assistance, volunteering).</li>
                    <li>Any donations or support information you provide.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-neutral-900 mb-4">2. How We Use Your Information</h2>
                  <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                    We collect this information to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-lg text-neutral-700 leading-relaxed ml-4">
                    <li>Respond to your queries or requests for assistance.</li>
                    <li>Connect you to our initiatives (education support, mentorship, empowerment, advocacy).</li>
                    <li>Keep you updated on our work, events, or campaigns (if you consent).</li>
                    <li>Improve our services and impact.</li>
                  </ul>
                  <p className="text-lg text-neutral-700 leading-relaxed mt-4">
                    We will never sell or share your personal information with third parties without your consent, unless required by law.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-neutral-900 mb-4">3. How We Protect Your Information</h2>
                  <ul className="list-disc list-inside space-y-2 text-lg text-neutral-700 leading-relaxed ml-4">
                    <li>Your data is stored securely and only accessed by authorised team members.</li>
                    <li>Sensitive information (e.g., stories of violence) is treated with strict confidentiality.</li>
                    <li>We take reasonable steps to prevent loss, misuse, or unauthorised access.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-neutral-900 mb-4">4. Your Rights</h2>
                  <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                    Under POPIA, you have the right to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-lg text-neutral-700 leading-relaxed ml-4">
                    <li>Ask us what personal information we hold about you.</li>
                    <li>Request correction or deletion of your information.</li>
                    <li>Withdraw consent at any time.</li>
                  </ul>
                  <p className="text-lg text-neutral-700 leading-relaxed mt-4">
                    To exercise these rights, email us at <a href="mailto:info@visiblycrowned.com" className="text-primary-700 hover:text-primary-800 underline">info@visiblycrowned.com</a>.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-neutral-900 mb-4">5. Consent</h2>
                  <p className="text-lg text-neutral-700 leading-relaxed">
                    By contacting us, joining our initiatives, or submitting information through our website/social media, you consent to us processing your personal information in line with this policy.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-neutral-900 mb-4">6. Updates to This Policy</h2>
                  <p className="text-lg text-neutral-700 leading-relaxed">
                    We may update this Privacy Policy from time to time. The latest version will always be available on our website.
                  </p>
                </div>
              </div>

              <div className="mt-12 p-6 bg-neutral-50 rounded-lg">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">Contact Us</h3>
                <p className="text-neutral-700">
                  If you have any questions about this Privacy Policy or our data practices, please contact us at{' '}
                  <a href="mailto:info@visiblycrowned.com" className="text-primary-700 hover:text-primary-800 underline">
                    info@visiblycrowned.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
