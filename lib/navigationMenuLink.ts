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
            { href: '/administration/academic-leadership', label: 'Academic Leadership', active: pathname === '/administration/academic-leadership' }
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
            { href: '/academics/details-of-academic-programs/mds', label: 'MDS Programs', active: pathname.includes('/mds') },
            { href: '/academics/mentor-mentee-program', label: 'Mentor-Mentee', active: pathname === '/academics/mentor-mentee-program' },
            { href: '/academics/academic-attributes', label: 'Academic Attributes', active: pathname === '/academics/academic-attributes' },
            { href: '/academics/learning-outcomes', label: 'Learning Outcomes', active: pathname === '/academics/learning-outcomes' },
            { href: '/academics/student-centric-teaching-methods', label: 'Teaching Methods', active: pathname === '/academics/student-centric-teaching-methods' },
            { href: '/academics/courses/add-on-courses', label: 'Add-on Courses', active: pathname.includes('/add-on-courses') },
            { href: '/academics/courses/value-added-courses', label: 'Value Added Courses', active: pathname.includes('/value-added-courses') },
            { href: '/academics/capability-enhancement-program', label: 'Capability Enhancement', active: pathname.includes('/capability-enhancement') },
            { href: '/academics/curriculum-feedback', label: 'Curriculum Feedback', active: pathname === '/academics/curriculum-feedback' },
            { href: '/academics/faculty-achievements/fdp-attended', label: 'FDP Attended', active: pathname.includes('/fdp-attended') }
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
            { href: '/accreditation/nirf/nirf-2024/dental', label: 'NIRF 2024 - Dental', active: pathname.includes('/nirf-2024') },
            { href: '/accreditation/nirf/nirf-2025/overall', label: 'NIRF 2025 - Overall', active: pathname.includes('/overall') },
            { href: '/accreditation/nirf/nirf-2025/dental', label: 'NIRF 2025 - Dental', active: pathname.includes('/dental') },
            { href: '/accreditation/nirf/nirf-2025/innovation', label: 'NIRF 2025 - Innovation', active: pathname.includes('/innovation') },
            { href: '/accreditation/nirf/nirf-2025/sdg-institution', label: 'SDG Institution', active: pathname.includes('/sdg-institution') }
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
            { href: '/committee/placement-cell-cdc/list-of-events', label: 'Placement Cell', active: pathname.includes('/placement-cell') },
            { href: '/committee/anti-ragging-committee/view-committee-members', label: 'Anti-Ragging', active: pathname.includes('/anti-ragging') },
            { href: '/committee/sedg-cell', label: 'SEDG Cell', active: pathname === '/committee/sedg-cell' },
            { href: '/committee/disciplinary-committee', label: 'Disciplinary', active: pathname.includes('/disciplinary') },
            { href: '/committee/examination-committee', label: 'Examination', active: pathname.includes('/examination') },
            { href: '/committee/finance-committee', label: 'Finance', active: pathname === '/committee/finance-committee' },
            { href: '/committee/student-welfare-committee', label: 'Student Welfare', active: pathname.includes('/student-welfare') }
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
          submenus: [
            { href: '/alumni/alumni-association-activities', label: 'Association Activities', active: pathname.includes('/association-activities') },
            { href: '/alumni/alumni-registration-certificate', label: 'Registration', active: pathname.includes('/registration') }
          ]
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
            { href: '/facilities/accessibility-&-inclusion-at-jkkndch', label: 'Accessibility', active: pathname.includes('/accessibility') },
            { href: '/facilities/library', label: 'Library', active: pathname === '/facilities/library' },
            { href: '/facilities/labs', label: 'Labs', active: pathname === '/facilities/labs' },
            { href: '/facilities/hostel/boys-hostel', label: 'Boys Hostel', active: pathname === '/facilities/hostel/boys-hostel' },
            { href: '/facilities/hostel/girls-hostel', label: 'Girls Hostel', active: pathname === '/facilities/hostel/girls-hostel' },
            { href: '/facilities/transport', label: 'Transport', active: pathname === '/facilities/transport' },
            { href: '/facilities/seminar-hall', label: 'Seminar Hall', active: pathname === '/facilities/seminar-hall' },
            { href: '/facilities/sports-club', label: 'Sports', active: pathname === '/facilities/sports-club' },
            { href: '/facilities/auditorium', label: 'Auditorium', active: pathname === '/facilities/auditorium' },
            { href: '/facilities/health-facilities', label: 'Health Facilities', active: pathname === '/facilities/health-facilities' },
            { href: '/facilities/wi-fi-campus', label: 'Wi-Fi Campus', active: pathname === '/facilities/wi-fi-campus' },
            { href: '/facilities/ambulance-services', label: 'Ambulance', active: pathname === '/facilities/ambulance-services' },
            { href: '/facilities/barrier-free-environment', label: 'Barrier Free', active: pathname.includes('/barrier-free') }
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
            { href: '/information-center/right-to-information-rti', label: 'RTI', active: pathname.includes('/rti') },
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
            { href: '/others/patient-safety-manual', label: 'Patient Safety', active: pathname.includes('/patient-safety') }
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
