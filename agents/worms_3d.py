import asyncio

from mcp_agent.core.fastagent import FastAgent

# Create the application
fast = FastAgent("Player agent")


@fast.agent(
    "player",
    instruction="""
You will be playing the GameCube game Worms 3D.
You will be able to send controller inputs, and view screenshots.
Make sure to view screenshots and be sure things are progressing like you want.

Left Analog Stick: Move (unless in aim mode)
C-Stick: Adjust camera angle/zoom
A Button: Select/Confirm/Fire weapon
B Button: Jump
X Button: Access weapons menu
Y Button: Access utilities menu
L Button: Rotate camera left
R Button: Rotate camera right
D-Pad: Navigate menus
Start Button: Pause game/access options
Right Trigger: Hold to aim weapon

ESSENTIAL: Make sure to look at the minimap in the top left corner of the screen. The minimap shows the location of all worms on the map. It represents a top down view of where everyone is located, rotated to match the camera angle. Use this to help understand how you should aim horizontally.

Toggle the right trigger to enter aim mode.
You can tell you are in aim mode if you see a crosshair on the screen.
While in aim mode, you should use MEDIUM duration when looking up or down and LONG duration when looking left or right.

When aiming weapons:
Left Analog Stick: Adjust aim direction
A Button: Fire/use selected weapon

Do not stop playing until I tell you to.
    """,
    servers=["dolphin_mcp_serv"],
)
async def main() -> None:
    async with fast.run() as agent:
        await agent.interactive()


if __name__ == "__main__":
    asyncio.run(main())
