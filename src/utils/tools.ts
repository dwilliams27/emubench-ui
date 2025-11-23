import type { ControllerInputSchema } from "@/constants/controller";
import type z from "zod";

const directionMap = {
  "up": "⬆",
  "right": "⮕",
  "down": "⬇",
  "left": "⬅"
};
const durationMap: Record<string, string> = {
  "5": "Very Short",
  "15": "Short", 
  "30": "Medium",
  "60": "Long"
};

export function toolToLog(toolName?: string, toolPayload?: any) {
  if (toolName === "sendControllerInput") {
    return controllerInputToLog(toolPayload);
  }
  if (toolName === "wait") {
    return `Wait ${toolPayload.frames} frames`
  }
  console.log('couldnt do it boss')
  return JSON.stringify(toolPayload);
}

export function controllerInputToLog(toolArgs: z.infer<typeof ControllerInputSchema>) {
  let result = `Input (${durationMap[toolArgs.duration] || toolArgs.duration})\n`;

  if (toolArgs.actions.mainStick?.x || toolArgs.actions.mainStick?.y) {
    const directionLabel = `{ x: ${toolArgs.actions.mainStick?.x ?? 128}, y: ${toolArgs.actions.mainStick?.y ?? 128}}`;
    
    result += `-- Main Stick ${directionLabel} --\n`;
  }

  if (toolArgs.actions.cStick?.direction) {
    const directionLabel = `{ x: ${toolArgs.actions.cStick?.x ?? 128}, y: ${toolArgs.actions.cStick?.y ?? 128}}`;
    
    result += `-- C Stick ${directionLabel} --\n`;
  }

  if (toolArgs.actions.buttons && Object.keys(toolArgs.actions.buttons).length > 0) {
    for (const button of Object.keys(toolArgs.actions.buttons)) {
      if (button === "start") {
        result += `-- Start --\n`;
      } else if (button.length > 1) {
        result += `-- ${button.substring(0, 1).toUpperCase()}${button.substring(1)} --\n`
      } else {
        result += `-- ${button.toUpperCase()} --\n`
      }
    }
  }

  return result;
}
