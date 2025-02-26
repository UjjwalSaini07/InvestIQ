import React, { useState } from 'react';

const AutoRunPython = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const runScript = async () => {
        setLoading(true);
        setError('');
        try {
            const response = await fetch('http://localhost:5000/api/v1/run-script');
            const data = await response.json();
            if (!data.success) {
                setError(data.error || 'An error occurred while running the script.');
            }
        } catch (err) {
            setError('Failed to connect to the server.');
        }
        setLoading(false);
    };

    return (
        <div style={{ alignContent: 'center', justifyContent: 'center', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Run Python Script</h1>
            <button 
                onClick={runScript} 
                style={{ 
                    padding: '10px 20px', 
                    fontSize: '16px', 
                    marginBottom: '10px', 
                    cursor: 'pointer', 
                    borderRadius: '5px', 
                    border: 'none', 
                    backgroundColor: '#007bff', 
                    color: 'white' 
                }}
                disabled={loading}
            >
                {loading ? 'Running...' : 'Run Script'}
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default AutoRunPython;
