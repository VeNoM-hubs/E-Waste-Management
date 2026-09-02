import { AppShell } from "../components/layout/AppShell";
import { CategoryNav } from "../components/layout/CategoryNav";
import { CategoryHero } from "../components/category/CategoryHero";
import { WhatSection } from "../components/category/WhatSection";
import { ExampleChips } from "../components/category/ExampleChips";
import { WhySection } from "../components/category/WhySection";
import { LifecycleSteps } from "../components/category/LifecycleSteps";
import { DustbinRule } from "../components/category/DustbinRule";
import type { Category } from "../data/categories";

type CategoryPageProps = {
  category: Category;
};

export function CategoryPage({ category }: CategoryPageProps) {
  return (
    <AppShell accent={category.accent.accent}>
      <CategoryHero category={category} />

      <div className="mx-auto max-w-5xl px-4 pt-5 safe-px sm:px-6 sm:pt-6">
        <CategoryNav />
      </div>

      <div className="pb-36 sm:pb-32">
        <WhatSection category={category} />
        <ExampleChips category={category} />
        <WhySection category={category} />
        <LifecycleSteps category={category} />
      </div>
      <DustbinRule category={category} />
    </AppShell>
  );
}
