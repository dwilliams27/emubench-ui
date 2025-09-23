import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";

const GamingLoadingState = () => {
  return (
    <div className="h-[600px] rounded-xl bg-primary relative overflow-hidden">
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      {/* Floating gaming elements */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-32 h-32">
          {/* Central game controller */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-12 bg-primary-foreground/20 rounded-lg relative animate-pulse">
              {/* D-pad */}
              <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
                <div className="w-3 h-1 bg-primary-foreground/30 rounded-full"></div>
                <div className="w-1 h-3 bg-primary-foreground/30 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              </div>
              {/* Action buttons */}
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 grid grid-cols-2 gap-1">
                <div className="w-1.5 h-1.5 bg-primary-foreground/30 rounded-full animate-ping" style={{animationDelay: '0s'}}></div>
                <div className="w-1.5 h-1.5 bg-primary-foreground/30 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                <div className="w-1.5 h-1.5 bg-primary-foreground/30 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                <div className="w-1.5 h-1.5 bg-primary-foreground/30 rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
              </div>
            </div>
          </div>
          
          {/* Orbiting pixels */}
          <div className="absolute inset-0 animate-spin" style={{animationDuration: '8s'}}>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-primary-foreground/40 rounded-sm"></div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-2 h-2 bg-primary-foreground/40 rounded-sm"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-primary-foreground/40 rounded-sm"></div>
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-2 h-2 bg-primary-foreground/40 rounded-sm"></div>
          </div>
          
          {/* Slower orbiting elements */}
          <div className="absolute inset-0 animate-spin" style={{animationDuration: '12s', animationDirection: 'reverse'}}>
            <div className="absolute top-4 right-4 w-1 h-1 bg-primary-foreground/60 rounded-full"></div>
            <div className="absolute bottom-4 right-4 w-1 h-1 bg-primary-foreground/60 rounded-full"></div>
            <div className="absolute bottom-4 left-4 w-1 h-1 bg-primary-foreground/60 rounded-full"></div>
            <div className="absolute top-4 left-4 w-1 h-1 bg-primary-foreground/60 rounded-full"></div>
          </div>
        </div>
      </div>
      
      {/* Loading progress indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-primary-foreground/20 rounded-full overflow-hidden">
        <div className="h-full bg-primary-foreground/60 rounded-full animate-pulse" style={{width: '60%'}}></div>
      </div> */}
      
      {/* Loading text */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-primary-foreground/70 text-sm font-medium animate-pulse">
        Starting test...
      </div>
      
      {/* Corner decorative elements */}
      <div className="absolute top-4 left-4 w-3 h-3 border-l-2 border-t-2 border-primary-foreground/30 animate-pulse"></div>
      <div className="absolute top-4 right-4 w-3 h-3 border-r-2 border-t-2 border-primary-foreground/30 animate-pulse" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute bottom-4 left-4 w-3 h-3 border-l-2 border-b-2 border-primary-foreground/30 animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-4 right-4 w-3 h-3 border-r-2 border-b-2 border-primary-foreground/30 animate-pulse" style={{animationDelay: '1.5s'}}></div>
    </div>
  );
};

export function ActiveTestScreen({ screenshots, testStarted }: { screenshots: Record<string, string> | undefined, testStarted: boolean }) {
  const [screenshotKey, setScreenshotKey] = useState<string>('');

  useEffect(() => {
    if (!screenshots) {
      return;
    }
    setScreenshotKey(Object.entries(screenshots).sort((a, b) => {
      const numA = parseInt(a[0].replace('.png', ''));
      const numB = parseInt(b[0].replace('.png', ''));
      return numB - numA;
    })[0]?.[1]);
  }, [screenshots]);

  return (
    <Card className="w-full mb-1 md:w-2/3 md:mb-0">
      <CardHeader>
        <CardTitle>View</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="max-h-[600px]">
          { screenshotKey ? (
            <img src={screenshotKey} alt="Game screenshot" className="w-full h-auto max-h-[600px] rounded-md" />
          ) : (
            (testStarted && <GamingLoadingState />) || <div className="w-full h-[600px] flex items-center justify-center text-muted-foreground">No screenshots available</div>
          ) }
        </div>
      </CardContent>
    </Card>
  );
}
