import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter, selectFilter, selectOptions } from "react-bootstrap-table2-filter";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import { Button } from "react-bootstrap";
import foodData from './tempData';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator'
import cellEditFactory, {Type} from 'react-bootstrap-table2-editor';

const { SearchBar } = Search;

let nameFilter;
let priceFilter;
let stockFilter;
let originFilter;

const ClearButton = props => {
  const handleClick = () => {
    props.onSearch("");
    props.clearAllFilter();
  };
  return (
    <Button
      variant="secondary"
      onClick={handleClick}
      style={{
        fontSize: "16px",
        padding: "5px",
        margin: "10px",
        height: "40px"
      }}
    >
      Clear
    </Button>
  );
};

class YourFoodsTable extends React.Component {
  columns = [
    {
      dataField: "name",
      text: "Product Name",
      headerStyle: (colum, colIndex) => {
        return { width: '350px', height: '50px', textAlign: 'center' };
      },
      sort: true,
      style: {whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden'},
      footer: 'Totals'
    },
    {
      dataField: "Serving Description",
      text: "Serving Size",
      sort: true,
      footer: ''
    },
    {
      dataField: "Calories",
      text: "Calories",
      sort: true,
      footerAlign: 'center',
      footer: columnData => columnData.reduce((acc, item) => acc + parseInt(item), 0) + 'cal'
    },
    {
      dataField: "Protein (g)",
      text: "Protein (g)",
      footerAlign: 'center',
      footer: columnData => columnData.reduce((acc, item) => acc + parseInt(item), 0) + 'g'
    },
    {
      dataField: "Carbohydrate (g)",
      text: "Carbs (g)",
      footerAlign: 'center',
      footer: columnData => columnData.reduce((acc, item) => acc + parseInt(item), 0) + 'g'
    },
    {
      dataField: "Fat (g)",
      text: "Fats (g)",
      footerAlign: 'center',
      footer: columnData => columnData.reduce((acc, item) => acc + parseInt(item), 0) + 'g'
    },
    {
      dataField: "Selected",
      text: "Selected",
      filter: textFilter(),
      editor: {
        type: 'select',
        options: [{
          value: 'Added',
          label: 'Add'
        },
        {
          value: '',
          label: 'Remove'
        }]
      },
      footer: ''
    }
  ];

  clearAllFilter() {
    nameFilter("");
    priceFilter("");
    originFilter("");
    stockFilter("");
  }

  render() {
    return (
      <div>
        <h1>Your Foods</h1>
        <ToolkitProvider
          bootstrap4
          keyField="name"
          data={foodData}
          columns={this.columns}
          search
        >
          {props => (
            <div>
              <SearchBar
                {...props.searchProps}
                style={{ width: "400px", height: "40px" }}
              />
              <ClearButton
                {...props.searchProps}
                clearAllFilter={this.clearAllFilter}
              />
              <BootstrapTable
                {...props.baseProps}
                filter={filterFactory()}
                cellEdit={ cellEditFactory({ mode: 'click', blurToSave: true }) }
                noDataIndication="There is no solution"
                striped
                hover
                condensed
                rowStyle={ { height: '10px' } }
              />
            </div>
          )}
        </ToolkitProvider>
      </div>
    );
  }
}

export default YourFoodsTable;
