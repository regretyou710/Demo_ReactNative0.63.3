//允許jsx可作為附檔名使用
you need to configure metro.config.js in the root level.

module.exports = {
  resolver: {
    /* resolver options */
    sourceExts: ['js', 'json', 'ts', 'tsx', 'jsx'], //add here
  },