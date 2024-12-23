import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
 
  discordBlack,
  facebook,

  file02,
  
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
 
  plusSquare,

  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
  asana,
  googleanalytics,
  hubspot,
  mailchimp,
  salesforce,
  trello,
  zapier,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "About",
    url: "/about",
  },
  {
    id: "1",
    title: "Services",
    url: "/services",
  },
  {
    id: "2",
    title: "Pricing",
    url: "/#pricing",
  },
  {
    id: "3",
    title: "Contact",
    url: "/contact",
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Tailored Workflow Strategies",
  "Streamlined Process Automation",
  "Ongoing Workflow Optimization",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Portal Audit",
    text: "Optimize your HubSpot portal by identifying inefficiencies and providing actionable recommendations for better performance.",
    date: "2024",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Reporting",
    text: "Gain actionable insights with tailored reports on key performance indicators, trends, and ROI to optimize your strategies.",
    date: "2024",
    status: "done",
    colorful: true,
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Effective sequence design",
    text: "Craft personalized communication sequences that drive engagement and conversions, strategically timed for maximum impact.",
    date: "2024",
    status: "done",
    colorful: true,
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integrations",
    text: "Connect HubSpot with your existing tools and systems for seamless, efficient workflows and smooth data flow.",
    date: "2024",
    status: "done",
    colorful: true,
    imageUrl: roadmap4,
  },
];

export const collabText =
  "RevAmp Hub helps teams optimize workflows and improve CRM performance with tailored HubSpot solutions that drive growth and efficiency.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "HubSpot",
    icon: hubspot, // Add the HubSpot icon
    width: 55,
    height: 55,
  },
  {
    id: "1",
    title: "Zapier",
    icon: zapier, // Add the Zapier icon
    width: 32,
    height: 32,
  },
  {
    id: "2",
    title: "Trello",
    icon: trello, // Add the Trello icon
    width: 50,
    height: 50,
  },
  {
    id: "3",
    title: "Google Analytics",
    icon: googleanalytics, // Add the Google Analytics icon
    width: 40,
    height: 40,
  },
  {
    id: "4",
    title: "Salesforce",
    icon: salesforce, // Add the Salesforce icon
    width: 80,
    height: 80,
  },
  {
    id: "5",
    title: "Slack",
    icon: slack, // Add the Slack icon
    width: 35,
    height: 35,
  },
  {
    id: "6",
    title: "Asana",
    icon: asana, // Add the Asana icon
    width: 100,
    height: 100,
  },
  {
    id: "7",
    title: "Mailchimp",
    icon: mailchimp, // Add the Mailchimp icon
    width: 50,
    height: 50,
  },
];


export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "Small businesses or startups that need basic automation and CRM improvements.",
    price: "49/month",
    features: [
      "HubSpot Automation Setup",
      "Basic Workflow Management",
      "Access to Basic Reporting",
      "Standard Email and Chat Support"
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Growing businesses that need more advanced automation and workflow management.",
    price: "149/month",
    features: [
      "HubSpot Automation Setup", "Advanced Workflow Management", "Custom Sequence Design", "Full Reporting and Analytics", "CRM Performance Enhancements", "Priority Email and Chat Support"
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Large enterprises that need a fully customized and high-performance HubSpot solution.",
    price: "299/month",
    features: [
        "HubSpot Automation Setup",
        "Complex Workflow Management",
        "Tailored Sequence Design",
        "Advanced Reporting and Analytics",
        "Full CRM Optimization",
        "Integrations with Third-Party Apps",
        "Dedicated Account Manager",
        "24/7 Premium Support",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Transform HubSpot Into a Powerhouse",
    text: "RevAmp Hub empowers your sales, marketing, and customer success teams by unlocking HubSpot's full potential with tailored solutions.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Enhanced Efficiency Through Automation",
    text: "We automate your business processes with HubSpot, reducing manual tasks and saving valuable time for your team to focus on growth.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Optimized Marketing and Sales Workflows",
    text: "Our expertise in designing complex workflows ensures your marketing and sales processes are both efficient and effective, boosting conversions and ROI.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Improved CRM Performance",
    text: "RevAmp Hub enhances your CRM by leveraging HubSpot’s features to build better customer relationships and drive business growth.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Precise Process Mapping",
    text: "We focus on designing visually clear and precise process maps to ensure every task is seamlessly integrated and tested.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Quality in Every Detail",
    text: "Our dedicated team ensures that every project is carefully tested to prevent overlap and guarantee quality in every detail.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const services = [
  {
    id: "0",
    title: "HubSpot Automation Setup",
    text: "RevAmp Hub’s HubSpot Automation Setup streamlines your processes by automating repetitive tasks, freeing your teams to focus on strategic goals. We tailor automation for email marketing, lead nurturing, and more, boosting productivity and delivering reliable results. With ongoing support and optimization, we ensure smooth transitions and long-term success.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Complex Workflow Management",
    text: "RevAmp Hub specializes in optimizing complex workflows to enhance your business operations. We identify inefficiencies, streamline processes, and build custom workflows using HubSpot to improve team coordination and efficiency. With continuous monitoring and adjustments, we ensure your workflows stay optimized as your business grows. Trust us to transform your workflow management for better results.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Effective Sequence Design",
    text: "RevAmp Hub’s Effective Sequence Design service helps optimize your engagement strategies. We craft personalized communication sequences using HubSpot, timed for maximum impact and aligned with your customer journeys. With data-driven insights, we continuously refine sequences to boost conversions and elevate your marketing and sales efforts. Let us help you drive success with effective, tailored sequences.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    // imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Reporting",
    text: "RevAmp Hub’s Reporting services provide actionable insights through tailored HubSpot analytics. We deliver customized reports on marketing, sales, and customer service performance, helping you track ROI and identify trends. Our recommendations optimize strategies, empowering informed decisions and driving sustainable growth.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Integrations",
    text: "RevAmp Hub’s Integrations service connects HubSpot with your tools and systems for a seamless workflow. From CRM to e-commerce platforms, we provide secure, custom API and native integrations tailored to your needs. Enjoy synchronized tools, smooth data flow, and enhanced team collaboration for improved productivity and growth.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Portal Audit",
    text: "RevAmp Hub’s Portal Audit service optimizes your HubSpot account by identifying inefficiencies, redundancies, and missed opportunities. We review data hygiene, automation, workflows, and reporting to provide actionable recommendations. Our audits ensure peak performance, aligning your portal with business goals for maximum efficiency and results.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Data Scrubbing",
    text: "RevAmp Hub’s Data Scrubbing service ensures your HubSpot database is clean, accurate, and reliable. We remove duplicates, outdated records, and inconsistencies, improving data quality for precise reporting, efficient workflows, and impactful campaigns. Trust us to optimize your database and keep your business running smoothly.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];


export const socials = [
  {
    id: "0",
    title: "hubspot",
    iconUrl: discordBlack,
    url: "https://ecosystem.hubspot.com/marketplace/solutions/revamphub",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "/",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "/",
  },
  {
    id: "3",
    title: "Facebook",
    iconUrl: facebook,
    url: "/",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "John Doe",
    position: "CEO, TechCorp",
    testimonial: "RevAmp Hub transformed our workflow. Their tailored HubSpot solutions improved our automation and streamlined our marketing processes, resulting in significant efficiency gains.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Marketing Director, Green Ventures",
    testimonial: "Working with RevAmp Hub was a game-changer. They helped us optimize our HubSpot setup, allowing us to better engage with our customers and increase conversions.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
  },
  {
    id: 3,
    name: "Ali Hassan",
    position: "Head of Digital Marketing, Emirates Tech",
    testimonial: "The team at RevAmp Hub has helped us revolutionize our marketing campaigns. Their deep understanding of HubSpot and their custom solutions have truly taken our operations to the next level.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
  },
  {
    id: 4,
    name: "Sara Al-Farsi",
    position: "Operations Manager, Al-Farsi Enterprises",
    testimonial: "RevAmp Hub's expertise in HubSpot automation has streamlined our internal processes, improving team collaboration and significantly reducing operational costs. Their support is unmatched.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
  },
  {
    id: 5,
    name: "Michael Johnson",
    position: "Sales Manager, Alpha Solutions",
    testimonial: "The customized workflows and reporting setup that RevAmp Hub provided for our HubSpot account have had a huge impact on our sales pipeline, making everything more efficient and trackable.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
  },
  {
    id: 6,
    name: "Emily Brown",
    position: "Business Development Lead, Bright Ideas Consulting",
    testimonial: "Thanks to RevAmp Hub’s strategic approach, we were able to optimize our HubSpot system for better lead nurturing and engagement. Their attention to detail and expertise was exactly what we needed.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
  }
];
