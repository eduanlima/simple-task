import { FormTasks } from "@/app/components/forms/FormTasks";
import { fetchWithToken } from "@/app/libs/fetchWithToken";
import { Metadata } from "next";
import { cookies } from "next/headers";
import { handleCreateTask } from "./actions";

const PAGE_TITLE = "Tasks";

export const metadata: Metadata = {
  title: PAGE_TITLE,
};

type TaskType = {
  _id: string;
  userId: string;
  title: string;
  completed: boolean;
  deleted: boolean;
  createDate: string;
  modifyDate: string;
};

export default async function Tasks() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) return null;

  const { tasks }: { tasks: TaskType[] } = await fetchWithToken(
    `${process.env.BACK_END_URL}/tasks`,
    token,
    {
      next: {
        tags: ["get-tasks"],
      },
    },
  );

  return (
    <>
      <h1 className="text-4xl text-center font-bold">Tasks</h1>
      <FormTasks action={handleCreateTask} />
      <ul>
        {tasks.reverse().map((t) => (
          <li key={t._id}>{t.title}</li>
        ))}
        ;
      </ul>
    </>
  );
}
