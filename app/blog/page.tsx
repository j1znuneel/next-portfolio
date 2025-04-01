"use client";

import { Card, CardContent } from "@/components/ui/card";
import { BlurFade } from "@/components/magicui/blur-fade";

export default function BlogPage() {
  return (
    <section className="container mx-auto px-4 py-12">
      <BlurFade>
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
            Blog
          </div>
          <h2 className="text-3xl font-bold sm:text-5xl">My Thoughts & Ideas</h2>
          <p className="text-muted-foreground md:text-xl lg:text-base xl:text-xl">
            A place where I share my insights, experiences, and learnings.
          </p>
        </div>
      </BlurFade>

      <div className="max-w-3xl mx-auto mt-10">
        <BlurFade delay={0.2}>
          <Card>
            <CardContent className="p-8">
              <div className="text-center py-8">
                <h2 className="text-2xl font-semibold mb-4">Coming Soon!</h2>
                <p className="text-muted-foreground md:text-lg">
                  I haven&apos;t started writing blog posts yet. Stay tuned for future content!
                </p>
              </div>
            </CardContent>
          </Card>
        </BlurFade>
      </div>
    </section>
  );
}
