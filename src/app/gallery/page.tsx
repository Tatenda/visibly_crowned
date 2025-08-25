import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';


export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6">
              Gallery
            </h1>
            <p className="text-xl md:text-2xl text-neutral-700 leading-relaxed">
              Explore our impact through photos, stories, and the faces of change across Africa
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Our Impact in Photos
            </h2>
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
              See the faces, places, and moments that define our work across the continent
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Gallery items would go here */}
            <div className="card card-hover p-6 text-center">
              <div className="w-full h-48 bg-gradient-to-br from-primary-100 to-accent-100 rounded-xl mb-4 flex items-center justify-center text-6xl text-primary-400">
                📷
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">
                Community Workshop
              </h3>
              <p className="text-neutral-700 text-sm">
                Women participating in our skills development program
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
