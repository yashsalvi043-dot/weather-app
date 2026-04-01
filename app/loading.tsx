import Skeleton from '@/components/ui/Skeleton';

export default function Loading() {
  return (
    <div className="min-h-dvh flex flex-col items-center justify-center bg-gradient-to-br from-sky-500 to-blue-300 px-4">
      <Skeleton variant="circular" width={80} height={80} />
      <Skeleton variant="text" className="!h-16 !w-48 mt-4" />
      <Skeleton variant="text" className="!h-5 !w-32 mt-2" />
    </div>
  );
}
