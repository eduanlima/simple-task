import { FormTasks } from "@/app/components/forms/FormTasks";
import { fetchWithToken } from "@/app/libs/fetchWithToken";
import { Metadata } from "next";
import { cookies } from "next/headers";

const PAGE_TITLE = "Tasks";

export const metadata: Metadata = {
  title: PAGE_TITLE,
};

export default function Tasks() {
  const handleCreateTask = async (_: string, formData: FormData) => {
    "use server";
    const task = formData.get("task")?.toString();

    if (!task) return "You must give a name for your task.";

    try {
      const cookieStore = await cookies();
      const token = cookieStore.get("token")?.value;

      if (!token) return "There is no token for request.";

      const body = {
        title: task,
      };

      const { message } = await fetchWithToken(
        `${process.env.BACK_END_URL}/tasks`,
        token,
        {
          method: "POST",
          body: JSON.stringify(body),
        },
      );

      return message;
    } catch {
      console.log("handlerCreateTask error");
      return "An error occurred during creation task.";
    }
  };

  return (
    <>
      <h1 className="text-4xl text-center font-bold">Tasks</h1>
      <FormTasks action={handleCreateTask} />
    </>
  );
}
