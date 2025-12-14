export function toolToLog(toolName?: string, toolPayload?: any) {
  if (toolName === "recordMemory") {
    return `Record memory: ${toolPayload.recordMemory}`
  }
  console.log('couldnt do it boss')
  return JSON.stringify(toolPayload);
}
