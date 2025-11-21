import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AVAILABLE_SAVE_STATES, SETUP_TEST_CONFIG_SCHEMA, GAMES, PLATFORMS, GAME_CONTEXT, SHADERS } from "@/components/test/config/types"
import { useWatch, type UseFormReturn } from "react-hook-form";
import { FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useMemo } from "react";
import type z from "zod";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function GameConfig({ form }: { form: UseFormReturn<z.infer<typeof SETUP_TEST_CONFIG_SCHEMA>> }) {
  const selectedPlatform = useWatch({
    control: form.control,
    name: "gameConfig.platform"
  });
  
  const selectedGame = useWatch({
    control: form.control,
    name: "gameConfig.game"
  });

  const onSetGame = (game: string) => {
    if (GAME_CONTEXT[game]) {
      form.setValue("agentConfig.gameContext", GAME_CONTEXT[game]);
    }
  }

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
                <Select onValueChange={field.onChange} value={field.value}>
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
                <Select onValueChange={(value) => { field.onChange(value); onSetGame(value); }} value={field.value}>
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
                <Select onValueChange={field.onChange} value={field.value}>
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

        <FormField
          control={form.control}
          name="gameConfig.shader"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center justify-between">
                <FormLabel>Shader</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-1/2">
                    <SelectValue placeholder="None" />
                  </SelectTrigger>
                  <SelectContent>
                    { SHADERS.map((shader) => (
                      <SelectItem key={shader} value={shader}>
                        {shader}
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
          name="agentConfig.gameContext"
          render={({ field }) => {
            const trimmed = { ...field, value: field.value.trim() }
            return (
              <div className="space-y-2 pt-2">
                <FormLabel>Game Context</FormLabel>
                <Textarea 
                  {...trimmed}
                  className="flex-1 resize-none max-h-28 overflow-y-auto"
                  placeholder="Enter game context (controls, info)..."
                />
              </div>
            )
          }}
        />

        <Separator className="my-4"/>

        <FormField
          control={form.control}
          name="gameConfig.gameMode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Game Mode</FormLabel>
              <RadioGroup onValueChange={field.onChange} value={field.value} className="flex justify-around">
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
