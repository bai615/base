(function() {
    var iArray = {
      /**
       * [forEach 遍历数组，对数组元素执行回调方法]
       * @param  {[array]}   arr      [数组]
       * @param  {Function} callback [方法]
       */
      forEach: function(arr,callback){
        if(Array.prototype.forEach){
          Array.prototype.forEach.call(arr,callback);
        } else{
          for(var i=0,len=arr.length;i<len;i++){
            callback.call(arr,arr[i],i);
          }
        }
      },
      /**
       * [indexOf 查找元素在数组中的位置，如果没有返回-1]
       * @param  {[array]} arr [数组]
       * @param  {[object]} val [查找元素]
       * @return {[int]}     [位置]
       */
      indexOf: function(arr,val){
        if(Array.prototype.indexOf){
          return Array.prototype.indexOf.call(arr,val);
        } else{
          for(var i=0,len=arr.length;i<len;i++){
            if(arr[i] === val){
              return i;
            }
          }
          return -1;
        }
      },
      /**
       * [unique 对数组元素去重，并返回新数组]
       * @param  {[array]} arr [待处理的数组]
       * @return {[array]}     [新数组]
       */
      unique: function(arr){
        var rt = [],obj = {};
        for (var i = 0, len = arr.length; i<len; i++) {
          if (!obj[arr[i]]) {
            obj[arr[i]] = 1;
            rt.push(arr[i]);
          }
        }
        return rt;
      },
      /**
       * [filter 依次对所有数组成员调用一个测试函数，返回结果为true的成员组成一个新数组返回]
       * @param  {[array]}   arr      [待处理数组]
       * @param  {Function} callback [description]
       * @return {[array]}            [新数组]
       */
      filter: function(arr,callback){
        if(Array.prototype.filter){
          return Array.prototype.filter.call(arr,callback);
        } else{
          var tmp = [];
          for(var i=0,len=arr.length;i< len;i++){
            if(callback.call(arr,arr[i])){
              tmp.push(arr[i]);
            }
          }
          return tmp;
        }
      },
      /**
       * [some 对所有元素调用一个测试函数，只要有一个元素通过该测试，就返回true，否则返回false。]
       * @param  {[array]}   arr      [待测试数组]
       * @param  {Function} callback [测试函数]
       * @return {[boolean]}            [布尔值]
       */
      some: function(arr,callback){
        if(Array.prototype.some){
          return Array.prototype.some.call(arr,callback);
        } else{
          for(var i=0,len=arr.length;i<len;i++){
            if(callback.call(arr,arr[i])){
              return true;
            }
          }
          return false;
        }
      },
      /**
       * [every 对所有元素调用一个测试函数，只有所有元素通过该测试，才返回true，否则返回false。]
       * @param  {[array]}   arr      [待测试数组]
       * @param  {Function} callback [测试函数]
       * @return {[boolean]}            [布尔值]
       */
      every:function(arr,callback){
        if(Array.prototype.every){
          return Array.prototype.every.call(arr,callback);
        } else{
          for(var i=0,len=arr.length;i<len;i++){
            if(i in arr && callback.call(arr,arr[i],i)){
              return true;
            }
          }
          return false;
        }
      }
    };

    iBase.iArray = iArray;

})();