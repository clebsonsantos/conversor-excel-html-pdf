class Table{

  constructor(arr){
    this.header = arr[0];
    arr.shift();
    this.rows = arr;
  }
  get RowCount(){ // contagem de linhas da tabela

    return this.rows.length;
  }
  get ColumnCount(){ // contagem de colunas da tabela

    return this.header.length;
  }
}

module.exports = Table;