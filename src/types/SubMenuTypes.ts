type SidebarButton = {
  type: "button";
  title: string;
  action: () => void;
};

type SidebarLink = {
  type: "link";
  title: string;
  redirectTo: string;
};

type SidebarSubItem = SidebarButton | SidebarLink;

type SidebarMenu = (SidebarButton | SidebarLink) & {
  icon: React.ReactNode;
  submenu?: SidebarSubItem[];
};

type SidebarSection = {
  title: string;
  menu: SidebarMenu;
};
