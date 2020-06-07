import React, {Component} from 'react';
import {View} from 'react-native';
import PhoneBookList from '../ui/screens/PhoneBookList';
import SearchBook from '../ui/screens/SearchBook';
import Dashboard from '../ui/screens/Dashboard';
import BottomNavigation, {
  FullTab,
} from 'react-native-material-bottom-navigation';

class AppNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'Home',
    };
  }

  tabs = [
    {
      key: 'Home',

      label: 'HOME',

      pressColor: 'rgba(0, 0, 128, 0.16)',
    },
    {
      key: 'List',

      label: 'LIST',

      pressColor: 'rgba(0, 0, 128, 0.16)',
    },
    {
      key: 'Search',

      label: 'Search',

      pressColor: 'rgba(0, 0, 128, 0.16)',
    },
  ];

  renderTab = ({tab, isActive}) => (
    <FullTab
      isActive={isActive}
      key={tab.key}
      label={tab.label}
      renderIcon={() => null}
    />
  );

  renderScreenSwitch() {
    switch (this.state.activeTab) {
      case 'Home':
        return <Dashboard />;

      case 'List':
        return <PhoneBookList />;

      case 'Search':
        return <SearchBook />;

      default:
        return <Dashboard />;
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>{this.renderScreenSwitch()}</View>

        <BottomNavigation
          style={{backgroundColor: '#333333'}}
          onTabPress={newTab => this.setState({activeTab: newTab.key})}
          renderTab={this.renderTab}
          tabs={this.tabs}
        />
      </View>
    );
  }
}

export default AppNavigation;
