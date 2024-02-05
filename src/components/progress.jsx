import React, { useEffect, useState } from 'react';

const ProgressBar = ({ id, initialProgress, targetProgress }) => {
  const [progress, setProgress] = useState(initialProgress);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < targetProgress) {
        setProgress((prevProgress) => prevProgress + 1);
      } else {
        clearInterval(interval);
      }
    }, 30);

    return () => {
      clearInterval(interval);
    };
  }, [progress, targetProgress]);

  return (
    <div>
      <div
        id={`progress-bar-${id}`}
        style={{ width: `${progress}%` }}
      >
        {progress}%
      </div>
    </div>
  );
};


export default ProgressBar;
