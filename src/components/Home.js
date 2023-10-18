import React from 'react';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { AiOutlineException } from 'react-icons/ai';
import { MdOutlineAccountBalanceWallet } from 'react-icons/md';
import { HiArrowNarrowUp, HiArrowNarrowDown } from "react-icons/hi";
import { FaShoppingBag } from "react-icons/fa";
import { BarChart, Bar, ResponsiveContainer } from "recharts";
import { PieChart, Pie } from "recharts";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { BsSearch } from "react-icons/bs";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

function Home() {
  const data = [
    {
      name: "Jan",
      uv: 1500,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Feb",
      uv: 1200,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Mar",
      uv: 2900,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Apr",
      uv: 2000,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "May",
      uv: 2300,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Jun",
      uv: 1000,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Jul",
      uv: 2600,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Aug",
      uv: 3000,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Sep",
      uv: 2700,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Oct",
      uv: 2100,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Nov",
      uv: 1900,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Dec",
      uv: 2000,
      pv: 4300,
      amt: 2100,
    },
  ];

  // const data01 = [
  //   { name: 'Group A', value: 400 },
  //   { name: 'Group B', value: 300 },
  //   { name: 'Group C', value: 300 },
  //   { name: 'Group D', value: 200 },
  // ];
  const data02 = [
    { name: "A1" },
    { name: "A2" },
    { name: "B1" },
    { name: "B2" },
    { name: "B3", value: 150 },
    { name: "B4" },
    { name: "B5" },
    { name: "C1" },
    { name: "C2" },
    { name: "D1" },
    { name: "D2" },
  ];

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    // createData('Eclair', 262, 16.0, 24, 6.0),
    // createData('Cupcake', 305, 3.7, 67, 4.3),
    // createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

  return (
    <main className="main-container">
      <div className="main-cards">
        <div className="card">
          <div className="card-icon-1">
            <RiMoneyDollarCircleLine
              className="card_icon"
              style={{ color: "#319C61" }}
            />
          </div>
          <div className="card-inner">
            <span className="card-title">Earning</span>
            <span className="count">$198k</span>
            <span className="percentage-count">
              <span style={{ color: "rgb(1 162 73)" }}>
                <HiArrowNarrowUp />
                37.6%{" "}
              </span>
              this month
            </span>
          </div>
        </div>
        <div className="card">
          <div className="card-icon-2">
            <AiOutlineException
              className="card_icon"
              style={{ color: "#9921DD" }}
            />
          </div>
          <div className="card-inner">
            <span className="card-title">Orders</span>
            <span className="count">$2.4k</span>
            <span className="percentage-count">
              <span style={{ color: "#AC3D62" }}>
                <HiArrowNarrowDown />
                2%{" "}
              </span>
              this month
            </span>
          </div>
        </div>
        <div className="card">
          <div className="card-icon-3">
            <MdOutlineAccountBalanceWallet
              className="card_icon"
              style={{ color: "#1A48AC" }}
            />
          </div>
          <div className="card-inner">
            <span className="card-title">Balance</span>
            <span className="count">$2.4k</span>
            <span className="percentage-count">
              <span style={{ color: "#AC3D62" }}>
                <HiArrowNarrowDown />
                2%{" "}
              </span>
              this month
            </span>
          </div>
        </div>
        <div className="card">
          <div className="card-icon-4">
            <FaShoppingBag className="card_icon" style={{ color: "#E9617E" }} />
          </div>
          <div className="card-inner">
            <span className="card-title">Total Sales</span>
            <span className="count">$89k</span>
            <span className="percentage-count">
              <span style={{ color: "rgb(1 162 73)" }}>
                <HiArrowNarrowUp />
                11%{" "}
              </span>
              this month
            </span>
          </div>
        </div>
      </div>

      <div className="charts">
        <ResponsiveContainer
          width="100%"
          height="100%"
          style={{ background: "white" }}
        >
          <BarChart width={150} height={40} data={data}>
            <Bar dataKey="uv" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer
          width="100%"
          height="100%"
          style={{ background: "white" }}
        >
          <PieChart width={400} height={400}>
            <Pie
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={60}
              fill="#8884d8"
            />
            <Pie
              data={data02}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={90}
              fill="#82ca9d"
              label
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="table">
        <TableContainer component={Paper}>
          <h3 style={{ margin: "10px" }}>Product Sell</h3>
          <div className="product-search">
            <BsSearch className="icon" />
            <input className="product-search-input" placeholder="search" />
          </div>

          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Product Name</TableCell>
                <TableCell align="right">Stock</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Total Sales</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  {/* <TableCell align="right">{row.protein}</TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </main>
  );
}

export default Home;
