import { useGetMyOrders } from "@/api/OrderApi";
import OrderStatusDetail from "@/components/OrderStatusDetail";
import OrderStatusHeader from "@/components/OrderStatusHeader";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Helmet } from "react-helmet-async";

const OrderStatusPage = () => {
  const { orders, isLoading } = useGetMyOrders();

  if (isLoading) {
    return "Loading...";
  }

  if (!orders || orders.length === 0) {
    return "No orders found";
  }

  return (
    <>
    <Helmet>
        <title>Order Status Page</title>
        <meta
          name="description"
          content="Welcome to RestauMaster Food Ordering Website. Let's know about RestauMaster Click for more..."
        />
        <link rel="canonical" href='https://restaumaster.vercel.app/order-status' />
      </Helmet>
    <div className="space-y-10">
      {orders.map((order, index) => (
        <div className="space-y-10 bg-gray-50 p-10 rounded-lg" key={index}>
          <OrderStatusHeader order={order} />
          <div className="grid gap-10 md:grid-cols-2">
            <OrderStatusDetail order={order} />
            <AspectRatio ratio={16 / 5}>
              <img
                src={order.restaurant.imageUrl}
                className="rounded-md object-cover h-full w-full"
              />
            </AspectRatio>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default OrderStatusPage;
