import React from "react";

export const docsMdxComponents = {
  h1: (props: React.ComponentPropsWithoutRef<"h1">) => (
    <h1 {...props} className="text-[22px] font-bold mb-6 text-white" />
  ),
  h2: (props: React.ComponentPropsWithoutRef<"h2">) => (
    <h2
      {...props}
      className="text-[20px] font-bold mt-10 mb-4 text-white border-b border-white/10 pb-2"
    />
  ),
  h3: (props: React.ComponentPropsWithoutRef<"h3">) => (
    <h3 {...props} className="text-[18px] font-medium mt-8 mb-3 text-white/90" />
  ),
  h4: (props: React.ComponentPropsWithoutRef<"h4">) => (
    <h4 {...props} className="text-[18px] font-medium mt-6 mb-2 text-white/90" />
  ),
  p: (props: React.ComponentPropsWithoutRef<"p">) => {
    const children = props.children;
    if (typeof children === "object" && children !== null && "props" in children) {
      const linkProps = children.props as { children?: string };
      if (
        typeof linkProps.children === "string" &&
        linkProps.children.startsWith("Section titled")
      ) {
        return null;
      }
    }
    return <p {...props} className="mb-4 leading-8 text-[18px] text-white/70" />;
  },
  ul: (props: React.ComponentPropsWithoutRef<"ul">) => (
    <ul
      {...props}
      className="list-disc list-outside ml-6 mb-4 space-y-2 text-[18px] text-white/70"
    />
  ),
  ol: (props: React.ComponentPropsWithoutRef<"ol">) => (
    <ol
      {...props}
      className="list-decimal list-outside ml-6 mb-4 space-y-2 text-[18px] text-white/70"
    />
  ),
  li: (props: React.ComponentPropsWithoutRef<"li">) => (
    <li {...props} className="text-[18px] text-white/70 leading-8" />
  ),
  a: (props: React.ComponentPropsWithoutRef<"a">) => {
    const children = props.children;
    if (typeof children === "string" && children.startsWith("Section titled")) {
      return null;
    }
    return (
      <a
        {...props}
        className="text-[var(--color-brand-red)] hover:text-red-400 hover:underline font-medium"
      />
    );
  },
  blockquote: (props: React.ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      {...props}
      className="border-l-4 border-red-500 pl-4 py-2 my-4 bg-white/5 text-white/70 italic"
    />
  ),
  code: (props: React.ComponentPropsWithoutRef<"code">) => (
    <code
      {...props}
      className="bg-white/10 text-red-300 rounded px-1.5 py-0.5 text-[18px] font-mono"
    />
  ),
  pre: (props: React.ComponentPropsWithoutRef<"pre">) => (
    <pre
      {...props}
      className="bg-black text-white/90 border border-white/10 rounded-lg p-4 overflow-x-auto mb-6 text-[18px] font-mono"
    >
      {props.children}
    </pre>
  ),
  img: (props: React.ComponentPropsWithoutRef<"img">) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      {...props}
      className="rounded-lg border border-white/10 my-6 max-w-full"
      alt={props.alt || ""}
    />
  ),
  table: (props: React.ComponentPropsWithoutRef<"table">) => (
    <div className="overflow-x-auto mb-6">
      <table {...props} className="w-full text-left border-collapse border border-white/10" />
    </div>
  ),
  th: (props: React.ComponentPropsWithoutRef<"th">) => (
    <th {...props} className="border-b border-white/10 p-3 bg-white/5 font-semibold text-white" />
  ),
  td: (props: React.ComponentPropsWithoutRef<"td">) => (
    <td {...props} className="border-b border-white/10 p-3 text-white/70" />
  ),
  hr: () => <hr className="my-8 border-white/10" />,
  strong: (props: React.ComponentPropsWithoutRef<"strong">) => (
    <strong {...props} className="font-semibold text-white" />
  ),
};
