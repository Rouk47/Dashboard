import React from "react";
import Navbar from "../Components/Navbar";
import {
  Users,
  ClipboardList,
  CalendarCheck,
  CalendarRange,
  ArrowBigUp,
  ArrowBigDown,
  EllipsisVertical,
  Tally1,
  NotebookPen,
} from "lucide-react";
import Controlled from "../Components/Controlled";
import Chart from "../Components/Chart";

export default function Home() {
  return (
    <div className="py-4 p-4 sm:ml-64">
      <div className="stats shadow rounded-lg dark:border-gray-700 w-full ">
        <Navbar />
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 pt-4 w-full">
        {/* Statistics Section */}
        <div className="col-span-1 grid grid-cols-1 gap-4">
          {/* Statistic 1: Total Employee */}
          <div className="stats shadow">
            <div className="stat p-4">
              <div className="flex items-center space-x-2">
                <div className="btn btn-info badge-lg">
                  <Users color="#ffffff" />
                </div>
                <div>Total Employee</div>
              </div>
              <div className="flex justify-between items-center text-3xl font-bold p-2">
                <div>666</div>
                <div className="badge bg-green-200 text-success rounded">
                  <ArrowBigUp size={20} color="#069335" /> 12%
                </div>
              </div>
              <div className="stat-desc  text-left pt-3">Update: Feb 18, 2024</div>
            </div>
          </div>

          {/* Statistic 2: Total Attendance */}
          <div className="stats shadow">
            <div className="stat p-4">
              <div className="flex items-center space-x-2">
                <div className="btn btn-info badge-lg">
                  <CalendarCheck color="#ffffff" />
                </div>
                <div>Total Attendance</div>
              </div>
              <div className="flex justify-between items-center text-3xl font-bold p-2">
                <div>666</div>
                <div className="badge bg-red-200 text-red-700 rounded">
                  <ArrowBigDown size={20} color="#bd0000" /> 8%
                </div>
              </div>
              <div className="stat-desc  text-left pt-3">Update: Feb 18, 2024</div>
            </div>
          </div>
        </div>

        {/* Second Column for more statistics */}
        <div className="col-span-1 grid grid-cols-1 gap-4">
          {/* Statistic 3: Total Leaves */}
          <div className="stats shadow">
            <div className="stat p-4">
              <div className="flex items-center space-x-2">
                <div className="btn btn-info badge-lg">
                  <ClipboardList color="#ffffff" />
                </div>
                <div>Total Leaves</div>
              </div> 
              <div className="flex justify-between items-center text-3xl font-bold p-2">
                <div>123</div>
                <div className="badge bg-green-200 text-success rounded">
                  <ArrowBigUp size={20} color="#069335" /> 5%
                </div>
              </div>
              <div className="stat-desc  text-left pt-3">Update: Feb 18, 2024</div>
            </div>
          </div>

          {/* Statistic 4: Total Overtime */}
          <div className="stats shadow">
            <div className="stat p-4 ">
              <div className="flex items-center space-x-2">
                <div className="btn btn-info badge-lg">
                  <NotebookPen color="#ffffff" />
                </div>
                <div>Total Overtime</div>
              </div>
              <div className="flex justify-between items-center text-3xl font-bold p-2">
                <div>666</div>
                <div className="badge bg-green-200 text-success rounded">
                  <ArrowBigUp size={20} color="#069335" /> 12%
                </div>
              </div>
              <div className="stat-desc  text-left pt-3">Update: Feb 18, 2024</div>
            </div>
          </div>
        </div>

        {/* Schedule Section */}
        <div className="col-span-1 lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-4">
          <div className="stats shadow w-full h-full">
            <div className="text-lg font-bold shadow p-4">
              <div className="flex justify-between">
                <div>My Schedule</div>
                <div className="btn btn-info badge-lg">
                  <CalendarRange color="#ffffff" />
                </div>
              </div>

              <div className="flex justify-center items-center pt-1">
                <Controlled />
              </div>

              <div className="flex justify-between font-normal text-lg pt-3">
                <div>Wednesday, 06 Feb 2024</div>
                <div>
                  <EllipsisVertical />
                </div>
              </div>

              {/* Schedule Entries */}
              <div className="flex flex-col space-y-4 pt-3">
                <div className="font-normal space-y-4">
                  <div className="flex items-center space-x-3 font-bold">
                    <div className="text-lg">09:30</div>
                    <Tally1 color="#02bafd" />
                    <div>
                      <div className="text-sm font-normal">UI/UX Designer</div>
                      <div className="text-sm font-bold">Meeting</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 font-bold">
                    <div className="text-lg">12:00</div>
                    <Tally1 color="#02bafd" />
                    <div>
                      <div className="text-sm font-normal">Magento Developer</div>
                      <div className="text-sm font-bold">Meeting</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 font-bold">
                    <div className="text-lg">13:00</div>
                    <Tally1 color="#02bafd" />
                    <div>
                      <div className="text-sm font-normal">Sales Manager</div>
                      <div className="text-sm font-bold">Meeting</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between font-normal text-lg pt-3">
                <div>Thursday, 07 Feb 2024</div>
                <div>
                  <EllipsisVertical />
                </div>
              </div>

              <div className="flex flex-col space-y-4">
                <div className="font-normal space-y-3">
                  <div className="flex items-center space-x-3 font-bold pt-3">
                    <div className="text-lg">09:30</div>
                    <Tally1 color="#02bafd" />
                    <div>
                      <div className="text-sm font-normal">Front end Developer</div>
                      <div className="text-sm font-bold">Meeting</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 font-bold pt-3">
                    <div className="text-lg">11:00</div>
                    <Tally1 color="#02bafd" />
                    <div>
                      <div className="text-sm font-normal">React js</div>
                      <div className="text-sm font-bold">Meeting</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chart Section */}
        <div className="col-span-1 lg:col-span-2">
          <div className="flex justify-between items-center stats shadow">
            <div className="stat">
              <Chart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
