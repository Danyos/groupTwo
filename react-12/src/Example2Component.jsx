
import React, { useState, useEffect } from 'react';

const ExampleComponent = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        // Function to fetch data
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.example.com/data');
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        // Mounting effect: Fetch data on component mount
        fetchData();

        // Unmounting effect: Clean up any resources or subscriptions
        return () => {
            // Clean up logic
        };
    }, []);

    useEffect(() => {
        // Updating effect: Perform actions on component update
        console.log('Component updated');
        // Additional logic...

        // Clean up effect if necessary
        return () => {
            // Clean up logic
        };
    });

    return (
        <div>
            {data ? (
                <ul>
                    {data.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            ) : (
                <p>Loading data...</p>
            )}
        </div>
    );
};

export default ExampleComponent;