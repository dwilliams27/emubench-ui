import { z } from "zod";
import { ControllerInputSchema } from "@/constants/controller";
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

interface ControllerInputDisplayProps {
  input: z.infer<typeof ControllerInputSchema>;
}

const durationMap: Record<number, string> = {
  5: "Instant",
  10: "Quick",
  15: "Short",
  20: "Medium",
  30: "Long",
  60: "Extended",
};

export function ControllerInputDisplay({ input }: ControllerInputDisplayProps) {
  const { actions, duration } = input;
  const buttons = actions.buttons || {};
  const mainStick = actions.mainStick;
  const cStick = actions.cStick;
  const triggers = actions.triggers || {};

  const hasMainStick = mainStick && (mainStick.x !== undefined || mainStick.y !== undefined);
  const hasCStick = cStick && (cStick.x !== undefined || cStick.y !== undefined);

  const activeDpadDirections: string[] = [];
  if (buttons.up) activeDpadDirections.push('up');
  if (buttons.down) activeDpadDirections.push('down');
  if (buttons.left) activeDpadDirections.push('left');
  if (buttons.right) activeDpadDirections.push('right');

  const hasDpad = activeDpadDirections.length > 0;
  const hasFaceButtons = buttons.a || buttons.b || buttons.x || buttons.y;
  const hasSpecialButtons = buttons.z || buttons.start;
  const hasTriggers = triggers.l || triggers.r;

  const hasAnyInput = hasMainStick || hasCStick || hasDpad || hasFaceButtons || hasSpecialButtons || hasTriggers;

  if (!hasAnyInput) {
    return (
      <div className="flex flex-col items-center gap-2 p-3">
        <div className="text-sm text-muted-foreground">
          No active inputs ({durationMap[duration] || `${duration} frames`})
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3 p-3 items-center">
      <div className="text-xs text-muted-foreground font-medium">
        {`${duration} frames`}
      </div>

      <div className="flex flex-wrap gap-4 items-center">
        {triggers.l && (
          <div className="flex flex-col items-center gap-1">
            <LTrigger size={50} />
            <span className="text-xs text-muted-foreground">L Trigger</span>
          </div>
        )}

        {triggers.r && (
          <div className="flex flex-col items-center gap-1">
            <RTrigger size={50} />
            <span className="text-xs text-muted-foreground">R Trigger</span>
          </div>
        )}

        {hasDpad && (
          <div className="flex flex-col items-center gap-1">
            <DPad activeDirections={activeDpadDirections} size={50} />
            <span className="text-xs text-muted-foreground">D-Pad</span>
          </div>
        )}

        {hasMainStick && (
          <div className="flex flex-col items-center gap-1">
            <MainStick
              x={mainStick.x}
              y={mainStick.y}
              size={60}
            />
            <span className="text-xs text-muted-foreground">
              Main Stick ({mainStick.x ?? 128}, {mainStick.y ?? 128})
            </span>
          </div>
        )}

        {hasCStick && (
          <div className="flex flex-col items-center gap-1">
            <CStick
              x={cStick.x}
              y={cStick.y}
              size={50}
            />
            <span className="text-xs text-muted-foreground">
              C-Stick ({cStick.x ?? 128}, {cStick.y ?? 128})
            </span>
          </div>
        )}

        {buttons.a && (
          <div className="flex flex-col items-center gap-1">
            <AButton size={40} />
          </div>
        )}

        {buttons.b && (
          <div className="flex flex-col items-center gap-1">
            <BButton size={40} />
          </div>
        )}

        {buttons.x && (
          <div className="flex flex-col items-center gap-1">
            <XButton size={40} />
          </div>
        )}

        {buttons.y && (
          <div className="flex flex-col items-center gap-1">
            <YButton size={40} />
          </div>
        )}

        {buttons.z && (
          <div className="flex flex-col items-center gap-1">
            <ZButton size={40} />
          </div>
        )}

        {buttons.start && (
          <div className="flex flex-col items-center gap-1">
            <StartButton size={40} />
          </div>
        )}
      </div>
    </div>
  );
}
