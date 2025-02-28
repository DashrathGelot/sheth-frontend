export default function Loading() {
    return (
      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Product Image Skeleton */}
        <div className="w-full aspect-square bg-gray-200 animate-pulse rounded-lg"></div>
        
        {/* Product Details Skeleton */}
        <div className="space-y-4">
          <div className="space-y-3">
            <div className="h-6 w-3/4 bg-gray-200 animate-pulse rounded"></div>
            <div className="h-6 w-1/4 bg-gray-200 animate-pulse rounded"></div>
          </div>
          <div className="space-y-3">
            <div className="h-4 w-1/2 bg-gray-200 animate-pulse rounded"></div>
            <div className="h-4 w-1/3 bg-gray-200 animate-pulse rounded"></div>
          </div>
          <div className="h-24 w-full bg-gray-200 animate-pulse rounded"></div>
        </div>
      </div>
    );
  }
