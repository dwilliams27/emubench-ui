import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ActiveTestScreen({ screenshots }: { screenshots: Record<string, string> | undefined }) {
  const getLatestScreenshot = () => {
    if (!screenshots) {
      return;
    }
    return Object.entries(screenshots).sort((a, b) => {
      const numA = parseInt(a[0].replace('.png', ''));
      const numB = parseInt(b[0].replace('.png', ''));
      return numB - numA;
    })[0]?.[1];
  }

  return (
    <Card className="w-full md:w-2/3">
      <CardHeader>
        <CardTitle>View</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="max-h-[600px]">
          { screenshots ? (
            <img src={getLatestScreenshot()} alt="Game screenshot" className="w-full h-auto max-h-[600px] rounded-md" />
          ) : (
            <h3>-</h3>
          ) }
        </div>
      </CardContent>
    </Card>
  );
}
