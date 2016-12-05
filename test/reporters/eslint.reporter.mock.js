module.exports = {

  defaultOptions: {
    src      : 'test/mocks/eslint.js',
    report   : 'test/output/eslint.json',
    rulesFile: 'test/mocks/.eslintrc'
  },

  badSrcOption: {
    src      : 'test/mocks/unexisting-file.js',
    report   : 'test/output/eslint.json',
    rulesFile: 'test/mocks/.eslintrc'
  },

  badRulesFileOption: {
    src      : 'test/mocks/eslint.js',
    report   : 'test/output/eslint.json',
    rulesFile: 'test/mocks/bad.eslintrc'
  }

};
