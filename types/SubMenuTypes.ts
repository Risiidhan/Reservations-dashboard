type SidebarSubItem = {
  title: string;
  redirectTo: string
};

type SidebarMenu = {
    title: string;
    submenu?: SidebarSubItem[];
    redirectTo: string;
    icon: React.ReactNode;
}

type SidebarSection = {
  title: string;
  menu: SidebarMenu;
};
