import asyncio
import random


# An async function that sleeps for a random amount of time
async def long_running_task():
    print("Starting long-running task")
    await asyncio.sleep(random.randint(1, 10))
    print("Finished long-running task")


# An async function that waits for the long-running task with a timeout
async def wait_with_timeout():
    try:
        # Wait for the long-running task to complete with a 5-second timeout
        await asyncio.wait_for(long_running_task(), timeout=5)
        print("Task completed within timeout")
    except asyncio.TimeoutError:
        # Handle the timeout exception
        print("Task timed out and could not be completed")


# A main async function that runs the wait_with_timeout function
async def task():
    try:
        await wait_with_timeout()
    except:
        print("Timeout exception")


# Run the main async function
def main():
    asyncio.run(task())


if __name__ == "__main__":
    main()
