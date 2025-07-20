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
        <CardTitle>Game View</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        { screenshots && <img src={getLatestScreenshot()} alt="Game screenshot" className="w-full h-auto rounded-md" /> }
      </CardContent>
    </Card>
  );
}
