import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { GAMES, PLATFORMS } from "@/constants/games";
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
        <CardTitle>Configure Test</CardTitle>
      </CardHeader>
      <Separator />
      <CardContent>
        <div className="flex flex-col space-y-6 md:flex-row">
          <div className="w-full md:w-1/2 space-y-2">
            <Label>Game</Label>
            <div className="flex flex-row space-x-2">
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
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <Label>Memory</Label>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
