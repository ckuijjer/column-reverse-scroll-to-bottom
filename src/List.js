import React from 'react';
import Item from './Item';

export default class List extends React.Component {
  scrollToBottom = () => {
    if (this.container) {
      this.container.scrollTop = this.container.scrollHeight;
    }
  };

  render() {
    const { items } = this.props;
    const styles = {
      container: {
        border: '1px solid #f99',
        backgroundColor: 'rgba(255, 153, 153, 0.2)',
        width: 300,
        height: 300,
        overflow: 'auto',
      },
    };

    return (
      <div style={styles.container} ref={el => (this.container = el)}>
        {items.map((item, i) => <Item key={item}>{item}</Item>)}
      </div>
    );
  }
}
