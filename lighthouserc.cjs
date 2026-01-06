module.exports = {
  ci: {
    collect: {
      startServerCommand: "node .next/standalone/server.js",
      url: [
        "http://127.0.0.1:3000/",
        "http://127.0.0.1:3000/install",
        "http://127.0.0.1:3000/docs",
        "http://127.0.0.1:3000/safety"
      ],
      numberOfRuns: 1,
      settings: {
        chromeFlags: "--no-sandbox",
        preset: "desktop"
      }
    },
    assert: {
      assertions: {
        "categories:performance": ["warn", { "minScore": 0.8 }],
        "categories:accessibility": ["warn", { "minScore": 0.9 }],
        "categories:best-practices": ["warn", { "minScore": 0.9 }],
        "categories:seo": ["warn", { "minScore": 0.9 }]
      }
    },
    upload: {
      target: "temporary-public-storage"
    }
  }
};
