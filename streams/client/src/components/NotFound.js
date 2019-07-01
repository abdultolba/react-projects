import React from 'react';

const NotFound = () => {
    return (
        <div className="ui negative message">
            <div className="header">Error: 404 Not Found</div>
            <p>The page you requested does not exist. Please check the link and try again.</p>
        </div>
    );
}

export default NotFound;