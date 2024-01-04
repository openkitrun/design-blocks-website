import * as React from "react";

import cls from "@/utils/cls";

import IconInformation from "@/design-system/icons/fill/Information";
import IconCloseCircle from "@/design-system/icons/fill/CloseCircle";

type FeedbackTypes = "info" | "warning" | "error";

const iconsList: {
  [key in FeedbackTypes]: React.ReactNode;
} = {
  info: <IconInformation color="#a1a1aa" />,
  warning: <IconInformation color="#a1a1aa" />,
  error: <IconCloseCircle color="#f87171" />,
};

const FeedbackTypes: {
  [key in FeedbackTypes]: {
    classBgColor: string;
    classTitleColor: string;
    classDescriptionColor: string;
  };
} = {
  info: {
    classBgColor: "bg-zinc-800",
    classTitleColor: "text-zinc-200",
    classDescriptionColor: "text-zinc-400",
  },
  warning: {
    classBgColor: "bg-yellow-950",
    classTitleColor: "text-yellow-500",
    classDescriptionColor: "text-yellow-500",
  },
  error: {
    classBgColor: "bg-red-950",
    classTitleColor: "text-red-500",
    classDescriptionColor: "text-red-500",
  },
};

type FeedbackProps = {
  title: string;
  description?: string;
  type?: FeedbackTypes;
};

export function Feedback({ title, description, type = "info" }: FeedbackProps) {
  return (
    <div
      className={cls(
        "mt-10 flex gap-x-3 rounded-xl px-4 py-3",
        FeedbackTypes[type].classBgColor
      )}
    >
      {iconsList[type]}

      <div>
        <p className="my-0 text-sm/6">
          <strong
            className={cls(
              "text-zinc-200",
              FeedbackTypes[type].classTitleColor
            )}
          >
            {title}
          </strong>
        </p>

        <p
          className={cls(
            "my-0 mt-0.5 text-sm/6",
            FeedbackTypes[type].classTitleColor
          )}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
