export type Link = { label: string; url: string };

export type CardItem = {
  id: string;
  title: string;
  subtitle?: string;
  meta?: string;
  badge?: string;
  links?: Link[];
  details: string[];
};
