import Daily from "@daily-co/daily-js";
import { DailyProvider } from "@daily-co/daily-react";
import { DailyCallOptions } from "@daily-co/daily-js";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <StrictMode>
    <DailyProvider
      subscribeToTracksAutomatically={false}
      dailyConfig={{ useDevicePreferenceCookies: true }}
    >
      <App />
    </DailyProvider>
  </StrictMode>
);
