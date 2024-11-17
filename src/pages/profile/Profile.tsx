import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"

const TEST_USER = {
  name: "Test User",
  email: "test@example.com",
  password: "password123",
};

const TEST_TRANSACTIONS = [
  { id: 1, date: "2024-03-15", amount: 299.99, status: "Completed" },
  { id: 2, date: "2024-03-10", amount: 149.99, status: "Completed" },
];

const Profile = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">My Profile</h1>
      
      <Tabs defaultValue="profile" className="space-y-4">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-600">Name</label>
                <p className="mt-1">{TEST_USER.name}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Email</label>
                <p className="mt-1">{TEST_USER.email}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Test Password</label>
                <p className="mt-1">{TEST_USER.password}</p>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="transactions">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Transaction History</h2>
            <div className="space-y-4">
              {TEST_TRANSACTIONS.map((transaction) => (
                <div key={transaction.id} className="flex justify-between items-center p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">Order #{transaction.id}</p>
                    <p className="text-sm text-gray-500">{transaction.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">${transaction.amount}</p>
                    <p className="text-sm text-green-500">{transaction.status}</p>
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