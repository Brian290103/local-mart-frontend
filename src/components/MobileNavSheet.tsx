import React from 'react';

import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger,} from "@/components/ui/sheet"
import {Button} from "@/components/ui/button.tsx";
import {Menu} from "lucide-react";


const MobileNavSheet = () => {
    return (
        <div>
            <Sheet>
                <SheetTrigger asChild={true}>
                    <Button size={"icon"} variant={"outline"}>
                        <Menu className={"w-6 h-6"}/>
                    </Button>
                </SheetTrigger>
                <SheetContent side={"left"}>
                    <SheetHeader>
                        <SheetTitle>Are you absolutely sure?</SheetTitle>
                        <SheetDescription>
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>


        </div>
    );
};

export default MobileNavSheet;