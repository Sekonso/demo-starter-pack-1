import { useState } from "react";
import { Icon } from "@iconify/react";
import WhatsappFill from "@iconify-react/ri/whatsapp-fill";
import HamburgerMenuIcon from "@iconify-react/mdi/hamburger-menu";
import CloseIcon from "@iconify-react/mdi/close";

const navItems = [
  { name: "About Us", href: "#about" },
  { name: "Featured", href: "#featured" },
  { name: "Gallery", href: "#gallery" },
  { name: "Reviews", href: "#reviews" },
  { name: "Location", href: "#location" },
];

export default function Navbar() {
  const [isPanelActive, setIsPanelActive] = useState<boolean>(false);

  function setPanel(state: boolean) {
    setIsPanelActive(state);
  }

  return (
    <nav className="flex items-center justify-between">
      {/* brand */}
      <div className="flex flex-row items-center gap-2">
        <img
          src="/favicon.ico"
          loading="eager"
          className="size-8"
          alt="Company logo"
        />
        <span className="text-xl font-bold">KOPIPY</span>
      </div>

      {/* menu */}
      <div className="tablet:block hidden">
        <ul className="flex flex-row items-center gap-6">
          {navItems.map((item, idx) => {
            return (
              <li key={idx}>
                <a
                  href={item.href}
                  className="hover:text-brand hover:border-brand border-b border-transparent transition-all"
                >
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Whatsapp CTA */}
      <a
        href="https://api.whatsapp.com/send?phone=6285178519376"
        target="_blank"
        className="tablet:block hover:text-brand hidden transition-all hover:scale-110"
      >
        <WhatsappFill width="32" height="32" />
      </a>

      {/* Nav panel activate button */}
      <button
        className="tablet:hidden cursor-pointer"
        onClick={() => setPanel(true)}
        aria-label="Display mobile navigation panel"
      >
        <HamburgerMenuIcon width="24" height="24" />
      </button>

      {/* Nav panel */}
      <div
        className={[
          "bg-background text-foreground fixed top-0 h-screen w-75 p-4 transition-all duration-500",
          isPanelActive ? "right-0" : "-right-full",
        ].join(" ")}
      >
        {/* Nav panel close button */}
        <div className="flex w-full flex-row justify-end">
          <button
            className="bg-danger hover:bg-background hover:text-danger hover:border-danger text-foreground-secondary cursor-pointer rounded-sm border border-transparent px-4 py-2 transition-all"
            onClick={() => setPanel(false)}
            aria-label="Close mobile navigation panel"
          >
            <CloseIcon width="24" height="24" />
          </button>
        </div>

        <div className="my-12"></div>

        {/* Menu */}
        <ul className="flex flex-col gap-4">
          {navItems.map((item, idx) => {
            return (
              <li key={idx}>
                <a
                  href={item.href}
                  className={[
                    "hover:text-brand block",
                    idx < navItems.length - 1
                      ? "border-foreground-muted border-b-2 pb-4"
                      : "",
                  ].join(" ")}
                >
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="my-12"></div>

        {/* Whatsapp CTA */}
        <div className="flex w-full flex-row justify-end">
          <a
            href="https://api.whatsapp.com/send?phone=6285178519376"
            target="blank"
            className="bg-background-secondary text-foreground-secondary hover:bg-background hover:text-foreground hover:border-foreground flex flex-row items-center gap-4 rounded-sm border border-transparent px-5 py-2 transition-all"
          >
            Hubungi Kami
            <WhatsappFill width="32" height="32" />
          </a>
        </div>
      </div>
    </nav>
  );
}
