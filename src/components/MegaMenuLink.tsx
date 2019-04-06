import React from 'react';
import { IMegaMenuLink } from '../interfaces';

const MegaMenuLink = ({
  hasSeparator,
  href,
  text,
}: IMegaMenuLink) => (
  <>
    <a href={href}>
      {text}
    </a>
    {hasSeparator && <hr role="separator" />}
  </>
);

export default MegaMenuLink;
