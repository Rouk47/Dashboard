import React from "react";
import Navbar from "../components/navbar";
import {
  Users,
  ClipboardList,
  CalendarCheck,
  CalendarRange,
  ArrowBigUp,
  ArrowBigDown,
  EllipsisVertical
} from "lucide-react";
import Controlled from "../components/controlled";

export default function Home() {
  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
        <div className="grid grid-cols-1 gap-4 mb-4">
          <Navbar />
        </div>

        <div className="grid grid-row-3 grid-cols-3 grid-flow-col gap-4">
          <div className="row-start  stats shadow">
            <div className="stat">
              <div className="flex items-center space-x-2">
                <div className="btn btn-info badge-lg">
                  <Users color="#ffffff" />
                </div>
                <div>Total Employee</div>
              </div>
              <div className="flex justify-between items-center text-3xl font-bold">
                <div>666</div>
                <div className="badge bg-green-200 text-success rounded">
                  <ArrowBigUp size={20} color="#069335" /> 12%
                </div>
              </div>
              <div className="stat-desc pt-3">Update</div>
            </div>
          </div>


          <div className="row-start stats shadow">
            <div className="stat">
              <div className="flex items-center space-x-2">
                <div className="btn btn-info badge-lg">
                  <CalendarCheck color="#ffffff" />
                </div>
                <div>Total Attendance</div>
              </div>
              <div className="flex justify-between items-center text-3xl font-bold">
                <div>666</div>
                <div className="badge bg-red-200 text-red-700 rounded">
                  <ArrowBigDown size={20} color="#bd0000" /> 5%
                </div>
              </div>
              <div className="stat-desc pt-3">Update</div>
            </div>
          </div>

          <div className="row-start-3 col-span-2 stats shadow">
            <div className="stat">
              <div className="flex items-center space-x-2">
                <div>
                graph</div>
              </div>
            </div>
          </div>

          <div className="row-end stats shadow">
            <div className="stat">
              <div className="flex items-center space-x-2">
                <div className="btn btn-info badge-lg">
                  <ClipboardList color="#ffffff" />
                </div>
                <div>Total Leaves</div>
              </div>
              <div className="flex justify-between items-center text-3xl font-bold">
                <div>123</div>
                <div className="badge bg-green-200 text-success rounded">
                  <ArrowBigUp size={20} color="#069335" /> 5%
                </div>
              </div>
              <div className="stat-desc pt-3">Update</div>
            </div>
          </div>

          <div className="row-end stats shadow">
            <div className="stat">
              <div className="flex items-center space-x-2">
                <div className="btn btn-info badge-lg">
                  <CalendarRange color="#ffffff" />
                </div>
                <div>Total Overtime</div>
              </div>
              <div className="flex justify-between items-center stat-value">
                <div>666</div>
                <div className="badge bg-green-200 text-success rounded">
                  <ArrowBigUp size={20} color="#069335" /> 12%
                </div>
              </div>
              <div className="stat-desc pt-3">Update</div>
            </div>
          </div>

          <div className="row-start-1 row-end-4 text-2xl font-bold  shadow p-4">
            <div className="flex justify-between ">
              <div>My Schedule</div>
              <div className="btn btn-info badge-lg">
                <CalendarRange color="#ffffff" />
              </div>
            </div>
            <div className="flex justify-center w-full pt-3">
              <Controlled />
            </div>
            <div className="flex justify-between font-normal text-lg pt-3">
              <div>Wednesday, 06 Feb 2024</div>
              <div>
                <EllipsisVertical />
              </div>
            </div>
            <div className="flex justify-between pt-3">
              <div className="font-normal">
                <div className="font-bold" >09.30</div>
                <div className="font-bold">12.00</div>
                <div className="font-bold">13.30</div>
                <div className="flex justify-between font-normal text-lg pt-1">Thursday, 07 Feb 2024</div>
                <div className="font-bold">09.30</div>
                <div className="font-bold">11.00</div>
              </div>
            </div>

          </div>


        </div>



      </div>
    </div>
  );
}
