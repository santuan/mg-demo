import Link from "next/link";
import { useRouter } from "next/router";
import { FunctionComponent, ReactElement, useMemo } from "react";
import PropTypes from "prop-types";

interface IProps {
  url: string;
  children: string;
}

const HeaderLink: FunctionComponent<IProps> = ({
  url,
  children
}): ReactElement => {
  const router = useRouter();
  const isActive = useMemo(() => (router.route === url ? "text-[#920d3d]" : "hover:text-[#920d3d]"), [url]);

  return (
    <Link href={url} className={isActive} >
      {children}
    </Link>
  );
};

HeaderLink.propTypes = {
  url: PropTypes.string.isRequired,
};

export default HeaderLink;
