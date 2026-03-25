export type ProjectCategory = 'mobile' | 'website';

export type ProjectItem = {
  id: string;
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  category: ProjectCategory;
  periodStart: string;
  periodEnd: string;
  detailHref: string;
};

export const projects: ProjectItem[] = [
  {
    id: 'project-01',
    image: '/images/feature-1.png',
    imageAlt: 'Arunika Commerce Platform preview',
    title: 'Arunika Commerce Platform',
    description:
      'E-commerce website with integrated payment gateway, inventory sync, and real-time order analytics dashboard.',
    category: 'website',
    periodStart: 'Jan 2024',
    periodEnd: 'Jun 2024',
    detailHref: '#contact'
  },
  {
    id: 'project-02',
    image: '/images/hero.png',
    imageAlt: 'QuickServe Mobile POS preview',
    title: 'QuickServe Mobile POS',
    description:
      'Point-of-sale mobile app for F&B outlets with cashier workflow, receipt printing, and daily revenue summary.',
    category: 'mobile',
    periodStart: 'Mar 2024',
    periodEnd: 'Oct 2024',
    detailHref: '#contact'
  },
  {
    id: 'project-03',
    image: '/images/feature-2.png',
    imageAlt: 'SatuData Corporate Portal preview',
    title: 'SatuData Corporate Portal',
    description:
      'Internal enterprise portal for document approval, role-based access, and monthly KPI reporting.',
    category: 'website',
    periodStart: 'May 2024',
    periodEnd: 'In Progress',
    detailHref: '#contact'
  },
  {
    id: 'project-04',
    image: '/images/feature-2.png',
    imageAlt: 'FleetTrack Driver App preview',
    title: 'FleetTrack Driver App',
    description:
      'Mobile fleet operations app with route checklist, geolocation logging, and dispatch communication module.',
    category: 'mobile',
    periodStart: 'Jul 2024',
    periodEnd: 'In Progress',
    detailHref: '#contact'
  },
  {
    id: 'project-05',
    image: '/images/feature-1.png',
    imageAlt: 'SmartHR Recruitment Suite preview',
    title: 'SmartHR Recruitment Suite',
    description:
      'Recruitment management website supporting applicant pipeline tracking and interview stage automation.',
    category: 'website',
    periodStart: 'Feb 2023',
    periodEnd: 'Dec 2023',
    detailHref: '#contact'
  },
  {
    id: 'project-06',
    image: '/images/hero.png',
    imageAlt: 'EduMate Learning App preview',
    title: 'EduMate Learning App',
    description:
      'Interactive learning mobile app with adaptive quizzes, push notifications, and progress monitoring.',
    category: 'mobile',
    periodStart: 'Sep 2023',
    periodEnd: 'Apr 2024',
    detailHref: '#contact'
  },
  {
    id: 'project-07',
    image: '/images/feature-1.png',
    imageAlt: 'Medlink Patient Portal preview',
    title: 'Medlink Patient Portal',
    description:
      'Healthcare website for appointment scheduling, medical record requests, and secure doctor messaging.',
    category: 'website',
    periodStart: 'Jan 2022',
    periodEnd: 'Aug 2022',
    detailHref: '#contact'
  },
  {
    id: 'project-08',
    image: '/images/hero.png',
    imageAlt: 'ShopMate Courier App preview',
    title: 'ShopMate Courier App',
    description:
      'Last-mile delivery app with task batching, proof-of-delivery upload, and in-app route navigation.',
    category: 'mobile',
    periodStart: 'Apr 2022',
    periodEnd: 'Nov 2022',
    detailHref: '#contact'
  },
  {
    id: 'project-09',
    image: '/images/feature-2.png',
    imageAlt: 'NusaPay Merchant Dashboard preview',
    title: 'NusaPay Merchant Dashboard',
    description:
      'Payment analytics dashboard for merchants with settlement reports and transaction monitoring features.',
    category: 'website',
    periodStart: 'Jun 2022',
    periodEnd: 'Feb 2023',
    detailHref: '#contact'
  },
  {
    id: 'project-10',
    image: '/images/hero.png',
    imageAlt: 'Travelio Booking App preview',
    title: 'Travelio Booking App',
    description:
      'Travel reservation mobile app covering package search, itinerary management, and digital ticket wallet.',
    category: 'mobile',
    periodStart: 'Aug 2022',
    periodEnd: 'May 2023',
    detailHref: '#contact'
  },
  {
    id: 'project-11',
    image: '/images/feature-1.png',
    imageAlt: 'BinaKarya ERP Frontend preview',
    title: 'BinaKarya ERP Frontend',
    description:
      'Web frontend module for ERP with procurement workflow, vendor management, and audit trail screens.',
    category: 'website',
    periodStart: 'Oct 2022',
    periodEnd: 'In Progress',
    detailHref: '#contact'
  },
  {
    id: 'project-12',
    image: '/images/hero.png',
    imageAlt: 'AquaCare Utility App preview',
    title: 'AquaCare Utility App',
    description:
      'Customer mobile app for utility services with bill payment reminders and outage report submissions.',
    category: 'mobile',
    periodStart: 'Dec 2022',
    periodEnd: 'Jul 2023',
    detailHref: '#contact'
  },
  {
    id: 'project-13',
    image: '/images/feature-2.png',
    imageAlt: 'Lensa Studio Portfolio Site preview',
    title: 'Lensa Studio Portfolio Site',
    description:
      'Creative studio website featuring dynamic galleries, booking requests, and CMS-based content updates.',
    category: 'website',
    periodStart: 'Jan 2023',
    periodEnd: 'Jun 2023',
    detailHref: '#contact'
  },
  {
    id: 'project-14',
    image: '/images/hero.png',
    imageAlt: 'FitPulse Member App preview',
    title: 'FitPulse Member App',
    description:
      'Fitness membership app with class booking, attendance QR scan, and personalized workout history.',
    category: 'mobile',
    periodStart: 'Feb 2023',
    periodEnd: 'Sep 2023',
    detailHref: '#contact'
  },
  {
    id: 'project-15',
    image: '/images/feature-1.png',
    imageAlt: 'KopiChain Supplier Portal preview',
    title: 'KopiChain Supplier Portal',
    description:
      'Supply chain website for coffee distributors with purchase order lifecycle and warehouse visibility.',
    category: 'website',
    periodStart: 'Mar 2023',
    periodEnd: 'Nov 2023',
    detailHref: '#contact'
  },
  {
    id: 'project-16',
    image: '/images/hero.png',
    imageAlt: 'SafeHome Resident App preview',
    title: 'SafeHome Resident App',
    description:
      'Residential services app for visitor access, facility booking, and emergency broadcast notifications.',
    category: 'mobile',
    periodStart: 'May 2023',
    periodEnd: 'Dec 2023',
    detailHref: '#contact'
  },
  {
    id: 'project-17',
    image: '/images/feature-2.png',
    imageAlt: 'GreenFarm Analytics Portal preview',
    title: 'GreenFarm Analytics Portal',
    description:
      'Agritech analytics website displaying sensor trends, harvest projections, and farm operation insights.',
    category: 'website',
    periodStart: 'Jun 2023',
    periodEnd: 'In Progress',
    detailHref: '#contact'
  },
  {
    id: 'project-18',
    image: '/images/hero.png',
    imageAlt: 'CityRide Passenger App preview',
    title: 'CityRide Passenger App',
    description:
      'Urban transport app with trip booking, fare estimation, and real-time driver arrival tracking.',
    category: 'mobile',
    periodStart: 'Jul 2023',
    periodEnd: 'Mar 2024',
    detailHref: '#contact'
  },
  {
    id: 'project-19',
    image: '/images/feature-1.png',
    imageAlt: 'Lexa Legal Document Hub preview',
    title: 'Lexa Legal Document Hub',
    description:
      'Legal operations website for contract templates, approval routing, and compliance document storage.',
    category: 'website',
    periodStart: 'Aug 2023',
    periodEnd: 'Jan 2024',
    detailHref: '#contact'
  },
  {
    id: 'project-20',
    image: '/images/hero.png',
    imageAlt: 'Evently Organizer App preview',
    title: 'Evently Organizer App',
    description:
      'Event management mobile app for ticket scanning, attendee communication, and speaker agenda control.',
    category: 'mobile',
    periodStart: 'Sep 2023',
    periodEnd: 'In Progress',
    detailHref: '#contact'
  },
  {
    id: 'project-21',
    image: '/images/feature-2.png',
    imageAlt: 'EduBoard Campus Website preview',
    title: 'EduBoard Campus Website',
    description:
      'University website revamp with admission funnel, scholarship pages, and multilingual content blocks.',
    category: 'website',
    periodStart: 'Oct 2023',
    periodEnd: 'Apr 2024',
    detailHref: '#contact'
  },
  {
    id: 'project-22',
    image: '/images/hero.png',
    imageAlt: 'CareNow Appointment App preview',
    title: 'CareNow Appointment App',
    description:
      'Clinic appointment mobile app with queue monitoring, reminder schedules, and secure account profile.',
    category: 'mobile',
    periodStart: 'Nov 2023',
    periodEnd: 'In Progress',
    detailHref: '#contact'
  },
  {
    id: 'project-23',
    image: '/images/feature-1.png',
    imageAlt: 'PrimeRetail B2B Portal preview',
    title: 'PrimeRetail B2B Portal',
    description:
      'Wholesale ordering website with tiered pricing, catalog segmentation, and purchase history exports.',
    category: 'website',
    periodStart: 'Dec 2023',
    periodEnd: 'In Progress',
    detailHref: '#contact'
  },
  {
    id: 'project-24',
    image: '/images/hero.png',
    imageAlt: 'MoveIt Logistics App preview',
    title: 'MoveIt Logistics App',
    description:
      'Logistics operations app for shipment status updates, checklist completion, and warehouse handover logs.',
    category: 'mobile',
    periodStart: 'Jan 2024',
    periodEnd: 'In Progress',
    detailHref: '#contact'
  }
];
