function Footer() {
  return (
    <footer className="bg-gray-900 text-white">

      <div className="max-w-6xl mx-auto px-6 py-10">

        <div className="grid md:grid-cols-3 gap-8">

          <div>
            <h2 className="text-2xl font-bold text-blue-400">
              InsightStay
            </h2>

            <p className="mt-3 text-gray-400">
              AI-powered guest feedback intelligence platform for
              hospitality businesses.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">
              Features
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li>Sentiment Analysis</li>
              <li>Theme Detection</li>
              <li>AI Responses</li>
              <li>Analytics Dashboard</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">
              Tech Stack
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li>React</li>
              <li>Tailwind CSS</li>
              <li>Node.js</li>
              <li>Gemini API</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500">
          © 2026 InsightStay. All Rights Reserved.
        </div>

      </div>

    </footer>
  );
}

export default Footer;