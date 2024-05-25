import React from 'react'
import Link from "next/link";

import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar"


const NavBar = () => {
    return (
        <div >
            <Menubar>
                <MenubarMenu>
                    <MenubarTrigger>
                        <Link href={'/'}>
                            Home
                        </Link>

                    </MenubarTrigger>
                </MenubarMenu>
                {/* 2 */}
                <MenubarMenu>
                    <MenubarTrigger>Brands</MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>
                             
                            <Link href={'/vetafarm australia'}>
                            VetaFarm Ausrtralia
                        </Link>
                            <MenubarShortcut>⌘T</MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem>Kaytee</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Hagen</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Nekton</MenubarItem>

                        <MenubarSeparator />

                        <MenubarItem>Lider Pet Food</MenubarItem>
                        <MenubarSeparator />

                        <MenubarItem>Symans</MenubarItem>
                        <MenubarSeparator />

                        <MenubarItem>Rcom Digital Incubators</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Quiko</MenubarItem>

                        <MenubarSeparator />
                        <MenubarItem>Psittacus</MenubarItem>

                        <MenubarSeparator />
                        <MenubarItem>Pigeon Clinic</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Medpet</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Kamal Laboratories</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>J&J Birds Supplies</MenubarItem>

                        <MenubarSeparator />
                        <MenubarItem>B.A Plannet</MenubarItem>

                        <MenubarSeparator />
                        <MenubarItem>HHD Incubators</MenubarItem>

                        <MenubarSeparator />
                        <MenubarItem>J&J Birds Supplies</MenubarItem>

                        <MenubarSeparator />
                        <MenubarItem>J&J Birds Supplies</MenubarItem>

                        <MenubarSeparator />
                        <MenubarItem>J&J Birds Supplies</MenubarItem>

                        <MenubarSeparator />
                        <MenubarItem>J&J Birds Supplies</MenubarItem>

                        <MenubarSeparator />
                        <MenubarItem>J&J Birds Supplies</MenubarItem>

                        

                    </MenubarContent>
                </MenubarMenu>
                {/* 3 */}
                <MenubarMenu>

                    <MenubarTrigger>Payment Methods</MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>
                            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem>New Window</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Share</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Print</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>

            </Menubar>

        </div>

    )
}

export default NavBar