import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormField, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

export const EXPERIMENT_CONFIG_SCHEMA = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
});

export function ExperimentConfig({ onSubmit }: { onSubmit: (formData: z.infer<typeof EXPERIMENT_CONFIG_SCHEMA>) => Promise<void> }) {
  const form = useForm<z.infer<typeof EXPERIMENT_CONFIG_SCHEMA>>({
    resolver: zodResolver(EXPERIMENT_CONFIG_SCHEMA),
    defaultValues: {
      name: ``,
      description: ``
    }
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>
              Experiment Config
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <div className="space-y-2">
                    <FormLabel>Name</FormLabel>
                    <Input onChange={field.onChange} defaultValue={field.value} />
                  </div>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <div className="space-y-2 w-full">
                    <FormLabel>Description</FormLabel>
                    <Textarea 
                      onChange={field.onChange} 
                      className="flex-1 resize-none h-30 overflow-y-auto"
                      defaultValue={field.value}
                    />
                  </div>
                )}
              />
            </div>
          </CardContent>
        </Card>
        <div className="flex justify-center">
          <Button>Next</Button>
        </div>
      </form>
    </Form>
  )
}
