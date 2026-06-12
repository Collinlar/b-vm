const KB = "https://b-vm.com/knowledgebase";

function howToStep(name: string, text: string) {
  return { "@type": "HowToStep", name, text };
}

export function knowledgeBaseHowToSchemas(): Record<string, unknown>[] {
  return [
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "@id": `${KB}#howto-dig5`,
      name: "How do I get started with BVM Digital?",
      description:
        "Start a conversation with BVM Digital for web design, SEO and PEO, or AI consulting with no obligation in the first call.",
      isPartOf: { "@id": "https://b-vm.com/#website" },
      step: [
        howToStep("Contact BVM", "Visit https://b-vm.com and submit the contact form with your business context."),
        howToStep("Describe your goals", "Share your biggest digital challenge and what you want to change in the next 90 days."),
        howToStep("Review the recommendation", "BVM responds within five business days with a clear suggestion on where to start. The first conversation carries no obligation."),
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "@id": `${KB}#howto-asc7`,
      name: "How do I access AscendSME?",
      description: "AscendSME is a web-based SME operating platform available at ascendsme.africa.",
      isPartOf: { "@id": "https://b-vm.com/#website" },
      step: [
        howToStep("Open AscendSME", "Go to https://ascendsme.africa in a browser on any device."),
        howToStep("Create or sign in to an account", "Use the sign-up flow on the site to access the platform."),
        howToStep("Explore or book a demo", "Explore product features or request a demonstration through the AscendSME site if offered."),
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "@id": `${KB}#howto-par2`,
      name: "How do I become a referral partner with BVM?",
      description: "Apply as a referral or reseller partner through the partnerships page and complete BVM's review process.",
      isPartOf: { "@id": "https://b-vm.com/#website" },
      step: [
        howToStep("Submit interest", "Visit https://b-vm.com/partnerships and complete the expression of interest form."),
        howToStep("Choose referral partner type", "Select Referral and Reseller Partner as the partnership type."),
        howToStep("Wait for review", "BVM reviews submissions and responds within five business days."),
        howToStep("Alignment call", "If there is a fit, schedule an introductory call to define the commercial arrangement."),
      ],
    },
  ];
}
