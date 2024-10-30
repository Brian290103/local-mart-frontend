import React from 'react';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import {MagnifyingGlassIcon} from "@heroicons/react/24/outline";
import {Button} from "@/components/ui/button";
import {getAppName} from "@/lib/utils.ts";
import {Input} from "@/components/ui/input.tsx";

const SearchDrawer: React.FC = () => {
    return (
        <>
            <Drawer>
                <DrawerTrigger>
                    <span className="flex items-center space-x-2 duration-300 hover:text-primary cursor-pointer">
                        <MagnifyingGlassIcon className="w-6 h-6"/>
                    </span>
                </DrawerTrigger>
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle>Search {getAppName()}</DrawerTitle>
                        <DrawerDescription>Find the best deals and products in your area.</DrawerDescription>
                    </DrawerHeader>
                    <div className="p-4">
                        <div className="flex items-center space-x-2 w-full">
                            <MagnifyingGlassIcon className="w-5 h-5 text-gray-500"/>
                            <Input
                                type="text"
                                placeholder="Search for products, deals, or categories..."
                                className=""
                            />
                        </div>
                    </div>
                    <DrawerFooter>
                        <Button className="w-full">Search</Button>
                        <DrawerClose>
                            <Button variant="outline" className="w-full mt-2">Cancel</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default SearchDrawer;
