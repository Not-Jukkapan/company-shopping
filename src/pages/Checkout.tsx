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

const PaymentMethod = {
  CREDIT_CARD: 'credit_card',
  QR_CODE: 'qr_code',
  LINE: 'line',
} as const;

type PaymentMethodType = typeof PaymentMethod[keyof typeof PaymentMethod];

const Checkout = () => {
  const { items, getTotalPrice, clearCart } = useCartStore();
  const navigate = useNavigate();
  const [selectedPayment, setSelectedPayment] = useState<PaymentMethodType>(PaymentMethod.CREDIT_CARD);

  const handlePayment = () => {
    // Mock payment processing
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button
                variant={selectedPayment === PaymentMethod.CREDIT_CARD ? "default" : "outline"}
                className="flex items-center gap-2"
                onClick={() => setSelectedPayment(PaymentMethod.CREDIT_CARD)}
              >
                <CreditCard className="h-4 w-4" />
                Credit Card
              </Button>
              <Button
                variant={selectedPayment === PaymentMethod.QR_CODE ? "default" : "outline"}
                className="flex items-center gap-2"
                onClick={() => setSelectedPayment(PaymentMethod.QR_CODE)}
              >
                <QrCode className="h-4 w-4" />
                QR Code
              </Button>
              <Button
                variant={selectedPayment === PaymentMethod.LINE ? "default" : "outline"}
                className="flex items-center gap-2"
                onClick={() => setSelectedPayment(PaymentMethod.LINE)}
              >
                <MessageCircle className="h-4 w-4" />
                LINE Contact
              </Button>
            </div>
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