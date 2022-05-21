import styles from './TransactionHistory.module.css';
import PropTypes from 'prop-types';
import TransactionItem from 'components/TransactionItem/TransactionItem';

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
        {items.map(({ id, type, amount, currency }) =>
          <TransactionItem
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        )}
      </tbody>
    </table>
  )
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
}
