import React from "react";
const Navbar = ({ theme, onToggleTheme, themeLabel }) => {
  const brandName = "Eilleen";
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];
  const firstLetter = brandName.charAt(0);
  const remainder = brandName.slice(1);

  return (
    <header className="top-nav">
      <a href="" className="brand" aria-label={`${brandName} brand`}>
        <span className="brand-highlight">{firstLetter}</span>
        {remainder}
      </a>
      <nav className="main-nav" aria-label="Primary">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className="nav-link">
            {item.label}
          </a>
        ))}
      </nav>
      <button
        type="button"
        className="theme-toggle"
        onClick={onToggleTheme}
        aria-label={themeLabel}
      >
        {theme === "dark" ? "☀️" : "🌙"}
      </button>
    </header>
  );
};

export default Navbar;
