module.exports = {
  apps : [{
    name: 'StickyBoard',
    script: './app.js',
    instances: 'max',
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development',
      NODE_PATH: './src',
    },
    env_production: {
      NODE_ENV: 'production',
      NODE_PATH: './src',
    }
  }]
};
