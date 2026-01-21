"use client";

import { useState, useRef, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
const today = new Date();

type DateRange = [Date | null, Date | null];

export default function BannerCalendarForm() {
  const [open, setOpen] = useState(false);
  // const [tempRange, setTempRange] = useState<DateRange>([null, null]);
  // const [finalRange, setFinalRange] = useState<DateRange>([null, null]);

  const [tempRange, setTempRange] = useState<DateRange>([today, null]);
  const [finalRange, setFinalRange] = useState<DateRange>([null, null]);
  const [guests, setGuests] = useState<string>("");
  const calendarRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node) &&
        !(event.target as Element).closest(".date_wrap input")
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const formatDate = (date: Date | null) =>
    date ?
      date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
    : "";
  const displayValue =
    finalRange[0] && finalRange[1] ?
      `${formatDate(finalRange[0])} - ${formatDate(finalRange[1])}`
    : "";
  const handleClear = () => {
    setTempRange([today, null]);
    setFinalRange([null, null]);
  };
  const handleApply = () => {
    if (tempRange[0] && tempRange[1]) {
      setFinalRange(tempRange);
      setOpen(false);
    }
  };
  const handleGuestChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "" || /^\d*$/.test(value)) {
      setGuests(value);
    }
  };
  return (
    <form className="hb_form">
      <div className="date_wrap" ref={calendarRef}>
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
              showDoubleView={window.innerWidth > 768}
              minDate={new Date()}
              onChange={(value) => setTempRange(value as DateRange)}
              value={tempRange}
              tileClassName={({ date, view }) => {
                if (
                  view === "month" &&
                  tempRange[0] &&
                  date.toDateString() === tempRange[0].toDateString()
                ) {
                  return "custom-start-date";
                }
                return null;
              }}
            />
            <div className="calendar_footer">
              <div>
                <span className="datecount">
                  {tempRange[0] && tempRange[1] ?
                    `${formatDate(tempRange[0])} - ${formatDate(tempRange[1])}`
                  : tempRange[0] ?
                    `${formatDate(tempRange[0])} - Select end date`
                  : "Select dates"}
                </span>
                <button
                  type="button"
                  className="clear_btn"
                  onClick={handleClear}>
                  Clear
                </button>
                <button
                  type="button"
                  className="apply_btn"
                  onClick={handleApply}>
                  Apply
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <input
        type="number"
        min="1"
        value={guests}
        onChange={handleGuestChange}
        placeholder="No of Guest"
        onBlur={(e) => {
          if (e.target.value === "" || e.target.value === "0") {
            setGuests("");
          }
        }}
        onFocus={(e) => {
          if (e.target.value === "1") {
            setGuests("");
          }
        }}
      />
      <button className="availability_button" type="submit">
        Check Availability
      </button>
      <style jsx>{`
        :global(.clear_btn) {
          background: transparent !important;
          border: none !important;
          font-weight: 700 !important;
          box-shadow: none !important;
          cursor: pointer;
          color: black !important;
        }
        .react-calendar__tile.custom-start-date {
          background: #e2b14a !important;
          color: #fff !important;
          border-radius: 6px;
        }

        .react-calendar__tile.custom-start-date abbr {
          color: #fff !important;
          font-weight: 600;
        }
      `}</style>
    </form>
  );
}
