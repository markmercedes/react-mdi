import React from "react";
import Faker from "faker";

class ItemsList extends React.Component {
  table() {
    return (
      <div className="card">
        <div className="card-body">
          <table className="table table-stripped">
            <thead className="text-primary">
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Headline</th>
                <th>Author</th>
                <th>Website</th>
              </tr>
            </thead>
            <tbody>{this.tableRows()}</tbody>
          </table>
        </div>
      </div>
    );
  }

  tableRows() {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    return arr.map(a => {
      return (
        <tr key={a}>
          <td>{Faker.company.companyName()}</td>
          <td>{Faker.company.companyName()}</td>
          <td>{Faker.company.companyName()}</td>
          <td>{Faker.company.companyName()}</td>
          <td>{Faker.company.companyName()}</td>
        </tr>
      );
    });
  }

  render() {
    return this.table();
  }
}

export default ItemsList;
