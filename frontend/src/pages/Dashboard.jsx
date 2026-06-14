import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Dashboard() {
  return (
    <>
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-16">

        <h1 className="text-4xl font-bold text-center mb-12">
          Dashboard
        </h1>

        <div className="grid md:grid-cols-4 gap-6 mb-10">

          <div className="bg-white shadow rounded-xl p-6">
            <h3 className="text-gray-500">Total Reviews</h3>
            <p className="text-3xl font-bold">5,240</p>
          </div>

          <div className="bg-white shadow rounded-xl p-6">
            <h3 className="text-gray-500">Positive</h3>
            <p className="text-3xl font-bold text-green-600">85%</p>
          </div>

          <div className="bg-white shadow rounded-xl p-6">
            <h3 className="text-gray-500">Neutral</h3>
            <p className="text-3xl font-bold text-yellow-500">10%</p>
          </div>

          <div className="bg-white shadow rounded-xl p-6">
            <h3 className="text-gray-500">Negative</h3>
            <p className="text-3xl font-bold text-red-500">5%</p>
          </div>

        </div>

        <div className="bg-white shadow rounded-xl p-6">

          <h2 className="text-2xl font-semibold mb-4">
            Recent Feedback
          </h2>

          <div className="space-y-4">

            <div className="border-b pb-3">
              Great hospitality and clean rooms.
            </div>

            <div className="border-b pb-3">
              Excellent food and friendly staff.
            </div>

            <div>
              Beautiful location with amazing views.
            </div>

          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}

export default Dashboard;