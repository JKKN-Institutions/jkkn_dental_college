'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function NAAC() {
  const [activeSection, setActiveSection] = useState('overview');

  const menuItems = [
    { id: 'overview', label: 'Over View' },
    { id: 'vision-mission', label: 'Vision and Mission' },
    { id: 'core-values', label: 'Core Values' },
    { id: 'assessment', label: 'Assesment And Accrediation' },
    { id: 'extended-profile', label: 'extended profile' },
    { id: 'criterion-i', label: 'Criterion I' },
    { id: 'criterion-ii', label: 'Criterion II' },
    { id: 'criterion-iii', label: 'Criterion III' },
    { id: 'criterion-iv', label: 'Criterion IV' },
    { id: 'criterion-v', label: 'Criterion V' },
    { id: 'criterion-vi', label: 'Criterion VI' },
    { id: 'criterion-vii', label: 'Criterion VII' },
    { id: 'part-b', label: 'PART-B DENTAL' },
    { id: 'dvv', label: 'DVV' },
    { id: 'ssr', label: 'SSR' },
  ];

  return (
    <main className="overflow-x-hidden w-full">
      <Header />

      <div className="bg-white py-8 px-4">
        {/* Page Title */}
        <div className="max-w-7xl mx-auto mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1B5E20]">
            OVER VIEW
          </h1>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left Sidebar */}
            <div className="lg:w-64 flex-shrink-0">
              <div className="bg-white overflow-hidden">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full text-left px-6 py-4 font-bold transition-all duration-300 ${
                      activeSection === item.id
                        ? 'bg-[#89B54C] text-white'
                        : 'bg-[#89B54C] text-white hover:bg-[#7aa03d]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 bg-white">
              {activeSection === 'overview' && (
                <div className="space-y-12">
                  {/* Institutional Values and Social Responsibilities */}
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
                      Institutional Values and Social Responsibilities
                    </h2>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              METRIC NO.
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              TITLE
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              LINK
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">7.1.1 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              TOTAL NUMBER OF GENDER EQUITY SENSITIZATION PROGRAMMES ORGANIZED BY THE INSTITUTIONDURING THE LAST FIVE YEARS.
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">7.1.2 QLM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              MEASURES INITIATED BY THE INSTITUTION FOR THE PROMOTION OF GENDER EQUITY DURING THE LASTFIVE YEARS.
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">7.1.3 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              THE INSTITUTION HAS FACILITIES FOR ALTERNATE SOURCES OF ENERGY AND ENERGY CONSERVATIONVIEW DEVICES.
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">7.1.4 QLM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              DESCRIBE THE FACILITIES IN THE INSTITUTION FOR THE MANAGEMENT OF THE FOLLOWING TYPES OF DEGRADABLE AND NON-DEGRADABLE WASTE (WITHIN 500 WORDS)
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">7.1.5 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              WATER CONSERVATION FACILITIES AVAILABLE IN THE INSTITUTION:
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">7.1.6 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              GREEN CAMPUS INITIATIVES OF THE INSTITUTION
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">7.1.7 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              THE INSTITUTION HAS DIVYANGIAN FRIENDLY, BARRIER-FREE ENVIRONMENT IN THE CAMPUS
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">7.1.8 QLM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              DESCRIBE THE INSTITUTIONAL EFFORTS/INITIATIVES IN PROVIDING AN INCLUSIVE ENVIRONMENT I.E., TOLERANCE AND HARMONY TOWARDS CULTURAL, REGIONAL, LINGUISTIC, COMMUNAL SOCIO-ECONOMIC AND OTHER DIVERSITIES.
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">7.1.9 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              CODE OF CONDUCT HANDBOOK EXISTS FOR STUDENTS, TEACHERS AND ACADEMIC AND ADMINISTRATIVE STAFF INCLUDING THE DEAN / PRINCIPAL /OFFICIALS AND SUPPORT STAFF..
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">7.1.10 QLM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              THE INSTITUTION CELEBRATES / ORGANIZES NATIONAL AND INTERNATIONAL COMMEMORATIVE DAYS, EVENTS AND FESTIVALS
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>

                  {/* Best Practices */}
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
                      Best Practices
                    </h2>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              METRIC NO.
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              TITLE
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              LINK
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">7.2.1 QLM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              DESCRIBE TWO INSTITUTIONAL BEST PRACTICES AS PER THE NAAC FORMAT PROVIDED IN THE MANUAL.
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>

                  {/* Institutional Distinctiveness */}
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
                      Institutional Distinctiveness
                    </h2>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              METRIC NO.
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              TITLE
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              LINK
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">7.3.1 QLM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              PORTRAY THE PERFORMANCE OF THE INSTITUTION IN ONE AREA DISTINCTIVE TO ITS PRIORITY ANDVIEW THRUST WITHIN 500 WORDS.
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>
                </div>
              )}

              {activeSection === 'criterion-vi' && (
                <div className="space-y-12">
                  {/* Criterion VI - Governance, Leadership and Management */}
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
                      Governance, Leadership and Management
                    </h2>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              METRIC NO.
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              TITLE
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              LINK
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">6.3.1 QLM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              THE INSTITUTION HAS EFFECTIVE WELFARE MEASURES FOR TEACHING AND NON-TEACHING STAFF
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">6.3.2 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              AVERAGE PERCENTAGE OF TEACHERS PROVIDED WITH FINANCIAL SUPPORT TO ATTENDVIEW CONFERENCES/WORKSHOPS AND TOWARDS MEMBERSHIP FEE OF PROFESSIONAL BODIES DURING THE LAST FIVE YEARS
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">6.3.3 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              AVERAGE NUMBER OF PROFESSIONAL DEVELOPMENT / ADMINISTRATIVE TRAINING PROGRAMMESVIEW ORGANIZED BY THE INSTITUTION FOR TEACHING AND NON- TEACHING STAFF DURING THE LAST FIVE YEARS
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">6.3.4 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              AVERAGE PERCENTAGE OF TEACHERS UNDERGOING FACULTY DEVELOPMENT PROGRAMMES (FDPVIEW INCLUDING ONLINE PROGRAMMES (ORIENTATION / INDUCTION PROGRAMMES, REFRESHER COURSE, SHORT TERM COURSE ETC.) DURING THE LAST FIVE YEARS..
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">6.3.5 QLM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              INSTITUTION HAS PERFORMANCE APPRAISAL SYSTEM FOR TEACHING AND NON-TEACHING STAFF
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>

                  {/* Financial Management and Resource Mobilization */}
                  <section className="mt-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
                      Financial Management and Resource Mobilization
                    </h2>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              METRIC NO.
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              TITLE
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              LINK
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">6.4.1 QLM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              INSTITUTIONAL STRATEGIES FOR MOBILISATION OF FUNDS AND THE OPTIMAL UTILISATION OFVIEW RESOURCES
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">6.4.2 QLM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              INSTITUTION CONDUCTS INTERNAL AND EXTERNAL FINANCIAL AUDITS REGULARLY
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">6.4.3 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              FUNDS / GRANTS RECEIVED FROM GOVERNMENT/NON-GOVERNMENT BODIES, INDIVIDUALS,VIEW PHILANTHROPISTS DURING THE LAST FIVE YEARS (NOT COVERED IN CRITERION III)
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>

                  {/* Internal Quality Assurance System */}
                  <section className="mt-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
                      Internal Quality Assurance System
                    </h2>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              METRIC NO.
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              TITLE
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              LINK
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">6.5.1 QLM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              INSTITUION HAS A STREAMLINED INTERNAL QUALITY ASSURANCE MECHANISM
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">6.5.2 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              AVERAGE PERCENTAGE OF TEACHERS ATTENDING PROGRAMS/WORKSHOPS/SEMINARS SPECIFIC TOVIEW QUALITY IMPROVEMENT IN THE LAST 5 YEARS
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">6.5.3 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              THE INSTITUTION ADOPTS SEVERAL QUALITY ASSURANCE INITIATIVES
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>
                </div>
              )}

              {activeSection === 'criterion-vii' && (
                <div className="space-y-12">
                  {/* Part B - Criteria VIII */}
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
                      CRITERIA VIII
                    </h2>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              METRIC NO
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              TITLE
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              LINK
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">8.1.1QNM</td>
                            <td className="border border-gray-300 px-4 py-3 italic">
                              NEET PERCENTILE SCORES OF STUDENTS ENROLLED FOR THE BDS PROGRAMME FOR THEPRECEDINGVIEW ACADEMIC YEAR.
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">8.1.2 QLM</td>
                            <td className="border border-gray-300 px-4 py-3 italic">
                              THE INSTITUTION ENSURES ADEQUATE TRAINING FOR STUDENTS IN PRE-CLINICALSKILLS
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">8.1.3.QNM</td>
                            <td className="border border-gray-300 px-4 py-3 italic">
                              INSTITUTION FOLLOWS INFECTION CONTROL PROTOCOLS DURING CLINICAL TEACHING DURINGVIEW PRECEDING ACADEMIC YEAR
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">8.1.4 QLM</td>
                            <td className="border border-gray-300 px-4 py-3 italic">
                              ORIENTATION / FOUNDATION COURSES PRACTICED IN THE INSTITUTION FORSTUDENTS ENTERING THEVIEW COLLEGE / CLINICS / INTERNSHIP.
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">8.1.5.QNM</td>
                            <td className="border border-gray-300 px-4 py-3 italic">
                              THE STUDENTS ARE TRAINED FOR USING HIGH END EQUIPMENT FORDIAGNOSTIC AND THERAPEUTICVIEW PURPOSES IN THE INSTITUTION. DATA FOR THEPRECEDING ACADEMIC YEAR
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">8.1.6.QNM</td>
                            <td className="border border-gray-300 px-4 py-3 italic">
                              THE INSTITUTION PROVIDES STUDENT TRAINING IN SPECIALIZED CLINICS AND FACILITIES FOR CARE ANDVIEW TREATMENT.
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">8.1.7.QNM</td>
                            <td className="border border-gray-300 px-4 py-3 italic">
                              NUMBER OF FULL-TIME TEACHERS WHO HAVE ACQUIRED ADDITIONALVIEW POSTGRADUATEDEGREES/DIPLOMAS/FELLOWSHIPS BEYOND THE ELIGIBILITY REQUIREMENTS FROM RECOGNIZED CENTERS/UNIVERSITIES IN INDIA OR ABROAD. (EG: AB, FRCS, MRCP, FAMS, FAIMER & IFME, FELLOWSHIPS, PH D IN DENTAL EDUCATION ETC.) DURING THE YEAR
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">8.1.8 QLM</td>
                            <td className="border border-gray-300 px-4 py-3 italic">
                              THE INSTITUTION HAS INTRODUCED OBJECTIVE METHODS TO MEASURE AND CERTIFY ATTAINMENT OFVIEW SPECIFIC CLINICAL COMPETENCIES BY BDS STUDENTS/INTERNS AS STATED IN THE UNDERGRADUATE CURRICULUM BY THE DENTAL COUNCIL OF INDIA
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">8.1.9. QNM</td>
                            <td className="border border-gray-300 px-4 py-3 italic">
                              NUMBER OF FIRST YEAR STUDENTS, PROVIDED WITH PROPHYLACTIC IMMUNIZATIONVIEW AGAINSTCOMMUNICABLE DISEASES LIKE HEPATITIS-B DURING THEIR CLINICAL WORK DURING THE YEAR.
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">8.1.10 QLM</td>
                            <td className="border border-gray-300 px-4 py-3 italic">
                              THE COLLEGE HAS ADOPTED METHODS TO DEFINE AND IMPLEMENT DENTAL GRADUATE ATTRIBUTESVIEW WITH A SYSTEM OF EVALUATION OF ATTAINMENT OF SUCH ATTRIBUTES.
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">8.1.11.QNM</td>
                            <td className="border border-gray-300 px-4 py-3 italic">
                              PER CAPITA EXPENDITURE ON DENTAL MATERIALS AND OTHER CONSUMABLES USED FOR STUDENTVIEW TRAINING DURING THE YEAR.
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">8.1.12 QLM</td>
                            <td className="border border-gray-300 px-4 py-3 italic">
                              ESTABLISHMENT OF DENTAL EDUCATION DEPARTMENT BY THE COLLEGE FORTHE RANGE AND QUALITYVIEW OF FACULTY DEVELOPMENT PROGRAMMES IN EMERGING TRENDS IN DENTAL EDUCATIONAL TECHNOLOGY ORGANIZED BY IT.
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>
                </div>
              )}

              {activeSection === 'ssr' && (
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
                    SSR
                  </h2>
                  <div>
                    <button className="bg-[#89B54C] hover:bg-[#7aa03d] text-white font-bold py-3 px-8 rounded transition-all duration-300">
                      Pre Qualified SSR
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Send Button */}
      <button className="fixed bottom-8 right-8 bg-[#89B54C] hover:bg-[#7aa03d] text-white p-4 rounded-full shadow-lg transition-all duration-300 z-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          />
        </svg>
      </button>

      <FloatingWhatsApp />
      <Footer />
    </main>
  );
}
