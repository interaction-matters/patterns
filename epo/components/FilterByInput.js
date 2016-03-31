import React, { Component, PropTypes } from 'react';


class WidgetPanel extends Component {
  render() {
    return (
      <div>
        <div className={styles.header}>
          {this.props.title}
        </div>
        <div className={styles.inputBox}>
          <input type="text" onChange={this.props.onAddChange} />
        </div>
        <div className={styles.panelBody}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default class FilterByInput extends Component {
  static propTypes = {
    title: React.Proptypes.string,
    dismissible: React.Proptypes.bool,
    listItems: React.Proptypes.array
  };
  constructor(props) {
    super(props);
    this.state = {
      search:'filter by input'
    };
  }
  function updateSearch(e) {
    this.setState({search: e.target.value})
  }
  render(){
    let filteredResults = this.props.listItems.filter(
      (item) => {
        return item.name.indexOf(this.state.search) !== -1;
      }
    );
    let options = filteredResults.map((filterOption, i) => {
      return <li key={i} className={styles.listItem}>
              <input onChange={modifySearch.bind(this)} className={styles.checkbox} type="checkbox" />
              <span className={styles.title}>{filterOption.fTitle}</span>
              <span className={styles.number}>{filterOption.fNumber}</span>
             </li>
    });
    return (
      <WidgetPanel title={this.props.title} dismissible={true} onAddChange={updateSearch.bind(this)}>
        {options}
      </WidgetPanel>
    )
  };
}
