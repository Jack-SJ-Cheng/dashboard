module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/dashboard/' // testrwd 為 repo 名稱
    : '/'
}