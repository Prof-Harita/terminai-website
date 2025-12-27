module.exports = {
  ci: {
    collect: {
      startServerCommand: "npm run start -- --port 4173",
      url: [
        "http://127.0.0.1:4173/",
        "http://127.0.0.1:4173/install",
        "http://127.0.0.1:4173/docs",
        "http://127.0.0.1:4173/safety",
        "http://127.0.0.1:4173/enterprise"
      ],
      numberOfRuns: 1,
      settings: {
        chromeFlags: "--no-sandbox",
        preset: "desktop"
      }
    },
    assert: {
      budgetsFile: "./lighthouse-budgets.json",
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
