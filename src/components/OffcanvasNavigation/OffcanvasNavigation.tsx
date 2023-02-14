import Link from "next/link";
import styles from "./OffcanvasNavigation.module.css";
import { FunctionComponent, ReactElement } from "react";
import { ROUTES } from "@/utils/routes";

interface IProps {
  closeMenu: () => void;
}

const OffcanvasNavigation: FunctionComponent<IProps> = ({
  closeMenu,
}): ReactElement => (
  <nav className={styles.root}>
    {ROUTES.map((route) => {
      return (
        <Link
          href={route.path}
          key={route.path}
          className={styles.link}
          onClick={closeMenu}
          title={route.ariaLabel}
          aria-label={route.ariaLabel}
        >
          {route.title}
        </Link>
      );
    })}
  </nav>
);

export default OffcanvasNavigation;
