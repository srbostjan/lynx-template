import { runOnBackground, runOnMainThread } from "@lynx-js/react";

runOnMainThread(() => {
  console.log("Hello from the main thread!");
})

runOnBackground(() => {
  console.log("Hello from the background thread!");
})