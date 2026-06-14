import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Login() {
  return (
    <>
      <Navbar />

      <main className="min-h-[80vh] flex items-center justify-center px-6">

        <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md">

          <h1 className="text-4xl font-bold text-center mb-2">
            Welcome Back
          </h1>

          <p className="text-center text-gray-500 mb-8">
            Sign in to access your dashboard
          </p>

          <form className="space-y-5">

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <label className="text-sm text-gray-600">
                Remember Me
              </label>
            </div>

            <button
              type="button"
              className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700"
            >
              Sign In
            </button>

          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Authentication functionality will be integrated in future versions.
          </p>

        </div>

      </main>

      <Footer />
    </>
  );
}

export default Login;