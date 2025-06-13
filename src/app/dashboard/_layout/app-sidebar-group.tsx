import CollapseIndicatorIcon from "@/assets/icons/collapse-indicator-icon";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { type AppSidebarGroup } from "@/types/ui";
import { Collapsible, CollapsibleContent } from "@radix-ui/react-collapsible";
import { FC } from "react";
import AppSidebarMenuButton from "./app-sidebar-menu-button";
import AppSidebarSubMenuButton from "./app-sidebar-submenu-button";

type Props = {
  group: AppSidebarGroup;
};

const AppSidebarGroup: FC<Props> = ({ group }) => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>{group.title}</SidebarGroupLabel>

      <SidebarGroupContent>
        <SidebarMenu>
          {group.items.map((item) => {
            const hasSubMenus = item.sub && item.sub.length > 0;
            return (
              <Collapsible
                key={item.id}
                defaultOpen
                className="group/collapsible">
                <SidebarMenuItem>
                  <AppSidebarMenuButton
                    href={item.rootUrl}
                    collapsible={hasSubMenus}
                    isRoot={group.isRoot}>
                    <item.icon />
                    <span>{item.title}</span>

                    {hasSubMenus && (
                      <CollapseIndicatorIcon className="ml-auto transition-transform group-data-[state=open]/collapsible:hidden" />
                    )}
                  </AppSidebarMenuButton>

                  {hasSubMenus && (
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.sub!.map((subItem) => {
                          return (
                            <SidebarMenuSubItem key={subItem.id}>
                              <AppSidebarSubMenuButton href={subItem.url}>
                                {subItem.title}
                              </AppSidebarSubMenuButton>
                            </SidebarMenuSubItem>
                          );
                        })}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  )}
                </SidebarMenuItem>
              </Collapsible>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

export default AppSidebarGroup;
