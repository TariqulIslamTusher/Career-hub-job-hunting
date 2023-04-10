import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError()

    return (
        <div className="error-container">
        <h1 className="error-heading">Oops!</h1>

        <p className="error-message">
          Something went wrong. Please try again later.
        </p>
      </div>
    );
};

export default ErrorPage;