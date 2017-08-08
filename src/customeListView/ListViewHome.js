import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
} from 'react-native';
import ListItem from './ListItem';
import renderIf from './renderIf';
import CategoriesList from './categoriesList';
import NewsList  from './newsList'
import MarketsList from './MarketsList'
import {Navigation} from 'react-native-navigation';

class MyComponent extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource1: ds.cloneWithRows(['row 1', 'row 2','row 2','row 2','row 2','row 2']),
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
       dataSource2: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
    };
     
  }
  componentDidMount() {
      this._userCloseDealsSeller();
      this._userMarket();
    }
  _userCloseDealsSeller() {
  try {
    return fetch("https://api.myjson.com/bins/17b47l")
    .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
      dataSource: this.state.dataSource.cloneWithRows(responseJson.articles),
      loaded: true,
      });
        return responseJson.articles;
      })
      .catch((error) => {
        console.error(error);
      });



  }  catch(error) {
        this.setState({error: error});
        console.log("error " + error);
    }
}
  _userMarket() {
  try {
    return fetch("https://api.myjson.com/bins/10xzr5")
    .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
      dataSource2: this.state.dataSource2.cloneWithRows(responseJson.articles),
      });
        return responseJson.articles;
      })
      .catch((error) => {
        console.error(error);
      });



  }  catch(error) {
        this.setState({error: error});
        console.log("error " + error);
    }
}
  
  
  

   renderDataRow1(data){
    return <ListItem data={data} navigator = {this.props.navigator} />;
  }
   renderDataRow2(data){
    return <CategoriesList data={data} />;
  }
   renderDataRow3(data){
    return <NewsList data={data} />;
  }
   renderDataRow4(data){
    return <MarketsList data={data} />;
  }


  render() {
    const { isType } = this.props;
    if (isType == 1){
  return (
      <ListView
     showsHorizontalScrollIndicator={false} 
        style = {styles.listView}
        horizontal={true}
        renderRow={this.renderDataRow1.bind(this)}
        dataSource={this.state.dataSource}
       // renderRow={(rowData) => <Text style = {styles.text}>{rowData}</Text>}
      />
    );
    }else if (isType == 2){
      return (
      <ListView
        style = {styles.listView}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        renderRow={this.renderDataRow2.bind(this)}
        dataSource={this.state.dataSource2}
       // renderRow={(rowData) => <Text style = {styles.text}>{rowData}</Text>}
      />
    );

    }else if (isType == 3){
  return (
      <ListView
        style = {styles.listView}
        showsHorizontalScrollIndicator={false}
        horizontal={false}
        renderRow={this.renderDataRow3.bind(this)}
        dataSource={this.state.dataSource1}
       // renderRow={(rowData) => <Text style = {styles.text}>{rowData}</Text>}
      />
    );
    }else if (isType == 4){
  return (
      <ListView
        style = {styles.listView}
        showsHorizontalScrollIndicator={false}
        horizontal={false}
        renderRow={this.renderDataRow4.bind(this)}
        dataSource={this.state.dataSource1}
       // renderRow={(rowData) => <Text style = {styles.text}>{rowData}</Text>}
      />
    );
    }

    //const isLoggedIn = props.isLoggedIn;
  
  }
}

const styles = StyleSheet.create({
  text: {width:100,height : 40},
  listView: {backgroundColor: 'white', margin:5}, 
});

export default MyComponent
