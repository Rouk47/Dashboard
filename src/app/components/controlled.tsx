'use client'
import React from "react";
import { useEffect } from 'react';
import { RangeCalendar } from "@nextui-org/react";
import { today, getLocalTimeZone } from "@internationalized/date";

export default function App() {
    return (
        <div className="p-4 sm:ml">
            <div className="flex justify-between items-center  p-4 rounded-lg dark:border-gray-700">
                <div className="grid grid-cols-1 gap-4">
                    <RangeCalendarWrapper />
                </div>
            </div>
        </div>
    );
}

function RangeCalendarWrapper() {
    return (
        <div className="">
            <RangeCalendar
                aria-label="Date (Min Date Value)"
                minValue={today(getLocalTimeZone())}
            />
        </div>
    );
}
