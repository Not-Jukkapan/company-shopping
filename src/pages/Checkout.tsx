import { useState } from 'react';
import { useCartStore } from '@/store/useCartStore';
import { Button } from '@/components/ui/button';
import { useNavigate } from '@tanstack/react-router';
import { toast } from 'sonner';
import { Card } from '@/components/ui/card';
import {
  CreditCard,
  QrCode,
  MessageCircle,
} from 'lucide-react';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

const PaymentMethod = {
  CREDIT_CARD: 'credit_card',
  QR_CODE: 'qr_code',
  LINE: 'line',
} as const;

type PaymentMethodType = typeof PaymentMethod[keyof typeof PaymentMethod];

const MOCK_PAYMENT_DETAILS = {
  [PaymentMethod.CREDIT_CARD]: {
    title: 'Credit Card',
    description: 'Pay securely with your credit card',
    icon: CreditCard,
    details: 'Test Card: 4242 4242 4242 4242, Exp: Any future date, CVV: Any 3 digits'
  },
  [PaymentMethod.QR_CODE]: {
    title: 'QR Code',
    description: 'Scan QR code with your banking app',
    icon: QrCode,
    details: 'Scan the QR code that will be generated after confirming the order'
  },
  [PaymentMethod.LINE]: {
    title: 'LINE Pay',
    description: 'Pay using LINE Pay',
    icon: MessageCircle,
    details: 'LINE ID: @chaiudom (Test Account)'
  }
};

const Checkout = () => {
  const { items, getTotalPrice, clearCart } = useCartStore();
  const navigate = useNavigate();
  const [selectedPayment, setSelectedPayment] = useState<PaymentMethodType>(PaymentMethod.CREDIT_CARD);

  const handlePayment = () => {
    toast.success('Processing payment...');
    setTimeout(() => {
      clearCart();
      navigate({ to: '/payment-success' });
    }, 2000);
  };

  if (items.length === 0) {
    navigate({ to: '/shop' });
    return null;
  }

  const selectedPaymentDetails = MOCK_PAYMENT_DETAILS[selectedPayment];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Checkout</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
            {items.map((item) => (
              <div key={item.id} className="flex items-center gap-4 py-2">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h4 className="font-medium">{item.name}</h4>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Payment Method</h3>
            <RadioGroup
              value={selectedPayment}
              onValueChange={(value) => setSelectedPayment(value as PaymentMethodType)}
              className="grid gap-4"
            >
              {Object.entries(MOCK_PAYMENT_DETAILS).map(([key, { title, description, icon: Icon }]) => (
                <div key={key} className="flex items-center space-x-2">
                  <RadioGroupItem value={key} id={key} />
                  <Label htmlFor={key} className="flex items-center gap-2 cursor-pointer">
                    <Icon className="h-4 w-4" />
                    <div>
                      <div className="font-medium">{title}</div>
                      <div className="text-sm text-gray-500">{description}</div>
                    </div>
                  </Label>
                </div>
              ))}
            </RadioGroup>

            {selectedPaymentDetails && (
              <div className="mt-4 p-4 bg-gray-50 rounded-md">
                <h4 className="font-medium mb-2">Test Details</h4>
                <p className="text-sm text-gray-600">{selectedPaymentDetails.details}</p>
              </div>
            )}
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Payment Summary</h3>
            <div className="space-y-2 mb-6">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </div>
              <div className="border-t pt-2">
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${getTotalPrice().toFixed(2)}</span>
                </div>
              </div>
            </div>
            <Button className="w-full" onClick={handlePayment}>
              Complete Payment
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Checkout;