const PageSkeleton = () => {
  return (
    <div className="min-h-screen bg-background animate-pulse">
      {/* Navbar Skeleton */}
      <div className="fixed w-full z-50 px-6 md:px-12 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-muted rounded-sm" />
          <div className="w-32 h-6 bg-muted rounded" />
        </div>
        <div className="hidden md:flex space-x-8">
          <div className="w-16 h-3 bg-muted rounded" />
          <div className="w-20 h-3 bg-muted rounded" />
          <div className="w-16 h-3 bg-muted rounded" />
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <div className="w-8 h-8 bg-muted rounded-full" />
          <div className="w-16 h-3 bg-muted rounded" />
          <div className="w-24 h-10 bg-muted rounded-sm" />
        </div>
      </div>

      {/* Hero Skeleton */}
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
        <div className="w-48 h-3 bg-muted rounded mb-8" />
        <div className="w-full max-w-4xl space-y-4 mb-12">
          <div className="w-3/4 h-16 md:h-24 bg-muted rounded mx-auto" />
          <div className="w-1/2 h-16 md:h-24 bg-muted rounded mx-auto" />
        </div>
        <div className="w-full max-w-2xl space-y-3 mb-16">
          <div className="w-full h-4 bg-muted rounded" />
          <div className="w-5/6 h-4 bg-muted rounded mx-auto" />
          <div className="w-4/6 h-4 bg-muted rounded mx-auto" />
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
          <div className="w-48 h-14 bg-muted rounded-sm" />
          <div className="w-40 h-6 bg-muted rounded" />
        </div>
      </div>
    </div>
  );
};

export default PageSkeleton;
