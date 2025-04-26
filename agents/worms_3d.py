import asyncio

from mcp_agent.core.fastagent import FastAgent

# Create the application
fast = FastAgent("Agent Chaining")


@fast.agent(
    "player",
    instruction="You will be playing the GameCube game Worms 3D." \
        "You will be able to send controller inputs, and view screenshots." \
        "Make sure to view screenshots and be sure things are progressing like you want.",
    servers=["dolphin_mcp_serv"],
)
async def main() -> None:
    async with fast.run() as agent:
        await agent.interactive()


if __name__ == "__main__":
    asyncio.run(main())
