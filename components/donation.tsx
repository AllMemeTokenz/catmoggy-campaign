"use client";

import { toast } from "react-hot-toast";
import { Copy } from "lucide-react";
import Image from "next/image";

type WalletAddress = {
  name: string;
  address: string;
  bgColor: string;
  textColor: string;
  buttonBgColor: string;
  buttonTextColor: string;
  logoUrl: string;
};

export function DonationWallet() {
  const walletAddresses: WalletAddress[] = [
    {
      name: "Bitcoin",
      address: "bc1qd9e572vsegqfj973kdyrpgmhj3hjum5tytzx34",
      bgColor: "bg-[#FFF6E9]",
      textColor: "text-[#F7931A]",
      buttonBgColor: "bg-[#F7931A]/80",
      buttonTextColor: "text-white",
      logoUrl:
        "https://res.cloudinary.com/deeyw3apd/image/upload/v1742460455/bitcoin_prsb5r.png",
    },
    {
      name: "Ethereum",
      address: "0x9ce4C032d5BE39deF0AD00DF4449f56d6757032D",
      bgColor: "bg-[#EEF2FF]",
      textColor: "text-[#627EEA]",
      buttonBgColor: "bg-[#627EEA]/80",
      buttonTextColor: "text-white",
      logoUrl:
        "https://res.cloudinary.com/deeyw3apd/image/upload/v1742460308/ethereum_fn87lu.png",
    },
    {
      name: "Solana",
      address: "88ZCJEBVGZLye58KBLWjMQbicopEkNAYGeWZRhqitePD",
      bgColor: "bg-[#F5EEFF]",
      textColor: "text-[#9945FF]",
      buttonBgColor: "bg-gradient-to-r from-[#9945FF] to-[#14F195]",
      buttonTextColor: "text-white",
      logoUrl:
        "https://res.cloudinary.com/deeyw3apd/image/upload/v1742460333/solana_ldb77y.png",
    },
    {
      name: "Binance",
      address: "0x9ce4C032d5BE39deF0AD00DF4449f56d6757032D",
      bgColor: "bg-[#FFF9E6]",
      textColor: "text-[#F0B90B]",
      buttonBgColor: "bg-[#F0B90B]/80",
      buttonTextColor: "text-black",
      logoUrl:
        "https://res.cloudinary.com/deeyw3apd/image/upload/v1742460336/binance_gxxatx.png",
    },
    {
      name: "USDC (SPL20)",
      address: "88ZCJEBVGZLye58KBLWjMQbicopEkNAYGeWZRhqitePD",
      bgColor: "bg-[#E6F0FF]",
      textColor: "text-[#2775CA]",
      buttonBgColor: "bg-[#2775CA]/80",
      buttonTextColor: "text-white",
      logoUrl:
        "https://res.cloudinary.com/deeyw3apd/image/upload/v1742460342/usd-coin_noisbz.png",
    },
    {
      name: "USDT (TRC20)",
      address: "TJeGt4cWLvpmDWaCdLUrCBcSX8k2FN3GAS",
      bgColor: "bg-[#E6F7F2]",
      textColor: "text-[#26A17B]",
      buttonBgColor: "bg-[#26A17B]/80",
      buttonTextColor: "text-white",
      logoUrl:
        "https://res.cloudinary.com/deeyw3apd/image/upload/v1742460368/usdt_vxjsod.png",
    },
  ];

  const copyToClipboard = (address: string) => {
    navigator.clipboard
      .writeText(address)
      .then(() => {
        toast.success("Address has been copied to clipboard");
      })
      .catch(() => {
        toast.error("Could not copy address to clipboard");
      });
  };

  return (
    <section className="w-full flex mb-5 lg:mb-0 lg:mt-0 flex-col items-center justify-between lg:px-[111px] px-5 xl:px-[190px]">
      <div className="flex my-10 xl:mx-9 w-full flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-2 text-center text-[#065F46]">
          Wallet Donation CatMoggy
        </h2>
        <h3 className="text-xl font-semibold mb-8 text-center text-[#065F46]">
          Hit the copy button so you won&apos;t get the address wrong!
        </h3>

        <div className="w-full max-w-3xl space-y-4">
          {walletAddresses.map((wallet) => (
            <div
              key={wallet.name}
              className={`font-semibold flex flex-col sm:flex-row items-center justify-between text-center sm:space-x-5 space-y-3 sm:space-y-0 relative px-6 border border-[#483f3b] shadow-[1px_1px_0_#483f3b] transition-all ease-linear duration-100 ${wallet.bgColor} ${wallet.textColor} text-[17px] py-3 rounded-xl`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 w-full sm:w-auto">
                <span className="font-bold flex items-center gap-2">
                  <Image
                    src={wallet.logoUrl || "/placeholder.svg"}
                    alt={`${wallet.name} logo`}
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                  {wallet.name} |
                </span>
                <span className="break-all sm:break-normal">
                  {wallet.address}
                </span>
              </div>
              <button
                onClick={() => copyToClipboard(wallet.address)}
                className={`font-semibold whitespace-nowrap cursor-pointer px-4 uppercase border border-[#483f3b] shadow-[2px_2px_0_#483f3b] active:shadow-[0.5px_0.5px_0_#483f3b] active:translate-x-[1px] active:translate-y-[1px] ${wallet.buttonTextColor} active:scale-[0.99] transition-all ease-linear duration-100 hover:opacity-90 active:opacity-100 ${wallet.buttonBgColor} text-[17px] py-2 rounded-xl`}
              >
                <span className="flex items-center gap-2">
                  <Copy className="h-4 w-4" />
                  COPY
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
