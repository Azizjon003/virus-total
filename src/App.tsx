import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [url, setUrl] = useState("");
  const [isChecking, setIsChecking] = useState(false);
  const [results, setResults] = useState<null | { safe: boolean }>(null);
  const [activeTab, setActiveTab] = useState("check");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isDarkMode, setIsDarkMode] = useState(true);

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

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Content components for different tabs
  const DonateContent = () => (
    <div className="card-container">
      <h2 className="text-gradient heading-md">Support Our Project</h2>
      <p className="text-secondary mb-8">
        Help us maintain and improve this service by making a donation. Your
        support enables us to continue providing secure browsing tools.
      </p>

      <div className="donation-options">
        <button className="donate-option-btn">$5</button>
        <button className="donate-option-btn">$10</button>
        <button className="donate-option-btn">$25</button>
      </div>

      <button className="btn-primary mt-8">Donate Now</button>
    </div>
  );

  const InfoContent = () => (
    <div className="card-container">
      <h2 className="text-gradient heading-md">About Link Check</h2>
      <p className="text-secondary mb-6">
        Link Check helps you verify the safety of URLs before visiting them,
        protecting you from phishing and malicious websites.
      </p>

      <div className="info-card">
        <h3 className="heading-sm mb-4">How It Works</h3>
        <div className="how-it-works">
          <div className="step-item">
            <div className="step-number">1</div>
            <p>Enter the URL you want to check</p>
          </div>

          <div className="step-item">
            <div className="step-number">2</div>
            <p>Click the "Check URL" button</p>
          </div>

          <div className="step-item">
            <div className="step-number">3</div>
            <p>We'll analyze the URL against our security database</p>
          </div>

          <div className="step-item">
            <div className="step-number">4</div>
            <p>Results will show if the site is safe or potentially harmful</p>
          </div>
        </div>
      </div>

      <p className="version-info">Version 1.0.0 | © 2024 Link Check App</p>
    </div>
  );

  const ReviewsContent = () => (
    <div className="card-container">
      <h2 className="text-gradient heading-md">User Reviews</h2>

      <div className="reviews-container">
        <div className="review-card">
          <div className="review-header">
            <div className="avatar ap-avatar">AP</div>
            <div className="user-info">
              <div className="user-name">Alex P.</div>
              <div className="rating">★★★★★</div>
            </div>
          </div>
          <p className="review-text">
            "This tool saved me from clicking on a malicious link. The interface
            is intuitive and provides quick results."
          </p>
        </div>

        <div className="review-card">
          <div className="review-header">
            <div className="avatar ms-avatar">MS</div>
            <div className="user-info">
              <div className="user-name">Maria S.</div>
              <div className="rating">★★★★☆</div>
            </div>
          </div>
          <p className="review-text">
            "The minimalist design is beautiful. Could use more detailed reports
            about why a site is flagged as unsafe."
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
      <div className="check-container">
        {/* URL Input and Button */}
        <div className="url-check-card">
          <h2 className="heading-sm mb-4">Check URL Safety</h2>
          <div className="url-input-container">
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://example.com"
              className="url-input"
            />
            <button
              onClick={handleCheck}
              disabled={isChecking || !url}
              className={`check-btn ${isChecking ? "checking" : ""}`}
              aria-label="Check URL safety"
            >
              {isChecking ? (
                <span className="loading-indicator">
                  <svg className="spinner" viewBox="0 0 24 24">
                    <circle
                      className="spinner-track"
                      cx="12"
                      cy="12"
                      r="10"
                    ></circle>
                    <circle
                      className="spinner-path"
                      cx="12"
                      cy="12"
                      r="10"
                    ></circle>
                  </svg>
                  <span className="loading-text">Checking</span>
                </span>
              ) : (
                "Check URL"
              )}
            </button>
          </div>
        </div>

        {/* Results Section */}
        {results && (
          <div className="results-container">
            <div
              className={`status-card ${
                results.safe ? "safe-status" : "unsafe-status"
              }`}
            >
              {results.safe ? (
                <>
                  <div className="status-icon safe-icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 13L9 17L19 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="status-text">
                    <h3 className="safe-text">URL is safe to visit</h3>
                    <p className="status-details">No threats detected</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="status-icon unsafe-icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 18L18 6M6 6L18 18"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="status-text">
                    <h3 className="unsafe-text">URL is unsafe</h3>
                    <p className="status-details">Potential threats detected</p>
                  </div>
                </>
              )}
            </div>

            <div className="info-card scan-details">
              <div className="details-grid">
                <div className="detail-item">
                  <h4 className="detail-label">Scanned</h4>
                  <p className="detail-value">{new Date().toLocaleString()}</p>
                </div>
                <div className="detail-item">
                  <h4 className="detail-label">URL</h4>
                  <p className="detail-value truncate">{url}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={`app-container ${!isDarkMode ? "light-mode" : ""}`}>
      {/* Header */}
      <header className="app-header">
        <div className="header-content">
          <div className="logo-container">
            <div className="app-logo"></div>
            <h1 className="app-title">Link Check</h1>
          </div>
          <div className="header-actions">
            <button
              onClick={toggleDarkMode}
              className="icon-button"
              aria-label={
                isDarkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {isDarkMode ? (
                <svg className="icon" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M12 3V5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M12 19V21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M5 12H3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M21 12H19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg className="icon" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Tab Navigation for wider screens */}
        {windowWidth >= 768 && (
          <nav className="tab-nav">
            <div
              className={`tab ${activeTab === "check" ? "active-tab" : ""}`}
              onClick={() => setActiveTab("check")}
            >
              Check
            </div>
            <div
              className={`tab ${activeTab === "reviews" ? "active-tab" : ""}`}
              onClick={() => setActiveTab("reviews")}
            >
              Reviews
            </div>
            <div
              className={`tab ${activeTab === "donate" ? "active-tab" : ""}`}
              onClick={() => setActiveTab("donate")}
            >
              Donate
            </div>
            <div
              className={`tab ${activeTab === "info" ? "active-tab" : ""}`}
              onClick={() => setActiveTab("info")}
            >
              Info
            </div>
          </nav>
        )}

        {/* Main content area */}
        <div className="content-area">{renderContent()}</div>

        {/* Bottom Navigation for mobile */}
        {windowWidth < 768 && (
          <nav className="mobile-nav">
            <div
              className={`nav-button ${
                activeTab === "check" ? "active-nav" : ""
              }`}
              onClick={() => setActiveTab("check")}
              aria-label="Check URL tab"
            >
              <svg className="nav-icon" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="nav-text">Check</span>
            </div>
            <div
              className={`nav-button ${
                activeTab === "reviews" ? "active-nav" : ""
              }`}
              onClick={() => setActiveTab("reviews")}
              aria-label="Reviews tab"
            >
              <svg className="nav-icon" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="nav-text">Reviews</span>
            </div>
            <div
              className={`nav-button ${
                activeTab === "donate" ? "active-nav" : ""
              }`}
              onClick={() => setActiveTab("donate")}
              aria-label="Donate tab"
            >
              <svg className="nav-icon" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="nav-text">Donate</span>
            </div>
            <div
              className={`nav-button ${
                activeTab === "info" ? "active-nav" : ""
              }`}
              onClick={() => setActiveTab("info")}
              aria-label="Info tab"
            >
              <svg className="nav-icon" viewBox="0 0 24 24" fill="none">
                <path
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="nav-text">Info</span>
            </div>
          </nav>
        )}
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <div className="footer-content">@virus_total_bot</div>
      </footer>
    </div>
  );
}

export default App;
