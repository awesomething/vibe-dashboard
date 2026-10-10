export const site = {
    name: "Cypress HVAC Repair",
    short: "Cypress HVAC",
    city: "Atlanta",
    phone: "(943) 230-5499",
    tel: "+19432305499",
    address: {
      street: "182 Walker St SW",
      city: "Atlanta",
      state: "GA",
      zip: "30313",
    },
    mapsUrl:
      "https://maps.google.com/?cid=14930537398402843337&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
    mapsEmbed:
      "https://www.google.com/maps?q=182+Walker+St+SW,+Atlanta,+GA+30313&output=embed",
  };
  
  /* ------------------------------------------------------------------
     Everything below is marketing copy. Confirm each item with the
     business owner before launch (services offered, areas, brands, FAQs).
  ------------------------------------------------------------------- */
  
  export const services = [
    {
      id: "ac-repair",
      title: "AC Repair",
      blurb: "Warm air, strange noises, frozen coils. We find the cause and fix it.",
      icon: "snowflake",
    },
    {
      id: "heating-repair",
      title: "Heating & Furnace Repair",
      blurb: "Cold mornings are no time for a dead furnace or a struggling heat pump.",
      icon: "flame",
    },
    {
      id: "maintenance",
      title: "Tune-Ups & Maintenance",
      blurb: "Seasonal check-ups that catch small problems before they get expensive.",
      icon: "wrench",
    },
    {
      id: "installation",
      title: "System Replacement",
      blurb: "When repair no longer makes sense, we size and install the right system.",
      icon: "fan",
    },
    {
      id: "air-quality",
      title: "Ducts & Air Quality",
      blurb: "Leaky ducts, stale air, uneven rooms. Cleaner, steadier airflow.",
      icon: "wind",
    },
    {
      id: "thermostats",
      title: "Thermostats & Controls",
      blurb: "Smart thermostat setup and fixes for controls that just will not behave.",
      icon: "gauge",
    },
  ] as const;
  
  export const bookingServices = [
    "AC repair",
    "Heating repair",
    "Tune-up",
    "New system quote",
    "Air quality / ducts",
    "Not sure yet",
  ] as const;
  
  export const urgencies = [
    { id: "emergency", label: "Emergency", hint: "No cooling or heat right now" },
    { id: "today", label: "As soon as possible", hint: "Today if you can" },
    { id: "week", label: "This week", hint: "Not urgent" },
    { id: "flexible", label: "Flexible", hint: "Just planning ahead" },
  ] as const;
  
  export const symptoms = [
    {
      label: "Blowing warm air",
      service: "AC repair",
      cause: "Often low refrigerant, a failing capacitor or compressor, or a dirty coil.",
    },
    {
      label: "Won't turn on",
      service: "AC repair",
      cause: "Commonly a tripped breaker, a bad thermostat or a failed control board.",
    },
    {
      label: "Strange noises",
      service: "AC repair",
      cause: "Grinding, squealing or banging usually points to a worn motor, belt or loose part.",
    },
    {
      label: "Water leaking",
      service: "AC repair",
      cause: "A clogged condensate drain is the usual suspect. Turn the system off to avoid damage.",
    },
    {
      label: "No heat",
      service: "Heating repair",
      cause: "Could be an ignition fault, a clogged filter, or a thermostat problem.",
    },
    {
      label: "High energy bills",
      service: "Tune-up",
      cause: "A system running harder than it should. A tune-up often finds why.",
    },
    {
      label: "Uneven rooms",
      service: "Air quality / ducts",
      cause: "Leaky or poorly balanced ducts are a frequent cause of hot and cold spots.",
    },
    {
      label: "Old system (10+ years)",
      service: "New system quote",
      cause: "If repairs keep stacking up, comparing a replacement quote can save money.",
    },
  ] as const;
  
  export const steps = [
    {
      title: "Tell us what's up",
      body: "Pick your service and how urgent it is. It takes about a minute, or just call.",
    },
    {
      title: "We confirm your time",
      body: "A real person calls or texts you back to lock in an arrival window.",
    },
    {
      title: "Diagnose, then decide",
      body: "Your technician explains the problem and the options before any repair begins.",
    },
    {
      title: "Fixed and tested",
      body: "We repair, test the system, and make sure you're comfortable before we leave.",
    },
  ] as const;
  
  export const reasons = [
    {
      title: "Straight answers",
      body: "We explain what's wrong in plain language, and what it will cost, before work starts.",
    },
    {
      title: "Local to Atlanta",
      body: "Based on Walker St SW. We know the city's homes, heat and humidity.",
    },
    {
      title: "Heating and cooling",
      body: "One team for your AC in July and your furnace in January.",
    },
    {
      title: "Easy to reach",
      body: "Prefer talking? Call. Prefer typing? Book online. Either way gets a human reply.",
    },
  ] as const;
  
  export const brands = [
    "Carrier",
    "Trane",
    "Lennox",
    "Goodman",
    "Rheem",
    "Daikin",
    "York",
    "Bryant",
    "American Standard",
    "Mitsubishi",
  ];
  
  export const areas = [
    "Downtown",
    "Castleberry Hill",
    "Vine City",
    "English Avenue",
    "West End",
    "Mechanicsville",
    "Summerhill",
    "Midtown",
    "Old Fourth Ward",
    "Buckhead",
    "Decatur",
    "East Point",
  ];
  
  export const faqs = [
    {
      q: "How quickly can someone come out?",
      a: "Availability changes day to day. Book online or call and we'll confirm the earliest arrival window with you. If you have no cooling or heat, mark it as an emergency.",
    },
    {
      q: "Do I have to book online?",
      a: "Not at all. You can still call us on (943) 230-5499. The online form is just a quicker way to get in the queue, any time of day.",
    },
    {
      q: "Will I know the cost before you start?",
      a: "Yes. Your technician will walk you through the diagnosis and the cost of the repair options before any work begins.",
    },
    {
      q: "What brands do you work on?",
      a: "We service all the major residential brands. If you're unsure about yours, mention it when you book.",
    },
    {
      q: "Should I repair or replace my system?",
      a: "It depends on age, condition and repair history. We'll give you an honest recommendation, and a replacement quote if it makes sense.",
    },
    {
      q: "What if my AC stops working at night or on a weekend?",
      a: "Send an emergency request or call us. We'll let you know what we can do and how soon.",
    },
  ];
  
  /* Add real customer reviews here. Leave empty to show the "read our reviews" card. */
  export const reviews: { name: string; text: string; detail?: string }[] = [];
  