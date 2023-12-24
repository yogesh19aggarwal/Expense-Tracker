import useTransactionForm from "../../hooks/useTransactionForm";
import MainSectionContainer from "../common/MainSectionContainer";
import TransForm from "./TransForm";
import Instruction from "../common/Instruction";
export default function TransactionFormPage() {
  const { transaction, onChangeTransaction } = useTransactionForm();
  const renderTextAccordingToForm = ({ createText, updateText }) => {
    return transaction._id ? updateText : createText;
  };
  return (
    <MainSectionContainer>
      <h2>
        {renderTextAccordingToForm({
          createText: "New Transaction",
          updateText: "Update Transaction",
        })}
      </h2>
      <Instruction
        text={renderTextAccordingToForm({
          createText: "You can create a new transaction below",
          updateText: "Update any field of transaction and click on Update",
        })}
      />
      <TransForm
        transaction={transaction}
        onChangeTransaction={onChangeTransaction}
      />
    </MainSectionContainer>
  );
}
