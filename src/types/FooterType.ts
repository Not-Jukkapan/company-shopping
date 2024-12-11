export type FooterLink = {
  label: string;
  to: string; // Always a valid link, use "#" as a placeholder if unavailable
};

export type FooterGroup = {
  title: string;
  links: FooterLink[];
};

export type FooterCommonSection = {
  title: string;
  description?: string;
  info?: string[];
  hours?: string[];
};

export interface FooterData {
  common: {
    about: FooterCommonSection;
    contact: FooterCommonSection;
    officeHours: FooterCommonSection;
  };
  company?: FooterGroup;
  shop?: FooterGroup;
  resources?: FooterGroup;
  [key: string]: FooterGroup | FooterData["common"]; // Support additional groups dynamically
}
