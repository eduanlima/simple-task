"use client";
import { FC, PropsWithChildren } from "react";
import classNames from "classnames";
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
  <li
    className={classNames(
      "p-4 grid grid-cols-[auto_1fr] gap-x-2 items-center text-[#7b7c7b] border border-[#c8c9e9] rounded-lg hover:border-[#b1b2b2]",
      { "opacity-50": completed },
    )}
  >
    <form className="flex" action={completeAction}>
      <input name="id" type="hidden" value={id} />
      <input
        className="accent-[#141516]"
        name="completed"
        type="checkbox"
        defaultChecked={completed}
        onChange={(e) => e.currentTarget.form?.requestSubmit()}
      />
    </form>
    <p>{children}</p>
  </li>
);
