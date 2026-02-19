import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  items: string[];
  icon: LucideIcon;
}

export interface ComparisonFeature {
  text: string;
  positive?: boolean;
}

export interface ComparisonCard {
  title: string;
  features: string[];
  highlight?: boolean;
  priceModel?: string;
}

export interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}