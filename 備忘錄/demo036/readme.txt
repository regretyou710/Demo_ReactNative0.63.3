//配合react-native-reanimated版本2.9.0，"react-native": "0.67.2"

//修改項目配置
項目\babel.config.js
  module.exports = {
      ...
      plugins: [
          ...
          'react-native-reanimated/plugin',
      ],
  };


//請在您的入口文件的頂部react-native-gesture-handler添加以下內容（確保它在頂部並且之前沒有其他內容），例如或：index.jsApp.js
import 'react-native-gesture-handler';