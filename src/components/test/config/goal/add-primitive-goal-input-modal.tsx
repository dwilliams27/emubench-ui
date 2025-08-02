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

// EmuConditionPrimitiveResult
const types = ["string", "number", "boolean"];

export const ADD_PRIMITIVE_GOAL_INPUT_SCHEMA = z.object({
  type: z.enum(types as [string, ...string[]], {
    errorMap: () => ({ message: "Please select a valid type" })
  }),
  value: z.string(),
})

export function AddPrimitiveGoalInputModal({ onSubmit, open, close, children }: { onSubmit: (data: z.infer<typeof ADD_PRIMITIVE_GOAL_INPUT_SCHEMA>) => void, open: boolean, close: Function, children: React.ReactNode }) {
  const form = useForm<z.infer<typeof ADD_PRIMITIVE_GOAL_INPUT_SCHEMA>>({
    resolver: zodResolver(ADD_PRIMITIVE_GOAL_INPUT_SCHEMA),
    defaultValues: {
      type: "string",
      value: "",
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
              <DialogTitle>Goal Primitive</DialogTitle>
            </DialogHeader>
            <div className="flex flex-row justify-between py-4">
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
                name="value"
                render={({ field }) => (
                  <FormItem className="flex flex-col space-y-2">
                    <FormLabel>Value</FormLabel>
                    <Input {...field} />
                    <FormMessage />
                  </FormItem>
                )}
              />
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
