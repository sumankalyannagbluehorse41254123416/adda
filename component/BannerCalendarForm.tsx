"use client";

import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type DateRange = [Date | null, Date | null];

export default function BannerCalendarForm() {
  const [open, setOpen] = useState(false);
  const [tempRange, setTempRange] = useState<DateRange>([null, null]);
  const [finalRange, setFinalRange] = useState<DateRange>([null, null]);
  const [guests, setGuests] = useState(1);

  const formatDate = (date: Date | null) =>
    date
      ? date.toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })
      : "";

  const displayValue =
    finalRange[0] && finalRange[1]
      ? `${formatDate(finalRange[0])} - ${formatDate(finalRange[1])}`
      : "";

  return (
    <form className="hb_form">
      {/* Date Input */}
      <div className="date_wrap">
        <input
          type="text"
          readOnly
          placeholder="Check In - Check Out"
          value={displayValue}
          onClick={() => setOpen(!open)}
        />

        {open && (
          <div className="calendar_popup">
            <Calendar
              selectRange
              showDoubleView // 👈 two months
              minDate={new Date()}
              onChange={(value) => setTempRange(value as DateRange)}
              value={tempRange}
            />

            {/* Footer */}
            <div className="calendar_footer">
              <span>
                {tempRange[0] && tempRange[1]
                  ? `${formatDate(tempRange[0])} - ${formatDate(tempRange[1])}`
                  : ""}
              </span>

              <div>
                <button
                  type="button"
                  className="clear_btn"
                  onClick={() => {
                    setTempRange([null, null]);
                    setFinalRange([null, null]);
                  }}>
                  Clear
                </button>

                <button
                  type="button"
                  className="apply_btn"
                  onClick={() => {
                    setFinalRange(tempRange);
                    setOpen(false);
                  }}>
                  Apply
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Guests */}
      <input
        type="number"
        min={1}
        value={guests}
        onChange={(e) => setGuests(Number(e.target.value))}
        placeholder="No of Guest"
      />

      <button type="submit">Check Availability</button>
    </form>
  );
}

// "use client";

// import { useState, useRef, useEffect } from "react";
// import { DateRange, Range, RangeKeyDict } from "react-date-range";
// import { format } from "date-fns";

// // IMPORTANT: Import BOTH CSS files
// import "react-date-range/dist/styles.css";
// import "react-date-range/dist/theme/default.css";

// export default function BannerCalendarForm() {
//   const [open, setOpen] = useState(false);
//   const calendarRef = useRef<HTMLDivElement>(null);

//   const [tempRange, setTempRange] = useState<Range[]>([
//     {
//       startDate: undefined,
//       endDate: undefined,
//       key: "selection",
//     },
//   ]);

//   const [finalRange, setFinalRange] = useState<Range[]>([
//     {
//       startDate: undefined,
//       endDate: undefined,
//       key: "selection",
//     },
//   ]);

//   const [guests, setGuests] = useState(1);

//   // Close calendar when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
//         setOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const formatDate = (date?: Date) =>
//     date ? format(date, "dd/MM/yyyy") : "";

//   const displayValue =
//     finalRange[0].startDate && finalRange[0].endDate
//       ? `${formatDate(finalRange[0].startDate)} - ${formatDate(
//           finalRange[0].endDate
//         )}`
//       : "";

//   return (
//     <form className="hb_form" onSubmit={(e) => e.preventDefault()}>
//       {/* Date Input */}
//       <div className="date_wrap" ref={calendarRef}>
//         <input
//           type="text"
//           readOnly
//           placeholder="Check In - Check Out"
//           value={displayValue}
//           onClick={() => setOpen(!open)}
//         />

//         {open && (
//           <div className="calendar_popup">
//             <DateRange
//               ranges={tempRange}
//               onChange={(item: RangeKeyDict) => {
//                 if (item.selection) {
//                   setTempRange([item.selection]);
//                 }
//               }}
//               minDate={new Date()}
//               months={2}
//               direction="horizontal"
//               showDateDisplay={false}
//               rangeColors={["#3b82f6"]}
//             />

//             {/* Footer */}
//             <div className="calendar_footer">
//               <span>
//                 {tempRange[0].startDate && tempRange[0].endDate
//                   ? `${formatDate(
//                       tempRange[0].startDate
//                     )} - ${formatDate(tempRange[0].endDate)}`
//                   : "Select dates"}
//               </span>

//               <div>
//                 <button
//                   type="button"
//                   className="clear_btn"
//                   onClick={() => {
//                     setTempRange([
//                       {
//                         startDate: undefined,
//                         endDate: undefined,
//                         key: "selection",
//                       },
//                     ]);
//                     setFinalRange([
//                       {
//                         startDate: undefined,
//                         endDate: undefined,
//                         key: "selection",
//                       },
//                     ]);
//                   }}
//                 >
//                   Clear
//                 </button>

//                 <button
//                   type="button"
//                   className="apply_btn"
//                   onClick={() => {
//                     setFinalRange(tempRange);
//                     setOpen(false);
//                   }}
//                   disabled={!tempRange[0].startDate || !tempRange[0].endDate}
//                 >
//                   Apply
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Guests */}
//       <input
//         type="number"
//         min={1}
//         value={guests}
//         onChange={(e) => {
//           const value = Number(e.target.value);
//           setGuests(Math.max(1, value));
//         }}
//         placeholder="No of Guest"
//       />

//       <button type="submit" disabled={!finalRange[0].startDate || !finalRange[0].endDate}>
//         Check Availability
//       </button>
//     </form>
//   );
// }
