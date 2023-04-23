module.exports = {
    presets: [
      '@vue/cli-plugin-babel/preset'
    ],
    parserOptions: {
      parser: require.resolve('@typescript-eslint/parser'),
      extraFileExtensions: ['.vue'],
      ecmaFeatures: {
        jsx: true
      }
    }
  }
