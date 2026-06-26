import React, { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  structuredData?: Record<string, any>;
}

export function useSEO({
  title,
  description,
  canonicalUrl,
  ogImage,
  ogType = "website",
  structuredData,
}: SEOProps) {
  useEffect(() => {
    // Set title
    const fullTitle = `${title} | HyperNova Learning Institute`;
    document.title = fullTitle;

    // Helper to set meta tags
    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let el = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attribute, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    // Description
    setMetaTag("description", description);

    // Open Graph
    setMetaTag("og:title", fullTitle, true);
    setMetaTag("og:description", description, true);
    setMetaTag("og:type", ogType, true);
    if (ogImage) setMetaTag("og:image", ogImage, true);
    if (canonicalUrl) setMetaTag("og:url", canonicalUrl, true);

    // Twitter
    setMetaTag("twitter:card", "summary_large_image");
    setMetaTag("twitter:title", fullTitle);
    setMetaTag("twitter:description", description);
    if (ogImage) setMetaTag("twitter:image", ogImage);

    // Canonical
    if (canonicalUrl) {
      let canonicalEl = document.querySelector(`link[rel="canonical"]`);
      if (!canonicalEl) {
        canonicalEl = document.createElement("link");
        canonicalEl.setAttribute("rel", "canonical");
        document.head.appendChild(canonicalEl);
      }
      canonicalEl.setAttribute("href", canonicalUrl);
    }

    // Structured Data
    if (structuredData) {
      let scriptEl = document.querySelector(`script[id="json-ld"]`);
      if (!scriptEl) {
        scriptEl = document.createElement("script");
        scriptEl.setAttribute("type", "application/ld+json");
        scriptEl.setAttribute("id", "json-ld");
        document.head.appendChild(scriptEl);
      }
      scriptEl.textContent = JSON.stringify(structuredData);
    }

    return () => {
      // Cleanup is optional, but helps avoid stale data if unmounting (though usually overridden)
    };
  }, [title, description, canonicalUrl, ogImage, ogType, structuredData]);
}

export function SEOHead(props: SEOProps) {
  useSEO(props);
  return null;
}
