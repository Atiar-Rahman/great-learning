import React, { useEffect, useState } from 'react';
import url from '../../url';

const MyClass = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch(`${url}/video`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setVideos(data); // ✅ Save fetched data
            })
            .catch(err => {
                console.error('Error fetching videos:', err);
            });
    }, []);

    return (
        <div>
            <h1>This is my class page</h1>
            <ul>
                {videos.map((video, index) => (
                    <li key={index}>{video.title}</li> // Adjust based on your actual data shape
                ))}
            </ul>
        </div>
    );
};

export default MyClass;
