import PropTypes from 'prop-types';

export default function TransactionItem({ type, amount, currency }) {
  return (
    <tr>
      <td style={{textTransform: 'capitalize'}}>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  )
}

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
}
