import {Metadata} from "next";
import "./global.css";
import React from "react";
import Header from "@/components/Header";

export const metadata:Metadata = { // Automatically generated <head>
    title: "MP-4",
    description: "MP-4 for CS392",
}

// In create-next-app, layout.tsx is equivalent to index.html
// static components for Router should be in a separate folder, like /components, outside of /app.
export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    // Placeholder variable "children" -> I will give you(compiler) some child component, but I don't know what it will be.
    // This "children" will be in an object(dict) with key 'children', and will be of type object(dict) with name 'children', with each being ReactNode(Any renderable component)
  return (
    <html lang="en">
      <body>
        <Header />
        {children} {/* Children is the conditionally rendered component */}
      </body>
    </html>
  );
}
