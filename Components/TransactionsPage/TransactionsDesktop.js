import Image from "next/image";
import filterImg from "../../Assets/filtericon.png";
import noTransactionImg from "../../Assets/NoTransactions.png";
import TransactionsList from "../Helpers/TransactionsList";
import SideBar from "../Helpers/SideBar";

const TransactionsDesktop = () => {
  return (
    <div className="bg-[#212936] flex gap-10 h-[63rem] w-full">
      <SideBar />
      <div className="w-[45rem] lg:w-[56rem] xl:w-[70rem] h-[58rem] mr-6 mt-5 bg-white rounded-3xl">
        <p className=" text-xl w-40 h-6 font-bold mt-5 ml-7 text-[#3a3a3a]">
          Transactions
        </p>
        <div className="flex gap-[11rem]  lg:gap-[14rem] xl:gap-[23rem]">
          <div className="flex">
            <input
              className="bg-[#f8f7fa] ml-6 mt-9 w-48 h-8 p-5 rounded-xl text-[#afbdd1] text-lg font-medium"
              type={"text"}
              id="search transactions"
              placeholder="Search transaction"
            />
            <button className="bg-[#cbcbd4] gap-4 pt-1 flex ml-6 mt-9 w-24 h-9 text-left pl-2 rounded-xl text-[#3a3a3a] text-lg font-medium">
              <p>Filter</p>
              <Image className="pt-1" src={filterImg} alt="filter" />
            </button>
          </div>
          <button className="bg-[#cbcbd4] ml-6 mt-9 w-16 lg:w-20 xl:w-24 h-9 rounded-xl text-[#3a3a3a] text-xs lg:text-base xl:text-lg font-medium">
            Export
          </button>
        </div>
        <div className="flex justify-around mt-8">
          <p className=" text-sm w-6 h-5 font-bold text-[#3a3a3a]">ID</p>
          <p className=" text-sm w-6 h-5 font-bold text-[#3a3a3a]">Amount</p>
          <p className=" text-sm w-6 h-5 font-bold text-[#3a3a3a]">Type</p>
          <p className=" text-sm w-6 h-5 font-bold text-[#3a3a3a]">Status</p>
          <p className=" text-sm w-6 h-5 font-bold text-[#3a3a3a]">Date</p>
        </div>
        <hr className=" h-5 w-full text-[#a6a6aa] mt-[1rem]" />
        <div className="ml-[40%] mt-[10%] text-xl font-medium text-[#a6a6aa]">
          <Image src={noTransactionImg} alt={noTransactionImg} />
          <div>No Transactions Found</div>
        </div>
        <TransactionsList />
      </div>
    </div>
  );
};

export default TransactionsDesktop;
