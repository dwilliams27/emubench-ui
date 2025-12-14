import { ADD_MEMORY_CONTEXT_SCHEMA, AddMemoryContextModal } from "@/components/test/config/memory/add-memory-context-modal";
import { GAMES, SETUP_TEST_CONFIG_SCHEMA } from "@/components/test/config/types";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";  
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { EmuConditionInputType } from "@/shared/conditions/types";
import { ColumnDef, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table";
import { useState, useMemo, useEffect } from "react";
import { UseFormReturn, useWatch } from "react-hook-form";
import z from "zod";

export interface ContextMemoryItem {
  address: string;
  size: number;
  pointerOffsets: number[];
  type: EmuConditionInputType;
  name: string;
  description: string;
}

export const ContextMemoryWatches: Record<string, ContextMemoryItem[]> = {
  [GAMES.ZELDA_WIND_WAKER]: [
    {
      address: "80000000",
      type: "chars",
      size: 6,
      pointerOffsets: [],
      name: "GAME_ID",
      description: "Game ID, used for testing"
    },
    {
      address: "803E440C",
      type: "float",
      size: 4,
      pointerOffsets: [],
      name: "LINK_X",
      description: "Link's X Position"
    },
    {
      address: "803E4410",
      type: "float",
      size: 4,
      pointerOffsets: [],
      name: "LINK_Y",
      description: "Link's Y Position"
    },
    {
      address: "803E4414",
      type: "float",
      size: 4,
      pointerOffsets: [],
      name: "LINK_Z",
      description: "Link's Z Position"
    },
  ],
  [GAMES.HARVEST_MOON]: [
    {
      address: "80000000",
      type: "chars",
      size: 6,
      pointerOffsets: [],
      name: "GAME_ID",
      description: "Game ID, used for testing"
    },
  ]
}

export const columns: ColumnDef<ContextMemoryItem>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => <div className="lowercase">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => <div className="lowercase">{row.getValue("description")}</div>,
  },
  {
    accessorKey: "address",
    header: "Address",
    cell: ({ row }) => <div className="lowercase">0x{row.getValue("address")}</div>,
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => <div className="lowercase">{row.getValue("type")}</div>,
  },
  {
    accessorKey: "size",
    header: "Size",
    cell: ({ row }) => <div className="lowercase">{row.getValue("size")}</div>,
  },
  {
    accessorKey: "pointerOffsets",
    header: "Pointer Offsets",
    cell: ({ row }) => <div className="lowercase">{row.getValue("pointerOffsets")}</div>,
  },
];

export function MemoryContext({ form }: { form: UseFormReturn<z.infer<typeof SETUP_TEST_CONFIG_SCHEMA>> }) {
  const [addFormOpen, setAddFormOpen] = useState(false);
  const [customMemoryWatches, setCustomMemoryWatches] = useState<ContextMemoryItem[]>([]);
  const selectedGameId = useWatch({
    control: form.control,
    name: "gameConfig.game"
  });

  const [rowSelection, setRowSelection] = useState({});
  
  const tableData = useMemo(() => [
    ...(ContextMemoryWatches[selectedGameId] || []),
    ...customMemoryWatches
  ], [selectedGameId, customMemoryWatches]);
  
  const table = useReactTable({
    data: tableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      rowSelection,
    },
  });

  useEffect(() => {
    const selectedRows = table.getSelectedRowModel().rows;
    const contextRecord: Record<string, ContextMemoryItem> = {};
    
    selectedRows.forEach((row) => {
      const memoryItem = row.original;
      const key = memoryItem.name;
      contextRecord[key] = memoryItem;
    });
    
    form.setValue("memoryConfig.context", contextRecord);
  }, [rowSelection, table, form]);

  const onAddNewItem = async (formData: z.infer<typeof ADD_MEMORY_CONTEXT_SCHEMA>) => {
    setAddFormOpen(false);

    setCustomMemoryWatches((prev) => [
      ...prev,
      {
        address: formData.address,
        size: parseInt(formData.size),
        pointerOffsets: [],
        type: formData.type as EmuConditionInputType,
        name: formData.name,
        description: formData.description || ""
      }
    ]);
  }
  
  return (
    <div className="w-full min-w-0">
      {/* TODO: Move button into Card Title */}
      <div className="flex items-center py-4">
        <AddMemoryContextModal onSubmit={onAddNewItem} open={addFormOpen} close={() => setAddFormOpen(false)}>
          <Button variant="outline" onClick={() => setAddFormOpen(true)}>+ Add Memory Watch</Button>
        </AddMemoryContextModal>
      </div>
      <div className="overflow-x-auto rounded-md border">
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
    </div>
  );
}
