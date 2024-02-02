import {  } from "@ant-design/icons";
import { Anchor, Button, Drawer, Menu } from "antd";
import { useState } from "react";
// import { Button, Drawer } from "antd";
// import { useState } from "react";
// import { NavLink } from "react-router-dom";



function AppHeader() {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
    setOpen(true);
    };

    const onClose = () => {
      setOpen(false);
    };

    return (

        <div className="container-fluid">
            <div className="header">
                <div className="logo">
                    <i className='fas fa-bolt'>
                        <a href="#">SERENE TECH</a>
                    </i>
                </div>

                <div className="mobileHidden">

                <Anchor
                    direction="horizontal"
                    targetedFirst='65'
                    items={[
                      {
                        key: 'home',
                        href: '#home',
                        title: 'Home',
                      },
                      {
                        key: 'about',
                        href: '#about',
                        title: 'About',
                      },
                      {
                        key: 'features',
                        href: '#features',
                        title: 'Features',
                      },
                      {
                        key: 'how it works',
                        href: '#howItWorks',
                        title: 'How It Works',
                      },
                      {
                        key: 'faq',
                        href: '#faq',
                        title: 'Faq',
                      },
                      {
                        key: 'pricing',
                        href: '#pricing',
                        title: 'Pricing',
                      },
                      {
                        key: 'contact',
                        href: '#contact',
                        title: 'Contact',
                      },
                   ]}
                 />                    
                </div>
                <div className="mobileVisible">
                    <Button type="primary" onClick={showDrawer}>
                       <i className="fas fa-bars"></i>
                    </Button>
                    <Drawer title='' onClose={onClose} open={open}>
                    <Anchor
                    direction="right"
                    closable={false}
                    onClose={onClose}
                    // visible={visible}
                    items={[
                      {
                        key: 'home',
                        href: '#home',
                        title: 'Home',
                      },
                      {
                        key: 'about',
                        href: '#about',
                        title: 'About',
                      },
                      {
                        key: 'features',
                        href: '#features',
                        title: 'Features',
                      },
                      {
                        key: 'how it works',
                        href: '#howItWorks',
                        title: 'How It Works',
                      },
                      {
                        key: 'faq',
                        href: '#faq',
                        title: 'Faq',
                      },
                      {
                        key: 'pricing',
                        href: '#pricing',
                        title: 'Pricing',
                      },
                      {
                        key: 'contact',
                        href: '#contact',
                        title: 'Contact',
                      },
                   ]}
                 /> 
                    </Drawer>
                </div>


            </div>
        </div>
    );
}

export default AppHeader;