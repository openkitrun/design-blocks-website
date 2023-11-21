import { BrightProps, Code } from "bright";

import { CodeTabsList, CodeTabsRoot, CodeTabsContent } from "./tabs";

import { codeStyle } from "./code";

function TitleBarContent(brightProps: BrightProps) {
  const { subProps, title } = brightProps;

  const titles = subProps?.length
    ? subProps.map((subProp) => subProp.title)
    : [title];

  return <CodeTabsList titles={titles as string[]} />;
}

function Root(brightProps: BrightProps) {
  const { subProps, title } = brightProps;

  const titles = subProps?.length
    ? subProps.map((subProp) => subProp.title)
    : [title];

  return (
    <CodeTabsRoot defaultValue={titles[0]} className="rounded-2xl">
      {/* @ts-expect-error Server Component */}
      <Code.Root style={{ ...codeStyle }} {...brightProps} />
    </CodeTabsRoot>
  );
}

function Content(brightProps: BrightProps) {
  const { subProps } = brightProps;
  const propsList = subProps?.length ? subProps : [brightProps];
  return (
    <div className="max-h-[512px] overflow-y-scroll">
      {propsList.map((props) => (
        <CodeTabsContent
          key={props.title}
          value={props.title!}
          className="overflow-y-hidden focus:outline-none"
        >
          {/* @ts-expect-error Server Component */}
          <Code.Pre {...props} />
        </CodeTabsContent>
      ))}
    </div>
  );
}

export const tabs = {
  name: "tabs",
  Root,
  TitleBarContent,
  Pre: Content,
};
