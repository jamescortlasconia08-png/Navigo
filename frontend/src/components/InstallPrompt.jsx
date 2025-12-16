import React, { useState, useEffect } from 'react';

const InstallPrompt = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [dontShowAgain, setDontShowAgain] = useState(false);

  // Check if prompt should be shown
  useEffect(() => {
    const lastPromptTime = sessionStorage.getItem('installPromptLastShown');
    const dontShow = localStorage.getItem('installPromptDontShow');
    
    // Don't show if user chose "Don't show again"
    if (dontShow === 'true') {
      return;
    }
    
    // Don't show if shown within last 24 hours
    if (lastPromptTime) {
      const hoursSinceLastPrompt = (Date.now() - parseInt(lastPromptTime)) / (1000 * 60 * 60);
      if (hoursSinceLastPrompt < 24) {
        return;
      }
    }
  }, []);

  // Listen for beforeinstallprompt event
  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsVisible(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Check if app is already installed
    const isInstalled = window.matchMedia('(display-mode: standalone)').matches || 
                       window.navigator.standalone === true;
    if (isInstalled) {
      setIsVisible(false);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    setDeferredPrompt(null);
    setIsVisible(false);
    
    if (dontShowAgain) {
      localStorage.setItem('installPromptDontShow', 'true');
    }
  };

  const handleRemindLater = () => {
    sessionStorage.setItem('installPromptLastShown', Date.now().toString());
    setIsVisible(false);
  };

  const handleClose = () => {
    if (dontShowAgain) {
      localStorage.setItem('installPromptDontShow', 'true');
    }
    setIsVisible(false);
  };

  // Don't render anything if not visible
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-10 left-10 z-50 w-80">
      <div className="bg-slate-800 text-white rounded-lg shadow-2xl border border-slate-700 overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-slate-700">
          <div className="flex items-center space-x-3">
            {/* Placeholder Logo */}
            <div className="w-10 h-10 bg-slate-600 rounded-lg flex items-center justify-center">
              <span className="font-bold text-lg">NG</span>
            </div>
            <div>
              <h3 className="font-bold text-lg">Install NaviGo</h3>
              <p className="text-sm text-slate-300">Get the best experience</p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="text-slate-400 hover:text-white transition-colors"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="p-4">
          <p className="text-slate-300 mb-4">
            Install NaviGo on your device for quick access and better experience.
            Works offline and loads faster!
          </p>

          {/* Don't show again checkbox */}
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="dontShowAgain"
              checked={dontShowAgain}
              onChange={(e) => setDontShowAgain(e.target.checked)}
              className="w-4 h-4 text-blue-500 bg-slate-700 border-slate-600 rounded focus:ring-blue-600 focus:ring-2"
            />
            <label htmlFor="dontShowAgain" className="ml-2 text-sm text-slate-300">
              Don't show this again
            </label>
          </div>

          {/* Buttons */}
          <div className="flex space-x-3">
            <button
              onClick={handleRemindLater}
              className="flex-1 py-2 px-4 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors text-sm font-medium"
            >
              Remind me later
            </button>
            <button
              onClick={handleInstall}
              className="flex-1 py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium"
            >
              Install App
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="px-4 py-3 bg-slate-900 text-xs text-slate-400">
          Click Install to add NaviGo to your home screen
        </div>
      </div>
    </div>
  );
};

export default InstallPrompt;