export default [
    {
        files: ['**/*.js'],
        languages:{
            ecmaVersion: 'latest',
            sourceType: 'module',
        },
        rules: {
            semi: ['error', 'always'],
            quotes: ['error', 'single'],

        }

    }
];