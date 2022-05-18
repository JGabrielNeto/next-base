module.exports = {
  hooks: {
    'pre-commit': 'npm run fix:style && npm run lint',
  },
};
