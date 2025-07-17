import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { Label } from "recharts";

const PLATFORMS = {
  GAMECUBE: "Gamecube"
};

const GAMES = {
  ZELDA_WIND_WAKER: "The Legend of Zelda: Wind Waker"
};

const CONFIG = {
  [PLATFORMS.GAMECUBE]: {
    [GAMES.ZELDA_WIND_WAKER]: {
      filename: "ww_main_menu.sav",
      displayName: "Main Menu"
    }
  }
}

export function GameConfig() {
  const [platform, setPlatform] = useState("Gamecube");

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Game Config</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex-row justify-between">
          <Label>Platform</Label>
          <Select value={platform} onValueChange={(value) => setPlatform(value)}>
            <SelectTrigger id="platform">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent position="popper">
              { Object.entries(PLATFORMS).map(([key, platform]) => (
                <SelectItem key={key} value={key}>
                  {platform}
                </SelectItem>
              )) }
            </SelectContent>
          </Select>
        </div>

        <div className="flex-row justify-between">
          <Label>Game</Label>
          <Select value={platform} onValueChange={(value) => setPlatform(value)}>
            <SelectTrigger id="platform">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent position="popper">
              { Object.entries(PLATFORMS).map(([key, platform]) => (
                <SelectItem key={key} value={key}>
                  {platform}
                </SelectItem>
              )) }
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  )
}
