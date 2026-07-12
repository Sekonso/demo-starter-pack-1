import { useState } from "react";
import { Icon } from "@iconify/react";

const navItems = [
  { name: "About Us", href: "#" },
  { name: "Profile", href: "#" },
  { name: "Gallery", href: "#" },
  { name: "Reviews", href: "#" },
  { name: "Location", href: "#" },
];

export default function Navbar() {
  const [isPanelActive, setIsPanelActive] = useState<boolean>(false);

  function setPanel(state: boolean) {
    setIsPanelActive(state);
  }

  return (
    <nav className="flex items-center justify-between">
      {/* brand */}
      <div>
        <img src="/favicon.ico" alt="Logo" />
      </div>

      {/* menu */}
      <div className="tablet:block hidden">
        <ul className="flex flex-row items-center gap-6">
          {navItems.map((item, idx) => {
            return (
              <li key={idx}>
                <a href={item.href}>{item.name}</a>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Whatsapp CTA */}
      <a href="#" className="tablet:block hidden">
        <Icon icon="ri:whatsapp-fill" width={24} height={24} />
      </a>

      {/* Nav panel activate button */}
      <button
        className="tablet:hidden cursor-pointer"
        onClick={() => setPanel(true)}
      >
        <Icon icon="mdi:hamburger-menu" width={24} height={24} />
      </button>

      {/* Nav panel */}
      <div
        className={[
          "bg-background text-foreground fixed top-0 h-screen w-75 p-4",
          isPanelActive ? "right-0" : "right-full",
        ].join(" ")}
      >
        {/* Nav panel close button */}
        <div className="flex w-full flex-row justify-end">
          <button
            className="bg-danger text-foreground-secondary cursor-pointer rounded-sm px-4 py-2"
            onClick={() => setPanel(false)}
          >
            <Icon icon="mdi:close" width={24} height={24} />
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
                    "block",
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
          <button className="bg-background-secondary text-foreground-secondary flex flex-row items-center gap-4 rounded-sm px-4 py-2">
            Hubungi Kami
            <Icon icon="ri:whatsapp-fill" width={24} height={24} />
          </button>
        </div>
      </div>
    </nav>
  );
}
