module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: '18.3'
    }
  },
  plugins: [
    'react',
    'react-hooks',
    'react-refresh'
  ],
  rules: {
    'react/prop-types': 'off',
    'react/no-unknown-property': ['error', { 
      ignore: [
        'position', 
        'args', 
        'rotation', 
        'intensity', 
        'angle', 
        'penumbra', 
        'distance', 
        'metalness', 
        'roughness', 
        'envMapIntensity', 
        'attach', 
        'object', 
        'geometry', 
        'material',
        'speed',
        'rotationIntensity',
        'floatIntensity'
      ] 
    }],
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true }
    ]
  }
}