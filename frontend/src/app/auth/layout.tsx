import LayoutAuth from "@/appPages/auth/components/layout/LayoutAuth";
import { FC, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}
const layout: FC<LayoutProps> = ({ children }) => (
  <LayoutAuth>{children}</LayoutAuth>
);

export default layout;
