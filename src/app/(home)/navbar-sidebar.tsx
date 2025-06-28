import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";

interface NavbarItem {
    href: string;
    children: React.ReactNode;
}

interface NavbarSidebarProps {
    items: NavbarItem[];
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export const NavbarSidebar = ({ items, open, onOpenChange }: NavbarSidebarProps) => {
    return (
        <Sheet open={open} onOpenChange={onOpenChange} >
            <SheetContent
                side="left"
                className="p-0 transition-none"
            >
                <SheetHeader className="p-4 border-b">
                    <div className="flex items-center">
                        <SheetTitle>
                            Menu
                        </SheetTitle>
                    </div>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}