// TypeScript interfaces for navigation structure
export interface SubmenuItem {
  label: string;
  href: string;
  submenu?: SubmenuItem[];
}

export interface NavItem {
  label: string;
  href: string;
  submenu?: SubmenuItem[];
}

// Helper function to convert string arrays to proper submenu format
function createSubmenuItems(parentHref: string, items: (string | SubmenuItem)[]): SubmenuItem[] {
  return items.map((item) => {
    if (typeof item === 'string') {
      const slug = item.toLowerCase().replace(/[()\/]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');
      return {
        label: item,
        href: `${parentHref}/${slug}`,
      };
    }
    return item;
  });
}

// Navigation menu configuration - Top Row
export const topMenuItems: NavItem[] = [
  { label: "HOME", href: "/" },
  {
    label: "ABOUT",
    href: "/about",
    submenu: [
      { label: "OUR INSTITUTIONS", href: "/our-institutions" },
      { label: "VISION AND MISSION", href: "/vision-and-mission" },
      { label: "ACT & STATUTES", href: "/act-statutes" },
      { label: "INSTITUTIONAL DEVELOPMENT PLAN", href: "/institutional-development-plan" },
      {
        label: "APPROVALS AND AFFILIATION",
        href: "/about/approvals-and-affiliation",
        submenu: [
          { label: "UNIVERSITY PROVISIONAL AFFILIATION LETTERS – BDS", href: "/affiliation-bds" },
          { label: "UNIVERSITY PROVISIONAL AFFILIATION LETTERS -MDS", href: "/affiliation-mds" },
          { label: "DCI PERMISSION LETTER-BDS", href: "/dci-bds" },
          { label: "DCI PERMISSION LETTER-MDS", href: "/dci-mds" }
        ]
      },
      {
        label: "ACCREDITATION RANKING STATUS",
        href: "/accreditation-ranking-status",
        submenu: [
          { label: "NAAC", href: "/naac-about" }
        ]
      },
      { label: "ANNUAL REPORT", href: "/annual-report" },
      { label: "ANNUAL ACCOUNT STATEMENT", href: "/annual-account-statement" }
    ]
  },
  {
    label: "ADMINISTRATION",
    href: "/administration",
    submenu: [
      { label: "OUR TRUST", href: "/our-trust" },
      { label: "OUR MANAGEMENT", href: "/our-management" },
      { label: "PRINCIPAL'S MESSAGE", href: "/principals-message" },
      { label: "FINANCE OFFICER", href: "/finance-officer" },
      { label: "GOVERNING BODY", href: "/governing-body" },
      { label: "ACADEMIC COUNCIL", href: "/academic-council" },
      { label: "INTERNAL COMPLIANTS COMMITTEE", href: "/internal-compliants-committee" },
      { label: "ACADEMIC LEADERSHIP", href: "/academic-leadership" }
    ]
  },
  {
    label: "ACADEMICS",
    href: "/academics",
    submenu: [
      {
        label: "DETAILS OF ACADEMIC PROGRAMS",
        href: "/details-of-academic-programs",
        submenu: [
          { label: "BDS", href: "/bds" },
          {
            label: "MDS",
            href: "/mds",
            submenu: [
              { label: "PERIODONTICS", href: "/periodontics" },
              { label: "ORTHODONTICS AND DENTOFACIAL ORTHOPEDICS", href: "/orthodontics-and-dentofacial-orthopedics" },
              { label: "PROSTHODONTICS CROWN AND BRIDGE", href: "/prosthodontics-crown-and-bridge" },
              { label: "CONSERVATIVE DENTISTRY AND ENDODONTICS", href: "/conservative-dentistry-and-endodontics" },
              { label: "ORAL MEDICINE AND RADIOLOGY", href: "/oral-medicine-and-radiology" }
            ]
          }
        ]
      },
      {
        label: "ACADEMIC CALENDAR",
        href: "/academic-calendar",
        submenu: [
          { label: "ACADEMIC CALENDAR 2023-2024 & 2024-2025", href: "/academic-calendar-2023-2024-2024-2025" },
          { label: "ACADEMIC CALENDAR 2022-2023", href: "/academic-calendar-2022-2023" },
          { label: "ACADEMIC CALENDAR 2021-2022", href: "/academic-calendar-2021-2022" },
          { label: "ACADEMIC CALENDAR 2020-2021", href: "/academic-calendar-2020-2021" },
          { label: "ACADEMIC CALENDAR 2019-2020", href: "/academic-calendar-2019-2020" },
          { label: "ACADEMIC CALENDAR 2018-2019", href: "/academic-calendar-2018-2019" }
        ]
      },
      {
        label: "STATUTES & PERTAINING TO ACADEMIC DEPARTMENTS",
        href: "/statutes-pertaining-to-academic-departments",
        submenu: [
          { label: "BDS SYLLABUS", href: "/bds-syllabus" },
          { label: "MDS - PROSTHODONTICS SYLLABUS", href: "/mds-prosthodontics-syllabus" },
          { label: "MDS - PERIODONTICS SYLLABUS", href: "/mds-periodontics-syllabus" },
          { label: "MDS - ORTHODONTICS SYLLABUS", href: "/mds-orthodontics-syllabus" },
          { label: "MDS - ORAL MEDICINE AND RADIOLOGY SYLLABUS", href: "/mds-oral-medicine-and-radiology-syllabus" },
          { label: "MDS - CONSERVATIVE DENTISTRY AND ENDODONTICS SYLLABUS", href: "/mds-conservative-dentistry-and-endodontics-syllabus" }
        ]
      },
      { label: "MENTOR-MENTEE PROGRAM", href: "/mentor-mentee-program" },
      { label: "ACADEMIC ATTRIBUTES", href: "/academic-attributes" },
      { label: "LEARNING OUTCOMES", href: "/learning-outcomes" },
      { label: "STUDENT-CENTRIC TEACHING METHODS", href: "/student-centric-teaching-methods" },
      { label: "SLOW & ADVANCED LEARNERS", href: "/slow-advanced-learners" },
      {
        label: "COURSES",
        href: "/courses",
        submenu: [
          { label: "ADD-ON COURSES", href: "/add-on-courses" },
          { label: "VALUE ADDED COURSES", href: "/value-added-courses" },
          { label: "CROSS-CUTTING-ISSUES", href: "/cross-cutting-issues" }
        ]
      },
      { label: "CAPABILITY ENHANCEMENT PROGRAM", href: "/capability-enhancement-program" },
      { label: "CAREER COUNSELLING", href: "/career-counselling" },
      { label: "CURRICULUM FEEDBACK", href: "/curriculum-feedback" },
      {
        label: "FACULTY ACHIEVEMENTS",
        href: "/faculty-achievements",
        submenu: [
          { label: "FDP ATTENDED", href: "/fdp-attended" },
          { label: "WEBINAR/CONFERENCES ATTENDED", href: "/webinar-conferences-attended" }
        ]
      }
    ]
  },
  {
    label: "ACCREDITATION",
    href: "/accreditation",
    submenu: [
      { label: "NAAC", href: "/naac-accreditation" },
      {
        label: "NIRF",
        href: "/nirf",
        submenu: [
          {
            label: "NIRF-2024",
            href: "/nirf-2024",
            submenu: [
              { label: "DENTAL", href: "/dental-2024" },
              { label: "INNOVATION", href: "/innovation-2024" }
            ]
          },
          {
            label: "NIRF-2025",
            href: "/nirf-2025",
            submenu: [
              { label: "OVERALL", href: "/overall" },
              { label: "DENTAL", href: "/dental-2025" },
              { label: "INNOVATION", href: "/innovation-2025" },
              {
                label: "SDG INSTITUTION",
                href: "/sdg-institution",
                submenu: [
                  { label: "NIRF-2025 SDG", href: "/nirf-2025-sdg" }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    label: "ADMISSION & FEE",
    href: "/admission",
    submenu: [
      { label: "PROSPECTUS", href: "/prospectus" },
      {
        label: "ADMISSION PROCESS & GUIDELINES",
        href: "/admission-process-guidelines",
        submenu: [
          { label: "ADMISSION CRITERION IN OTHERS", href: "/admission-criterion-in-others" }
        ]
      },
      { label: "FEE REFUND POLICY", href: "/fee-refund-policy" },
      { label: "SCHOLARSHIP POLICY FOR DENTAL COLLEGE", href: "/scholarship-policy-for-dental-college" },
      { label: "ADMISSION CRITERIA", href: "/admission-criteria" },
      { label: "EQUITABLE OPPORTUNITY FOR SEDG GROUP", href: "/equitable-opportunity-for-sedg-group" }
    ]
  },
  {
    label: "RESEARCH",
    href: "/research",
    submenu: [
      { label: "RESEARCH & DEVELOPMENT (R&D) CELL", href: "/research-development-rd-cell" },
      { label: "RESEARCH AND DISSERTATION", href: "/research-and-dissertation" },
      { label: "INSTITUTION'S INNOVATION COUNCIL ( IIC )", href: "/institutions-innovation-council-iic" },
      { label: "RESEARCH PROPOSAL AND CONSENT FORMS", href: "/research-proposal-and-consent-forms" },
      { label: "INSTITUTIONAL ETHICAL COMMITTEE", href: "/institutional-ethical-committee" },
      { label: "INCUBATION CENTER", href: "/incubation-center" },
      { label: "START-UP", href: "/start-up" },
      { label: "MOU (Memorandum of Understanding)", href: "/mou-memorandum-of-understanding" },
      { label: "COLLABORATION", href: "/collaboration" },
      { label: "PUBLICATION", href: "/publication" }
    ]
  },
  { label: "IQAC", href: "/iqac" },
];

// Navigation menu configuration - Bottom Row
export const bottomMenuItems: NavItem[] = [
  {
    label: "COMMITTEE",
    href: "/committee",
    submenu: [
      { label: "STUDENT COUNCIL", href: "/student-council" },
      { label: "INSTITUTION'S INNOVATION COUNCIL ( IIC )", href: "/institutions-innovation-council-iic" },
      { label: "INTERNAL COMPLIANTS COMMITTEE (ICC)", href: "/internal-compliants-committee-icc" },
      { label: "STUDENT GRIEVANCE REDRESSAL COMMITTEE (SGRC)", href: "/student-grievance-redressal-committee-sgrc" },
      { label: "PLACEMENT CELL / CDC", href: "/placement-cell-cdc" },
      { label: "INSTITUTIONAL ETHICAL COMMITTEE", href: "/institutional-ethical-committee" },
      { label: "ANTI-RAGGING COMMITTEE", href: "/anti-ragging-committee" },
      { label: "SEDG CELL", href: "/sedg-cell" },
      { label: "DISCIPLINARY COMMITTEE", href: "/disciplinary-committee" },
      { label: "DENTAL EDUCATION DEPARTMENT", href: "/dental-education-department" },
      { label: "MENTORING COMMITTEE", href: "/mentoring-committee" },
      { label: "PHYSICAL INFRASTRUCTURE AND PURCHASE & MAINTENANCE COMMITTEE", href: "/physical-infrastructure-and-purchase-maintenance-committee" },
      { label: "EXAMINATION COMMITTEE", href: "/examination-committee" },
      { label: "HOSTEL ADVISORY & WELFARE COMMITTEE", href: "/hostel-advisory-welfare-committee" },
      { label: "LIBRARY AND LEARNING RESOURCES COMMITTEE", href: "/library-and-learning-resources-committee" },
      { label: "FINANCE COMMITTEE", href: "/finance-committee" },
      { label: "STUDENT WELFARE COMMITTEE", href: "/student-welfare-committee" },
      { label: "PHYSICAL EDUCATION & EXTRA CURRUCULAR ACTIVITIES COMMITTEE", href: "/physical-education-extra-currucular-activities-committee" },
      { label: "PATIENT WELFARE COMMITTEE", href: "/patient-welfare-committee" },
      { label: "NCC/NSS", href: "/ncc-nss" },
      { label: "INTERNATIONAL STUDENT CELL COMMITTEE", href: "/international-student-cell-committee" }
    ]
  },
  { label: "ALUMNI", href: "/alumni" },
  {
    label: "MANDATORY DISCLOSURES",
    href: "/mandatory-disclosures",
    submenu: [
      { label: "GUIDELINES ON PUBLIC DISCLOSURE BY HEIS", href: "/guidelines-on-public-disclosure-by-heis" },
      { label: "LETTER OF UNDERTAKING", href: "/letter-of-undertaking" },
      { label: "UGC PUBLIC DISCLOSURE COMPLIANCE", href: "/ugc-public-disclosure-compliance" }
    ]
  },
  {
    label: "FACILITIES",
    href: "/facilities",
    submenu: [
      { label: "ACCESSIBILITY & INCLUSION AT JKKNDCH", href: "/accessibility-inclusion-at-jkkndch" },
      { label: "LIBRARY", href: "/library" },
      { label: "OUTREACH REQUEST", href: "https://outreach.dental.jkkn.ac.in/" },
      { label: "LABS", href: "/labs" },
      { label: "FOOD COURT", href: "/food-court" },
      {
        label: "HOSTEL",
        href: "/hostel",
        submenu: [
          { label: "Boys Hostel", href: "/boys-hostel" },
          { label: "Girls Hostel", href: "/girls-hostel" }
        ]
      },
      { label: "TRANSPORT", href: "/transport" },
      { label: "SEMINAR HALL", href: "/seminar-hall" },
      { label: "SPORTS CLUB", href: "/sports-club" },
      { label: "AUDITORIUM", href: "/auditorium" },
      { label: "BANK & POST OFFICE", href: "/bank-post-office" },
      { label: "DIGITAL CLASS ROOM", href: "/digital-class-room" },
      { label: "HEALTH FACILITIES", href: "/health-facilities" },
      { label: "WI-FI CAMPUS", href: "/wi-fi-campus" },
      { label: "AMBULANCE SERVICES", href: "/ambulance-services" },
      { label: "PRIVACY POLICY", href: "/privacy-policy" },
      { label: "BARRIER FREE ENVIRONMENT", href: "/barrier-free-environment" }
    ]
  },
  {
    label: "INFORMATION CENTER",
    href: "/information-center",
    submenu: [
      { label: "RIGHT TO INFORMATION (RTI)", href: "/right-to-information-rti" },
      { label: "ANNOUNCEMENTS", href: "/announcements" },
      { label: "NEWS", href: "/news" },
      { label: "EVENTS", href: "/events" },
      { label: "CAREERS", href: "/careers" }
    ]
  },
  { label: "GALLERY", href: "/gallery" },
  {
    label: "OTHERS",
    href: "/others",
    submenu: [
      { label: "DIGITAL CAMPUS", href: "/digital-campus" },
      { label: "PATIENT SAFETY MANUAL", href: "/patient-safety-manual" },
      { label: "OUTREACH", href: "/outreach" }
    ]
  },
  { label: "CONTACT", href: "/contact" },
];

// Combined menu for mobile
export const navigationMenu: NavItem[] = [...topMenuItems, ...bottomMenuItems];

// Note: The Header component has special handling for certain menu labels:
// - 'OTHERS', 'COMMITTEE', 'RESEARCH' menus will align to the right
// - Nested submenus for these items will open to the left instead of right
//
// You can modify these behaviors in the Header.tsx component if needed.
