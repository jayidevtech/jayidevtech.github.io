export type ProjectCategory = 'mobile' | 'website';

export type ProjectItem = {
  id: string;
  image: string;
  imageAlt: string;
  title: string;
  descriptionKey: string;
  category: ProjectCategory;
  periodStart: string;
  periodEnd: string;
  detailHref: string;
  landingPageUrl?: string;
  features?: string[];
};

export const projects: ProjectItem[] = [
  {
    id: 'project-rekapuang',
    image: '/images/portfolios/rekapuang.png',
    imageAlt: 'Rekap Uang: Catatan Keuangan preview',
    title: 'Rekap Uang: Catatan Keuangan',
    descriptionKey: 'portfolio_rekapuang_desc',
    category: 'mobile',
    periodStart: 'Feb 2026',
    periodEnd: 'Mar 2026',
    detailHref: '/projects/rekapuang',
    landingPageUrl: 'https://rekapuang.jayidev.tech',
    features: [
      'portfolio_rekapuang_feature_1',
      'portfolio_rekapuang_feature_2',
      'portfolio_rekapuang_feature_3'
    ]
  },
  {
    id: 'project-02',
    image: '/images/hero.png',
    imageAlt: 'QuickServe Mobile POS preview',
    title: 'QuickServe Mobile POS',
    descriptionKey: 'portfolio_project_02_desc',
    category: 'mobile',
    periodStart: 'Mar 2024',
    periodEnd: 'Oct 2024',
    detailHref: '#contact',
    landingPageUrl: 'https://quickserve-pos.com',
    features: [
      'portfolio_project_02_feature_1',
      'portfolio_project_02_feature_2',
      'portfolio_project_02_feature_3'
    ]
  },
  {
    id: 'project-03',
    image: '/images/feature-2.png',
    imageAlt: 'SatuData Corporate Portal preview',
    title: 'SatuData Corporate Portal',
    descriptionKey: 'portfolio_project_03_desc',
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
    descriptionKey: 'portfolio_project_04_desc',
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
    descriptionKey: 'portfolio_project_05_desc',
    category: 'website',
    periodStart: 'Feb 2023',
    periodEnd: 'Dec 2023',
    detailHref: '#contact',
    landingPageUrl: 'https://smarthr-recruitment.id',
    features: [
      'portfolio_project_05_feature_1',
      'portfolio_project_05_feature_2',
      'portfolio_project_05_feature_3'
    ]
  },
  {
    id: 'project-06',
    image: '/images/hero.png',
    imageAlt: 'EduMate Learning App preview',
    title: 'EduMate Learning App',
    descriptionKey: 'portfolio_project_06_desc',
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
    descriptionKey: 'portfolio_project_07_desc',
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
    descriptionKey: 'portfolio_project_08_desc',
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
    descriptionKey: 'portfolio_project_09_desc',
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
    descriptionKey: 'portfolio_project_10_desc',
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
    descriptionKey: 'portfolio_project_11_desc',
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
    descriptionKey: 'portfolio_project_12_desc',
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
    descriptionKey: 'portfolio_project_13_desc',
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
    descriptionKey: 'portfolio_project_14_desc',
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
    descriptionKey: 'portfolio_project_15_desc',
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
    descriptionKey: 'portfolio_project_16_desc',
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
    descriptionKey: 'portfolio_project_17_desc',
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
    descriptionKey: 'portfolio_project_18_desc',
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
    descriptionKey: 'portfolio_project_19_desc',
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
    descriptionKey: 'portfolio_project_20_desc',
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
    descriptionKey: 'portfolio_project_21_desc',
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
    descriptionKey: 'portfolio_project_22_desc',
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
    descriptionKey: 'portfolio_project_23_desc',
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
    descriptionKey: 'portfolio_project_24_desc',
    category: 'mobile',
    periodStart: 'Jan 2024',
    periodEnd: 'In Progress',
    detailHref: '#contact'
  }
];
