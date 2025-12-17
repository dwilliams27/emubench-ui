import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AVAILABLE_SAVE_STATES, SETUP_TEST_CONFIG_SCHEMA, GAMES, PLATFORMS, GAME_CONTEXT, SHADERS } from "@/components/test/config/types"
import { useWatch, type UseFormReturn } from "react-hook-form";
import { FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useMemo } from "react";
import type z from "zod";
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

  const selectedSaveState = useWatch({
    control: form.control,
    name: "gameConfig.saveState"
  });

  const selectedSaveStateImage = useMemo(
    () => `${selectedSaveState?.filename.substring(0, selectedSaveState?.filename.indexOf(".sav"))}.webp`,
    [selectedSaveState]
  );

  const onSetGame = (game: string) => {
    if (GAME_CONTEXT[game]) {
      form.setValue("agentConfig.gameContext", GAME_CONTEXT[game]);
    }
    // Set a default save state for the selected game
    const saveStates = AVAILABLE_SAVE_STATES[selectedPlatform]?.[game];
    if (saveStates && saveStates.length > 0) {
      form.setValue("gameConfig.saveState.filename", saveStates[0].filename);
      form.setValue("gameConfig.saveState.displayName", saveStates[0].displayName);
    }
  }

  const onSetSaveState = (filename: string) => {
    const saveState = availableSaveStates.find((s) => s.filename === filename);
    if (saveState) {
      form.setValue("gameConfig.saveState", saveState);
    }
  }

  const availableSaveStates = useMemo(() => {
    if (!selectedPlatform || !selectedGame) {
      return [];
    }
    
    return AVAILABLE_SAVE_STATES[selectedPlatform][selectedGame];
  }, [selectedPlatform, selectedGame]);

  return (
    <Card className="w-full h-[600px] flex flex-col">
      <CardHeader>
        <CardTitle>Game</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 flex-1 flex flex-col overflow-hidden">
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

        

        <div className="flex flex-row">
          <div className="flex w-1/2 justify-center">
            <FormField
              control={form.control}
              name="gameConfig.saveState.filename"
              render={({ field }) => (
                <FormItem>
                  <div className="flex flex-col items-center my-auto space-y-6">
                    <FormLabel>Save State</FormLabel>
                    <Select onValueChange={onSetSaveState} value={field.value}>
                      <SelectTrigger className="w-full">
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
          </div>
          
          <div className="flex w-1/2">
            <div className="my-4 w-40 h-40 mx-auto bg-accent">
              <img src={`/${selectedSaveStateImage}`} alt="Save state preview" className="w-full h-full rounded-md" />
            </div>
          </div>
        </div>

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
                        <SelectItem className="wrap-break-word" key={shader} value={shader}>
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
            const trimmed = { ...field, value: field.value?.trim() }
            return (
              <div className="space-y-2 pt-2 flex-1 flex flex-col min-h-0">
                <FormLabel>Game Context</FormLabel>
                <Textarea 
                  {...trimmed}
                  className="flex-1 resize-none overflow-y-auto min-h-0"
                  placeholder="Enter game context (controls, info)..."
                />
              </div>
            )
          }}
        />
      </CardContent>
    </Card>
  )
}
