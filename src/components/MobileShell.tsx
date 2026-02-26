import { ReactNode } from "react";

interface MobileShellProps {
  children: ReactNode;
}

const MobileShell = ({ children }: MobileShellProps) => {
  return <div className="app-shell">{children}</div>;
};

export default MobileShell;
