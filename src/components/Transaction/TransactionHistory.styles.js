import styled from '@emotion/styled'

export const TransactionHistoryTable = styled.table`
  border-collapse: collapse;  
  table-layout: auto;
  border: 2px solid silver;
  box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.5);
  width: 400px;
  margin: 60px auto;
  padding: 5px;
  background-color: beige;
  box-shadow: 1rem 1rem 2rem rgb(65, 64, 64), -1rem -1rem 2rem rgb(82, 81, 81);
`
export const TableHeader = styled.th`
  padding: 8px;
  text-align: center;
  border-bottom: 1px solid #ddd;
  background-color: #bec02a;  
`
export const TableData = styled.td`
  padding: 8px;
  text-align: center;
  border-bottom: 1px solid #ddd;
`
export const TableRow = styled.tr`
:nth-of-type(even) {
  background-color: #c9b3b3;
}
:hover {
  background-color: #ed8282;
}
`