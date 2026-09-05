import { cn } from "cn";
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={cn("container mx-auto px-4", className)}>{children}</div>
  );
};

export default container;
