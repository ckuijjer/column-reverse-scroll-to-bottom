import React, { Component } from 'react';
import List from './List';

const NUMBER_OF_INITIAL_ITEMS = 3;

const initialItems = () =>
  new Array(NUMBER_OF_INITIAL_ITEMS).fill(0).map((_, i) => i);

class App extends Component {
  state = {
    items: initialItems(),
    shouldScrollToBottom: false,
  };

  addItem = () => {
    this.setState(state => ({
      items: [...state.items, state.items.length],
    }));
  };

  addItemAndScroll = () => {
    this.addItem();
    this.setState({ shouldScrollToBottom: true });
  };

  resetInitialItems = () => {
    this.setState(state => ({
      items: initialItems(),
    }));
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.shouldScrollToBottom && this.list) {
      this.list.scrollToBottom();
      this.setState({ shouldScrollToBottom: false });
    }
  }

  render() {
    const styles = {
      container: { margin: 20 },
      button: { margin: '8px 8px 0 0' },
    };

    return (
      <div style={styles.container}>
        {this.state.counter}
        <List items={this.state.items} ref={el => (this.list = el)} />
        <button style={styles.button} onClick={this.addItem}>
          Add item
        </button>
        <button style={styles.button} onClick={this.addItemAndScroll}>
          Add item and scroll
        </button>
        <button style={styles.button} onClick={this.resetInitialItems}>
          Reset initial items
        </button>
      </div>
    );
  }
}

export default App;
