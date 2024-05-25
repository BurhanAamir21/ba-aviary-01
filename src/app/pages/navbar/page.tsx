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
                             
                            <Link href={'/vetafarm'}>
                            VetaFarm
                        </Link>
                            <MenubarShortcut>⌘T</MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem>Kaytee</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Hagen</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Nekton</MenubarItem>

                        <MenubarSeparator />

                        <MenubarItem>Lider</MenubarItem>
                        <MenubarSeparator />

                        <MenubarItem>Symans</MenubarItem>
                        <MenubarSeparator />

                        <MenubarItem>Kaytee</MenubarItem>
                        <MenubarSeparator />

                        <MenubarItem>Kaytee</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
                {/* 3 */}
                <MenubarMenu>

                    <MenubarTrigger>file</MenubarTrigger>
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