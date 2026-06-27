import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Mail, CheckCircle2, Clock, Send } from "lucide-react";

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

      <div className="container mx-auto px-4 md:px-6 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-6">Contactez-nous</h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            Une question technique, une suggestion d'article ou une demande de partenariat ? Remplissez le formulaire, nous vous répondrons dans les plus brefs délais.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <div className="space-y-8">
            <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex items-start gap-6">
              <div className="w-14 h-14 bg-indigo-600/10 rounded-xl flex items-center justify-center shrink-0">
                <Mail className="w-7 h-7 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-xl font-black text-gray-900 mb-2">Email direct</h3>
                <a href="mailto:contact@hypernovalearninginstitute.org" className="text-indigo-600 hover:underline font-bold text-lg">
                  contact@hypernovalearninginstitute.org
                </a>
                <p className="text-gray-500 mt-2 leading-relaxed">
                  Pour toute demande officielle ou support concernant votre compte.
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex items-start gap-6">
              <div className="w-14 h-14 bg-orange-600/10 rounded-xl flex items-center justify-center shrink-0">
                <Clock className="w-7 h-7 text-orange-600" />
              </div>
              <div>
                <h3 className="text-xl font-black text-gray-900 mb-2">Délai de réponse</h3>
                <p className="text-gray-900 font-bold text-lg">24-48h ouvrées</p>
                <p className="text-gray-500 mt-2 leading-relaxed">
                  Notre équipe traite les messages du lundi au vendredi.
                </p>
              </div>
            </div>

            <div className="bg-indigo-600 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-black mb-4">Avant d'écrire...</h3>
              <p className="text-indigo-100 leading-relaxed mb-6">
                Avez-vous consulté notre section <Link href="/tutoriels" className="underline font-bold text-white">Tutoriels</Link> ? La réponse à votre question technique s'y trouve peut-être déjà !
              </p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 p-8 md:p-10 rounded-2xl shadow-xl">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h2 className="text-2xl font-black text-gray-900 mb-4">Message envoyé !</h2>
                <p className="text-gray-500 mb-8 leading-relaxed">
                  Merci de nous avoir contactés. Votre message a bien été transmis à notre équipe. Nous reviendrons vers vous très prochainement.
                </p>
                <Button onClick={() => setIsSubmitted(false)} className="bg-indigo-600 hover:bg-indigo-700 font-bold h-12 px-8 rounded-xl">
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
                          <FormLabel className="font-bold text-gray-700">Nom complet</FormLabel>
                          <FormControl>
                            <Input placeholder="Jean Dupont" className="h-12 rounded-xl border-gray-200" {...field} />
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
                          <FormLabel className="font-bold text-gray-700">Adresse email</FormLabel>
                          <FormControl>
                            <Input placeholder="jean@exemple.fr" className="h-12 rounded-xl border-gray-200" {...field} />
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
                        <FormLabel className="font-bold text-gray-700">Sujet de votre message</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12 rounded-xl border-gray-200">
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
                        <FormLabel className="font-bold text-gray-700">Votre message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Décrivez votre demande en détail..." 
                            className="min-h-[150px] resize-none rounded-xl border-gray-200 p-4" 
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
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-5 bg-gray-50 rounded-xl border border-gray-100">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm font-medium text-gray-600">
                            J'accepte que les informations saisies dans ce formulaire soient exploitées pour me recontacter dans le cadre de ma demande.
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-black h-14 text-lg rounded-xl shadow-lg shadow-indigo-600/20 flex items-center justify-center gap-2">
                    Envoyer le message <Send className="w-5 h-5" />
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
