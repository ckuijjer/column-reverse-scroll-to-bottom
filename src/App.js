import React, { Component } from 'react';

const NUMBER_OF_INITIAL_ITEMS = 3;

class App extends Component {
  state = {
    items: new Array(NUMBER_OF_INITIAL_ITEMS).fill(0).map((_, i) => i),
  };

  addItem = () => {
    this.setState(state => ({
      items: [...state.items, state.items.length],
    }));
  };

  addItemAndScroll = () => {
    this.addItem();
  };

  render() {
    const styles = {
      container: { margin: 20 },
      button: { margin: '8px 8px 0 0' },
    };

    return (
      <div style={styles.container}>
        {this.state.counter}
        <List items={this.state.items} />
        <button style={styles.button} onClick={this.addItem}>
          Add item
        </button>
        <button style={styles.button} onClick={this.addItemAndScroll}>
          Add item and scroll
        </button>
      </div>
    );
  }
}

const List = ({ items }) => {
  const style = {
    border: '1px solid #f99',
    backgroundColor: 'rgba(255, 153, 153, 0.2)',
    width: 300,
    height: 300,
    overflow: 'scroll',
  };

  return <div style={style}>{items.map(item => <Item>{item}</Item>)}</div>;
};

const Item = ({ children }) => {
  const style = {
    border: '1px solid #eee',
    borderRadius: 4,
    backgroundColor: '#fff',
    padding: '4px 8px',
    margin: 4,
    color: '#333',
  };

  return <div style={style}>{children}</div>;
};

export default App;
