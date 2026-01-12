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
