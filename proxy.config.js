const proxy = [
  {
    context: '/v1',
    target: 'http://127.0.0.1:8000'
  }
];
module.exports = proxy;