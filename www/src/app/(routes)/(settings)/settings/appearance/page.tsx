/* eslint-disable @next/next/no-img-element */
import * as React from "react";

// utils
import { getUserOrRedirect } from "~/app/(actions)/auth";
import { getTheme } from "~/app/(actions)/theme";
import { ThemeForm } from "~/app/(components)/theme-form";

export default async function Page() {
  await getUserOrRedirect("/settings/appearance");
  const theme = await getTheme();
  return (
    <div>
      <section className="flex flex-col gap-4 md:gap-8">
        <h2 className="text-3xl font-medium border-b border-neutral py-2.5">
          Theme preferences
        </h2>

        <p>
          Choose how GitHub looks to you. Select a single theme, or sync with
          your system and automatically switch between day and night themes.
        </p>

        <ThemeForm theme={theme} />
      </section>
    </div>
  );
}
