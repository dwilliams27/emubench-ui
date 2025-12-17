import { z } from "zod";
import { MultipleControllerInput } from "@/constants/controller";
import {
  AButton,
  BButton,
  XButton,
  YButton,
  ZButton,
  StartButton,
  LTrigger,
  RTrigger,
  DPad,
  MainStick,
  CStick,
} from "./controller-svgs";

export function ControllerInputDisplay({ inputs }: MultipleControllerInput) {
  return (
    <div className="flex flex-col space-y-4">
      {inputs.reverse().map((input, index) => {
        if (!input.buttons && !input.mainStick && !input.cStick && !input.triggers) {
          return (
            <div key={index} className="flex flex-col items-center gap-2 p-3">
              <div className="text-sm text-muted-foreground">
                No input for {`${input.frames} frames`}
              </div>
            </div>
          );
        }
        const activeDpadDirections: string[] = [];
        if (input.buttons?.up) activeDpadDirections.push('up');
        if (input.buttons?.down) activeDpadDirections.push('down');
        if (input.buttons?.left) activeDpadDirections.push('left');
        if (input.buttons?.right) activeDpadDirections.push('right');

        return (
          <div className="flex flex-col gap-3 p-3 items-center">
            <div className="text-xs text-muted-foreground font-medium">
              {`${input.frames} frames`}
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              {input.triggers?.l && (
                <div className="flex flex-col items-center gap-1">
                  <LTrigger size={50} />
                  <span className="text-xs text-muted-foreground">L Trigger</span>
                </div>
              )}

              {input.triggers?.r && (
                <div className="flex flex-col items-center gap-1">
                  <RTrigger size={50} />
                  <span className="text-xs text-muted-foreground">R Trigger</span>
                </div>
              )}

              {activeDpadDirections.length > 0 && (
                <div className="flex flex-col items-center gap-1">
                  <DPad activeDirections={activeDpadDirections} size={50} />
                  <span className="text-xs text-muted-foreground">D-Pad</span>
                </div>
              )}

              {input.mainStick && (
                <div className="flex flex-col items-center gap-1">
                  <MainStick
                    x={input.mainStick.x}
                    y={input.mainStick.y}
                    size={60}
                  />
                  <span className="text-xs text-muted-foreground">
                    Main Stick ({input.mainStick.x ?? 128}, {input.mainStick.y ?? 128})
                  </span>
                </div>
              )}

              {input.cStick && (
                <div className="flex flex-col items-center gap-1">
                  <CStick
                    x={input.cStick.x}
                    y={input.cStick.y}
                    size={50}
                  />
                  <span className="text-xs text-muted-foreground">
                    C-Stick ({input.cStick.x ?? 128}, {input.cStick.y ?? 128})
                  </span>
                </div>
              )}

              {input.buttons?.a && (
                <div className="flex flex-col items-center gap-1">
                  <AButton size={40} />
                </div>
              )}

              {input.buttons?.b && (
                <div className="flex flex-col items-center gap-1">
                  <BButton size={40} />
                </div>
              )}

              {input.buttons?.x && (
                <div className="flex flex-col items-center gap-1">
                  <XButton size={40} />
                </div>
              )}

              {input.buttons?.y && (
                <div className="flex flex-col items-center gap-1">
                  <YButton size={40} />
                </div>
              )}

              {input.buttons?.z && (
                <div className="flex flex-col items-center gap-1">
                  <ZButton size={40} />
                </div>
              )}

              {input.buttons?.start && (
                <div className="flex flex-col items-center gap-1">
                  <StartButton size={40} />
                </div>
              )}
            </div>
          </div>
        )
      })}
    </div>
  );
}
