import type { PropsWithChildren } from "react";
import "./header.css";

export default function Header({ children }: PropsWithChildren) {
  return <header className="header">{children}</header>;
}
