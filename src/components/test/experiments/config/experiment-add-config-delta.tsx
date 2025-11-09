import { DeltaFields } from "@/components/test/experiments/types";
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
import { EmuBootConfig } from "@/shared/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

const DeltaFieldKeys = Object.keys(DeltaFields);

export const ADD_CONFIG_DELTA_SCHEMA = z.object({
  key: z.enum(DeltaFieldKeys as [string, ...string[]], {
    errorMap: () => ({ message: "Please select a valid type" })
  }),
  value: z.any(),
})

export function AddConfigDeltaModal({ onSubmit, open, close, children, currentConfig }: { onSubmit: (data: z.infer<typeof ADD_CONFIG_DELTA_SCHEMA>) => void, open: boolean, close: Function, children: React.ReactNode, currentConfig?: EmuBootConfig }) {
  const form = useForm<z.infer<typeof ADD_CONFIG_DELTA_SCHEMA>>({
    resolver: zodResolver(ADD_CONFIG_DELTA_SCHEMA),
    defaultValues: {
      key: "",
      value: "",
    },
  });

  const selectedKey = form.watch("key");
  const selectedField = selectedKey ? DeltaFields[selectedKey] : null;
  const hasAllowedValues = selectedField?.getAllowedValues && currentConfig;
  const allowedValues = hasAllowedValues ? selectedField.getAllowedValues!(currentConfig) : [];
  
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
              <DialogTitle>Add Config Delta</DialogTitle>
            </DialogHeader>
            <div className="flex flex-row justify-between py-4">
              <FormField
                control={form.control}
                name="key"
                render={({ field }) => (
                  <FormItem className="flex flex-col space-y-2">
                    <FormLabel>Key</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger className="mb-0">
                        <SelectValue defaultValue="uint" />
                      </SelectTrigger>
                      <SelectContent className="w-full">
                        { DeltaFieldKeys.map((key) => (
                          <SelectItem key={key} value={key}>
                            {key}
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
                name="value"
                render={({ field }) => (
                  <FormItem className="flex flex-col space-y-2">
                    <FormLabel>Value</FormLabel>
                    {hasAllowedValues ? (
                      <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger className="mb-0">
                          <SelectValue placeholder="Select a value" />
                        </SelectTrigger>
                        <SelectContent className="w-full">
                          {allowedValues.map((value) => (
                            <SelectItem key={value} value={value}>
                              {value}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    ) : (
                      <Input {...field} />
                    )}
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline" onClick={() => { form.reset(); close() }}>Cancel</Button>
              </DialogClose>
              <Button type="button" onClick={() => { form.handleSubmit(onSubmit)(); close() }}>Add</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
