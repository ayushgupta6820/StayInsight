import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-16">

        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900">
            About InsightStay
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            InsightStay helps hospitality businesses transform guest
            feedback into meaningful insights using artificial intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white shadow-lg rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">
              Our Mission
            </h2>

            <p className="text-gray-600">
              Empower hospitality businesses to make data-driven decisions
              through intelligent analysis of guest reviews.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4 text-green-600">
              Why InsightStay?
            </h2>

            <p className="text-gray-600">
              Manual review analysis is time-consuming. Our platform
              automates sentiment detection and trend discovery.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4 text-purple-600">
              Who Benefits?
            </h2>

            <p className="text-gray-600">
              Hotels, resorts, homestays and tourism businesses looking
              to improve guest satisfaction and retention.
            </p>
          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}

export default About;