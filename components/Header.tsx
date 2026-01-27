"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { topMenuItems, bottomMenuItems, navigationMenu, type SubmenuItem, type NavItem } from "@/data/siteData";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [activeNestedSubmenu, setActiveNestedSubmenu] = useState<string | null>(null);
  const [activeThirdLevelSubmenu, setActiveThirdLevelSubmenu] = useState<string | null>(null);
  const [mobileOpenMenus, setMobileOpenMenus] = useState<Set<string>>(new Set());

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMobileMenu = (label: string) => {
    const newSet = new Set(mobileOpenMenus);
    if (newSet.has(label)) {
      newSet.delete(label);
    } else {
      newSet.add(label);
    }
    setMobileOpenMenus(newSet);
  };

  const renderMenuItem = (item: NavItem) => (
    <div
      key={item.label}
      className="relative group"
      onMouseEnter={() => item.submenu && setActiveSubmenu(item.label)}
      onMouseLeave={() => {
        setActiveSubmenu(null);
        setActiveNestedSubmenu(null);
        setActiveThirdLevelSubmenu(null);
      }}
    >
      {item.submenu ? (
        <button
          className="text-black hover:text-primary font-semibold text-[13px] px-3 py-2 transition-colors whitespace-nowrap flex items-center gap-1"
        >
          {item.label}
          <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12">
            <path d="M6 9L1 4h10z" />
          </svg>
        </button>
      ) : (
        <Link
          href={item.href}
          className="text-black hover:text-primary font-semibold text-[13px] px-3 py-2 transition-colors whitespace-nowrap flex items-center gap-1"
        >
          {item.label}
        </Link>
      )}

      {/* First Level Submenu */}
      {item.submenu && activeSubmenu === item.label && (
        <div className={`absolute top-full mt-0 bg-white shadow-lg py-2 ${['COMMITTEE', 'FACILITIES'].includes(item.label) ? 'min-w-[520px] max-h-[calc(100vh-120px)] overflow-y-auto' : 'min-w-[240px]'} border border-gray-200 z-50 ${['OTHERS', 'RESEARCH'].includes(item.label) ? 'right-0' : 'left-0'}`}>
          <div className={`${['COMMITTEE', 'FACILITIES'].includes(item.label) ? 'grid grid-cols-2 gap-0 relative' : ''}`}>
            {/* Center divider line for 2-column layouts */}
            {['COMMITTEE', 'FACILITIES'].includes(item.label) && (
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 transform -translate-x-1/2"></div>
            )}

            {item.submenu.map((subitem: SubmenuItem) => (
              <div
                key={subitem.label}
                className="relative group/nested"
                onMouseEnter={() => subitem.submenu && setActiveNestedSubmenu(subitem.label)}
                onMouseLeave={() => !subitem.submenu && setActiveNestedSubmenu(null)}
              >
                {subitem.submenu ? (
                  <Link
                    href={subitem.href}
                    className="w-full block px-4 py-2.5 text-sm text-gray-600 hover:bg-primary hover:text-white transition-colors flex items-center justify-between"
                  >
                    <span>{subitem.label}</span>
                    <svg className={`w-3 h-3 fill-current ml-2 ${['OTHERS', 'COMMITTEE', 'RESEARCH'].includes(item.label) ? 'rotate-180' : ''}`} viewBox="0 0 12 12">
                      <path d="M4 1l5 5-5 5z" />
                    </svg>
                  </Link>
                ) : (
                  <Link
                    href={subitem.href}
                    className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-primary hover:text-white transition-colors flex items-center justify-between"
                  >
                    <span>{subitem.label}</span>
                  </Link>
                )}

              {/* Nested Submenu */}
              {subitem.submenu && activeNestedSubmenu === subitem.label && (
                <div className={`absolute top-0 ${['OTHERS', 'COMMITTEE', 'RESEARCH'].includes(item.label) ? 'right-full mr-0' : 'left-full ml-0'} bg-white shadow-lg py-2 min-w-[260px] border border-gray-200 z-50 overflow-visible`}>
                  {subitem.submenu.map((nestedItem) => (
                    <div
                      key={nestedItem.label}
                      className="relative group/third"
                      onMouseEnter={() => nestedItem.submenu && setActiveThirdLevelSubmenu(nestedItem.label)}
                      onMouseLeave={() => !nestedItem.submenu && setActiveThirdLevelSubmenu(null)}
                    >
                      {nestedItem.submenu ? (
                        <Link
                          href={nestedItem.href}
                          className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-primary hover:text-white transition-colors flex items-center justify-between"
                        >
                          <span>{nestedItem.label}</span>
                          <svg className={`w-3 h-3 fill-current ml-2 ${['OTHERS', 'COMMITTEE', 'RESEARCH'].includes(item.label) ? 'rotate-180' : ''}`} viewBox="0 0 12 12">
                            <path d="M4 1l5 5-5 5z" />
                          </svg>
                        </Link>
                      ) : (
                        <Link
                          href={nestedItem.href}
                          className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-primary hover:text-white transition-colors"
                        >
                          {nestedItem.label}
                        </Link>
                      )}

                      {/* Third Level Submenu */}
                      {nestedItem.submenu && activeThirdLevelSubmenu === nestedItem.label && (
                        <div className={`absolute top-0 ${['OTHERS', 'COMMITTEE', 'RESEARCH'].includes(item.label) ? 'right-full mr-0' : 'left-full ml-0'} bg-white shadow-lg py-2 min-w-[260px] border border-gray-200 z-50 overflow-visible`}>
                          {nestedItem.submenu.map((thirdLevelItem) => (
                            <Link
                              key={thirdLevelItem.label}
                              href={thirdLevelItem.href}
                              className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-primary hover:text-white transition-colors"
                            >
                              {thirdLevelItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <header className="bg-white fixed top-0 left-0 right-0 z-50">
      {/* Desktop Header - 2 Row Layout */}
      <div className="hidden xl:block">
        <div className="w-full">
          <div className="max-w-[1600px] mx-auto px-4 lg:px-8 py-2">
            <div className="flex items-center gap-1">
              {/* Logo - Left Side (spans both rows) */}
              <Link href="/" className="flex items-center gap-2 flex-shrink-0">
                <Image
                  src="/images/dental-logo.png"
                  alt="JKKN Dental College & Hospital"
                  width={115}
                  height={56}
                  className="h-14 w-auto object-contain"
                  priority
                />
              </Link>

              {/* Navigation Rows Container */}
              <div className="flex-1 flex flex-col gap-0">
                {/* Top Navigation Row */}
                <div className="flex items-center justify-center gap-1">
                  {topMenuItems.map((item) => renderMenuItem(item))}
                </div>

                {/* Bottom Navigation Row */}
                <div className="flex items-center justify-center gap-1">
                  {bottomMenuItems.map((item) => renderMenuItem(item))}
                </div>
              </div>

              {/* Search Icon - Right Side (spans both rows) */}
              <div className="flex items-center flex-shrink-0">
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors" aria-label="Search">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <nav className="xl:hidden w-full py-3 px-4">
        <div className="flex items-center gap-4">
          {/* Logo - Left Side */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <Image
              src="/images/dental-logo.png"
              alt="JKKN Dental College & Hospital"
              width={115}
              height={56}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="p-2 hover:bg-gray-100 rounded-md ml-auto relative z-[70]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`bg-gray-700 h-0.5 w-full transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`bg-gray-700 h-0.5 w-full ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`bg-gray-700 h-0.5 w-full transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-white z-[60] overflow-y-auto pt-20">
            <div className="p-4">
            {navigationMenu.map((item) => (
              <div key={item.label} className="mb-2">
                <div className="flex items-center justify-between">
                  {item.submenu ? (
                    <button
                      onClick={() => toggleMobileMenu(item.label)}
                      className="flex-1 py-2.5 px-4 text-black hover:bg-gray-50 hover:text-primary font-semibold rounded text-left flex items-center justify-between"
                    >
                      <span>{item.label}</span>
                      <svg
                        className={`w-4 h-4 fill-current transition-transform ${mobileOpenMenus.has(item.label) ? 'rotate-180' : ''}`}
                        viewBox="0 0 12 12"
                      >
                        <path d="M6 9L1 4h10z" />
                      </svg>
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={`flex-1 py-2.5 text-black hover:bg-gray-50 hover:text-primary font-semibold rounded flex items-center ${item.label === 'HOME' ? 'px-8' : 'px-4'}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
                {item.submenu && mobileOpenMenus.has(item.label) && (
                  <div className="pl-4 mt-1 space-y-1">
                    {item.submenu.map((subitem: SubmenuItem) => (
                      <div key={subitem.label}>
                        <div className="flex items-center justify-between">
                          {subitem.submenu ? (
                            <button
                              onClick={() => toggleMobileMenu(subitem.label)}
                              className="flex-1 py-2 px-4 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary rounded text-left flex items-center justify-between"
                            >
                              <span>{subitem.label}</span>
                              <svg
                                className={`w-3 h-3 fill-current transition-transform ${mobileOpenMenus.has(subitem.label) ? 'rotate-180' : ''}`}
                                viewBox="0 0 12 12"
                              >
                                <path d="M6 9L1 4h10z" />
                              </svg>
                            </button>
                          ) : (
                            <Link
                              href={subitem.href}
                              className="flex-1 py-2 px-4 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary rounded"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subitem.label}
                            </Link>
                          )}
                        </div>
                        {subitem.submenu && mobileOpenMenus.has(subitem.label) && (
                          <div className="pl-4 mt-1 space-y-1">
                            {subitem.submenu.map((nestedItem) => (
                              <div key={nestedItem.label}>
                                <div className="flex items-center justify-between">
                                  {nestedItem.submenu ? (
                                    <button
                                      onClick={() => toggleMobileMenu(nestedItem.label)}
                                      className="flex-1 py-2 px-4 text-xs text-gray-600 hover:bg-gray-50 hover:text-primary rounded text-left flex items-center justify-between"
                                    >
                                      <span>{nestedItem.label}</span>
                                      <svg
                                        className={`w-3 h-3 fill-current transition-transform ${mobileOpenMenus.has(nestedItem.label) ? 'rotate-180' : ''}`}
                                        viewBox="0 0 12 12"
                                      >
                                        <path d="M6 9L1 4h10z" />
                                      </svg>
                                    </button>
                                  ) : (
                                    <Link
                                      href={nestedItem.href}
                                      className="flex-1 py-2 px-4 text-xs text-gray-600 hover:bg-gray-50 hover:text-primary rounded"
                                      onClick={() => setIsMenuOpen(false)}
                                    >
                                      {nestedItem.label}
                                    </Link>
                                  )}
                                </div>
                                {nestedItem.submenu && mobileOpenMenus.has(nestedItem.label) && (
                                  <div className="pl-4 mt-1 space-y-1">
                                    {nestedItem.submenu.map((thirdLevelItem) => (
                                      <Link
                                        key={thirdLevelItem.label}
                                        href={thirdLevelItem.href}
                                        className="block py-2 px-4 text-xs text-gray-600 hover:bg-gray-50 hover:text-primary rounded"
                                        onClick={() => setIsMenuOpen(false)}
                                      >
                                        {thirdLevelItem.label}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile Search */}
            <button className="w-full mt-2 py-2.5 px-4 text-left text-black hover:bg-gray-50 font-semibold rounded flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Search
            </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
