import { AddConfigDeltaModal } from "@/components/test/experiments/config/experiment-add-config-delta";
import { DeltaFields } from "@/components/test/experiments/types";
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { EmuBootConfig } from "@/shared/types";
import { EmuExperimentRunGroup } from "@/shared/types/experiments";
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { SquarePen, XIcon } from "lucide-react";
import { useMemo, useState } from "react";

const groupIterationOptions = ["1", "5", "10", "20", "30"];

export function ExperimentGroup({ group, baseConfig, setIterations, removeConfigDeltaItem, addConfigDeltaItem, deleteGroup, updateGroupName }: { group: EmuExperimentRunGroup, baseConfig: EmuBootConfig, setIterations: (amount: number) => void, removeConfigDeltaItem: (key: string) => void, addConfigDeltaItem: (data: { key: string, value?: any }) => void, deleteGroup: (id: string) => void, updateGroupName: (id: string, name: string) => void }) {
  const [addFormOpen, setAddFormOpen] = useState(false);
  const [isEditingName, setIsEditingName] = useState(false);
  const [editingName, setEditingName] = useState(group.name);

  const handleNameClick = () => {
    setIsEditingName(true);
    setEditingName(group.name);
  };

  const handleNameSave = () => {
    if (editingName.trim() && editingName !== group.name) {
      updateGroupName(group.id, editingName.trim());
    }
    setIsEditingName(false);
  };

  const handleNameKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleNameSave();
    } else if (e.key === 'Escape') {
      setEditingName(group.name);
      setIsEditingName(false);
    }
  };

  // Merge baseConfig with group's delta to get current effective config
  const effectiveConfig = useMemo(() => {
    return {
      ...baseConfig,
      agentConfig: {
        ...baseConfig.agentConfig,
        ...group.baseConfigDelta.agentConfig,
      }
    } as EmuBootConfig;
  }, [baseConfig, group.baseConfigDelta]);

  const columns: ColumnDef<{ key: string, value: string, displayValue: string }>[] = useMemo(() =>[
    {
      accessorKey: "key",
      header: "Key",
      cell: ({ row }) => <div>{row.getValue("key")}</div>,
    },
    {
      accessorKey: "displayValue",
      header: "Value",
      cell: ({ row }) => <div>{row.getValue("displayValue")}</div>,
    },
    {
      accessorKey: "remove",
      header: () => (
        <AddConfigDeltaModal onSubmit={addConfigDeltaItem} open={addFormOpen} close={() => setAddFormOpen(false)} currentConfig={effectiveConfig}>
          <div className="flex justify-end">
            <Button variant="outline" className="h-2" onClick={() => setAddFormOpen(true)}>+</Button>
          </div>
        </AddConfigDeltaModal>
      ),
      cell: ({ row }) => (
        <div className="flex justify-end">
          <Button variant="ghost" onClick={() => removeConfigDeltaItem(row.getValue("key"))}>
            <XIcon />
          </Button>
        </div>
      ),
    },
  ], [removeConfigDeltaItem, addConfigDeltaItem, addFormOpen, setAddFormOpen, effectiveConfig]);

  const data = useMemo(() => {
    const configEntries = [
      ...Object.entries(group.baseConfigDelta.agentConfig || {}),
      ...Object.entries(group.baseConfigDelta.emulatorConfig || {}),
    ];

    return configEntries.map(([key, value]) => {
      let displayValue = value as string;
      if (key in DeltaFields) {
        const field = DeltaFields[key as keyof typeof DeltaFields];
        if (field.toDisplayValue) {
          displayValue = field.toDisplayValue(value as string);
        }
      }
      return { key, value: value as string, displayValue };
    });
  }, [group.baseConfigDelta.agentConfig, group.baseConfigDelta.emulatorConfig]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>
          <div className="flex flex-row justify-between items-center">
            {isEditingName ? (
              <Input
                value={editingName}
                onChange={(e) => setEditingName(e.target.value)}
                onBlur={handleNameSave}
                onKeyDown={handleNameKeyPress}
                className="border-none p-0 h-auto focus-visible:ring-0 bg-transparent"
                autoFocus
              />
            ) : (
              <div className="flex flex-row items-center">
                <div>
                  {group.name}
                </div>
                <Button 
                  variant="link" 
                  size="sm" 
                  className="p-0 mt-1"
                  onClick={handleNameClick}
                >
                  <SquarePen />
                </Button>
              </div>
            )}
            <Button variant="ghost" onClick={() => deleteGroup(group.id)}>
              <XIcon />
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 flex flex-col">
        <div className="flex flex-row items-center">
          <div className="mr-3">Iterations</div>
          <div className="flex flex-col space-y-1">
            <Select onValueChange={(value) => setIterations(parseInt(value))} defaultValue={"10"}>
              <SelectTrigger className="mb-0">
                <SelectValue defaultValue="uint" />
              </SelectTrigger>
              <SelectContent className="w-full">
                { groupIterationOptions.map((value) => (
                <SelectItem key={value} value={value}>
                  {value}
                </SelectItem>
                )) }
              </SelectContent>
            </Select>
          </div>
        </div>
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
                    className="h-13 text-center"
                  >
                    No changes.
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
