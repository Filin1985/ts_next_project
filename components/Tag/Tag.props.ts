import {DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react';

export interface TagProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLAnchorElement & HTMLButtonElement>,
    HTMLAnchorElement & HTMLButtonElement
  > {
  size: 's' | 'm';
  children: ReactNode;
  color?: 'ghost' | 'red' | 'gray' | 'green' | 'primary';
  href?: string;
}
