"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form"; // <-- Add this import

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  email: z.string().email().min(2, {}),
  name: z.string().min(2, {
    message: "Your name must be at least 2 characters.",
  }),
  message: z.string().min(20, {
    message: "Your message must be at least 20 characters.",
  }),
  type: z.string().min(2, {
    message: "Select a type.",
  }),
});

const optionsForSelectType = [
  { label: "Bug Report", value: "Bug Report" },
  { label: "Support Query", value: "Support Query" },
  { label: "Correspondence", value: "Correspondence" },
];

export function ContactForm() {
  const router = useRouter();

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      message: "",
      type: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("values", values);
  }

  return (
    <>
      {/* <Button onClick={testDatabaseConnection}>Test Database</Button> */}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 text-lg"
        >
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message Type</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select message type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {optionsForSelectType.map((option) => (
                      <SelectItem
                        className="input-no-zoom text-lg sm:text-base"
                        value={option.value}
                        key={option.value}
                      >
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {/* <FormDescription></FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    className="input-no-zoom text-lg sm:text-base"
                    placeholder="Your email"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  {/* <span className="text-black">
                  This is your public display name.
                </span> */}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    className="input-no-zoom text-lg sm:text-base"
                    placeholder="Your name"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  {/* <span className="text-black">
                  This is your public display name.
                </span> */}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    className="input-no-zoom text-lg sm:text-base"
                    placeholder="Your message"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  {/* <span className="text-black">
                  This is your public display name.
                </span> */}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* <div className="pt-4">
            {recaptchaSiteKey && (
              <ReCAPTCHA
                sitekey={recaptchaSiteKey}
                onChange={handleRecaptchaChange}
              />
            )}
          </div> */}

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </>
  );
}
