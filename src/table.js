import React from "react";
import BootstrapTable, {TableHeaderColumn, headerStyle} from "react-bootstrap-table-next";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import { Button } from "react-bootstrap";
import foodData from './data-json';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator'
import cellEditFactory, {Type} from 'react-bootstrap-table2-editor';

const { SearchBar } = Search;

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

class SelectionTable extends React.Component {
  columns = [
    {
      dataField: "name",
      text: "Product Name",
      headerStyle: (colum, colIndex) => {
        return { width: '350px', height: '25px', textAlign: 'center', backgroundColor: '#C0C0C0'};
      },
      sort: true,
      
      // Truncate Text
      //style: {whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden'}, 
      
      footer: 'Totals'
    },
    {
      dataField: "Serving Description",
      text: "Serving Size",
      sort: true,
      headerStyle: (colum, colIndex) => {
        return { height: '25px', textAlign: 'center', backgroundColor: '#C0C0C0'};
      },
      // Truncate Text
      //style: {whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden'},
      
      footer: ''
    },
    {
      dataField: "Calories",
      text: "Calories (cal)",
      sort: true,
      headerStyle: (colum, colIndex) => {
        return { height: '25px', textAlign: 'center', backgroundColor: '#C0C0C0'};
      },
      footerAlign: 'center',
      footer: columnData => columnData.reduce((acc, item) => acc + parseInt(item), 0) + 'cal'
    },
    {
      dataField: "Protein (g)",
      text: "Protein (g)",
      headerStyle: (colum, colIndex) => {
        return { height: '25px', textAlign: 'center', backgroundColor: '#C0C0C0'};
      },
      footerAlign: 'center',
      footer: columnData => columnData.reduce((acc, item) => acc + parseInt(item), 0) + 'g'
    },
    {
      dataField: "Carbohydrate (g)",
      text: "Carbs (g)",
      headerStyle: (colum, colIndex) => {
        return { height: '25px', textAlign: 'center', backgroundColor: '#C0C0C0'};
      },
      footerAlign: 'center',
      footer: columnData => columnData.reduce((acc, item) => acc + parseInt(item), 0) + 'g'
    },
    {
      dataField: "Fat (g)",
      text: "Fats (g)",
      headerStyle: (colum, colIndex) => {
        return { height: '25px', textAlign: 'center', backgroundColor: '#C0C0C0'};
      },
      footerAlign: 'center',
      footer: columnData => columnData.reduce((acc, item) => acc + parseInt(item), 0) + 'g'
    },
    {
      dataField: "Selected",
      text: "Selected",
      headerStyle: (colum, colIndex) => {
        return { height: '25px', textAlign: 'center', backgroundColor: '#C0C0C0'};
      },
      style: { textAlign: 'center' },
      filter: textFilter({ placeholder: 'Y/N', textAlign: 'center'}),
      editor: {
        type: Type.CHECKBOX,
        value: 'Yes:No',
      },
      footer: ''
    }
  ];

  clearAllFilter() {
  }

  render() {
    return (
      <div>
        <h1>Select Your Foods</h1>
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
                pagination={ paginationFactory() }
                cellEdit={ cellEditFactory({ mode: 'click', blurToSave: true }) }
                noDataIndication="No items fit description"
                striped
                hover
                condensed
                rowStyle={ { height: '50px' } }
              >
              </BootstrapTable>
            </div>
          )}
        </ToolkitProvider>
      </div>
    );
  }
}

export default SelectionTable;
