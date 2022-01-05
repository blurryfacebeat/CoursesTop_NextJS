import React from 'react';
import cn from 'classnames';

import { LinksInterface, FooterProps } from './Footer.types';
import styles from './Footer.module.scss';
import { LinkTag, ParagraphTag } from '@/components';

const links: Array<LinksInterface> = [
  {
    href: '#',
    name: 'Пользовательское соглашение',
  },
  {
    href: '#',
    name: 'Политика конфиденциальности',
  },
];

const Footer = (props: FooterProps) => {
  const { className, ...otherProps } = props;

  return (
    <footer className={cn(styles.container, className)} {...otherProps}>
      <ParagraphTag className={styles.copyright}>
        OwlTop © 2020 - 2021 Все права защищены
      </ParagraphTag>
      <ul className={styles.linksContainer}>
        {links.map(({ href, name }) => (
          <li key={name}>
            <LinkTag className={styles.link} href={href}>
              {name}
            </LinkTag>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
