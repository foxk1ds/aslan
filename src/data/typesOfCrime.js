// Types of Crime: Written in real investigative journalism style with archival evidence images
export const crimeTypes = [
  {
    num: "01",
    title: "Property & Theft",
    subtitle: "The mechanics of taking without force",
    lead: "The majority of lawbreaking never makes the evening news. It happens quietly: a broken latch, an unlocked car, a stolen package.",
    body: "Property crime accounts for nearly eighty percent of all offenses reported across industrialized nations. It operates on a cold equation of perceived risk and immediate economic return. Criminologists distinguish petit larceny from burglary by unlawful entry, but both point to the same fault lines: desperate liquidity, opportunistic neglect, and markets for illicit goods.",
    image: {
      src: "/images/mona-lisa-1911.jpg",
      alt: "The empty wall hooks in the Salon Carré at the Louvre Museum in August 1911",
      caption: "The vacant wall space in the Salon Carré of the Louvre, photographed in August 1911 after glazier Vincenzo Peruggia removed the Mona Lisa.",
      credit: "Bibliothèque nationale de France / Wikimedia Commons"
    },
    caseStudy: {
      year: "1911",
      name: "The Louvre Heist",
      detail: "Glazier Vincenzo Peruggia removed the Mona Lisa from its frame on an ordinary Monday morning, concealed it beneath his coat, and walked onto the Paris streets. The crime turned a Renaissance portrait into the world's most famous painting, demonstrating how the value of stolen goods is often created by the theft itself."
    }
  },
  {
    num: "02",
    title: "Violent Crime",
    subtitle: "When disputes outgrow the capacity for words",
    lead: "Violence is rarely random. It is intimate, fast, and concentrated in small geography.",
    body: "Less than four percent of criminal incidents involve direct physical violence. Yet this four percent commands ninety percent of public anxiety and political rhetoric. Most violent encounters stem from dispute escalation, retaliatory cycles, and domestic confrontations where firearms turn temporary anger into irreversible loss.",
    image: {
      src: "/images/train-robbery.jpg",
      alt: "Bridego Railway Bridge where the Great Train Robbery took place in 1963",
      caption: "Bridego Railway Bridge in Buckinghamshire, site of the 1963 mail train holdup that triggered nationwide reforms in transport security.",
      credit: "British Transport Police Archive / Wikimedia Commons"
    },
    caseStudy: {
      year: "1963",
      name: "Bridego Railway Bridge",
      detail: "A fifteen-man crew stopped the Glasgow-to-London Royal Mail train, taking 2.6 million pounds without firing a shot. Yet the violent bludgeoning of driver Jack Mills transformed public admiration into outrage, prompting a judicial response that reshaped British criminal transport laws."
    }
  },
  {
    num: "03",
    title: "Cybercrime",
    subtitle: "The invisible borderless heist",
    lead: "A thief no longer needs a crowbar. They need an unpatched port and ten minutes of human inattention.",
    body: "Digital crime has separated geography from harm. An operator in St. Petersburg or Bucharest can drain a rural municipal water district's budget in seconds. Ransomware and corporate spear-phishing now extract over twelve billion dollars annually, exploiting the asymmetry between fragile human judgment and automated network intrusions.",
    image: {
      src: "/images/bangladesh-bank.jpg",
      alt: "Bangladesh Bank headquarters in Motijheel, Dhaka",
      caption: "Bangladesh Bank headquarters in Dhaka, target of the 2016 cyber breach where malicious SWIFT orders siphoned $81 million in seconds.",
      credit: "Wikimedia Commons"
    },
    caseStudy: {
      year: "2016",
      name: "The Federal Reserve Breach",
      detail: "Intruders injected malicious code into the central bank of Bangladesh, issuing thirty-five SWIFT wire transfers totaling nearly one billion dollars. A single misspelled word—'fandation' instead of 'foundation'—halted the transfer of eight hundred and fifty million dollars."
    }
  },
  {
    num: "04",
    title: "Corporate & White-Collar",
    subtitle: "Theft by spreadsheet",
    lead: "One executive with an altered balance sheet causes more financial devastation than ten thousand burglars combined.",
    body: "Sociologist Edwin Sutherland coined the term in 1939 to challenge the myth that criminality belonged only to the poor. White-collar fraud is bloodless, slow, and devastating. It steals pensions, inflates healthcare costs, and destroys civic trust, shielded behind legal departments and deferred prosecution agreements.",
    image: {
      src: "/images/enron.jpg",
      alt: "The Enron Complex skyscraper at 1400 Smith Street in Houston",
      caption: "The Enron Complex at 1400 Smith Street, Houston. In 2001, fabricated earnings and off-balance-sheet vehicles erased $74 billion in shareholder equity.",
      credit: "Wikimedia Commons / Highsmith Archive"
    },
    caseStudy: {
      year: "2001",
      name: "The Enron Dissolution",
      detail: "Through mark-to-market accounting and offshore entities, Enron concealed billions in losses while executives cashed out eighty million dollars in personal shares. When the structure collapsed, twenty thousand workers lost their livelihoods and their entire retirement savings."
    }
  },
  {
    num: "05",
    title: "Organized Crime",
    subtitle: "The shadow state",
    lead: "Wherever the state outlaws a commodity that millions demand, an enterprise forms to deliver it.",
    body: "Syndicates are not chaotic gangs; they are disciplined commercial firms operating where standard law cannot adjudicate disputes. They enforce contracts with bullets, pay private security forces, and reinvest profits into clean real estate, logistics, and political campaigns.",
    image: {
      src: "/images/french-connection.jpg",
      alt: "Narcotics agents inspect seized contraband during the French Connection investigation",
      caption: "French OCRTIS and federal narcotics investigators inspect a seized shipment during the 1970s dismantling of the French Connection.",
      credit: "OCRTIS Archive / Wikimedia Commons"
    },
    caseStudy: {
      year: "1970",
      name: "The French Connection",
      detail: "A cooperative between Corsican processors and American distributors funneled Turkish opium through Marseille laboratories into Manhattan. The case proved that organized crime is fundamentally an international supply-chain problem, leading directly to the RICO statutes."
    }
  }
];
