
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, CreditCard, Shield, Lock, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const Payment = () => {
  const { toast } = useToast();
  const [registrationData, setRegistrationData] = useState<any>(null);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",
    email: "",
    phone: ""
  });

  useEffect(() => {
    // Get registration data from localStorage
    const savedData = localStorage.getItem('registrationData');
    if (savedData) {
      const data = JSON.parse(savedData);
      setRegistrationData(data);
      setPaymentData(prev => ({
        ...prev,
        email: data.email,
        phone: data.phone
      }));
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // Format card number
    if (name === 'cardNumber') {
      const formatted = value.replace(/\D/g, '').replace(/(\d{4})(?=\d)/g, '$1 ').substring(0, 19);
      setPaymentData(prev => ({ ...prev, [name]: formatted }));
      return;
    }
    
    // Format expiry date
    if (name === 'expiryDate') {
      const formatted = value.replace(/\D/g, '').replace(/(\d{2})(\d{2})/, '$1/$2').substring(0, 5);
      setPaymentData(prev => ({ ...prev, [name]: formatted }));
      return;
    }
    
    // Format CVV
    if (name === 'cvv') {
      const formatted = value.replace(/\D/g, '').substring(0, 3);
      setPaymentData(prev => ({ ...prev, [name]: formatted }));
      return;
    }

    setPaymentData(prev => ({ ...prev, [name]: value }));
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (paymentMethod === 'card') {
      // Validate card payment
      if (!paymentData.cardNumber || !paymentData.expiryDate || !paymentData.cvv || !paymentData.cardName) {
        toast({
          title: "Error",
          description: "Please fill in all card details.",
          variant: "destructive"
        });
        return;
      }
    }

    // Simulate payment processing
    toast({
      title: "Processing Payment...",
      description: "Please wait while we process your payment.",
    });

    // Simulate payment delay
    setTimeout(() => {
      // Store enrollment data
      const enrollmentData = {
        ...registrationData,
        paymentMethod,
        paymentData,
        enrollmentDate: new Date().toISOString(),
        status: 'paid'
      };
      
      localStorage.setItem('enrollmentData', JSON.stringify(enrollmentData));
      localStorage.removeItem('registrationData');
      
      toast({
        title: "Payment Successful!",
        description: "Redirecting to your learning dashboard...",
      });

      setTimeout(() => {
        window.location.href = '/learning-dashboard';
      }, 2000);
    }, 3000);
  };

  const coursePrice = 150000;
  const processingFee = 2500;
  const total = coursePrice + processingFee;

  if (!registrationData) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-innovatech-navy-dark flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 dark:text-white">No Registration Data Found</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">Please complete the registration process first.</p>
          <Link to="/register">
            <Button className="bg-innovatech-red hover:bg-innovatech-red-dark">
              Go to Registration
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-innovatech-navy-dark">
      {/* Header */}
      <div className="bg-white dark:bg-innovatech-navy-dark border-b">
        <div className="container mx-auto px-4 py-6">
          <Link to="/register" className="inline-flex items-center text-innovatech-red hover:text-innovatech-red-dark mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Registration
          </Link>
          <h1 className="text-2xl font-bold dark:text-white">Payment</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Payment Form */}
          <div className="bg-white dark:bg-innovatech-navy-dark rounded-lg shadow-md p-8">
            <div className="flex items-center mb-6">
              <Shield className="h-6 w-6 text-green-500 mr-2" />
              <span className="text-sm text-gray-600 dark:text-gray-300">Secure Payment Processing</span>
            </div>

            <h2 className="text-2xl font-bold mb-6 dark:text-white">Payment Details</h2>

            {/* Payment Method Selection */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4 dark:text-white">Payment Method</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <label className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${paymentMethod === 'card' ? 'border-innovatech-red bg-innovatech-red/5' : 'border-gray-200'}`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={paymentMethod === 'card'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="sr-only"
                  />
                  <div className="text-center">
                    <CreditCard className="h-8 w-8 mx-auto mb-2 text-innovatech-red" />
                    <span className="text-sm font-medium dark:text-white">Credit/Debit Card</span>
                  </div>
                </label>
                
                <label className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${paymentMethod === 'bank' ? 'border-innovatech-red bg-innovatech-red/5' : 'border-gray-200'}`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="bank"
                    checked={paymentMethod === 'bank'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="sr-only"
                  />
                  <div className="text-center">
                    <span className="text-2xl mb-2 block">🏦</span>
                    <span className="text-sm font-medium dark:text-white">Bank Transfer</span>
                  </div>
                </label>

                <label className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${paymentMethod === 'ussd' ? 'border-innovatech-red bg-innovatech-red/5' : 'border-gray-200'}`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="ussd"
                    checked={paymentMethod === 'ussd'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="sr-only"
                  />
                  <div className="text-center">
                    <span className="text-2xl mb-2 block">📱</span>
                    <span className="text-sm font-medium dark:text-white">USSD</span>
                  </div>
                </label>
              </div>
            </div>

            <form onSubmit={handlePayment}>
              {paymentMethod === 'card' && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 dark:text-white">
                      Card Number <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="text"
                      name="cardNumber"
                      value={paymentData.cardNumber}
                      onChange={handleInputChange}
                      placeholder="1234 5678 9012 3456"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 dark:text-white">
                        Expiry Date <span className="text-red-500">*</span>
                      </label>
                      <Input
                        type="text"
                        name="expiryDate"
                        value={paymentData.expiryDate}
                        onChange={handleInputChange}
                        placeholder="MM/YY"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 dark:text-white">
                        CVV <span className="text-red-500">*</span>
                      </label>
                      <Input
                        type="text"
                        name="cvv"
                        value={paymentData.cvv}
                        onChange={handleInputChange}
                        placeholder="123"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 dark:text-white">
                      Cardholder Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="text"
                      name="cardName"
                      value={paymentData.cardName}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                </div>
              )}

              {paymentMethod === 'bank' && (
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                  <h3 className="font-semibold mb-3 dark:text-white">Bank Transfer Details</h3>
                  <div className="space-y-2 text-sm">
                    <p><strong>Bank Name:</strong> Access Bank</p>
                    <p><strong>Account Name:</strong> InnovaTech Digital Institute</p>
                    <p><strong>Account Number:</strong> 1234567890</p>
                    <p><strong>Amount:</strong> ₦{total.toLocaleString()}</p>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-4">
                    Please transfer the exact amount and send proof of payment to payments@innovatech.com
                  </p>
                </div>
              )}

              {paymentMethod === 'ussd' && (
                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                  <h3 className="font-semibold mb-3 dark:text-white">USSD Payment</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium">GTBank: *737*1*Amount*Account#</p>
                      <p className="text-sm text-gray-600">*737*1*{total}*1234567890#</p>
                    </div>
                    <div>
                      <p className="font-medium">Access Bank: *901*0*Amount*Account#</p>
                      <p className="text-sm text-gray-600">*901*0*{total}*1234567890#</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-8">
                <div className="flex items-center mb-4">
                  <Lock className="h-4 w-4 text-gray-500 mr-2" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">Your payment information is secure and encrypted</span>
                </div>

                <Button type="submit" className="w-full bg-innovatech-red hover:bg-innovatech-red-dark text-lg py-3">
                  {paymentMethod === 'card' ? `Pay ₦${total.toLocaleString()}` : 'Confirm Payment'}
                </Button>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-white dark:bg-innovatech-navy-dark rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6 dark:text-white">Order Summary</h2>

            {/* Student Information */}
            <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="font-semibold mb-2 dark:text-white">Student Information</h3>
              <p className="text-sm"><strong>Name:</strong> {registrationData.firstName} {registrationData.lastName}</p>
              <p className="text-sm"><strong>Email:</strong> {registrationData.email}</p>
              <p className="text-sm"><strong>Phone:</strong> {registrationData.phone}</p>
            </div>

            {/* Course Information */}
            <div className="mb-6">
              <h3 className="font-semibold mb-4 dark:text-white">Course Details</h3>
              <div className="border-b pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium dark:text-white">{registrationData.courseName}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">12 weeks • Beginner Level</p>
                  </div>
                  <span className="font-bold">₦{coursePrice.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Price Breakdown */}
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span>Course Fee</span>
                <span>₦{coursePrice.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Processing Fee</span>
                <span>₦{processingFee.toLocaleString()}</span>
              </div>
              <div className="border-t pt-3 flex justify-between font-bold text-lg">
                <span>Total</span>
                <span className="text-innovatech-red">₦{total.toLocaleString()}</span>
              </div>
            </div>

            {/* What's Included */}
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <h3 className="font-semibold mb-3 text-green-800 dark:text-green-400">What's Included</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-600 mr-2" />
                  <span>48 video lessons</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-600 mr-2" />
                  <span>Downloadable resources</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-600 mr-2" />
                  <span>Certificate of completion</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-600 mr-2" />
                  <span>Lifetime access</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-600 mr-2" />
                  <span>Community support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
