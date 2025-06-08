
import { MessageCircle, Instagram } from "lucide-react";
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
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 p-0 flex items-center justify-center"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </Button>

      {/* Instagram Button */}
      <Button
        onClick={handleInstagramClick}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 shadow-lg hover:shadow-xl transition-all duration-300 p-0 flex items-center justify-center"
        aria-label="Follow us on Instagram"
      >
        <Instagram className="h-6 w-6 text-white" />
      </Button>
    </div>
  );
};

export default FloatingSocialButtons;
