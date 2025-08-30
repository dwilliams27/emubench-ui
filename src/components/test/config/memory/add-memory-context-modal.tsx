import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Form, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

const types = ["int", "uint", "float", "hex", "chars"];
const sizes = ["1", "4", "8", "16"];

// User input
const ADD_MEMORY_CONTEXT_FORM_SCHEMA = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().optional(),
  address: z.string().regex(/^[0-9a-fA-F]+$/, "Address must contain only hexadecimal characters (0-9, A-F)"),
  type: z.enum(types as [string, ...string[]], {
    errorMap: () => ({ message: "Please select a valid type" })
  }),
  size: z.string().min(1, "Please select a size"),
  pointerOffsets: z.string().refine((val) => {
    if (!val.trim()) return true;
    try {
      const parsed = JSON.parse(val);
      return Array.isArray(parsed) && parsed.every(item => typeof item === 'number');
    } catch {
      return false;
    }
  }, "Must be a valid array of integers"),
});

// Transformed output
export const ADD_MEMORY_CONTEXT_SCHEMA = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().optional(),
  address: z.string().regex(/^[0-9a-fA-F]+$/, "Address must contain only hexadecimal characters (0-9, A-F)"),
  type: z.enum(types as [string, ...string[]], {
    errorMap: () => ({ message: "Please select a valid type" })
  }),
  size: z.string().min(1, "Please select a size"),
  pointerOffsets: z.array(z.number()),
});

export function AddMemoryContextModal({ onSubmit, open, close, children }: { onSubmit: (data: z.infer<typeof ADD_MEMORY_CONTEXT_SCHEMA>) => void, open: boolean, close: Function, children: React.ReactNode }) {
  const form = useForm<z.infer<typeof ADD_MEMORY_CONTEXT_FORM_SCHEMA>>({
    resolver: zodResolver(ADD_MEMORY_CONTEXT_FORM_SCHEMA),
    defaultValues: {
      name: "",
      description: "",
      address: "",
      type: "uint",
      size: "8",
      pointerOffsets: "",
    },
  });
  
  const handleSubmit = (formData: z.infer<typeof ADD_MEMORY_CONTEXT_FORM_SCHEMA>) => {
    let pointerOffsets: number[] = [];
    
    if (formData.pointerOffsets.trim()) {
      try {
        const parsed = JSON.parse(formData.pointerOffsets);
        if (Array.isArray(parsed) && parsed.every(item => typeof item === 'number')) {
          pointerOffsets = parsed;
        } else {
          form.setError("pointerOffsets", { message: "Must be a valid array of integers" });
          return;
        }
      } catch {
        form.setError("pointerOffsets", { message: "Must be a valid array of integers" });
        return;
      }
    }
    
    const transformedData: z.infer<typeof ADD_MEMORY_CONTEXT_SCHEMA> = {
      ...formData,
      pointerOffsets,
    };
    
    onSubmit(transformedData);
  };

  return (
    <Dialog open={open} onOpenChange={(isOpen) => {
      if (!isOpen) {
        form.reset();
        close();
      }
    }}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <DialogHeader>
              <DialogTitle>Memory Watch</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col space-y-4 py-4">
              <div className="flex flex-row space-x-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="flex flex-col space-y-2">
                      <FormLabel>Name</FormLabel>
                      <Input {...field} />
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem className="flex flex-col space-y-2">
                      <FormLabel>Address</FormLabel>
                      <Input {...field} />
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem className="flex flex-col space-y-2">
                    <FormLabel>Description</FormLabel>
                    <Input {...field} />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex flex-row items-end space-x-2">
                <div className="flex flex-row w-1/2 justify-between">
                  <FormField
                    control={form.control}
                    name="type"
                    render={({ field }) => (
                      <FormItem className="flex flex-col space-y-2">
                        <FormLabel>Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <SelectTrigger className="mb-0">
                            <SelectValue defaultValue="uint" />
                          </SelectTrigger>
                          <SelectContent className="w-full">
                            { types.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                            )) }
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="size"
                    render={({ field }) => (
                      <FormItem className="flex flex-col space-y-2 w-1/2">
                        <FormLabel>Size</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <SelectTrigger className="mb-0">
                            <SelectValue defaultValue="8" />
                          </SelectTrigger>
                          <SelectContent className="w-full">
                            { sizes.map((size) => (
                            <SelectItem key={size} value={size}>
                              {size}
                            </SelectItem>
                            )) }
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="w-1/2">
                  <FormField
                    control={form.control}
                    name="pointerOffsets"
                    render={({ field }) => (
                      <FormItem className="flex flex-col space-y-2 w-full">
                        <FormLabel>Pointer Offsets</FormLabel>
                        <Input {...field} placeholder="[]" />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline" onClick={() => { form.reset(); close() }}>Cancel</Button>
              </DialogClose>
              <Button type="button" onClick={() => form.handleSubmit(handleSubmit)()}>Add</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
