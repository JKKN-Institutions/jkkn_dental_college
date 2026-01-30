import { LucideIcon, Home, GraduationCap, Users, Building, FileText, Phone, Award, ClipboardCheck, BookOpen, UsersRound, Info, Image, MoreHorizontal } from 'lucide-react';

export interface MenuItem {
  href: string;
  label: string;
  icon: LucideIcon;
  active: boolean;
  submenus: Array<{ href: string; label: string; active: boolean }>;
}

export interface MenuGroup {
  groupLabel: string;
  menus: MenuItem[];
}

export function GetDentalCollegePages(pathname: string): MenuGroup[] {
  return [
    {
      groupLabel: 'Home',
      menus: [
        {
          href: '/',
          label: 'Home',
          icon: Home,
          active: pathname === '/',
          submenus: []
        }
      ]
    },
    {
      groupLabel: 'About',
      menus: [
        {
          href: '/about',
          label: 'About',
          icon: Building,
          active: pathname.startsWith('/about') || pathname.startsWith('/our-'),
          submenus: [
            { href: '/about/our-institutions', label: 'Our Institutions', active: pathname === '/about/our-institutions' },
            { href: '/about/vision-and-mission', label: 'Vision & Mission', active: pathname === '/about/vision-and-mission' },
            { href: '/about/institutional-development-plan', label: 'Development Plan', active: pathname === '/about/institutional-development-plan' },
            { href: '/about/act-statutes', label: 'Act & Statutes', active: pathname === '/about/act-statutes' },
            { href: '/about/approvals-and-affiliation/affiliation-bds', label: 'Affiliation BDS', active: pathname.includes('/affiliation-bds') },
            { href: '/about/approvals-and-affiliation/affiliation-mds', label: 'Affiliation MDS', active: pathname.includes('/affiliation-mds') },
            { href: '/about/approvals-and-affiliation/dci-bds', label: 'DCI Letter BDS', active: pathname.includes('/dci-bds') },
            { href: '/about/approvals-and-affiliation/dci-mds', label: 'DCI Letter MDS', active: pathname.includes('/dci-mds') },
            { href: '/about/accreditation-ranking-status/naac', label: 'NAAC', active: pathname.includes('/naac') },
            { href: '/about/annual-report', label: 'Annual Report', active: pathname === '/about/annual-report' },
            { href: '/about/annual-account-statement', label: 'Annual Account', active: pathname === '/about/annual-account-statement' }
          ]
        }
      ]
    },
    {
      groupLabel: 'Administration',
      menus: [
        {
          href: '/administration',
          label: 'Administration',
          icon: Users,
          active: pathname.startsWith('/administration') || pathname.startsWith('/our-'),
          submenus: [
            { href: '/our-trust', label: 'Our Trust', active: pathname === '/our-trust' },
            { href: '/our-management', label: 'Our Management', active: pathname === '/our-management' },
            { href: '/administration/principals-message', label: "Principal's Message", active: pathname === '/administration/principals-message' },
            { href: '/administration/finance-officer', label: 'Finance Officer', active: pathname === '/administration/finance-officer' },
            { href: '/administration/governing-body', label: 'Governing Body', active: pathname === '/administration/governing-body' },
            { href: '/administration/academic-council', label: 'Academic Council', active: pathname === '/administration/academic-council' },
            { href: '/administration/academic-leadership', label: 'Academic Leadership', active: pathname === '/administration/academic-leadership' },
            { href: '/administration/internal-compliants-committee', label: 'Internal Complaints Committee', active: pathname === '/administration/internal-compliants-committee' }
          ]
        }
      ]
    },
    {
      groupLabel: 'Academics',
      menus: [
        {
          href: '/academics',
          label: 'Academics',
          icon: GraduationCap,
          active: pathname.startsWith('/academics'),
          submenus: [
            { href: '/academics/details-of-academic-programs/bds', label: 'BDS Program', active: pathname.includes('/bds') },
            { href: '/academics/details-of-academic-programs/mds', label: 'MDS Programs', active: pathname === '/academics/details-of-academic-programs/mds' },
            { href: '/academics/details-of-academic-programs/mds/periodontics', label: 'MDS Periodontics', active: pathname.includes('/periodontics') },
            { href: '/academics/details-of-academic-programs/mds/orthodontics-and-dentofacial-orthopedics', label: 'MDS Orthodontics', active: pathname.includes('/orthodontics') },
            { href: '/academics/details-of-academic-programs/mds/prosthodontics-crown-and-bridge', label: 'MDS Prosthodontics', active: pathname.includes('/prosthodontics') },
            { href: '/academics/details-of-academic-programs/mds/conservative-dentistry-and-endodontics', label: 'MDS Conservative', active: pathname.includes('/conservative') },
            { href: '/academics/details-of-academic-programs/mds/oral-medicine', label: 'MDS Oral Medicine', active: pathname.includes('/oral-medicine') },
            { href: '/academics/mentor-mentee-program', label: 'Mentor-Mentee', active: pathname === '/academics/mentor-mentee-program' },
            { href: '/academics/academic-attributes', label: 'Academic Attributes', active: pathname === '/academics/academic-attributes' },
            { href: '/academics/learning-outcomes', label: 'Learning Outcomes', active: pathname === '/academics/learning-outcomes' },
            { href: '/academics/student-centric-teaching-methods', label: 'Teaching Methods', active: pathname === '/academics/student-centric-teaching-methods' },
            { href: '/academics/courses/add-on-courses', label: 'Add-on Courses', active: pathname.includes('/add-on-courses') },
            { href: '/academics/courses/value-added-courses', label: 'Value Added Courses', active: pathname.includes('/value-added-courses') },
            { href: '/academics/courses/cross-cutting-issues', label: 'Cross-Cutting-Issues', active: pathname.includes('/cross-cutting-issues') },
            { href: '/academics/capability-enhancement-program', label: 'Capability Enhancement', active: pathname.includes('/capability-enhancement') },
            { href: '/academics/curriculum-feedback', label: 'Curriculum Feedback', active: pathname === '/academics/curriculum-feedback' },
            { href: '/academics/faculty-achievements/fdp-attended', label: 'FDP Attended', active: pathname.includes('/fdp-attended') },
            { href: '/academics/faculty-achievements/webinar-conferences-attended', label: 'Webinar/Conferences Attended', active: pathname.includes('/webinar-conferences-attended') },
            { href: '/academic-calendar-2023-2024-2024-2025', label: 'Calendar 2023-2025', active: pathname === '/academic-calendar-2023-2024-2024-2025' },
            { href: '/academic-calendar-2022-2023', label: 'Calendar 2022-2023', active: pathname === '/academic-calendar-2022-2023' },
            { href: '/academic-calendar-2021-2022', label: 'Calendar 2021-2022', active: pathname === '/academic-calendar-2021-2022' },
            { href: '/academic-calendar-2020-2021', label: 'Calendar 2020-2021', active: pathname === '/academic-calendar-2020-2021' },
            { href: '/academic-calendar-2019-2020', label: 'Calendar 2019-2020', active: pathname === '/academic-calendar-2019-2020' },
            { href: '/academic-calendar-2018-2019', label: 'Calendar 2018-2019', active: pathname === '/academic-calendar-2018-2019' },
            { href: '/academics/statutes-pertaining-to-academic-departments/bds-syllabus', label: 'Syllabus of BDS', active: pathname.includes('/bds-syllabus') },
            { href: '/academics/statutes-pertaining-to-academic-departments/mds-prosthodontics-syllabus', label: 'Syllabus of Prosthodontics', active: pathname.includes('/mds-prosthodontics-syllabus') },
            { href: '/academics/statutes-pertaining-to-academic-departments/mds-periodontics-syllabus', label: 'Syllabus of Periodontics', active: pathname.includes('/mds-periodontics-syllabus') },
            { href: '/academics/statutes-pertaining-to-academic-departments/mds-orthodontics-syllabus', label: 'Syllabus of Orthodontics', active: pathname.includes('/mds-orthodontics-syllabus') },
            { href: '/academics/statutes-pertaining-to-academic-departments/mds-oral-medicine-and-radiology-syllabus', label: 'Syllabus of Oral Medicine', active: pathname.includes('/mds-oral-medicine-and-radiology-syllabus') },
            { href: '/academics/statutes-pertaining-to-academic-departments/mds-conservative-dentistry-and-endodontics-syllabus', label: 'Syllabus of Conservative', active: pathname.includes('/mds-conservative-dentistry-and-endodontics-syllabus') }
          ]
        }
      ]
    },
    {
      groupLabel: 'Accreditation',
      menus: [
        {
          href: '/accreditation',
          label: 'Accreditation',
          icon: Award,
          active: pathname.startsWith('/accreditation'),
          submenus: [
            { href: '/accreditation/naac', label: 'NAAC', active: pathname === '/accreditation/naac' },
            { href: '/accreditation/nirf/nirf-2024/dental', label: 'NIRF 2024 - Dental', active: pathname === '/accreditation/nirf/nirf-2024/dental' },
            { href: '/accreditation/nirf/nirf-2024/innovation', label: 'NIRF 2024 - Innovation', active: pathname === '/accreditation/nirf/nirf-2024/innovation' },
            { href: '/accreditation/nirf/nirf-2025/overall', label: 'NIRF 2025 - Overall', active: pathname === '/accreditation/nirf/nirf-2025/overall' },
            { href: '/accreditation/nirf/nirf-2025/dental', label: 'NIRF 2025 - Dental', active: pathname === '/accreditation/nirf/nirf-2025/dental' },
            { href: '/accreditation/nirf/nirf-2025/innovation', label: 'NIRF 2025 - Innovation', active: pathname === '/accreditation/nirf/nirf-2025/innovation' },
            { href: '/accreditation/nirf/nirf-2025/sdg-institution', label: 'NIRF 2025 - SDG Institution', active: pathname === '/accreditation/nirf/nirf-2025/sdg-institution' }
          ]
        }
      ]
    },
    {
      groupLabel: 'Admission',
      menus: [
        {
          href: '/admission',
          label: 'Admission',
          icon: FileText,
          active: pathname.startsWith('/admission'),
          submenus: [
            { href: '/admission/prospectus', label: 'Prospectus', active: pathname === '/admission/prospectus' },
            { href: '/admission/admission-process-guidelines/admission-criterion-in-others', label: 'Admission Criterion in Others', active: pathname.includes('/admission-criterion-in-others') },
            { href: '/admission/admission-criteria', label: 'Admission Criteria', active: pathname === '/admission/admission-criteria' },
            { href: '/admission/fee-refund-policy/ugc-fee-refund-policy', label: 'Fee Refund Policy', active: pathname.includes('/fee-refund') },
            { href: '/admission/scholarship-policy-for-dental-college', label: 'Scholarship Policy', active: pathname === '/admission/scholarship-policy-for-dental-college' },
            { href: '/admission/equitable-opportunity-for-sedg-group/equitable-opportunity-for-sedgs', label: 'SEDG Opportunity', active: pathname.includes('/sedg') }
          ]
        }
      ]
    },
    {
      groupLabel: 'Research',
      menus: [
        {
          href: '/research',
          label: 'Research',
          icon: BookOpen,
          active: pathname.startsWith('/research'),
          submenus: [
            { href: '/research/research-development-rd-cell', label: 'R&D Cell', active: pathname.includes('/research-development') },
            { href: '/research/research-and-dissertation', label: 'Research & Dissertation', active: pathname === '/research/research-and-dissertation' },
            { href: '/research/institutions-innovation-council-iic', label: 'IIC', active: pathname.includes('/institutions-innovation') },
            { href: '/research/research-proposal-and-consent-forms', label: 'Research Proposal & Consent Forms', active: pathname.includes('/research-proposal-and-consent-forms') },
            { href: '/research/institutional-ethical-committee', label: 'Ethical Committee', active: pathname.includes('/ethical-committee') },
            { href: '/research/incubation-center', label: 'Incubation Center', active: pathname.includes('/incubation') },
            { href: '/research/start-up', label: 'Start-up', active: pathname === '/research/start-up' },
            { href: '/research/mou-memorandum-of-understanding', label: 'MOU', active: pathname.includes('/mou') },
            { href: '/research/collaboration', label: 'Collaboration', active: pathname === '/research/collaboration' },
            { href: '/research/publication', label: 'Publications', active: pathname === '/research/publication' }
          ]
        }
      ]
    },
    {
      groupLabel: 'IQAC',
      menus: [
        {
          href: '/iqac',
          label: 'IQAC',
          icon: ClipboardCheck,
          active: pathname === '/iqac',
          submenus: []
        }
      ]
    },
    {
      groupLabel: 'Committee',
      menus: [
        {
          href: '/committee',
          label: 'Committee',
          icon: Users,
          active: pathname.startsWith('/committee'),
          submenus: [
            { href: '/committee/student-council/view-document', label: 'Student Council', active: pathname.includes('/student-council') },
            { href: '/committee/internal-compliants-committee-icc', label: 'ICC', active: pathname.includes('/internal-compliants') },
            { href: '/committee/student-grievance-redressal-committee-sgrc', label: 'SGRC', active: pathname.includes('/student-grievance') },
            { href: '/committee/placement-cell-cdc/list-of-events', label: 'Placement Cell / CDC', active: pathname.includes('/placement-cell') },
            { href: '/committee/anti-ragging-committee/view-committee-members', label: 'Anti-Ragging Committee', active: pathname.includes('/anti-ragging') },
            { href: '/committee/sedg-cell', label: 'SEDG Cell', active: pathname === '/committee/sedg-cell' },
            { href: '/committee/disciplinary-committee', label: 'Disciplinary Committee', active: pathname.includes('/disciplinary') },
            { href: '/committee/mentoring-committee', label: 'Mentoring Committee', active: pathname.includes('/mentoring-committee') },
            { href: '/committee/examination-committee', label: 'Examination Committee', active: pathname.includes('/examination') },
            { href: '/committee/library-and-learning-resources-committee', label: 'Library & Learning Resources', active: pathname.includes('/library-and-learning') },
            { href: '/committee/student-welfare-committee', label: 'Student Welfare Committee', active: pathname.includes('/student-welfare') },
            { href: '/committee/patient-welfare-committee', label: 'Patient Welfare Committee', active: pathname.includes('/patient-welfare') },
            { href: '/committee/international-student-cell-committee', label: 'International Student Cell', active: pathname.includes('/international-student') },
            { href: '/committee/dental-education-department', label: 'Dental Education Department', active: pathname.includes('/dental-education') },
            { href: '/committee/physical-infrastructure-and-purchase-maintenance-committee', label: 'Physical Infrastructure Committee', active: pathname.includes('/physical-infrastructure') },
            { href: '/committee/hostel-advisory-&-welfare-committee', label: 'Hostel Advisory & Welfare', active: pathname.includes('/hostel-advisory') },
            { href: '/committee/finance-committee', label: 'Finance Committee', active: pathname === '/committee/finance-committee' },
            { href: '/committee/physical-education-&-extra-currucular-activities-committee', label: 'Physical Education Committee', active: pathname.includes('/physical-education') },
            { href: '/committee/ncc/nss', label: 'NCC/NSS', active: pathname.includes('/ncc/nss') }
          ]
        }
      ]
    },
    {
      groupLabel: 'Alumni',
      menus: [
        {
          href: '/alumni',
          label: 'Alumni',
          icon: UsersRound,
          active: pathname.startsWith('/alumni'),
          submenus: []
        }
      ]
    },
    {
      groupLabel: 'Mandatory',
      menus: [
        {
          href: '/mandatory-disclosures',
          label: 'Disclosures',
          icon: FileText,
          active: pathname.startsWith('/mandatory-disclosures'),
          submenus: [
            { href: '/mandatory-disclosures/guidelines-on-public-disclosure-by-heis', label: 'Guidelines', active: pathname.includes('/guidelines') },
            { href: '/mandatory-disclosures/letter-of-undertaking', label: 'Letter of Undertaking', active: pathname.includes('/letter-of-undertaking') }
          ]
        }
      ]
    },
    {
      groupLabel: 'Facilities',
      menus: [
        {
          href: '/facilities',
          label: 'Facilities',
          icon: Building,
          active: pathname.startsWith('/facilities'),
          submenus: [
            { href: '/facilities/accessibility-&-inclusion-at-jkkndch', label: 'Accessibility & Inclusion', active: pathname.includes('/accessibility') },
            { href: 'https://outreach.dental.jkkn.ac.in/', label: 'Outreach Request', active: false },
            { href: '/facilities/food-court', label: 'Food Court', active: pathname === '/facilities/food-court' },
            { href: '/facilities/transport', label: 'Transport', active: pathname === '/facilities/transport' },
            { href: '/facilities/sports-club', label: 'Sports Club', active: pathname === '/facilities/sports-club' },
            { href: '/facilities/bank-&-post-office', label: 'Bank & Post Office', active: pathname.includes('/bank-') },
            { href: '/facilities/health-facilities', label: 'Health Facilities', active: pathname === '/facilities/health-facilities' },
            { href: '/facilities/ambulance-services', label: 'Ambulance Services', active: pathname === '/facilities/ambulance-services' },
            { href: '/facilities/barrier-free-environment', label: 'Barrier Free Environment', active: pathname.includes('/barrier-free') },
            { href: '/facilities/library', label: 'Library', active: pathname === '/facilities/library' },
            { href: '/facilities/labs', label: 'Labs', active: pathname === '/facilities/labs' },
            { href: '/facilities/hostel/boys-hostel', label: 'Boys Hostel', active: pathname === '/facilities/hostel/boys-hostel' },
            { href: '/facilities/hostel/girls-hostel', label: 'Girls Hostel', active: pathname === '/facilities/hostel/girls-hostel' },
            { href: '/facilities/seminar-hall', label: 'Seminar Hall', active: pathname === '/facilities/seminar-hall' },
            { href: '/facilities/auditorium', label: 'Auditorium', active: pathname === '/facilities/auditorium' },
            { href: '/facilities/digital-class-room', label: 'Digital Class Room', active: pathname === '/facilities/digital-class-room' },
            { href: '/facilities/wi-fi-campus', label: 'Wi-Fi Campus', active: pathname === '/facilities/wi-fi-campus' },
            { href: '/facilities/privacy-policy', label: 'Privacy Policy', active: pathname === '/facilities/privacy-policy' }
          ]
        }
      ]
    },
    {
      groupLabel: 'Info Center',
      menus: [
        {
          href: '/information-center',
          label: 'Info Center',
          icon: Info,
          active: pathname.startsWith('/information-center'),
          submenus: [
            { href: '/information-center/right-to-information-rti', label: 'Right to Information (RTI)', active: pathname.includes('/rti') },
            { href: '/information-center/announcements', label: 'Announcements', active: pathname === '/information-center/announcements' },
            { href: '/information-center/news', label: 'News', active: pathname === '/information-center/news' },
            { href: '/information-center/events', label: 'Events', active: pathname === '/information-center/events' },
            { href: '/information-center/careers', label: 'Careers', active: pathname === '/information-center/careers' }
          ]
        }
      ]
    },
    {
      groupLabel: 'Gallery',
      menus: [
        {
          href: '/gallery',
          label: 'Gallery',
          icon: Image,
          active: pathname === '/gallery',
          submenus: []
        }
      ]
    },
    {
      groupLabel: 'Others',
      menus: [
        {
          href: '/others',
          label: 'Others',
          icon: MoreHorizontal,
          active: pathname.startsWith('/others'),
          submenus: [
            { href: '/others/digital-campus', label: 'Digital Campus', active: pathname === '/others/digital-campus' },
            { href: '/others/patient-safety-manual', label: 'Patient Safety Manual', active: pathname.includes('/patient-safety') },
            { href: '/others/outreach', label: 'Outreach', active: pathname === '/others/outreach' }
          ]
        }
      ]
    },
    {
      groupLabel: 'Contact',
      menus: [
        {
          href: '/contact',
          label: 'Contact',
          icon: Phone,
          active: pathname === '/contact',
          submenus: []
        }
      ]
    }
  ];
}
