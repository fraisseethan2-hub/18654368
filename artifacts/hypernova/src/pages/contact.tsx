import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Mail, CheckCircle2 } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Veuillez entrer une adresse email valide"),
  subject: z.string().min(1, "Veuillez sélectionner un sujet"),
  message: z.string().min(20, "Le message doit contenir au moins 20 caractères"),
  consent: z.boolean().refine(val => val === true, "Vous devez accepter la politique de confidentialité"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      consent: false,
    },
  });

  function onSubmit(data: ContactFormValues) {
    console.log("Form data:", data);
    setIsSubmitted(true);
  }

  return (
    <Layout>
      <SEOHead 
        title="Contact"
        description="Contactez l'équipe HyperNova Learning Institute pour toute question, suggestion ou demande de partenariat."
        canonicalUrl="https://hypernovalearninginstitute.org/contact"
      />

      <div className="container mx-auto px-4 md:px-6 py-12 lg:py-20 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h1 className="text-4xl md:text-5xl font-black text-foreground tracking-tight mb-6">Contactez-nous</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Une question technique, une suggestion d'article ou une demande de partenariat ? Remplissez le formulaire, nous vous répondrons dans les plus brefs délais.
            </p>

            <div className="bg-muted p-6 rounded-xl mb-10 flex items-start gap-4">
              <div className="bg-background p-3 rounded-full shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Email direct</h3>
                <a href="mailto:contact@hypernovalearninginstitute.org" className="text-primary hover:underline font-medium">
                  contact@hypernovalearninginstitute.org
                </a>
                <p className="text-sm text-muted-foreground mt-2">Nous ne proposons pas de support téléphonique.</p>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Nos délais de réponse</h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Support technique & Tutoriels</AccordionTrigger>
                  <AccordionContent>
                    Nous lisons toutes vos demandes d'aide et suggestions de tutoriels. Si un sujet est très demandé, il fera l'objet d'un futur article. Nous ne pouvons cependant pas fournir de support technique individuel personnalisé.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Presse & Partenariats</AccordionTrigger>
                  <AccordionContent>
                    Les demandes professionnelles reçoivent généralement une réponse sous 48 à 72 heures ouvrées.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Droits & RGPD</AccordionTrigger>
                  <AccordionContent>
                    Conformément à la législation, toute demande liée à vos données personnelles sera traitée sous 30 jours maximum.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="bg-card border border-border p-8 rounded-2xl shadow-sm">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Message envoyé !</h2>
                <p className="text-muted-foreground mb-8">
                  Merci de nous avoir contactés. Votre message a bien été transmis à notre équipe.
                </p>
                <Button onClick={() => setIsSubmitted(false)} variant="outline">
                  Envoyer un autre message
                </Button>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nom complet</FormLabel>
                          <FormControl>
                            <Input placeholder="Jean Dupont" {...field} />
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
                          <FormLabel>Adresse email</FormLabel>
                          <FormControl>
                            <Input placeholder="jean@exemple.fr" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Sujet de votre message</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Sélectionnez un sujet" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="suggestion">Suggestion d'article</SelectItem>
                            <SelectItem value="correction">Signaler une erreur sur un tutoriel</SelectItem>
                            <SelectItem value="partenariat">Demande de partenariat</SelectItem>
                            <SelectItem value="rgpd">Question sur la vie privée / RGPD</SelectItem>
                            <SelectItem value="autre">Autre demande</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Votre message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Décrivez votre demande en détail..." 
                            className="min-h-[150px] resize-y" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="consent"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-4 bg-muted/50 rounded-lg border border-border">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm font-normal">
                            J'accepte que les informations saisies dans ce formulaire soient exploitées pour me recontacter.
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full text-lg h-12 font-semibold">
                    Envoyer le message
                  </Button>
                </form>
              </Form>
            )}
          </div>

        </div>
      </div>
    </Layout>
  );
}
