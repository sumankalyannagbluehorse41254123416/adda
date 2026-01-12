// "use client";
// import React, { useState, useRef, useEffect } from 'react';

// import { ChevronLeft, ChevronRight } from 'lucide-react';

// interface DateObj {
//   day: number;
//   isCurrentMonth: boolean;
//   date: Date;
// }

// const DatePicker: React.FC = () => {
//   const [isOpen, setIsOpen] = useState<boolean>(false);
//   const [startDate, setStartDate] = useState<Date | null>(null);
//   const [endDate, setEndDate] = useState<Date | null>(null);
//   const [hoverDate, setHoverDate] = useState<Date | null>(null);
//   const [currentMonth, setCurrentMonth] = useState<Date>(new Date(2026, 0));
//   const calendarRef = useRef<HTMLDivElement>(null);

//   const monthNames: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
//   const dayNames: string[] = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

//   useEffect(() => {
//     function handleClickOutside(event: MouseEvent): void {
//       if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
//         setIsOpen(false);
//       }
//     }
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   const getDaysInMonth = (date: Date): DateObj[] => {
//     const year: number = date.getFullYear();
//     const month: number = date.getMonth();
//     const firstDay: Date = new Date(year, month, 1);
//     const lastDay: Date = new Date(year, month + 1, 0);
//     const daysInMonth: number = lastDay.getDate();
//     const startingDayOfWeek: number = firstDay.getDay();
    
//     const prevMonthLastDay: number = new Date(year, month, 0).getDate();
//     const days: DateObj[] = [];
    
//     for (let i = startingDayOfWeek - 1; i >= 0; i--) {
//       days.push({
//         day: prevMonthLastDay - i,
//         isCurrentMonth: false,
//         date: new Date(year, month - 1, prevMonthLastDay - i)
//       });
//     }
    
//     for (let i = 1; i <= daysInMonth; i++) {
//       days.push({
//         day: i,
//         isCurrentMonth: true,
//         date: new Date(year, month, i)
//       });
//     }
    
//     const remainingDays: number = 42 - days.length;
//     for (let i = 1; i <= remainingDays; i++) {
//       days.push({
//         day: i,
//         isCurrentMonth: false,
//         date: new Date(year, month + 1, i)
//       });
//     }
    
//     return days;
//   };

//   const handlePrevMonth = (): void => {
//     setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
//   };

//   const handleNextMonth = (): void => {
//     setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
//   };

//   const handleDateSelect = (dateObj: DateObj): void => {
//     const selectedDate = dateObj.date;
    
//     if (!startDate && !endDate) {
//       setStartDate(selectedDate);
//     } else if (startDate && !endDate) {
//       if (selectedDate < startDate) {
//         setEndDate(startDate);
//         setStartDate(selectedDate);
//       } else {
//         setEndDate(selectedDate);
//       }
//     } else {
//       setStartDate(selectedDate);
//       setEndDate(null);
//     }
//   };

//   const handleClear = (): void => {
//     setStartDate(null);
//     setEndDate(null);
//     setHoverDate(null);
//   };

//   const handleApply = (): void => {
//     setIsOpen(false);
//   };

//   const formatDate = (date: Date | null): string => {
//     if (!date) return '';
//     const month: string = String(date.getMonth() + 1).padStart(2, '0');
//     const day: string = String(date.getDate()).padStart(2, '0');
//     const year: number = date.getFullYear();
//     return `${month}/${day}/${year}`;
//   };

//   const formatDateRange = (): string => {
//     if (startDate && endDate) {
//       return `${formatDate(startDate)} - ${formatDate(endDate)}`;
//     } else if (startDate) {
//       return formatDate(startDate);
//     }
//     return '';
//   };

//   const isToday = (date: Date): boolean => {
//     const today: Date = new Date(2026, 0, 12);
//     return date.getDate() === today.getDate() &&
//            date.getMonth() === today.getMonth() &&
//            date.getFullYear() === today.getFullYear();
//   };

//   const isStartDate = (date: Date): boolean => {
//     if (!startDate) return false;
//     return date.getDate() === startDate.getDate() &&
//            date.getMonth() === startDate.getMonth() &&
//            date.getFullYear() === startDate.getFullYear();
//   };

//   const isEndDate = (date: Date): boolean => {
//     if (!endDate) return false;
//     return date.getDate() === endDate.getDate() &&
//            date.getMonth() === endDate.getMonth() &&
//            date.getFullYear() === endDate.getFullYear();
//   };

//   const isInRange = (date: Date): boolean => {
//     if (!startDate) return false;
    
//     const compareDate = endDate || hoverDate;
//     if (!compareDate) return false;
    
//     const start = startDate < compareDate ? startDate : compareDate;
//     const end = startDate < compareDate ? compareDate : startDate;
    
//     return date > start && date < end;
//   };

//   const currentMonthDays: DateObj[] = getDaysInMonth(currentMonth);
//   const nextMonth: Date = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1);
//   const nextMonthDays: DateObj[] = getDaysInMonth(nextMonth);

//   return (
//     <>
//       <style>{`
//         * {
//           box-sizing: border-box;
//           margin: 0;
//           padding: 0;
//         }

//         .date-picker-container {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           min-height: 100vh;
//           background-color: #f9fafb;
//           padding: 20px;
//           font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
//         }

//         .date-picker-wrapper {
//           position: relative;
//         }

//         .date-input {
//           width: 320px;
//           padding: 14px 16px;
//           border: 1px solid #d1d5db;
//           border-radius: 6px;
//           cursor: pointer;
//           font-size: 15px;
//           color: #374151;
//           background-color: white;
//           transition: all 0.2s;
//         }

//         .date-input:hover {
//           border-color: #9ca3af;
//         }

//         .date-input:focus {
//           outline: none;
//           border-color: #3b82f6;
//           box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
//         }

//         .date-input::placeholder {
//           color: #9ca3af;
//         }

//         .calendar-dropdown {
//           position: absolute;
//           top: calc(100% + 8px);
//           left: 0;
//           background-color: white;
//           border-radius: 12px;
//           box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
//           border: 1px solid #e5e7eb;
//           padding: 24px;
//           z-index: 50;
//           width: 640px;
//         }

//         .calendar-months {
//           display: flex;
//           gap: 24px;
//         }

//         .calendar-month {
//           flex: 1;
//         }

//         .month-header {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           margin-bottom: 20px;
//         }

//         .month-nav-btn {
//           padding: 6px;
//           background: none;
//           border: none;
//           cursor: pointer;
//           border-radius: 4px;
//           color: #6b7280;
//           transition: background-color 0.2s;
//         }

//         .month-nav-btn:hover {
//           background-color: #f3f4f6;
//         }

//         .month-title {
//           font-weight: 600;
//           font-size: 15px;
//           color: #374151;
//         }

//         .nav-spacer {
//           width: 32px;
//         }

//         .day-names {
//           display: grid;
//           grid-template-columns: repeat(7, 1fr);
//           gap: 4px;
//           margin-bottom: 8px;
//         }

//         .day-name {
//           text-align: center;
//           font-size: 13px;
//           font-weight: 500;
//           color: #6b7280;
//           padding: 8px 0;
//         }

//         .days-grid {
//           display: grid;
//           grid-template-columns: repeat(7, 1fr);
//           gap: 2px;
//         }

//         .day-cell {
//           padding: 10px 0;
//           text-align: center;
//           font-size: 14px;
//           background: none;
//           border: none;
//           cursor: pointer;
//           border-radius: 6px;
//           color: #374151;
//           transition: all 0.15s;
//           position: relative;
//         }

//         .day-cell.other-month {
//           color: #d1d5db;
//         }

//         .day-cell.today {
//           background-color: #fbbf24;
//           color: #1f2937;
//           font-weight: 600;
//         }

//         .day-cell.selected {
//           background-color: #f59e0b;
//           color: white;
//           font-weight: 600;
//         }

//         .day-cell.in-range {
//           background-color: #fef3c7;
//           color: #92400e;
//         }

//         .day-cell.current-month:hover:not(.selected):not(.today) {
//           background-color: #f3f4f6;
//         }

//         .calendar-footer {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           margin-top: 24px;
//           padding-top: 20px;
//           border-top: 1px solid #e5e7eb;
//         }

//         .date-display {
//           font-size: 14px;
//           color: #6b7280;
//         }

//         .footer-buttons {
//           display: flex;
//           gap: 8px;
//         }

//         .btn-clear {
//           padding: 10px 20px;
//           font-size: 14px;
//           color: #374151;
//           background: none;
//           border: none;
//           border-radius: 6px;
//           cursor: pointer;
//           transition: background-color 0.2s;
//           font-weight: 500;
//         }

//         .btn-clear:hover {
//           background-color: #f3f4f6;
//         }

//         .btn-apply {
//           padding: 10px 20px;
//           font-size: 14px;
//           background-color: #f59e0b;
//           color: white;
//           border: none;
//           border-radius: 6px;
//           cursor: pointer;
//           font-weight: 600;
//           transition: background-color 0.2s;
//         }

//         .btn-apply:hover {
//           background-color: #d97706;
//         }

//         .selected-range-header {
//           background-color: #1f2937;
//           color: white;
//           padding: 12px 16px;
//           border-radius: 8px;
//           font-size: 14px;
//           font-weight: 500;
//           margin-bottom: 20px;
//           text-align: center;
//         }
//       `}</style>

//       <div className="date-picker-container">
//         <div className="date-picker-wrapper" ref={calendarRef}>
//           <input
//             type="text"
//             readOnly
//             value={formatDateRange()}
//             onClick={() => setIsOpen(!isOpen)}
//             placeholder="Check In - Check Out"
//             className="date-input"
//           />
          
//           {isOpen && (
//             <div className="calendar-dropdown">
//               {startDate && endDate && (
//                 <div className="selected-range-header">
//                   {formatDate(startDate)} - {formatDate(endDate)}
//                 </div>
//               )}

//               <div className="calendar-months">
//                 <div className="calendar-month">
//                   <div className="month-header">
//                     <button onClick={handlePrevMonth} className="month-nav-btn">
//                       <ChevronLeft size={20} />
//                     </button>
//                     <span className="month-title">
//                       {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
//                     </span>
//                     <div className="nav-spacer"></div>
//                   </div>
                  
//                   <div className="day-names">
//                     {dayNames.map((day: string) => (
//                       <div key={day} className="day-name">{day}</div>
//                     ))}
//                   </div>
                  
//                   <div className="days-grid">
//                     {currentMonthDays.map((dateObj: DateObj, idx: number) => {
//                       const classes = ['day-cell'];
//                       if (!dateObj.isCurrentMonth) classes.push('other-month');
//                       else classes.push('current-month');
//                       if (isStartDate(dateObj.date) || isEndDate(dateObj.date)) classes.push('selected');
//                       else if (isInRange(dateObj.date)) classes.push('in-range');
//                       else if (isToday(dateObj.date)) classes.push('today');
                      
//                       return (
//                         <button
//                           key={idx}
//                           onClick={() => handleDateSelect(dateObj)}
//                           onMouseEnter={() => startDate && !endDate && setHoverDate(dateObj.date)}
//                           onMouseLeave={() => setHoverDate(null)}
//                           className={classes.join(' ')}
//                         >
//                           {dateObj.day}
//                         </button>
//                       );
//                     })}
//                   </div>
//                 </div>

//                 <div className="calendar-month">
//                   <div className="month-header">
//                     <div className="nav-spacer"></div>
//                     <span className="month-title">
//                       {monthNames[nextMonth.getMonth()]} {nextMonth.getFullYear()}
//                     </span>
//                     <button onClick={handleNextMonth} className="month-nav-btn">
//                       <ChevronRight size={20} />
//                     </button>
//                   </div>
                  
//                   <div className="day-names">
//                     {dayNames.map((day: string) => (
//                       <div key={day} className="day-name">{day}</div>
//                     ))}
//                   </div>
                  
//                   <div className="days-grid">
//                     {nextMonthDays.map((dateObj: DateObj, idx: number) => {
//                       const classes = ['day-cell'];
//                       if (!dateObj.isCurrentMonth) classes.push('other-month');
//                       else classes.push('current-month');
//                       if (isStartDate(dateObj.date) || isEndDate(dateObj.date)) classes.push('selected');
//                       else if (isInRange(dateObj.date)) classes.push('in-range');
//                       else if (isToday(dateObj.date)) classes.push('today');
                      
//                       return (
//                         <button
//                           key={idx}
//                           onClick={() => handleDateSelect(dateObj)}
//                           onMouseEnter={() => startDate && !endDate && setHoverDate(dateObj.date)}
//                           onMouseLeave={() => setHoverDate(null)}
//                           className={classes.join(' ')}
//                         >
//                           {dateObj.day}
//                         </button>
//                       );
//                     })}
//                   </div>
//                 </div>
//               </div>

//               <div className="calendar-footer">
//                 <span className="date-display">
//                   {startDate && endDate 
//                     ? `${formatDate(startDate)} - ${formatDate(endDate)}`
//                     : startDate 
//                     ? `Start: ${formatDate(startDate)}`
//                     : 'No dates selected'}
//                 </span>
//                 <div className="footer-buttons">
//                   <button onClick={handleClear} className="btn-clear">
//                     Clear
//                   </button>
//                   <button onClick={handleApply} className="btn-apply">
//                     Apply
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default DatePicker;

import { fetchBanner } from "@/lib/banner";
import Image from "next/image";
import DatePicker from "./DateCheckInAndOut";

export default async function Banner() {
  const UID = "e0805c28-4a5e-4b07-af80-cb323e20b3b6";
  const res = await fetchBanner({ uid: UID });

  const banner = res?.singlebannerData[0] as any;

  return (
    <section className="banner_wrap" id="banner">
      <div className="container">
        <div className="banner_inner">
          <figure>
            <Image
              src={"/assest/images/hero.jpg"}
              alt={banner?.title || "Banner Image"}
              width={1600}
              height={800}
              priority
              className="banner_img"
            />
          </figure>

          <div className="banner_con">
            <h1>{banner?.title || "asdds"}</h1>

            <div
              dangerouslySetInnerHTML={{
                __html: banner?.description || "",
              }}
            />

            {/* Desktop Form */}
            <form className="hb_form">
              <DatePicker />
              <input type="number" placeholder="No of Guest" />
              <button type="submit">Check Availability</button>
            </form>
            
          </div>

          {/* Mobile Form */}
          <form className="hb_form hbm_form">
            <DatePicker />
            <input type="number" placeholder="No of Guest" />
            <button type="submit">Check Availability</button>
          </form>
        </div>
      </div>
    </section>
  );
}