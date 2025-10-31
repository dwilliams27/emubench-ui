import { LoadingSpinner } from "@/components/shared/loading-spinner";
import { EmuTestPublic } from "@/shared/types/test";
import { useMemo } from "react";

export function ExperimentActiveCell({ test }: { test?: EmuTestPublic }) {
  const mostRecentScreenshot = useMemo(() => {
    if (!test || !test.screenshots || Object.keys(test.screenshots).length === 0) {
      return null;
    }
    return Object.entries(test.screenshots).sort((a, b) => {
      const numA = parseInt(a[0].substring(2));
      const numB = parseInt(b[0].substring(2));
      return numB - numA;
    })[0][1].thumbnailUrl;
  }, [test]);

  const getBorderColor = () => {
    if (!test?.result?.conditionResult) {
      return "border-gray-300";
    }
    
    switch (test.result.conditionResult) {
      case 'passed':
        return "border-green-500";
      case 'failed':
        return "border-red-500";
      case 'error':
        return "border-yellow-500";
      default:
        return "border-gray-300";
    }
  };

  return (
    <div className={`w-full min-w-16 max-w-32 aspect-square flex items-center justify-center bg-secondary/10 rounded-md border-4 ${getBorderColor()}`}>
      {
        test && mostRecentScreenshot ? (
          <div className="w-full h-full flex items-center justify-center">
            {mostRecentScreenshot && <img src={mostRecentScreenshot} alt="Game screenshot" className="max-w-full max-h-full object-contain rounded-md" />}
          </div>
        ) : (
          <LoadingSpinner />
        )
      }
    </div>
  );
}
