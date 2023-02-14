import React, { useState, useCallback, FunctionComponent, ReactElement } from 'react';
import { slide as Menu } from 'react-burger-menu';
import OffcanvasNavigation from '../OffcanvasNavigation/OffcanvasNavigation';
import ConnectWalletButton from "@/components/ConnectWalletButton/ConnectWalletButton";

const Offcanvas: FunctionComponent = (): ReactElement => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const closeMenu = useCallback(() => setOpenMenu(false), []);
  const handleStateChange = useCallback(
    (state: { isOpen: boolean }) => {
      setOpenMenu(state.isOpen);
    },
    [openMenu, setOpenMenu]
  );

  return (
    <Menu width={260} right isOpen={openMenu} onStateChange={handleStateChange}>
      <OffcanvasNavigation closeMenu={closeMenu} />
      <div className='absolute bottom-0 right-0 m-6'>
      <ConnectWalletButton/>
      </div>
    </Menu>
  );
};

export default Offcanvas;
