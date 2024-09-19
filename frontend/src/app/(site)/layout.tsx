import LayoutSite from "@/appPages/site/components/layout/LayoutSite";
import { FC, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}
const layout: FC<LayoutProps> = ({ children }) => (
  <LayoutSite>{children}</LayoutSite>
);

export default layout;
