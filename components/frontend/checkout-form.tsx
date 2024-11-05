"use client";

import { useState, useEffect } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import toast from "react-hot-toast";
import Loader from "@/components/custom-ui/loader";
import { naira } from "@/lib/utils";
import useCart from "@/lib/hooks/use-cart";
import { useUser } from "@clerk/nextjs";
import { usePaystackPayment } from "react-paystack";

const formSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  address: z.string().min(2).max(500).trim(),
  city: z.string().min(2),
  state: z.string().min(2),
  phone: z.string().min(2),
  email: z.string().min(2),
  notes: z.string().optional(),
});

const CheckoutForm = () => {
  const router = useRouter();
  const [ loading, setLoading ] = useState(false);
  const cart = useCart();
  const { user } = useUser();
  const total = cart.cartItems.reduce(
    (acc, item) => acc + item.item.price * item.quantity,
    0
  );

  const customer = {
    clerkId: user?.id,
    email: user?.emailAddresses[ 0 ]?.emailAddress,
    name: user?.fullName,
  };

  // Initialize Paystack payment configuration
  const initializePayment = usePaystackPayment({
    reference: new Date().getTime().toString(),
    email: customer.email || "",
    amount: total * 100,
    publicKey: process.env.NEXT_PUBLIC_PS_PUBLIC_KEY!,
    currency: "NGN",
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      state: "",
      phone: "",
      email: "",
      notes: "",
    },
  });

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.key === "Enter") e.preventDefault();
  };

  const onSuccess = (reference: any) => {
    console.log("Payment successful", reference);
    toast.success("Payment successful!");
    cart.clearCart();
    setLoading(false);
    router.push("/order-confirmation");
  };

  const onClose = () => {
    console.log("Payment dialog closed");
    setLoading(false);
    toast.error("Payment was not completed.");
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);
      const url = "/api/orders";

      const orderData = {
        ...values,
        cartItems: cart.cartItems.map((item) => ({
          itemId: item.item._id,
          title: item.item.title,
          price: item.item.price,
          quantity: item.quantity,
        })),
        total,
        customer,
      };
      console.log(orderData);
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      if (res.ok) {
        toast.success("Order stored");
        initializePayment({ onSuccess, onClose }); // Use the initialized function
      } else {
        throw new Error("Failed to store order");
      }
    } catch (error) {
      toast.error("Something went wrong, please try again.");
      console.error("[order_POST]", error);
    } finally {
      setLoading(false);
    }
  };

  return (loading ? (
    <Loader />
  ) : (
    <div className="py-2">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-2/3 space-y-6">
            <p className="text-heading4">Billing Details</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-500 font-light">First Name *</FormLabel>
                    <FormControl>
                      <Input {...field} className="bg-gray-50 rounded-none" onKeyDown={handleKeyPress} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-500 font-light">Last Name *</FormLabel>
                    <FormControl>
                      <Input {...field} className="bg-gray-50 rounded-none" onKeyDown={handleKeyPress} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-500 font-light">Street address *</FormLabel>
                  <FormControl>
                    <Input {...field} className="bg-gray-50 rounded-none" onKeyDown={handleKeyPress} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-500 font-light">City *</FormLabel>
                    <FormControl>
                      <Input {...field} className="bg-gray-50 rounded-none" onKeyDown={handleKeyPress} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-500 font-light">State *</FormLabel>
                    <FormControl>
                      <Input {...field} className="bg-gray-50 rounded-none" onKeyDown={handleKeyPress} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-500 font-light">Phone *</FormLabel>
                    <FormControl>
                      <Input {...field} className="bg-gray-50 rounded-none" onKeyDown={handleKeyPress} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-500 font-light">Email address *</FormLabel>
                    <FormControl>
                      <Input {...field} className="bg-gray-50 rounded-none" onKeyDown={handleKeyPress} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-500 font-light">Order notes (optional)</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Notes about your order, e.g. special note for delivery" className="bg-gray-50 rounded-none" {...field} rows={5} onKeyDown={handleKeyPress} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-1/3 h-fit max-lg:w-full flex flex-col gap-4 bg-gray-100 border border-dashed border-gray-300 px-4 py-5">
            <p className="text-heading4 pb-4 border-b">
              Your Order
            </p>
            <div>
              {cart.cartItems.map((item) => (
                <div
                  key={item.item._id} className="flex justify-between items-center gap-3 space-y-4 border-b pb-4 text-small-medium">
                  <p>{item.item.title}</p>
                  <p>{naira(item.item.price)}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-4 justify-between h-full">
              <div className="flex justify-between text-body-semibold text-gold mb-3">
                <span>Total: </span>
                <span>{naira(total)}</span>
              </div>
              <Button variant="outline" type="submit" className="hover:bg-gold rounded-none hover:text-white w-full text-gold border border-gold bg-transparent">Place Order</Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  ))
}

export default CheckoutForm
// export default dynamic(() => Promise.resolve(CheckoutForm), { ssr: false });