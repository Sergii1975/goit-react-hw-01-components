import PropTypes from 'prop-types'
import { TransactionHistoryTable, TableHeader, TableData, TableRow } from './TransactionHistory.styles'

export default function TransactionHistory({items }) {
  return (
    <TransactionHistoryTable>
      <thead>
        <tr>
          <TableHeader>Type</TableHeader>
          <TableHeader>Amount</TableHeader>
          <TableHeader>Currency</TableHeader>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TableRow key={id}>
            <TableData>{type}</TableData>
            <TableData>{amount}</TableData>
            <TableData>{currency}</TableData>
          </TableRow>
        ))}
      </tbody>
    </TransactionHistoryTable>
    // <table class="transaction-history">
    //   <thead>
    //     <tr>
    //       <th>Type</th>
    //       <th>Amount</th>
    //       <th>Currency</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {items.map(({ id, type, amount, currency }) => {
    //       return (
    //     <tr key={id}>
    //     <th>{type}</th>
    //     <th>{amount}</th>
    //     <th>{currency}</th>
    //     </tr>)
    //     })
    //     }
        
    //   </tbody> 
    // </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};