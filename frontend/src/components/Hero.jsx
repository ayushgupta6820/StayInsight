function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-50 via-white to-indigo-50 py-24">

      <div className="max-w-5xl mx-auto text-center px-6">

        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
          Transform Guest Reviews Into
          <span className="text-blue-600">
            {" "}Actionable Insights
          </span>
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
          Analyze sentiment, uncover experience trends,
          and generate AI-powered responses for hospitality businesses.
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">

          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700">
            Get Started
          </button>

          <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-xl hover:bg-blue-50">
            View Dashboard
          </button>

        </div>

      </div>

    </section>
  );
}

export default Hero;