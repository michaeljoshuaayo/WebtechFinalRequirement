"use client";
import React from "react";
import dynamic from "next/dynamic";
import { TableWrapper } from "../table/table";
import { Link } from "@nextui-org/react";
import NextLink from "next/link";
import { HouseIcon } from "../icons/breadcrumb/house-icon";
import { UsersIcon } from "../icons/breadcrumb/users-icon";
import PolarChart from "../charts/polar-chart";

const Chart = dynamic(
  () => import("../charts/steam").then((mod) => mod.Steam),
  {
    ssr: false,
  }
);

export const Analytics = () => (
  <div className="h-full lg:px-6">
    <div className="flex justify-center gap-4 xl:gap-6 pt-3 px-4 lg:px-0  flex-wrap xl:flex-nowrap sm:pt-10 max-w-[90rem] mx-auto w-full">
      <div className="mt-6 gap-6 flex flex-col w-full">
        {/* Card Section Top */}
        <div className="flex flex-col gap-2">
        <ul className="flex">
        <li className="flex gap-2">
          <HouseIcon />
          <Link href={"/"}>
            <span>Dashboard</span>
          </Link>
          <span> / </span>{" "}
          <span> Main Menu</span>{" "}
          <span> / </span>{" "}

        </li>

        <li className="flex gap-2">
          <UsersIcon />
          <span>Analytics</span>
          <span> </span>{" "}
        </li>
      </ul>
          <div className="grid md:grid-cols-2 grid-cols-1 xl:grid-cols-4 gap-5  justify-center w-full">
          </div>
        </div>

        <div className="h-full flex flex-col gap-2">
          <h3 className="text-xl font-semibold">Forecasting Statistics</h3>
          <div className="w-full bg-default-50 shadow-lg rounded-2xl p-6 ">
            <Chart />
          </div>
        </div>

        <div className="h-full flex flex-col gap-2">
          <h3 className="text-xl font-semibold">Blood Type Consumption Previous Month</h3>
          <div className="w-full bg-default-50 shadow-lg rounded-2xl p-6 ">
            <PolarChart />
          </div>
        </div>
      </div>


    </div>

  </div>
);
