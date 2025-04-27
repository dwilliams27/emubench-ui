import asyncio

from mcp_agent.core.fastagent import FastAgent

# Create the application
fast = FastAgent("Agent Chaining")


@fast.agent(
    "player",
    instruction="""
You will be playing the GameCube game Worms 3D.
You will be able to send controller inputs, and view screenshots.
Make sure to view screenshots and be sure things are progressing like you want.

Left Analog Stick: Move the camera around your worm
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

When aiming weapons:

Left Analog Stick: Adjust aim direction
A Button: Fire/use selected weapon
B Button: Cancel/back out
X/Y Buttons: Adjust power (hold to increase power)

Steps when taking a turn:
1. Adjust the camera to get a good view of the battlefield.
2. Select a weapon from the menu.
3. Toggle the right trigger on to aim the weapon.
3. Aim the weapon using the left analog stick.
4. Adjust the power using the X/Y buttons.
5. Fire the weapon using the A button.
    """,
    servers=["dolphin_mcp_serv"],
)
async def main() -> None:
    async with fast.run() as agent:
        await agent.interactive()


if __name__ == "__main__":
    asyncio.run(main())
