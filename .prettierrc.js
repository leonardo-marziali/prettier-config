module.exports = {
    semi: true,
    tabWidth: 2,
    printWidth: 100,
    singleQuote: true,
    trailingComma: 'none',
    bracketSameLine: true,
    importOrder: ['^components/(.*)$', '^[./]'],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
    endOfLine: 'auto',
    plugins: [
      require.resolve('@trivago/prettier-plugin-sort-imports'),
      require.resolve('prettier-plugin-organize-imports')
    ]
};