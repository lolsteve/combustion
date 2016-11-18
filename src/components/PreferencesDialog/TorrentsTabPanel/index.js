import React, { Component} from 'react';
import { inject, observer } from 'mobx-react';

@inject('view_store')
@observer
class TorrentsTabPanel extends Component {
  render() {
    return (
      <div>
        <h2>Downloading</h2>
        <h2>Seeding</h2>
      </div>
    );
  }
}

export default TorrentsTabPanel;