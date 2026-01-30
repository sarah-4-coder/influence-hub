import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';

interface MobileNavProps {
  onOpenBrandForm: () => void;
}

const MobileNav = ({ onOpenBrandForm }: MobileNavProps) => {
  const [open, setOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBrandForm = () => {
    setOpen(false);
    onOpenBrandForm();
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="md:hidden p-2 text-foreground hover:text-primary transition">
          <Menu className="w-6 h-6" />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:w-80 bg-background/95 backdrop-blur-xl border-white/10">
        <nav className="flex flex-col h-full pt-12">
          <div className="flex flex-col space-y-6">
            <button
              onClick={() => handleNavClick('#logic')}
              className="text-left text-sm font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition py-3 border-b border-white/5"
            >
              The Logic
            </button>
            <button
              onClick={() => handleNavClick('#services')}
              className="text-left text-sm font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition py-3 border-b border-white/5"
            >
              Capabilities
            </button>
            <button
              onClick={() => handleNavClick('#proof')}
              className="text-left text-sm font-black uppercase tracking-widest text-primary transition py-3 border-b border-white/5"
            >
              Evidence
            </button>
            <button
              onClick={() => handleNavClick('#join')}
              className="text-left text-sm font-black uppercase tracking-widest text-muted-foreground hover:text-foreground transition py-3 border-b border-white/5"
            >
              Login
            </button>
          </div>

          <div className="mt-auto pb-8">
            <button
              onClick={handleBrandForm}
              className="btn-protocol w-full px-6 py-4 rounded-sm text-xs"
            >
              Get Access
            </button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
