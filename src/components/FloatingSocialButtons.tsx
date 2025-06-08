
import { Phone, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingSocialButtons = () => {
  const handleWhatsAppClick = () => {
    // Replace with your actual WhatsApp number
    const phoneNumber = "+2348130237608";
    const message = "Hello! I'm interested in your services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleInstagramClick = () => {
    // Replace with your actual Instagram handle
    const instagramUrl = "https://instagram.com/innovatech_consultancy";
    window.open(instagramUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <Button
        onClick={handleWhatsAppClick}
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#128C7E] shadow-lg hover:shadow-xl transition-all duration-300 p-0 flex items-center justify-center border-2 border-white"
        aria-label="Contact us on WhatsApp"
      >
        <Phone className="h-6 w-6 text-white" />
      </Button>

      {/* Instagram Button */}
      <Button
        onClick={handleInstagramClick}
        className="w-14 h-14 rounded-full bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] via-[#F77737] to-[#FCCC63] hover:shadow-xl transition-all duration-300 p-0 flex items-center justify-center border-2 border-white relative overflow-hidden"
        aria-label="Follow us on Instagram"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#405DE6] via-[#5B51D8] via-[#833AB4] via-[#C13584] via-[#E1306C] via-[#FD1D1D] to-[#F56040] opacity-90"></div>
        <Instagram className="h-6 w-6 text-white relative z-10" />
      </Button>
    </div>
  );
};

export default FloatingSocialButtons;
