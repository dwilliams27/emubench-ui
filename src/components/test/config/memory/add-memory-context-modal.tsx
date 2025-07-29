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

export const ADD_MEMORY_CONTEXT_SCHEMA = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().optional(),
  address: z.string().regex(/^[0-9a-fA-F]+$/, "Address must contain only hexadecimal characters (0-9, A-F)"),
  type: z.enum(types as [string, ...string[]], {
    errorMap: () => ({ message: "Please select a valid type" })
  }),
  size: z.string().min(1, "Please select a size"),
  pointerDepth: z.number().int().nonnegative("Pointer depth must be a non-negative integer"),
})

export function AddMemoryContextModal({ onSubmit, open, close, children }: { onSubmit: (data: z.infer<typeof ADD_MEMORY_CONTEXT_SCHEMA>) => void, open: boolean, close: Function, children: React.ReactNode }) {
  const form = useForm<z.infer<typeof ADD_MEMORY_CONTEXT_SCHEMA>>({
    resolver: zodResolver(ADD_MEMORY_CONTEXT_SCHEMA),
    defaultValues: {
      name: "",
      description: "",
      address: "",
      type: "uint",
      size: "8",
      pointerDepth: 0,
    },
  });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    form.handleSubmit(onSubmit)(e);
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
          <form onSubmit={handleSubmit}>
            <DialogHeader>
              <DialogTitle>Memory Watch</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col space-y-4 py-4">
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
                <div className="flex flex-col space-y-2 flex-1">
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
                <div className="flex flex-row w-1/2 space-x-2 justify-start">
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
                      <FormItem className="flex flex-col space-y-2">
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
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline" onClick={() => { form.reset(); close() }}>Cancel</Button>
              </DialogClose>
              <Button type="button" onClick={() => form.handleSubmit(onSubmit)()}>Add</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
