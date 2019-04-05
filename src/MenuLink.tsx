import React from 'react';
import { IMenuLink } from './interfaces';

const MenuLink = ({
  hasSeparator,
  href,
  text,
}: IMenuLink) => (
  <>
    <a href={href}>
      {text}
    </a>
    {hasSeparator && <hr role="separator" />}
  </>
);

export default MenuLink;
