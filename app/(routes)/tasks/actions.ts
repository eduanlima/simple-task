import { fetchWithToken } from "@/app/libs/fetchWithToken";
import { updateTag } from "next/cache";
import { cookies } from "next/headers";

export const handleCreateTask = async (_: string, formData: FormData) => {
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

        if (message)
            return message;

        updateTag("get-tasks");
    } catch {
        console.log("handlerCreateTask error");
        return "An error occurred during creation task.";
    }

};