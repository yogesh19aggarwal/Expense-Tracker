import { FaPlus } from "react-icons/fa";
import './FloatingAddButton.css'
import { useNavigate } from "react-router-dom";
export default function FloatingAddButton() {
    const navigate = useNavigate();
    const onClickFloatingTransBtn = () => {
        navigate("/transactions/new");
    }
    return <span onClick={onClickFloatingTransBtn} title="Add new transaction" className="floating__add"><FaPlus size={35} /></span>
}