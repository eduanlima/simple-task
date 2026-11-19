import { Metadata } from "next";

const PAGE_TITLE = "Tasks";

export const metadata: Metadata = {
  title: PAGE_TITLE,
};

export default function Tasks() {
  return (
    <>
      <h1 className="text-4xl text-center font-bold">Tasks</h1>
    </>
  );
}