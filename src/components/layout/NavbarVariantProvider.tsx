"use client";

import { createContext, useContext } from "react";

type NavbarVariant = "transparent" | "solid";

const NavbarVariantContext = createContext<NavbarVariant>("solid");

export function NavbarVariantProvider({
  variant,
  children,
}: {
  variant: NavbarVariant;
  children: React.ReactNode;
}) {
  return (
    <NavbarVariantContext.Provider value={variant}>
      {children}
    </NavbarVariantContext.Provider>
  );
}

export function useNavbarVariant(): NavbarVariant {
  return useContext(NavbarVariantContext);
}
