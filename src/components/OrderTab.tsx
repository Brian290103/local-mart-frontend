import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const OrderTab = () => {
  return (
    <div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Product Info</TableHead>
            <TableHead>Order Amount</TableHead>
            <TableHead>Order Status</TableHead>
            <TableHead>Order Date</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Info</TableCell>
            <TableCell>$100.00</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>
              {/* Actions for this order */}
              <button className="btn btn-primary">View Details</button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default OrderTab;