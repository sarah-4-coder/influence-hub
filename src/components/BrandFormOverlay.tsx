import { useEffect, useState } from 'react';

interface BrandFormOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const BrandFormOverlay = ({ isOpen, onClose }: BrandFormOverlayProps) => {
  const [formData, setFormData] = useState({
    brand: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would integrate with your form service
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/90 backdrop-blur-sm">
      <div className="glass p-12 rounded-[3rem] w-full max-w-2xl relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-8 right-8 text-muted-foreground hover:text-white transition uppercase text-[10px] font-black tracking-widest"
        >
          Close [ESC]
        </button>
        <h2 className="font-heading text-4xl font-black mb-4 uppercase text-primary">
          Request Access
        </h2>
        <p className="text-muted-foreground mb-10 text-sm font-medium">
          Initialize your brand profile for orchestration.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              required
              placeholder="Brand Name"
              value={formData.brand}
              onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
              className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-primary outline-none text-white transition font-bold text-sm"
            />
            <input
              type="email"
              required
              placeholder="Work Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-primary outline-none text-white transition font-bold text-sm"
            />
          </div>
          <textarea
            rows={4}
            placeholder="Campaign scale requirements..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-primary outline-none text-white transition font-bold text-sm resize-none"
          />
          <button type="submit" className="btn-protocol w-full py-5 rounded-sm text-xs font-black">
            Transmit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default BrandFormOverlay;
