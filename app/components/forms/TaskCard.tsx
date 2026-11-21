"use client";
import { FC, PropsWithChildren } from "react";

interface TaskCardProps extends PropsWithChildren {
  id: string;
  completed: boolean;
  completeAction: (formData: FormData) => Promise<void>;
}

export const TaskCard: FC<TaskCardProps> = ({
  id,
  completed,
  completeAction,
  children,
}) => (
  <li className="p-4 text-[#7b7c7b] border border-[#c8c9e9] rounded-lg hover:border-[#b1b2b2]">
    <form action={completeAction}>
      <input name="id" type="hidden" value={id} />
      <input
        className="accent-[#141516]"
        name="completed"
        type="checkbox"
        defaultChecked={completed}
        onChange={(e) => e.currentTarget.form?.requestSubmit()}
      />
    </form>

    {children}
  </li>
);
