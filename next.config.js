module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/record1',
        permanent: true,
      },
    ]
  },
}
