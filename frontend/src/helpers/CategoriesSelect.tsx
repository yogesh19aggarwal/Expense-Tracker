import { CiDollar } from "react-icons/ci";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { TbAdjustmentsDollar } from "react-icons/tb";
import { TbCalendarDollar } from "react-icons/tb";
import { FaHouseChimneyWindow } from "react-icons/fa6";
import { LuUtilityPole } from "react-icons/lu";
import { PiBowlFoodDuotone } from "react-icons/pi";
import { MdEmojiTransportation } from "react-icons/md";
import { AiFillInsurance } from "react-icons/ai";
import { GiPayMoney } from "react-icons/gi";
import { GiMedicalPack } from "react-icons/gi";
import { GiMusicalNotes } from "react-icons/gi";
import { PiStudentBold } from "react-icons/pi";
import { FcMoneyTransfer } from "react-icons/fc";
export const categoriesSelectOptions = {
  income: {
    salary: "Salary",
    bonus: "Bonus",
    overtime: "Overtime pay",
    commission: "Commission",
  },
  expense: {
    miscellaneous: "Miscellaneous",
    rentOrMortgage: "Rent or Mortgage",
    utilities: "Utilities",
    groceries: "Groceries",
    food: "Food & Beverages",
    transportation: "Transportation",
    insurance: "Insurance",
    loanPayments: "Loan payments",
    medicalExpenses: "Medical expenses",
    entertainment: "Entertainment",
    education: "Education",
  },
};

const categoryIcons = {
  salary: CiDollar,
  bonus: FaMoneyCheckDollar,
  overtime: FaHandHoldingDollar,
  commission: TbAdjustmentsDollar,
  miscellaneous: TbCalendarDollar,
  rentOrMortgage: FaHouseChimneyWindow,
  utilities: LuUtilityPole,
  groceries: PiBowlFoodDuotone,
  transportation: MdEmojiTransportation,
  insurance: AiFillInsurance,
  loanPayments: GiPayMoney,
  entertainment: GiMusicalNotes,
  food: PiBowlFoodDuotone,
  education: PiStudentBold,
  medicalExpenses: GiMedicalPack,
};

export const getCategoryIcon = (category) => {
  const Icon = categoryIcons[category] || FcMoneyTransfer;
  return Icon;
};
