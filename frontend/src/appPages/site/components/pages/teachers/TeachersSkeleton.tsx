import React from "react";
import { useState, useEffect } from "react";

const TeachersSkeleton = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const SkeletonCard = () => (
    <div className="skeleton-card animate-pulse">
      <div className="skeleton-image"></div>
      <div className="skeleton-title"></div>
      <div className="skeleton-text"></div>
    </div>
  );

  return (
    <div className={`teacher-cards ${loading ? "loading" : ""}`}>
      {[...Array(8)].map((_, index) => (
        <SkeletonCard key={index} />
      ))}
      <style jsx>{`
        .teacher-cards {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 20px;
          padding: 20px;
        }
        .skeleton-card {
          background: #f0f0f0;
          border-radius: 8px;
          overflow: hidden;
        }
        .skeleton-image {
          width: 100%;
          height: 200px;
          background: #e0e0e0;
        }
        .skeleton-title {
          height: 20px;
          margin: 10px;
          background: #e0e0e0;
        }
        .skeleton-text {
          height: 15px;
          margin: 10px;
          background: #e0e0e0;
        }
        @keyframes pulse {
          0% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.6;
          }
        }
        .animate-pulse {
          animation: pulse 1.5s infinite;
        }
      `}</style>
    </div>
  );
};

export default TeachersSkeleton;
