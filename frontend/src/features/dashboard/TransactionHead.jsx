import { Link } from 'react-router-dom'
import './TransactionHead.css'
export default function TransactionHead() {
    return <div className="dash__transHead">
        <h3>Transactions</h3>
        <Link to={"/transactions"}>View All</Link>
    </div>
}