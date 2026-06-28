import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="text-center py-[50px]">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className="text-blue-600 underline">
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;