import { useState } from "react";
import { Select } from "@mantine/core";
import Link from "next/link";

const Main = ({ cars }) => {
  const [makeId, setMakeId] = useState();
  const [year, setYear] = useState();

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex gap-10 home-modal-border p-10 rounded-xl">
        <Select
          className="w-[220px]"
          label="Vehicle Make"
          placeholder="Vehicle Make"
          data={cars.map((item) => ({
            value: String(item.MakeId),
          }))}
          clearable
          searchable
          value={makeId}
          onChange={(_value, option) => setMakeId(option?.value)}
        />
        <Select
          className="w-[220px]"
          label="Year"
          placeholder="Year"
          data={[...Array(2024 - 1995 + 1)].map((_, index) => ({
            value: String(1995 + index),
          }))}
          clearable
          searchable
          value={year}
          onChange={(_value, option) => setYear(option?.value)}
        />
        <Link
          href={`result/${makeId}/${year}`}
          className={!(makeId && year) ? "pointer-events-none opacity-50" : ""}
          aria-disabled={!(makeId && year)}
          tabIndex={!(makeId && year) ? -1 : undefined}>
          <button className="text-lg px-10 h-full rounded-lg next-btn-bg">
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Main;
