import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  email: z.string().email("Veuillez entrer une adresse email valide"),
});

interface NewsletterProps {
  className?: string;
  variant?: "inline" | "card";
}

export function Newsletter({ className, variant = "card" }: NewsletterProps) {
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Simulate API call
    console.log("Subscribed:", values.email);
    setIsSuccess(true);
  }

  if (isSuccess) {
    return (
      <div className={cn(
        "p-6 bg-primary/5 border border-primary/20 rounded-lg text-center",
        className
      )}
        data-testid="newsletter-success"
      >
        <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
        <h3 className="text-lg font-semibold text-foreground mb-2">Merci pour votre inscription !</h3>
        <p className="text-sm text-muted-foreground">Vous recevrez nos meilleurs tutoriels chaque semaine.</p>
      </div>
    );
  }

  if (variant === "inline") {
    return (
      <div className={cn("flex flex-col gap-2", className)} data-testid="newsletter-widget">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full max-w-md gap-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex-1 space-y-0">
                  <FormControl>
                    <Input placeholder="Votre adresse email" {...field} className="bg-background border-primary/20 focus-visible:ring-primary h-10" />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            <Button type="submit" className="h-10 px-6 shrink-0 bg-primary text-primary-foreground hover:bg-primary/90">
              S'abonner
            </Button>
          </form>
        </Form>
      </div>
    );
  }

  return (
    <div className={cn("bg-card border border-border p-6 rounded-lg shadow-sm", className)} data-testid="newsletter-widget">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-primary/10 p-2 rounded-full">
          <Mail className="w-5 h-5 text-primary" />
        </div>
        <h3 className="font-semibold text-lg text-foreground">La Newsletter Tech</h3>
      </div>
      <p className="text-sm text-muted-foreground mb-4">
        Ne manquez aucun de nos tutoriels et astuces. Une fois par semaine dans votre boîte mail.
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Votre adresse email" {...field} className="bg-background" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
            <Send className="w-4 h-4 mr-2" /> S'abonner
          </Button>
        </form>
      </Form>
      <p className="text-[10px] text-muted-foreground mt-3 text-center">
        En vous inscrivant, vous acceptez notre politique de confidentialité.
      </p>
    </div>
  );
}
