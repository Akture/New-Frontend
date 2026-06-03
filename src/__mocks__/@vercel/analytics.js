// Manual mock for @vercel/analytics/react
const React = require('react');

const Analytics = () => null;
const track = jest.fn();

module.exports = {
  Analytics,
  track,
};
