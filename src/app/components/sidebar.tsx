'use client';
import React from 'react';
import { SlidersHorizontal, LayoutDashboard, Users, RefreshCcwDot, CalendarCheck, ClipboardList, NotebookPen, Settings } from 'lucide-react';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <div>
      <aside
        id="sidebar-multi-level-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto">
          <div className="flex flex-col sm:flex-row items-center px-4 py-4">
            <img src="/LogoPH.webp" width={150} height={100} alt="Logo" />
            <SlidersHorizontal color="#02bafd" className="sm:ms-2 mt-2 sm:mt-0" />
          </div>
          <ul className="font-medium py-10 space-y-2">
            <li>
              <Link href="/Dashboard" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <LayoutDashboard />
                <span className="ms-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link href="/AllEmployees" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <Users />
                <span className="flex-1 ms-3 text-left whitespace-nowrap">
                  All Employees
                </span>
              </Link>
            </li>
            <li>
              <Link href="/AllDepartments" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <RefreshCcwDot />
                <span className="flex-1 ms-3 whitespace-nowrap">All Departments</span>
              </Link>
            </li>
            <li>
              <Link href="/Attendance" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <CalendarCheck />
                <span className="flex-1 ms-3 whitespace-nowrap">Attendance</span>
              </Link>
            </li>
            <li>
              <Link href="/LeaveRequests" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <ClipboardList />
                <span className="flex-1 ms-3 whitespace-nowrap">Leave Requests</span>
              </Link>
            </li>
            <li>
              <Link href="/Holidays" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <NotebookPen />
                <span className="flex-1 ms-3 whitespace-nowrap">Holidays</span>
              </Link>
            </li>
            <li>
              <Link href="/Settings" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <Settings />
                <span className="flex-1 ms-3 whitespace-nowrap">Settings</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
