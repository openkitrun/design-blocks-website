import clsx from "clsx";

interface DocsPageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  heading: string;
  text?: string;
}

export function DocsPageHeader({
  heading,
  text,
  className,
  ...props
}: DocsPageHeaderProps) {
  return (
    <>
      <div className={clsx("space-y-4", className)} {...props}>
        <h1 className="inline-block font-semibold text-4xl lg:text-5xl">
          {heading}
        </h1>

        {text && (
          <p className="text-xl text-muted-foreground text-gray-500">{text}</p>
        )}
      </div>
      <hr className="my-10 border-zinc-700" />
    </>
  );
}
