"use client";

import { useState } from "react";
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
import { Loader2, Save } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().min(2),
  subject: z.string().min(2),
  phone: z.string().min(2),
  message: z.string().min(2).max(500).trim(),
});

const ContactForm = () => {
  const router = useRouter();
  const [ loading, setLoading ] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.key === "Enter") e.preventDefault();
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);
      const url = "/api/send-contact";

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (res.ok) {
        toast.success("Message sent successfully!");
        form.reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast.error("Something went wrong, please try again.");
      console.error("[send_message]", error);
    } finally {
      setLoading(false);
    }
  };

  return (loading ? (
    <div className="w-fit h-fit">
      <Loader />
    </div>
  ) : (
    <div className="py-2">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-500 font-light">Full name *</FormLabel>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-500 font-light">Subject *</FormLabel>
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
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-500 font-light">Message *</FormLabel>
                <FormControl>
                  <Textarea placeholder="Notes about your order, e.g. special note for delivery" className="bg-gray-50 rounded-none" {...field} rows={5} onKeyDown={handleKeyPress} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" size="lg" className="w-fit" disabled={form.formState.isSubmitting || loading}>
            {form.formState.isSubmitting && (
              <Loader2 className="animate-spin w-4 h-4 mr-2" />
            )}
            <Save className="w-4 h-4 mr-2" /> Send
          </Button>
        </form>
      </Form>
    </div>
  ))
}

export default ContactForm