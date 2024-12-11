import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  User,
  MapPin,
  CreditCard,
  ShoppingBag,
  Bell,
  Shield,
  Heart,
} from "lucide-react";

// Mock data for demonstration
const TEST_USER = {
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "+1 (555) 123-4567",
  dateJoined: "January 2024",
  addresses: [
    {
      id: 1,
      type: "Home",
      street: "123 Main Street",
      city: "San Francisco",
      state: "CA",
      zipCode: "94105",
      isDefault: true,
    },
    {
      id: 2,
      type: "Office",
      street: "456 Market Street",
      city: "San Francisco",
      state: "CA",
      zipCode: "94103",
      isDefault: false,
    },
  ],
  orders: [
    {
      id: "ORD-2024-001",
      date: "2024-03-15",
      total: 1299.99,
      status: "Delivered",
      items: 3,
    },
    {
      id: "ORD-2024-002",
      date: "2024-03-01",
      total: 799.99,
      status: "Processing",
      items: 2,
    },
  ],
  paymentMethods: [
    {
      id: 1,
      type: "Credit Card",
      last4: "4242",
      expiry: "12/25",
      isDefault: true,
    },
  ],
  preferences: {
    notifications: {
      orders: true,
      promotions: false,
      newsletter: true,
    },
  },
  wishlist: [
    {
      id: 1,
      name: "Siemens S7-1500",
      price: 1899.99,
    },
  ],
};

const Profile = () => {
  return (
    <div className="container mx-auto py-4 px-4">
      <div className="flex items-center gap-4 mb-6">
        <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
          <User className="h-10 w-10 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">{TEST_USER.name}</h1>
          <p className="text-gray-500">Member since {TEST_USER.dateJoined}</p>
        </div>
      </div>

      <Tabs defaultValue="personal" className="space-y-4">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6 gap-2">
          <TabsTrigger value="personal">Personal Info</TabsTrigger>
          <TabsTrigger value="addresses">Addresses</TabsTrigger>
          <TabsTrigger value="orders">Orders</TabsTrigger>
          <TabsTrigger value="payment">Payment</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
          <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
        </TabsList>

        <TabsContent value="personal">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Name
                  </label>
                  <Input value={TEST_USER.name} className="mt-1" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Email
                  </label>
                  <Input value={TEST_USER.email} className="mt-1" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Phone
                  </label>
                  <Input value={TEST_USER.phone} className="mt-1" />
                </div>
              </div>
              <Button>Save Changes</Button>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="addresses">
          <Card className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Shipping Addresses</h2>
              <Button>Add New Address</Button>
            </div>
            <div className="space-y-4">
              {TEST_USER.addresses.map((address) => (
                <div key={address.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{address.type}</h3>
                      <p className="text-gray-600">{address.street}</p>
                      <p className="text-gray-600">
                        {address.city}, {address.state} {address.zipCode}
                      </p>
                    </div>
                    <div className="space-x-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        Delete
                      </Button>
                    </div>
                  </div>
                  {address.isDefault && (
                    <span className="mt-2 inline-block text-sm text-primary">
                      Default Address
                    </span>
                  )}
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="orders">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Order History</h2>
            <div className="space-y-4">
              {TEST_USER.orders.map((order) => (
                <div key={order.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">Order #{order.id}</h3>
                      <p className="text-gray-600">{order.date}</p>
                      <p className="text-sm text-gray-500">
                        {order.items} items
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">${order.total.toFixed(2)}</p>
                      <span
                        className={`text-sm ${
                          order.status === "Delivered"
                            ? "text-green-500"
                            : "text-blue-500"
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="payment">
          <Card className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Payment Methods</h2>
              <Button>Add Payment Method</Button>
            </div>
            <div className="space-y-4">
              {TEST_USER.paymentMethods.map((method) => (
                <div key={method.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <CreditCard className="h-5 w-5 text-gray-500" />
                      <div>
                        <p className="font-medium">
                          {method.type} ending in {method.last4}
                        </p>
                        <p className="text-sm text-gray-500">
                          Expires {method.expiry}
                        </p>
                      </div>
                    </div>
                    {method.isDefault && (
                      <span className="text-sm text-primary">Default</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="preferences">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">
              Notification Preferences
            </h2>
            <div className="space-y-4">
              {Object.entries(TEST_USER.preferences.notifications).map(
                ([key, value]) => (
                  <div
                    key={key}
                    className="flex items-center justify-between py-2"
                  >
                    <div>
                      <p className="font-medium capitalize">{key}</p>
                      <p className="text-sm text-gray-500">
                        Receive notifications about {key}
                      </p>
                    </div>
                    <Button variant={value ? "default" : "outline"}>
                      {value ? "Enabled" : "Disabled"}
                    </Button>
                  </div>
                )
              )}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="wishlist">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Wishlist</h2>
            <div className="space-y-4">
              {TEST_USER.wishlist.map((item) => (
                <div key={item.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-gray-600">${item.price.toFixed(2)}</p>
                    </div>
                    <Button>Add to Cart</Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Profile;
