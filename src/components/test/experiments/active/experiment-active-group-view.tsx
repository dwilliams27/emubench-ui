import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { EmuExperimentRunGroup } from "@/shared/types/experiments";
import { EmuTestPublic } from "@/shared/types/test";
import { ExperimentActiveCell } from "./experiment-active-cell";

// Helper function to format nested object paths
function flattenDelta(obj: any, prefix = ''): Array<{ key: string; value: any }> {
  const result: Array<{ key: string; value: any }> = [];
  
  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      result.push(...flattenDelta(value, fullKey));
    } else {
      result.push({ key: fullKey, value });
    }
  }
  
  return result;
}

// Helper function to format values for display
function formatValue(value: any): string {
  if (typeof value === 'string') return value;
  if (typeof value === 'number') return value.toString();
  if (typeof value === 'boolean') return value ? 'true' : 'false';
  if (Array.isArray(value)) return `[${value.length} items]`;
  if (value === null) return 'null';
  if (value === undefined) return 'undefined';
  return JSON.stringify(value);
}

function ConfigDeltaItem({ keyPath, value }: { keyPath: string; value: any }) {
  const displayValue = formatValue(value);
  const isLongValue = displayValue.length > 20;
  
  return (
    <div className="border rounded-lg p-3">
      <div className="text-xs text-muted-foreground mb-1 font-medium">
        {keyPath}
      </div>
      <div className={`font-bold ${isLongValue ? 'text-sm' : 'text-lg'} break-words`}>
        {displayValue}
      </div>
      {typeof value === 'number' && (
        <div className="text-xs text-muted-foreground mt-1">
          numeric value
        </div>
      )}
      {typeof value === 'boolean' && (
        <div className="text-xs text-muted-foreground mt-1">
          boolean
        </div>
      )}
      {typeof value === 'string' && (
        <div className="text-xs text-muted-foreground mt-1">
          text value
        </div>
      )}
    </div>
  );
}

export function ExperimentActiveGroupView({ runGroup, tests }: { runGroup: EmuExperimentRunGroup, tests: EmuTestPublic[] }) {
  const deltaItems = flattenDelta(runGroup.baseConfigDelta);
  
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex flex-row justify-between">
          <span>{runGroup.name}</span>
          <span>Iterations: {tests.length} / {runGroup.iterations}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col space-y-4">
        {/* Configuration Delta */}
        {deltaItems.length > 0 && (
          <div>
            <h4 className="text-sm font-medium mb-3">Configuration Delta</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {deltaItems.map(({ key, value }) => (
                <ConfigDeltaItem key={key} keyPath={key} value={value} />
              ))}
            </div>
          </div>
        )}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(64px,128px))] gap-4 justify-center">
          {tests.map((test) => (
            <ExperimentActiveCell key={test.id} test={test} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
