import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [url, setUrl] = useState("");
  const [isChecking, setIsChecking] = useState(false);
  const [results, setResults] = useState<null | { safe: boolean }>(null);
  const [activeTab, setActiveTab] = useState("check");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Track window width for responsive design
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCheck = () => {
    if (!url) return;

    setIsChecking(true);
    // Simulate API check
    setTimeout(() => {
      setResults({ safe: true });
      setIsChecking(false);
    }, 1500);
  };

  // Content components for different tabs
  const DonateContent = () => (
    <div className="w-full md:w-3/4 glass-effect rounded-xl p-6 mb-8 tab-content">
      <h2 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
        Support Our Project
      </h2>
      <p className="text-gray-300 mb-6">
        Help us maintain and improve this service by making a donation. Your
        support is greatly appreciated!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <button className="py-3 px-4 bg-gray-800/60 backdrop-blur-sm rounded-lg hover:bg-gray-700/80 transition-colors">
          $5
        </button>
        <button className="py-3 px-4 bg-gray-800/60 backdrop-blur-sm rounded-lg hover:bg-gray-700/80 transition-colors">
          $10
        </button>
        <button className="py-3 px-4 bg-gray-800/60 backdrop-blur-sm rounded-lg hover:bg-gray-700/80 transition-colors">
          $25
        </button>
      </div>
      <div className="mt-8 gradient-border">
        <button className="w-full py-3 px-4 btn-modern">Donate Now</button>
      </div>
    </div>
  );

  const InfoContent = () => (
    <div className="w-full md:w-3/4 glass-effect rounded-xl p-6 mb-8 tab-content">
      <h2 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
        About Link Check App
      </h2>
      <p className="text-gray-300 mb-6">
        Link Check App helps you verify the safety of URLs before visiting them.
        We check against a database of known malicious sites to help keep your
        browsing safe.
      </p>
      <div className="my-8 p-4 bg-gray-800/40 rounded-lg backdrop-blur-sm">
        <h3 className="text-lg font-semibold mb-4 text-blue-300">
          How It Works
        </h3>
        <ol className="list-decimal list-inside text-gray-300 space-y-3">
          <li className="flex items-center">
            <span className="text-blue-500 mr-2">01.</span>
            <span>Enter the URL you want to check</span>
          </li>
          <li className="flex items-center">
            <span className="text-blue-500 mr-2">02.</span>
            <span>Click the "Check URL" button</span>
          </li>
          <li className="flex items-center">
            <span className="text-blue-500 mr-2">03.</span>
            <span>We'll analyze the URL against our security database</span>
          </li>
          <li className="flex items-center">
            <span className="text-blue-500 mr-2">04.</span>
            <span>
              Results will show if the site is safe or potentially harmful
            </span>
          </li>
        </ol>
      </div>
      <p className="text-gray-400 mt-8 text-sm border-t border-gray-800 pt-4">
        Version 1.0.0 | © 2024 Link Check App
      </p>
    </div>
  );

  const ReviewsContent = () => (
    <div className="w-full md:w-3/4 glass-effect rounded-xl p-6 mb-8 tab-content">
      <h2 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
        User Reviews
      </h2>
      <div className="space-y-4 mt-6">
        <div className="p-4 glass-effect rounded-lg">
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
              AP
            </div>
            <div className="ml-3">
              <div className="font-medium">Alex P.</div>
              <div className="flex text-yellow-400 mt-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
          <p className="text-gray-300 mt-2">
            Great tool! Saved me from clicking on a malicious link. The
            interface is clean and easy to use.
          </p>
        </div>
        <div className="p-4 glass-effect rounded-lg">
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-orange-400 flex items-center justify-center text-white font-bold">
              MS
            </div>
            <div className="ml-3">
              <div className="font-medium">Maria S.</div>
              <div className="flex mt-1">
                {[...Array(4)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
          </div>
          <p className="text-gray-300 mt-2">
            Simple and effective. Could use more detailed reports though. But
            overall the design is clean and intuitive.
          </p>
        </div>
      </div>
    </div>
  );

  // Render the content based on active tab
  const renderContent = () => {
    if (activeTab === "donate") return <DonateContent />;
    if (activeTab === "info") return <InfoContent />;
    if (activeTab === "reviews") return <ReviewsContent />;

    // Default tab (check)
    return (
      <div className="tab-content w-full flex flex-col items-center">
        {/* Light icon - hide on small screens when results are showing */}
        {(!results || windowWidth >= 768) && (
          <div className="text-gray-600 mb-16 floating">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 md:h-24 md:w-24"
              fill="none"
              viewBox="0 0 24 24"
              stroke="url(#blue-purple-gradient)"
            >
              <defs>
                <linearGradient
                  id="blue-purple-gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </div>
        )}

        {/* URL Input and Button - adjust for desktop */}
        <div className="w-full md:w-3/4 lg:w-2/3 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-16">
          <div className="flex-1 gradient-border">
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://example.com"
              className="w-full px-4 py-3 bg-[#121212] rounded-lg border-none text-gray-300 input-modern focus:outline-none"
            />
          </div>
          <button
            onClick={handleCheck}
            disabled={isChecking || !url}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 btn-modern ${
              isChecking ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isChecking ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Checking...
              </span>
            ) : (
              "Check URL"
            )}
          </button>
        </div>

        {/* Results Section */}
        {results && (
          <div className="w-full md:w-3/4 glass-effect rounded-xl p-6 mb-8">
            <div className="flex items-center mb-6">
              {results.safe ? (
                <div className="flex items-center">
                  <div className="bg-green-500 bg-opacity-20 p-3 rounded-full mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="text-lg md:text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-500">
                      URL is safe to visit
                    </span>
                    <p className="text-gray-400 text-sm mt-1">
                      No threats detected in this URL
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex items-center">
                  <div className="bg-red-500 bg-opacity-20 p-3 rounded-full mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-red-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="text-lg md:text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-500">
                      URL is unsafe
                    </span>
                    <p className="text-gray-400 text-sm mt-1">
                      Potential threats detected
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-6 p-4 bg-gray-800/30 rounded-lg backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                    Scanned
                  </p>
                  <p className="text-gray-300">{new Date().toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                    URL
                  </p>
                  <p className="text-gray-300 truncate">{url}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen animated-bg text-white flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b border-gray-800/40 backdrop-blur-sm md:px-8 responsive-padding">
        <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
          Link Check App
        </h1>
        <div className="flex space-x-3">
          <button className="text-gray-400 hover:text-gray-200 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </button>
          <button className="text-gray-400 hover:text-gray-200 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-between p-4 md:p-8 responsive-padding">
        <div className="w-full md:max-w-4xl flex-1 flex flex-col items-center justify-center py-8">
          {renderContent()}
        </div>

        {/* Navigation Footer - make responsive */}
        <div className="w-full max-w-md mt-8 glass-effect rounded-full md:max-w-lg backdrop-blur-md">
          <div className="flex justify-between items-center px-3 py-3">
            <div
              className={`flex-1 flex flex-col items-center py-2 md:py-3 rounded-full nav-tab ${
                activeTab === "check" ? "active bg-gray-800/70" : ""
              }`}
              onClick={() => setActiveTab("check")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 md:h-7 md:w-7 nav-icon ${
                  activeTab === "check" ? "text-blue-400" : "text-gray-500"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={activeTab === "check" ? 2.5 : 2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <span
                className={`text-xs mt-1 md:text-sm nav-text ${
                  activeTab === "check" ? "text-blue-400" : "text-gray-500"
                }`}
              >
                Check
              </span>
            </div>
            <div
              className={`flex-1 flex flex-col items-center py-2 md:py-3 rounded-full nav-tab ${
                activeTab === "reviews" ? "active bg-gray-800/70" : ""
              }`}
              onClick={() => setActiveTab("reviews")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 md:h-7 md:w-7 nav-icon ${
                  activeTab === "reviews" ? "text-blue-400" : "text-gray-500"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={activeTab === "reviews" ? 2.5 : 2}
                  d="M4 6h16M4 10h16M4 14h16M4 18h16"
                />
              </svg>
              <span
                className={`text-xs mt-1 md:text-sm nav-text ${
                  activeTab === "reviews" ? "text-blue-400" : "text-gray-500"
                }`}
              >
                Reviews
              </span>
            </div>
            <div
              className={`flex-1 flex flex-col items-center py-2 md:py-3 rounded-full nav-tab ${
                activeTab === "donate" ? "active bg-gray-800/70" : ""
              }`}
              onClick={() => setActiveTab("donate")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 md:h-7 md:w-7 nav-icon ${
                  activeTab === "donate" ? "text-blue-400" : "text-gray-500"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={activeTab === "donate" ? 2.5 : 2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <span
                className={`text-xs mt-1 md:text-sm nav-text ${
                  activeTab === "donate" ? "text-blue-400" : "text-gray-500"
                }`}
              >
                Donate
              </span>
            </div>
            <div
              className={`flex-1 flex flex-col items-center py-2 md:py-3 rounded-full nav-tab ${
                activeTab === "info" ? "active bg-gray-800/70" : ""
              }`}
              onClick={() => setActiveTab("info")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 md:h-7 md:w-7 nav-icon ${
                  activeTab === "info" ? "text-blue-400" : "text-gray-500"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={activeTab === "info" ? 2.5 : 2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span
                className={`text-xs mt-1 md:text-sm nav-text ${
                  activeTab === "info" ? "text-blue-400" : "text-gray-500"
                }`}
              >
                Info
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer with improved readability */}
      <div className="py-3 border-t border-gray-800/40 backdrop-blur-sm text-center text-gray-500 text-sm md:text-base">
        @virus_total_bot
      </div>
    </div>
  );
}

export default App;
