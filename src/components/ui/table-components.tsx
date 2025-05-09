'use client';

import * as React from "react";
import { cn } from "@/lib/utils";
import * as TablePrimitive from "@/components/ui/table";

export const Table = TablePrimitive.Table;
Table.displayName = "Table";

export const TableHeader = TablePrimitive.TableHeader;
TableHeader.displayName = "TableHeader";

export const TableBody = TablePrimitive.TableBody;
TableBody.displayName = "TableBody";

export const TableFooter = TablePrimitive.TableFooter;
TableFooter.displayName = "TableFooter";

export const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      [
        "hover:bg-muted/50 data-[state=selected]:bg-muted",
        "focus-within:relative focus-within:z-[1]",
      ],
      className
    )}
    {...props}
  />
));
TableRow.displayName = "TableRow";

export const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      [
        "h-12 px-4 text-left align-middle font-medium text-muted-foreground",
        "border-b [&:has([role=checkbox])]:pr-0",
      ],
      className
    )}
    {...props}
  />
));
TableHead.displayName = "TableHead";

export const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn(
      [
        "p-4 align-middle [&:has([role=checkbox])]:pr-0",
        "border-b [&:has([role=checkbox])]:border-b-0",
      ],
      className
    )}
    {...props}
  />
));
TableCell.displayName = "TableCell";

export const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("mt-4 text-sm text-muted-foreground", className)}
    {...props}
  />
));
TableCaption.displayName = "TableCaption";
