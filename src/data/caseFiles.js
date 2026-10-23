// Three real historical cases written as full-width narrative chapters with authentic archival imagery
export const caseChapters = [
  {
    id: "watergate",
    num: "Case I",
    year: "1972",
    theme: "light",
    title: "Five Men in Room 214",
    subtitle: "How a piece of masking tape unraveled an executive branch",
    location: "The Watergate Complex, Washington, D.C.",
    pullquote: "A security guard making minimum wage checked a door latch twice and altered American constitutional history.",
    heroImage: {
      src: "/images/watergate.jpg",
      alt: "The Watergate Hotel and office complex along the Potomac River in Washington D.C.",
      caption: "The Watergate Complex, Washington, D.C., Government Exhibit 1 from the U.S. District Court criminal proceedings.",
      credit: "National Archives and Records Administration (NARA)"
    },
    secondaryImage: {
      src: "/images/watergate-transcripts.jpg",
      alt: "President Richard Nixon seated with stacks of subpoenaed White House tape transcripts",
      caption: "President Richard Nixon alongside subpoenaed Oval Office tape binders, April 1974.",
      credit: "White House Photo Office / NARA"
    },
    story: [
      "At 1:55 AM on June 17, 1972, Frank Wills, a 24-year-old security guard making eighty dollars a week, noticed that a stairwell door latch had been covered with adhesive tape. He removed it and continued his rounds. When he returned an hour later and found new tape in its place, he called the Metropolitan Police.",
      "The five men arrested inside the Democratic National Committee headquarters were carrying lock picks, bugging devices, and thirty-two sequential one-hundred-dollar bills. What began as a burglary investigation revealed an organized political intelligence ring operating with campaign money and executive authorization.",
      "Forty-eight government officials were convicted. A sitting president was forced to resign ahead of certain impeachment. The enduring lesson was not that power corrupts, but that institutions can be held accountable only when independent investigators, free reporters, and ordinary workers refuse to look away."
    ],
    facts: [
      { label: "Target", value: "Democratic National Committee Headquarters" },
      { label: "Key Evidence", value: "The White House Oval Office audio tape system" },
      { label: "Casualties", value: "Richard Nixon resigned; 48 officials convicted" },
      { label: "Aftermath", value: "1978 Ethics in Government Act & FOIA Expansion" }
    ]
  },
  {
    id: "enron",
    num: "Case II",
    year: "2001",
    theme: "dark",
    title: "The Spreadsheet Mirage",
    subtitle: "Seventy-four billion dollars wiped out in four months",
    location: "1400 Smith Street, Houston, Texas",
    pullquote: "You can steal more with a compliant accounting firm than you could with an army of thieves.",
    heroImage: {
      src: "/images/enron.jpg",
      alt: "The monolithic glass towers of the former Enron Complex at dusk in downtown Houston",
      caption: "The Enron Complex, 1400 Smith Street, Houston. At its peak, the trading floors processed billions in fictitious energy futures.",
      credit: "Library of Congress / Carol M. Highsmith Collection"
    },
    story: [
      "In the late 1990s, Enron was named Fortune's 'Most Innovative Company' six years running. Its trading floors were glass marvels, its executives lauded as visionaries. But behind the quarterly earnings calls lay an intricate apparatus of special-purpose entities designed to bury astronomical debt off the books.",
      "Through mark-to-market accounting, Enron booked projected profits on thirty-year contracts on the day they were signed. When the bets soured, the losses were quietly transferred to shell entities controlled by the firm's chief financial officer. Whistleblower Sherron Watkins warned the board in a five-page memo that the company would implode under its own deceit.",
      "When the facade gave way in the autumn of 2001, twenty thousand employees were locked out of their offices. Their retirement funds, heavily invested in company stock, evaporated. Arthur Andersen, an eighty-eight-year-old accounting titan, was convicted of shredding federal evidence and dissolved. The crash forced Congress to pass the Sarbanes-Oxley Act, making executive financial signatures legally binding under penalty of prison."
    ],
    facts: [
      { label: "Scale", value: "$74 Billion in market value destroyed" },
      { label: "Auditor", value: "Arthur Andersen LLP (dissolved after 88 years)" },
      { label: "Whistleblower", value: "Sherron Watkins, Vice President of Corporate Development" },
      { label: "Federal Reform", value: "Sarbanes-Oxley Act of 2002" }
    ]
  },
  {
    id: "cooper",
    num: "Case III",
    year: "1971",
    theme: "light",
    title: "Ten Thousand Feet Over Washington",
    subtitle: "The heist that permanently locked the cockpit door",
    location: "Flight 305, Northwest Orient Airlines",
    pullquote: "Prior to November 24, 1971, you could walk onto a passenger aircraft without showing identification or passing through a metal detector.",
    heroImage: {
      src: "/images/db-cooper.jpg",
      alt: "The iconic FBI Composite Sketch B of suspect Dan Cooper wearing dark sunglasses and black suit",
      caption: "FBI Composite Sketch B of 'Dan Cooper', circulated to law enforcement following the November 24, 1971 skyjacking.",
      credit: "Federal Bureau of Investigation (FBI) NORJAK Archive"
    },
    story: [
      "A quiet passenger dressed in a dark suit, mother-of-pearl tie pin, and black raincoat handed flight attendant Florence Schaffner a note: 'Miss, I have a bomb and I would like you to sit by me.' He opened a briefcase, displaying eight red cylinders and a battery. His demand: two hundred thousand dollars in negotiable currency and four parachutes.",
      "After landing in Seattle, releasing thirty-six passengers, and refueling, the Boeing 727 took off into a freezing November rainstorm heading south toward Reno. Somewhere between Seattle and Reno, at ten thousand feet, the aft cabin stairs were manually lowered. Cooper stepped into forty-below darkness and was never seen again.",
      "Nine years later, a boy digging in the sand along the Columbia River uncovered fifty-eight hundred dollars of decomposing marked twenties matching Cooper's serial numbers. The skyjacking remains the only unsolved case in commercial aviation history, but its real legacy is modern airport security: cockpit deadbolts, baggage x-rays, and the aerodynamic latch known to engineers as the Cooper Vane."
    ],
    facts: [
      { label: "Flight", value: "Boeing 727-100, Northwest Orient Flight 305" },
      { label: "Ransom", value: "$200,000 in marked twenty-dollar bills" },
      { label: "Investigation", value: "FBI NORJAK (Northwest Hijacking), 45-year open probe" },
      { label: "Technical Legacy", value: "Mandatory passenger screening & the Cooper Vane latch" }
    ]
  }
];
