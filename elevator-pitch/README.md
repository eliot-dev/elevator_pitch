This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Assumptions with this app

1. The elevator goes in order of selection
2. Floors cannot be selected twice
3. The 13th floor is bad luck and will not be displayed
   - Going from floor 12 -> 14 will still count as 1 floor
4. The time constant is measured in seconds
   - The time traveled between a floor is 10 seconds
5. The set number of floors in this building is 20

## Features not included

- A toggle switch between normal elevator operations as well as how the prompt was phrased
  - This would include the direction the elevator is traveling and would then calculate the time between the highest and lowest floors
- A second solution that was simply an input form with various amounts of checks and error states
  - In the git history I have left what my second solution would have been in theory
- Stopping form inputs once the user pressed "Go", but in the interest of time I left that out.
- An input to allow the user to decide the number of floors for this "building"
  - This is something that I believe the app could handle with a few additional checks but opted to have that be a fixed value.

  
 [oaRecording.webm](https://github.com/eliot-dev/elevator_pitch/assets/14044522/8d8a3f10-cfb6-4515-bc07-29229bd053a7)
