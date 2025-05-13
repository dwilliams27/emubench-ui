import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GAMES, PLATFORMS } from "@/constants/games";
import { Label } from "@radix-ui/react-select";
import React from "react";

export function TestConfigWizard() {
  const [selectedGame, setSelectedGame] = React.useState<string>("");
  const [selectedPlatform, setSelectedPlatform] = React.useState<string>("");

  const handleGameChange = (value: string) => {
    setSelectedGame(value);
  };

  const handlePlatformChange = (value: string) => {
    setSelectedPlatform(value);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex flex-row items-center justify-between space-x-2">
          <CardTitle>Configure Test</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <Select value={selectedPlatform} onValueChange={handlePlatformChange}>
          <SelectTrigger id="game">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent position="popper">
            { Object.entries(PLATFORMS).map(([key, platform]) => (
              <SelectItem key={key} value={platform}>
                {platform}
              </SelectItem>
            )) }
          </SelectContent>
        </Select>
        <Select value={selectedGame} onValueChange={handleGameChange} disabled={!selectedPlatform}>
          <SelectTrigger id="game">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent position="popper">
            { Object.entries(GAMES).filter(([_, game]) => game.platform === selectedPlatform).map(([key, game]) => (
              <SelectItem key={key} value={key}>
                {game.name}
              </SelectItem>
            )) }
          </SelectContent>
        </Select>
      </CardContent>
    </Card>
  );
}
