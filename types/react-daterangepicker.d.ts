declare module "react-daterangepicker" {
  import * as React from "react";

  interface DateRangePickerProps {
    initialSettings?: any;
    onApply?: (event: any, picker: any) => void;
    onCancel?: (event: any, picker: any) => void;
    children?: React.ReactNode;
  }

  const DateRangePicker: React.FC<DateRangePickerProps>;
  export default DateRangePicker;
}
