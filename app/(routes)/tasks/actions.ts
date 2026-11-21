"use server";
import { fetchWithToken } from "@/app/libs/fetchWithToken";
import { updateTag } from "next/cache";
import { cookies } from "next/headers";

export const handleCreateTask = async (_: string, formData: FormData) => {
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

export const handleCompleteTask = async (formData: FormData) => {
    const id = formData.get("id")?.toString();

    if (!id) {
        console.error("You must send id's tasks.");
        return;
    }

    try {
        const cookieStore = await cookies();
        const token = cookieStore.get("token")?.value;

        if (!token) {
            console.error("There is no token for request.");
            return;
        }

        const { message } = await fetchWithToken(
            `${process.env.BACK_END_URL}/tasks/${id}/complete`,
            token,
            {
                method: "PUT",
            },
        );

        if (message) {
            console.error(message);
            return;
        }

        updateTag("get-tasks");
    } catch {
        console.log("An error occurred during updating task.");
        return;
    }

};