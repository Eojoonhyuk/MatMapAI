export const Skeleton = () => {
  return (
    <div>
      <div className="animate-pulse">
        <div className="h-48 bg-gray-300 rounded mb-2"></div>
        <div className="h-8 bg-gray-300 rounded mb-2"></div>
        <div className="h-4 bg-gray-300 rounded mb-2"></div>
        <div className="w-14 h-4 bg-gray-300 rounded mb-2"></div>
      </div>
    </div>
  );
};
