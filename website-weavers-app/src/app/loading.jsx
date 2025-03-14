
const Loading = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-96">
          <div>
            <svg className="h-16 w-16 mb-4 animate-spin text-blue-600" viewBox="0 0 24 24">
              {/* Outer circle with gap */}
              <circle 
                cx="12" 
                cy="12" 
                r="10" 
                stroke="currentColor" 
                strokeWidth="4" 
                fill="none" 
                strokeDasharray="40 60"
              />
              {/* Inner dot */}
              <circle 
                cx="12" 
                cy="2" 
                r="2" 
                fill="currentColor" 
              />
            </svg>
          </div>
          <p className="text-lg font-medium text-gray-700">Loading...</p>
        </div>
    );
};

export default Loading;