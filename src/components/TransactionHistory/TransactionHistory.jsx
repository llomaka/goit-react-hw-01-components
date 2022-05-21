import styles from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

export default function TransactionHistory({ items }) {
  return (
    <table className={styles.transactionHistory}>
      <thead className={styles.header}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => TransactionItem(item))}
      </tbody>
    </table>
  )
}

function TransactionItem({ id, type, amount, currency }) {
  return (
    <tr key={id}>
      <td style={{textTransform: 'capitalize'}}>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  )
}

TransactionHistory.propTypes = {
  items: PropTypes.array,
}

TransactionItem.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
}
