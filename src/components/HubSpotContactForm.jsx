import React, { useEffect } from "react";

const HubspotContactForm = () => {
    useEffect(() => {
        // Check if the script already exists
        if (document.querySelector('script[src="https://js.hsforms.net/forms/embed/v2.js"]')) {
            createForm();
            return;
        }

        const script = document.createElement('script');
        script.src = 'https://js.hsforms.net/forms/embed/v2.js';
        script.async = true;

        script.onload = () => {
            createForm();
        };

        script.onerror = () => {
            console.error('Failed to load HubSpot form script.');
        };

        document.body.appendChild(script);

        // Cleanup function to remove the script when the component unmounts
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const createForm = () => {
        if (window.hbspt) {
            window.hbspt.forms.create({
                portalId: '47990825',
                formId: '87946d93-73bf-4bbb-8a9e-f03bb11affcd',
                target: '#hubspotForm'
            });
        } else {
            console.error('HubSpot forms library not loaded.');
        }
    };

    return (
        <div>
            <div id="hubspotForm"></div>
        </div>
    );
};

export default HubspotContactForm;