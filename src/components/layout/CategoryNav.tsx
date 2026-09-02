import { Link, useLocation } from "react-router-dom";
import { categories } from "../../data/categories";

export function CategoryNav() {
  const { pathname } = useLocation();

  return (
    <nav
      aria-label="E-waste categories"
      className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {categories.map((cat) => {
        const active = pathname === cat.slug;
        return (
          <Link
            key={cat.id}
            to={cat.slug}
            className="shrink-0 rounded-full border px-3.5 py-2.5 text-sm font-semibold transition-all min-h-11 inline-flex items-center"
            style={
              active
                ? {
                    backgroundColor: cat.accent.accent,
                    borderColor: cat.accent.accentDeep,
                    color: "#14201a",
                  }
                : {
                    backgroundColor: "transparent",
                    borderColor: "var(--color-line)",
                    color: "var(--color-muted)",
                  }
            }
          >
            <span className="mr-1.5" aria-hidden>
              {cat.emoji}
            </span>
            {cat.shortTitle}
          </Link>
        );
      })}
    </nav>
  );
}
