import { AxisOptions, Chart } from "react-charts";
import { Sale } from "../../data/products";
import { useMemo } from "react";

interface GraphProps {
  sales: Sale[];
}

interface GraphDatumType {
  numSales: number,
  date: Date 
}

const Graph: React.FC<GraphProps> = ({ sales }) => {
  const data: { label: string, data: GraphDatumType[] }[] = [{
    label: "Retail Sales",
    data: sales.map(sale => ({ numSales: sale.retailSales, date: new Date(sale.weekEnding) }))
  }, {
    label: "Wholesale Sales",
    data: sales.map(sale => ({ numSales: sale.wholesaleSales, date: new Date(sale.weekEnding) }))
  }]

  const primaryAxis = useMemo(
    (): AxisOptions<GraphDatumType> => ({
      getValue: datum => datum.date,
    }),
    []
  )

  const secondaryAxes = useMemo(
    (): AxisOptions<GraphDatumType>[] => [
      {
        getValue: datum => datum.numSales,
      },
    ],
    []
  )

  return (
    <Chart
      options={{data, primaryAxis, secondaryAxes, initialWidth: 800}}
    />
  )
}

export default Graph;