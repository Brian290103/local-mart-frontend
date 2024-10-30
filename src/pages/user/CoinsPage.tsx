import React from "react";
import UserLayout from "@/components/auth/user/UserLayout.tsx";
import UserNav from "@/components/auth/user/UserNav.tsx";
import {
  ArrowDownNarrowWide,
  ArrowUpNarrowWide,
  CirclePlus,
  Coins,
} from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator.tsx";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const CoinsPage = () => {
  const menuList = [
    {
      id: 1,
      title: "Available",
      icon: Coins,
      value: 23,
    },
    {
      id: 2,
      title: "Earned",
      icon: ArrowUpNarrowWide,
      value: 50,
    },
    {
      id: 3,
      title: "Used",
      icon: ArrowDownNarrowWide,
      value: 27,
    },
  ];

  // Dummy coin log data
  const coinLogs = [
    {
      id: 1,
      date: "23/09/2024 00:00:00",
      description: "Referral bonus",
      amount: 250.0,
    },
    {
      id: 2,
      date: "24/09/2024 13:45:10",
      description: "Product purchase",
      amount: -150.0,
    },
    {
      id: 3,
      date: "25/09/2024 09:12:34",
      description: "Daily login reward",
      amount: 100.0,
    },
    {
      id: 4,
      date: "26/09/2024 17:00:00",
      description: "Redeemed for discount",
      amount: -80.0,
    },
  ];

  return (
    <UserLayout>
      <UserNav
        title="My Coins"
        content={
          <div>
            <Button>
              <CirclePlus className="mr-2" />
              Refer to Gain
            </Button>
          </div>
        }
      />
      <div className="py-5 px-2">
        <div className="grid grid-cols-4 gap-4">
          {menuList.map((item) => (
            <div key={item.id} className="col-span-1">
              <Card>
                <CardContent className="py-3 flex flex-col gap-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs uppercase text-muted-foreground">
                      {item.title}
                    </span>
                    <item.icon className="w-4 h-4" />
                  </div>
                  <span className="font-numeric text-2xl font-semibold">
                    {item.value}
                  </span>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-5">
        <Separator />
        <Table>
          <TableCaption>My Coin Logs</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Sno</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {coinLogs.map((log) => (
              <TableRow key={log.id}>
                <TableCell>{log.id}</TableCell>
                <TableCell>{log.date}</TableCell>
                <TableCell>{log.description}</TableCell>
                <TableCell
                  className={`text-right ${log.amount < 0 ? "text-red-500" : "text-green-500"}`}
                >
                  ${log.amount.toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </UserLayout>
  );
};

export default CoinsPage;