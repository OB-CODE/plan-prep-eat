// inspo taken from https://github.com/joschan21/image-alt-generator/blob/main/src/components/ui/button.tsx

import * as React from "react";
import { cva } from "class-variance-authority";
import { concatenateClassnames } from "./utilities";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full text-sm font-medium tracking-wide uppercase transition-all duration-300 ease-in-out focus:ring-offset-2 focus:ring-slate-400 disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default:
          "bg-gray-400 text-white hover:bg-gray-500 dark:bg-slate-50 dark:text-slate-900",

        purple:
          "bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full dark:bg-purple-400 dark:hover:bg-purple-600 dark:text-white",
        lightB:
          "mb-2 w-fit border-2 border-blue-300 bg-blue-100 p-1 text-blue-600 hover:bg-blue-200",

        link: "bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-300 hover:bg-transparent dark:hover:bg-transparent",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-2 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, children, href, variant, size, ...props }, ref) => {
    return (
      <button
        className={`mx-3 ${concatenateClassnames(
          buttonVariants({ variant, size, className })
        )}`}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
