import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Platform,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import COLORS from '../../assets/colors';
import dummyData from './constant/const';

// interface DATATABLEPROPS {
//   tableData: any;
// }

const DataTable = ({tableData}) => {
  const rendercomponet = ({item}) => {
    return (
      <View style={style.dataView}>
        {Object.values(item).map(ele => {
          return (
            <View style={style.renderTextView}>
              <Text style={style.childTextView}>{ele}</Text>
            </View>
          );
        })}
      </View>
    );
  };
  const headerComponent = () => {
    return (
      <View style={style.headerView}>
        {Object.keys(dummyData[0]).map(ele => {
          return (
            <View style={style.renderTextView}>
              <Text style={style.textStyle}>{ele}</Text>
            </View>
          );
        })}
      </View>
    );
  };
  return (
    <View style={style.mainView}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <FlatList
          ListHeaderComponent={() => headerComponent()}
          data={dummyData}
          keyExtractor={item => item.id}
          renderItem={item => rendercomponet(item)}
        />
      </ScrollView>
    </View>
  );
};

export default DataTable;

const style = StyleSheet.create({
  mainView: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: COLORS.backgroundGrey,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  headerView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: Platform.OS === 'web' ? 'space-around' : null,
  },
  textStyle: {
    fontSize: 14,
    fontWeight: 700,
    marginLeft: 15,
    color: COLORS.geryText,
  },
  renderTextView: {
    width: 100,
    height: 80,
  },
  childTextView: {
    fontSize: 14,
    fontWeight: 400,
    marginLeft: 15,
    color: COLORS.blackText,
  },
  dataView: {
    backgroundColor: COLORS.white,
    width: '100%',
    flexDirection: 'row',
    justifyContent: Platform.OS === 'web' ? 'space-around' : null,
  },
});
