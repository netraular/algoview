// resources/js/Components/Dev/JiraButton.jsx
import React from 'react';

const JiraButton = () => {
    if (process.env.NODE_ENV !== 'development') {
        return null;
    }

    return (
        <div className="mt-3">
            <a title="Jira Board" href="https://netshiba.atlassian.net/jira/software/projects/AL/boards/1" target="_blank" rel="noopener noreferrer" className="btn btn-primary me-2">
                <i className="bi bi-list-task"></i> Jira
            </a>
        </div>
    );
};

export default JiraButton;