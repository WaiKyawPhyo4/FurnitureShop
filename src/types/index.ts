export interface NavItem {
  title: string;
  href?: string;
  describtion?: string;
}

export interface NavItemWithChildren extends NavItem {
  card?: NavItemWithChildren[];
  menu?: NavItemWithChildren[];
}

export type MainNavItem = NavItemWithChildren;
