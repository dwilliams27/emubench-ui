import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AVAILABLE_SAVE_STATES, SETUP_TEST_CONFIG_SCHEMA, GAMES, PLATFORMS } from "@/components/test/config/types"
import { useWatch, type UseFormReturn } from "react-hook-form";
import { FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useMemo } from "react";
import type z from "zod";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export function GameConfig({ form }: { form: UseFormReturn<z.infer<typeof SETUP_TEST_CONFIG_SCHEMA>> }) {
  const selectedPlatform = useWatch({
    control: form.control,
    name: "gameConfig.platform"
  });
  
  const selectedGame = useWatch({
    control: form.control,
    name: "gameConfig.game"
  });

  const availableSaveStates = useMemo(() => {
    if (!selectedPlatform || !selectedGame) {
      return [];
    }
    
    return AVAILABLE_SAVE_STATES[selectedPlatform][selectedGame];
  }, [selectedPlatform, selectedGame]);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Game</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <FormField
          control={form.control}
          name="gameConfig.platform"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center justify-between">
                <FormLabel>Platform</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger className="w-1/2">
                    <SelectValue placeholder="Select a platform" />
                  </SelectTrigger>
                  <SelectContent>
                    { Object.entries(PLATFORMS).map(([key, platform]) => (
                    <SelectItem key={key} value={platform.name}>
                      {platform.displayName}
                    </SelectItem>
                  )) }
                  </SelectContent>
                </Select>
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="gameConfig.game"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center justify-between">
                <FormLabel>Game</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger className="w-1/2">
                    <SelectValue placeholder="Select a Game" />
                  </SelectTrigger>
                  <SelectContent>
                    { Object.entries(GAMES).map(([key, game]) => (
                    <SelectItem key={key} value={game}>
                      {game}
                    </SelectItem>
                  )) }
                  </SelectContent>
                </Select>
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="gameConfig.saveState.filename"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center justify-between">
                <FormLabel>Save State</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger className="w-1/2">
                    <SelectValue placeholder="Select a Save State" />
                  </SelectTrigger>
                  <SelectContent>
                    { availableSaveStates.map((saveState) => (
                      <SelectItem key={saveState.filename} value={saveState.filename}>
                        {saveState.displayName}
                      </SelectItem>
                    )) }
                  </SelectContent>
                </Select>
              </div>
            </FormItem>
          )}
        />

        <Separator className="my-4"/>

        <FormField
          control={form.control}
          name="gameConfig.gameMode"
          render={(_) => (
            <FormItem>
              <FormLabel>Game Mode</FormLabel>
              <RadioGroup defaultValue="turn-based" className="flex justify-around">
                <Label htmlFor="turn-based" className="flex items-center space-x-2 border-1 p-2 rounded-2xl cursor-pointer">
                  <div className="h-full justify-start">
                    <RadioGroupItem value="turn-based" id="turn-based" />
                  </div>
                  <div className="flex-col space-y-1">
                    <div className="font-medium">Turn Based</div>
                    <p className="text-sm text-muted-foreground">Pause emulation while model is thinking</p>
                  </div>
                </Label>
                <Label htmlFor="real-time" className="flex items-center space-x-2 border-1 p-2 rounded-2xl cursor-pointer">
                  <div className="h-full justify-start">
                    <RadioGroupItem value="real-time" id="real-time" />
                  </div>
                  <div className="flex-col space-y-1 justify-start h-full">
                    <div className="font-medium">Real Time</div>
                    <p className="text-sm text-muted-foreground">Emulation continues without interruption</p>
                  </div>
                </Label>
              </RadioGroup>
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
  )
}
