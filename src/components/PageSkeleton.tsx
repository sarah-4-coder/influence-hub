import { Skeleton } from '@/components/ui/skeleton';

const PageSkeleton = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar Skeleton */}
      <div className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Skeleton className="h-8 w-32" />
          <div className="hidden md:flex items-center gap-8">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-16" />
          </div>
          <div className="flex items-center gap-4">
            <Skeleton className="h-8 w-8 rounded-full" />
            <Skeleton className="h-10 w-32 rounded-sm" />
          </div>
        </div>
      </div>

      {/* Hero Section Skeleton */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
        <div className="max-w-6xl w-full space-y-8">
          <Skeleton className="h-4 w-64 mx-auto" />
          <div className="space-y-4">
            <Skeleton className="h-24 md:h-36 w-full max-w-4xl mx-auto" />
            <Skeleton className="h-24 md:h-36 w-full max-w-3xl mx-auto" />
          </div>
          <Skeleton className="h-6 w-full max-w-2xl mx-auto" />
          <Skeleton className="h-6 w-full max-w-xl mx-auto" />
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center pt-8">
            <Skeleton className="h-14 w-48 rounded-sm" />
            <Skeleton className="h-6 w-40" />
          </div>
        </div>
      </section>

      {/* Second Section Skeleton */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-16 w-full" />
              <Skeleton className="h-16 w-3/4" />
              <Skeleton className="h-24 w-full" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Skeleton className="h-32 rounded-2xl" />
              <Skeleton className="h-32 rounded-2xl" />
              <Skeleton className="h-32 rounded-2xl" />
              <Skeleton className="h-32 rounded-2xl" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PageSkeleton;
