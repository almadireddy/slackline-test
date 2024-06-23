import DataTable, { TableColumn } from 'react-data-table-component';
import { Sale } from '../../data/products';

interface TableProps {
  sales: Sale[]
}

const Table: React.FC<TableProps> = ({ sales }) => {
  const cols: TableColumn<Sale>[] = [
    {
      name: "Week",
      selector: row => row.weekEnding,
      sortable: true
    },
    {
      name: "Retail Sales",
      selector: row => row.retailSales,
      sortable: true
    },
    {
      name: "Wholesale Sales",
      selector: row => row.wholesaleSales,
      sortable: true
    },
    {
      name: "Units Sold",
      selector: row => row.unitsSold,
      sortable: true
    },
    {
      name: "Retailer Margin",
      selector: row => row.retailerMargin,
      sortable: true
    },
  ]

	return (
		<DataTable
			columns={cols}
			data={sales}
      pagination
      paginationPerPage={10}
		/>
	);
};

export default Table;