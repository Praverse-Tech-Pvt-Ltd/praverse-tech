
"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { submitContactForm } from "@/app/actions";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, CheckCircle2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters."),
  email: z.string().trim().email("Invalid email address."),
  company: z.string().optional(),
  message: z.string().trim().min(10, "Message must be at least 10 characters."),
  interest: z.string().optional(),
  website: z.string().default(""),
  startedAt: z.number(),
});

export function ContactForm() {
  const [submissionState, setSubmissionState] = useState<
    | { type: "success"; message: string }
    | { type: "error"; message: string }
    | null
  >(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      interest: undefined,
      message: "",
      website: "",
      startedAt: Date.now(),
    },
  });

  useEffect(() => {
    form.setValue("startedAt", Date.now());
  }, [form]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setSubmissionState(null);
    const result = await submitContactForm(values);

    if (result.success) {
      setSubmissionState({ type: "success", message: result.message });
      form.reset({
        name: "",
        email: "",
        company: "",
        interest: undefined,
        message: "",
        website: "",
        startedAt: Date.now(),
      });
    } else {
      setSubmissionState({ type: "error", message: result.message });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {submissionState?.type === "success" && (
          <Alert className="rounded-2xl border-emerald-400/25 bg-emerald-400/10 text-emerald-50">
            <CheckCircle2 className="h-4 w-4 text-emerald-300" />
            <AlertTitle>Inquiry delivered</AlertTitle>
            <AlertDescription>{submissionState.message}</AlertDescription>
          </Alert>
        )}
        {submissionState?.type === "error" && (
          <Alert
            variant="destructive"
            className="rounded-2xl border-destructive/35 bg-destructive/10 text-foreground"
          >
            <AlertCircle className="h-4 w-4 text-destructive" />
            <AlertTitle className="text-destructive">Unable to send inquiry</AlertTitle>
            <AlertDescription className="text-foreground/80">
              {submissionState.message}
            </AlertDescription>
          </Alert>
        )}
        <div className="grid gap-6 md:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/85">
                  Name
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your name"
                    className="h-12 rounded-2xl border-border/60 bg-background/55 px-4 text-foreground placeholder:text-muted-foreground/75 focus-visible:ring-primary focus-visible:ring-offset-0"
                    {...field}
                  />
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
                <FormLabel className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/85">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="your.email@company.com"
                    className="h-12 rounded-2xl border-border/60 bg-background/55 px-4 text-foreground placeholder:text-muted-foreground/75 focus-visible:ring-primary focus-visible:ring-offset-0"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/85">
                  Company
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your company"
                    className="h-12 rounded-2xl border-border/60 bg-background/55 px-4 text-foreground placeholder:text-muted-foreground/75 focus-visible:ring-primary focus-visible:ring-offset-0"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="interest"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/85">
                  Interested in
                </FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="h-12 rounded-2xl border-border/60 bg-background/55 px-4 text-foreground focus:ring-primary focus:ring-offset-0">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="rounded-2xl border-border/60 bg-popover/95 backdrop-blur-xl">
                    <SelectItem value="pharma-ai">Pharma AI</SelectItem>
                    <SelectItem value="healthcare-ai">Healthcare AI</SelectItem>
                    <SelectItem value="industrial-intelligence">Industrial Intelligence</SelectItem>
                    <SelectItem value="healthmate">Mennie</SelectItem>
                    <SelectItem value="not-specified">Not sure yet</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
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
              <FormLabel className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/85">
                Message
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about the project, challenge, or conversation you want to start."
                  className="min-h-[170px] rounded-3xl border-border/60 bg-background/55 px-4 py-4 text-foreground placeholder:text-muted-foreground/75 focus-visible:ring-primary focus-visible:ring-offset-0"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
          {...form.register("website")}
        />
        <input
          type="hidden"
          {...form.register("startedAt", { valueAsNumber: true })}
        />
        <div className="space-y-3">
          <Button
            type="submit"
            disabled={form.formState.isSubmitting}
            className="h-12 w-full rounded-full text-sm font-semibold"
          >
            {form.formState.isSubmitting ? "Sending inquiry..." : "Discuss a Project"}
          </Button>
          <p className="text-center text-xs leading-relaxed text-muted-foreground">
            Submissions are delivered securely to the Praverse inquiry team. Use
            the best email for follow-up.
          </p>
        </div>
        <div className="rounded-2xl border border-border/50 bg-muted/35 px-4 py-3 text-xs leading-relaxed text-muted-foreground">
          Required fields are validated before sending. We also use lightweight
          anti-spam checks to protect the inquiry channel.
        </div>
      </form>
    </Form>
  );
}
