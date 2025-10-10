import { MODEL_PROVIDERS, MODELS } from "@/components/test/config/types";
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DeepPartial, EmuBootConfig } from "@/shared/types";
import { EmuExperimentRunGroup } from "@/shared/types/experiments";
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { useMemo } from "react";

interface DeltaField {
  key: string;
  getAllowedValues?: (currentConfig: EmuBootConfig) => string[];
  toDisplayValue?: (key: string) => string;
}

const DeltaFields: Record<string, DeltaField> = {
  "Game Context": {
    key: "gameContext",
  },
  "Model Provider": {
    key: "llmProvider",
    getAllowedValues: (_) => Object.keys(MODEL_PROVIDERS).map((key) => MODEL_PROVIDERS[key].displayName),
    toDisplayValue: (key) => MODEL_PROVIDERS[key as keyof typeof MODEL_PROVIDERS].displayName
  },
  "Model": {
    key: "model",
    getAllowedValues: (currentConfig) => MODELS[currentConfig.agentConfig.llmProvider].map((model) => model.displayName),
  },
  "Temperature": {
    key: "temperature"
  },
  "Task Name": {
    key: "taskName",
  },
  "Task Description": {
    key: "taskDescription",
  },
  "System Prompt": {
    key: "systemPrompt",
  }
}

export function ExperimentGroup({ group, addIterations, removeConfigDeltaItem }: { group: EmuExperimentRunGroup, addIterations: (amount: number) => void, removeConfigDeltaItem: (key: string) => void }) {
  const columns: ColumnDef<{ key: string, value: string, displayValue: string }>[] = useMemo(() =>[
    {
      accessorKey: "key",
      header: "Key",
      cell: ({ row }) => <div className="lowercase">{row.getValue("key")}</div>,
    },
    {
      accessorKey: "displayValue",
      header: "Value",
      cell: ({ row }) => <div className="lowercase">{row.getValue("displayValue")}</div>,
    },
    {
      accessorKey: "remove",
      header: "",
      cell: ({ row }) => (
        <div className="flex justify-end">
          <Button size="sm" variant="destructive" onClick={() => removeConfigDeltaItem(row.getValue("key"))}>x</Button>
        </div>
      ),
    },
  ], [removeConfigDeltaItem]);

  const data = useMemo(() => {
    if (!group.baseConfigDelta.agentConfig) {
      return [];
    }
    return Object.entries(group.baseConfigDelta.agentConfig).map(([key, value]) => {
      let displayValue = value as string;
      if (key in DeltaFields) {
        const field = DeltaFields[key as keyof typeof DeltaFields];
        if (field.toDisplayValue) {
          displayValue = field.toDisplayValue(value as string);
        }
      }
      // TODO: Handler numbers
      return { key, value: value as string, displayValue };
    });
  }, [group]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Card className="md:w-1/2">
      <CardHeader>
        <CardTitle>
          <div className="flex flex-row justify-between items-center">
            <div>{group.name}</div>
            <div className="flex flex-row items-center">
              <div>Iterations: {group.iterations}</div>
              <div className="flex flex-col space-y-1">
                <Button variant="outline" className="ml-2 h-2" onClick={() => addIterations(1)}>+</Button>
                <Button variant="outline" className="ml-2 h-2" onClick={() => addIterations(-1)}>-</Button>
              </div>
            </div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="overflow-hidden rounded-md border">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    )
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
