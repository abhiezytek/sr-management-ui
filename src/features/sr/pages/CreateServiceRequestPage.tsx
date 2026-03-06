import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const CreateServiceRequestPage = () => {
    const { t } = useTranslation();
    const [successMessage, setSuccessMessage] = useState('');
    const activeStep = 0; // Assume a variable to track the current step

    const handleSaveDraft = () => {
        // Your save draft logic
        setSuccessMessage(t('common.draftSaved'));
        setTimeout(() => {
            setSuccessMessage('');
        }, 5000);
    };

    useEffect(() => {
        if (activeStep > 2) {
            setSuccessMessage(''); // clear message on step change
        }
    }, [activeStep]);

    return (
        <div>
            {activeStep <= 2 && <button onClick={handleSaveDraft}>{t('common.saveDraft')}</button>}
            {successMessage && <div>{successMessage}</div>}
        </div>
    );
};

export default CreateServiceRequestPage;