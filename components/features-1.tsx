import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Settings2, Sparkles, Zap } from "lucide-react";
import { ReactNode } from "react";

export default function Features() {
  const cardDetails = [
    {
      icon: <Zap className="size-6" aria-hidden />,
      textLead: "Quick Notes",
      textContent:
        "Capture ideas instantly with lightning-fast input and keyboard-first User-Experience. No friction - just flow",
    },
    {
      icon: <Settings2 className="size-6" aria-hidden />,
      textLead: "Developer Friendly",
      textContent:
        "Markdown, code blocks, CLI shortcuts, and Grid-style versioning. Feels like home",
    },
    {
      icon: <Sparkles className="size-6" aria-hidden />,
      textLead: "Secure by Design",
      textContent:
        "Your notes are private. Local-first architecture and optional end-to-end encryption mean full control.",
    },
  ];
  return (
    <section className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
      <div className="@container mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            🔧 Crafted for Developers Like You
          </h2>
          <p className="mt-4">
            Smart, flexible, and powerful - everything you need to build your
            second brain
          </p>
        </div>
        <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16">
          {cardDetails.map(({ icon, textLead, textContent }, index) => (
            <Card key={index} className="group bg-background">
              <CardHeader className="pb-3">
                <CardDecorator>{icon}</CardDecorator>

                <h3 className="mt-6 font-medium">{textLead}</h3>
              </CardHeader>

              <CardContent>
                <p className="text-sm">{textContent}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
    <div
      aria-hidden
      className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]"
    />
    <div
      aria-hidden
      className="bg-radial to-background absolute inset-0 from-transparent to-75%"
    />
    <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
      {children}
    </div>
  </div>
);
