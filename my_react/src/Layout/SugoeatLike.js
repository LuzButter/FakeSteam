import { useState } from "react";
import { Header, Footer, Content, Layout } from "./LayoutPart"
import '/node_modules/primeflex/primeflex.css'
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { Menubar } from 'primereact/menubar';
import { MegaMenu } from 'primereact/megamenu';

const Main = ({ children }) => {

    const [visible, setVisible] = useState(false);

    const items = [
        {
            label: 'Videos', icon: 'pi pi-fw pi-video',
            items: [
                [
                    {
                        label: 'Video 1',
                        items: [{ label: 'Video 1.1' }, { label: 'Video 1.2' }]
                    },
                    {
                        label: 'Video 2',
                        items: [{ label: 'Video 2.1' }, { label: 'Video 2.2' }]
                    }
                ],
                [
                    {
                        label: 'Video 3',
                        items: [{ label: 'Video 3.1' }, { label: 'Video 3.2' }]
                    },
                    {
                        label: 'Video 4',
                        items: [{ label: 'Video 4.1' }, { label: 'Video 4.2' }]
                    }
                ]
            ]
        },
        {
            label: 'Users', icon: 'pi pi-fw pi-users',
            items: [
                [
                    {
                        label: 'User 1',
                        items: [{ label: 'User 1.1' }, { label: 'User 1.2' }]
                    },
                    {
                        label: 'User 2',
                        items: [{ label: 'User 2.1' }, { label: 'User 2.2' }]
                    },
                ],
                [
                    {
                        label: 'User 3',
                        items: [{ label: 'User 3.1' }, { label: 'User 3.2' }]
                    },
                    {
                        label: 'User 4',
                        items: [{ label: 'User 4.1' }, { label: 'User 4.2' }]
                    }
                ],
                [
                    {
                        label: 'User 5',
                        items: [{ label: 'User 5.1' }, { label: 'User 5.2' }]
                    },
                    {
                        label: 'User 6',
                        items: [{ label: 'User 6.1' }, { label: 'User 6.2' }]
                    }
                ]
            ]
        },
        {
            label: 'Events', icon: 'pi pi-fw pi-calendar',
            items: [
                [
                    {
                        label: 'Event 1',
                        items: [{ label: 'Event 1.1' }, { label: 'Event 1.2' }]
                    },
                    {
                        label: 'Event 2',
                        items: [{ label: 'Event 2.1' }, { label: 'Event 2.2' }]
                    }
                ],
                [
                    {
                        label: 'Event 3',
                        items: [{ label: 'Event 3.1' }, { label: 'Event 3.2' }]
                    },
                    {
                        label: 'Event 4',
                        items: [{ label: 'Event 4.1' }, { label: 'Event 4.2' }]
                    }
                ]
            ]
        },
        {
            label: 'Settings', icon: 'pi pi-fw pi-cog',
            items: [
                [
                    {
                        label: 'Setting 1',
                        items: [{ label: 'Setting 1.1' }, { label: 'Setting 1.2' }]
                    },
                    {
                        label: 'Setting 2',
                        items: [{ label: 'Setting 2.1' }, { label: 'Setting 2.2' }]
                    },
                    {
                        label: 'Setting 3',
                        items: [{ label: 'Setting 3.1' }, { label: 'Setting 3.2' }]
                    }
                ],
                [
                    {
                        label: 'Technology 4',
                        items: [{ label: 'Setting 4.1' }, { label: 'Setting 4.2' }]
                    }
                ]
            ]
        }
    ];

    return (
        <Content style={{ padding: 0 }} >
            <Layout>
                <Header >

                    {/* Phone */}
                    <div className="flex  md:hidden gap-3" style={{ width: '100%' }}  >
                        <div className="flex-none flex " style={{ height: '48px' }}>
                            <Button severity="secondary" icon="pi pi-bars" onClick={() => setVisible(true)} />
                        </div>
                        <div className="flex-grow-1 flex align-items-center justify-content-center "  >
                            <h2 style={{ padding: 0, margin: 0 }} >Logo</h2>
                        </div>
                        <div className="flex-none flex " style={{ height: '48px' }} >
                            <Button severity="secondary" disabled icon="pi pi-user" onClick={() => setVisible(true)} />
                        </div>
                    </div>

                    {/* Desktop */}
                    <div className=" hidden  md:flex align-items-center " style={{ width: '100%' }} >
                        <div className="flex-grow-1 flex align-items-center">
                            <h2>
                                Logo
                            </h2>
                            <div>
                                <MegaMenu model={items} horizontal style={{ backgroundColor: '#00000000', border: 0 }} />
                            </div>
                        </div>
                        <div className="flex-none flex " style={{ height: '48px' }} >
                            <Button severity="secondary" disabled icon="pi pi-user" onClick={() => setVisible(true)} />
                        </div>
                    </div>

                    <Sidebar visible={visible} onHide={() => setVisible(false)}>
                        <h2>Logo</h2>
                        <div>
                            <MegaMenu model={items} vevertical style={{ backgroundColor: '#00000000', border: 0, }} />
                        </div>
                        <div className="flex-none flex " style={{ height: '48px' }} >
                            <Button  severity="secondary" disabled icon="pi pi-user" onClick={() => setVisible(true)} />
                        </div>
                    </Sidebar>
                </Header>
                <Content style={{ boxShadow: 'inset 0px 4px 15px -3px rgba(0,0,0,0.1)' }}>
                    {children}
                </Content>
                <Footer className={'flex justify-content-center flex-column'} >
                    <h2>Logo</h2>
                    <span>detail</span>
                </Footer>
            </Layout>
        </Content>
    )
}

export default Main