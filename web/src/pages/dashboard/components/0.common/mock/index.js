export default {
  mock4GetPieData: function () {
    var oOption = {
      "resultObj": {
        "title": "体温异常分布",
        "subTitle": "",
        "legendItems": [],
        "data": []
      },
      "errorObj": null,
      "ok": true
    };

    for(var i = 0; i<2; i++){
      oOption.resultObj.legendItems.push("地区" + i);
      oOption.resultObj.data.push({
        "name": "地区" + i,
        "value": Math.random()*100
      });
    }

    return oOption;
  },
  mock4GetGridData: function () {
    return {
      "resultObj": {
        "count": 1,
        "rowVos": [
          {
            "cellVos": [
              {
                "key": "userId",
                "value": "侯承志"
              },
              {
                "key": "userGroup",
                "value": ""
              },
              {
                "key": "location",
                "value": "湖北-武汉"
              },
              {
                "key": "temperature",
                "value": 36.2
              },
              {
                "key": "healthInfo",
                "value": "发热,咳嗽,感冒,四肢无力"
              },
              {
                "key": "feedBackTime",
                "value": "2020-01-26"
              },
              {
                "key": "isFeedBackToday",
                "value": true
              }
            ]
          },{
            "cellVos": [
              {
                "key": "userId",
                "value": "侯承志"
              },
              {
                "key": "userGroup",
                "value": ""
              },
              {
                "key": "location",
                "value": "湖北-武汉"
              },
              {
                "key": "temperature",
                "value": 36.2
              },
              {
                "key": "healthInfo",
                "value": "发热,咳嗽,感冒,四肢无力"
              },
              {
                "key": "feedBackTime",
                "value": "2020-01-26"
              },
              {
                "key": "isFeedBackToday",
                "value": true
              }
            ]
          },{
            "cellVos": [
              {
                "key": "userId",
                "value": "侯承志"
              },
              {
                "key": "userGroup",
                "value": ""
              },
              {
                "key": "location",
                "value": "湖北-武汉"
              },
              {
                "key": "temperature",
                "value": 36.2
              },
              {
                "key": "healthInfo",
                "value": "发热,咳嗽,感冒,四肢无力"
              },
              {
                "key": "feedBackTime",
                "value": "2020-01-26"
              },
              {
                "key": "isFeedBackToday",
                "value": true
              }
            ]
          },{
            "cellVos": [
              {
                "key": "userId",
                "value": "侯承志"
              },
              {
                "key": "userGroup",
                "value": ""
              },
              {
                "key": "location",
                "value": "湖北-武汉"
              },
              {
                "key": "temperature",
                "value": 36.2
              },
              {
                "key": "healthInfo",
                "value": "发热,咳嗽,感冒,四肢无力"
              },
              {
                "key": "feedBackTime",
                "value": "2020-01-26"
              },
              {
                "key": "isFeedBackToday",
                "value": true
              }
            ]
          },{
            "cellVos": [
              {
                "key": "userId",
                "value": "侯承志"
              },
              {
                "key": "userGroup",
                "value": ""
              },
              {
                "key": "location",
                "value": "湖北-武汉"
              },
              {
                "key": "temperature",
                "value": 36.2
              },
              {
                "key": "healthInfo",
                "value": "发热,咳嗽,感冒,四肢无力"
              },
              {
                "key": "feedBackTime",
                "value": "2020-01-26"
              },
              {
                "key": "isFeedBackToday",
                "value": true
              }
            ]
          },{
            "cellVos": [
              {
                "key": "userId",
                "value": "侯承志"
              },
              {
                "key": "userGroup",
                "value": ""
              },
              {
                "key": "location",
                "value": "湖北-武汉"
              },
              {
                "key": "temperature",
                "value": 36.2
              },
              {
                "key": "healthInfo",
                "value": "发热,咳嗽,感冒,四肢无力"
              },
              {
                "key": "feedBackTime",
                "value": "2020-01-26"
              },
              {
                "key": "isFeedBackToday",
                "value": true
              }
            ]
          },{
            "cellVos": [
              {
                "key": "userId",
                "value": "侯承志"
              },
              {
                "key": "userGroup",
                "value": ""
              },
              {
                "key": "location",
                "value": "湖北-武汉"
              },
              {
                "key": "temperature",
                "value": 36.2
              },
              {
                "key": "healthInfo",
                "value": "发热,咳嗽,感冒,四肢无力"
              },
              {
                "key": "feedBackTime",
                "value": "2020-01-26"
              },
              {
                "key": "isFeedBackToday",
                "value": true
              }
            ]
          },{
            "cellVos": [
              {
                "key": "userId",
                "value": "侯承志"
              },
              {
                "key": "userGroup",
                "value": ""
              },
              {
                "key": "location",
                "value": "湖北-武汉"
              },
              {
                "key": "temperature",
                "value": 36.2
              },
              {
                "key": "healthInfo",
                "value": "发热,咳嗽,感冒,四肢无力"
              },
              {
                "key": "feedBackTime",
                "value": "2020-01-26"
              },
              {
                "key": "isFeedBackToday",
                "value": true
              }
            ]
          },{
            "cellVos": [
              {
                "key": "userId",
                "value": "侯承志"
              },
              {
                "key": "userGroup",
                "value": ""
              },
              {
                "key": "location",
                "value": "湖北-武汉"
              },
              {
                "key": "temperature",
                "value": 36.2
              },
              {
                "key": "healthInfo",
                "value": "发热,咳嗽,感冒,四肢无力"
              },
              {
                "key": "feedBackTime",
                "value": "2020-01-26"
              },
              {
                "key": "isFeedBackToday",
                "value": true
              }
            ]
          },{
            "cellVos": [
              {
                "key": "userId",
                "value": "侯承志"
              },
              {
                "key": "userGroup",
                "value": ""
              },
              {
                "key": "location",
                "value": "湖北-武汉"
              },
              {
                "key": "temperature",
                "value": 36.2
              },
              {
                "key": "healthInfo",
                "value": "发热,咳嗽,感冒,四肢无力"
              },
              {
                "key": "feedBackTime",
                "value": "2020-01-26"
              },
              {
                "key": "isFeedBackToday",
                "value": true
              }
            ]
          },
          {
            "cellVos": [
              {
                "key": "userId",
                "value": "侯承志"
              },
              {
                "key": "userGroup",
                "value": ""
              },
              {
                "key": "location",
                "value": "湖北-武汉"
              },
              {
                "key": "temperature",
                "value": 36.2
              },
              {
                "key": "healthInfo",
                "value": "发热,咳嗽,感冒,四肢无力"
              },
              {
                "key": "feedBackTime",
                "value": "2020-01-26"
              },
              {
                "key": "isFeedBackToday",
                "value": true
              }
            ]
          },{
            "cellVos": [
              {
                "key": "userId",
                "value": "侯承志"
              },
              {
                "key": "userGroup",
                "value": ""
              },
              {
                "key": "location",
                "value": "湖北-武汉"
              },
              {
                "key": "temperature",
                "value": 36.2
              },
              {
                "key": "healthInfo",
                "value": "发热,咳嗽,感冒,四肢无力"
              },
              {
                "key": "feedBackTime",
                "value": "2020-01-26"
              },
              {
                "key": "isFeedBackToday",
                "value": true
              }
            ]
          },{
            "cellVos": [
              {
                "key": "userId",
                "value": "侯承志"
              },
              {
                "key": "userGroup",
                "value": ""
              },
              {
                "key": "location",
                "value": "湖北-武汉"
              },
              {
                "key": "temperature",
                "value": 36.2
              },
              {
                "key": "healthInfo",
                "value": "发热,咳嗽,感冒,四肢无力"
              },
              {
                "key": "feedBackTime",
                "value": "2020-01-26"
              },
              {
                "key": "isFeedBackToday",
                "value": true
              }
            ]
          },{
            "cellVos": [
              {
                "key": "userId",
                "value": "侯承志"
              },
              {
                "key": "userGroup",
                "value": ""
              },
              {
                "key": "location",
                "value": "湖北-武汉"
              },
              {
                "key": "temperature",
                "value": 36.2
              },
              {
                "key": "healthInfo",
                "value": "发热,咳嗽,感冒,四肢无力"
              },
              {
                "key": "feedBackTime",
                "value": "2020-01-26"
              },
              {
                "key": "isFeedBackToday",
                "value": true
              }
            ]
          },{
            "cellVos": [
              {
                "key": "userId",
                "value": "侯承志"
              },
              {
                "key": "userGroup",
                "value": ""
              },
              {
                "key": "location",
                "value": "湖北-武汉"
              },
              {
                "key": "temperature",
                "value": 36.2
              },
              {
                "key": "healthInfo",
                "value": "发热,咳嗽,感冒,四肢无力"
              },
              {
                "key": "feedBackTime",
                "value": "2020-01-26"
              },
              {
                "key": "isFeedBackToday",
                "value": true
              }
            ]
          },{
            "cellVos": [
              {
                "key": "userId",
                "value": "侯承志"
              },
              {
                "key": "userGroup",
                "value": ""
              },
              {
                "key": "location",
                "value": "湖北-武汉"
              },
              {
                "key": "temperature",
                "value": 36.2
              },
              {
                "key": "healthInfo",
                "value": "发热,咳嗽,感冒,四肢无力"
              },
              {
                "key": "feedBackTime",
                "value": "2020-01-26"
              },
              {
                "key": "isFeedBackToday",
                "value": true
              }
            ]
          },{
            "cellVos": [
              {
                "key": "userId",
                "value": "侯承志"
              },
              {
                "key": "userGroup",
                "value": ""
              },
              {
                "key": "location",
                "value": "湖北-武汉"
              },
              {
                "key": "temperature",
                "value": 36.2
              },
              {
                "key": "healthInfo",
                "value": "发热,咳嗽,感冒,四肢无力"
              },
              {
                "key": "feedBackTime",
                "value": "2020-01-26"
              },
              {
                "key": "isFeedBackToday",
                "value": true
              }
            ]
          },{
            "cellVos": [
              {
                "key": "userId",
                "value": "侯承志"
              },
              {
                "key": "userGroup",
                "value": ""
              },
              {
                "key": "location",
                "value": "湖北-武汉"
              },
              {
                "key": "temperature",
                "value": 36.2
              },
              {
                "key": "healthInfo",
                "value": "发热,咳嗽,感冒,四肢无力"
              },
              {
                "key": "feedBackTime",
                "value": "2020-01-26"
              },
              {
                "key": "isFeedBackToday",
                "value": true
              }
            ]
          },{
            "cellVos": [
              {
                "key": "userId",
                "value": "侯承志"
              },
              {
                "key": "userGroup",
                "value": ""
              },
              {
                "key": "location",
                "value": "湖北-武汉"
              },
              {
                "key": "temperature",
                "value": 36.2
              },
              {
                "key": "healthInfo",
                "value": "发热,咳嗽,感冒,四肢无力"
              },
              {
                "key": "feedBackTime",
                "value": "2020-01-26"
              },
              {
                "key": "isFeedBackToday",
                "value": true
              }
            ]
          },{
            "cellVos": [
              {
                "key": "userId",
                "value": "侯承志"
              },
              {
                "key": "userGroup",
                "value": ""
              },
              {
                "key": "location",
                "value": "湖北-武汉"
              },
              {
                "key": "temperature",
                "value": 36.2
              },
              {
                "key": "healthInfo",
                "value": "发热,咳嗽,感冒,四肢无力"
              },
              {
                "key": "feedBackTime",
                "value": "2020-01-26"
              },
              {
                "key": "isFeedBackToday",
                "value": true
              }
            ]
          },
          {
            "cellVos": [
              {
                "key": "userId",
                "value": "侯承志"
              },
              {
                "key": "userGroup",
                "value": ""
              },
              {
                "key": "location",
                "value": "湖北-武汉"
              },
              {
                "key": "temperature",
                "value": 36.2
              },
              {
                "key": "healthInfo",
                "value": "发热,咳嗽,感冒,四肢无力"
              },
              {
                "key": "feedBackTime",
                "value": "2020-01-26"
              },
              {
                "key": "isFeedBackToday",
                "value": true
              }
            ]
          },{
            "cellVos": [
              {
                "key": "userId",
                "value": "侯承志"
              },
              {
                "key": "userGroup",
                "value": ""
              },
              {
                "key": "location",
                "value": "湖北-武汉"
              },
              {
                "key": "temperature",
                "value": 36.2
              },
              {
                "key": "healthInfo",
                "value": "发热,咳嗽,感冒,四肢无力"
              },
              {
                "key": "feedBackTime",
                "value": "2020-01-26"
              },
              {
                "key": "isFeedBackToday",
                "value": true
              }
            ]
          },{
            "cellVos": [
              {
                "key": "userId",
                "value": "侯承志"
              },
              {
                "key": "userGroup",
                "value": ""
              },
              {
                "key": "location",
                "value": "湖北-武汉"
              },
              {
                "key": "temperature",
                "value": 36.2
              },
              {
                "key": "healthInfo",
                "value": "发热,咳嗽,感冒,四肢无力"
              },
              {
                "key": "feedBackTime",
                "value": "2020-01-26"
              },
              {
                "key": "isFeedBackToday",
                "value": true
              }
            ]
          },{
            "cellVos": [
              {
                "key": "userId",
                "value": "侯承志"
              },
              {
                "key": "userGroup",
                "value": ""
              },
              {
                "key": "location",
                "value": "湖北-武汉"
              },
              {
                "key": "temperature",
                "value": 36.2
              },
              {
                "key": "healthInfo",
                "value": "发热,咳嗽,感冒,四肢无力"
              },
              {
                "key": "feedBackTime",
                "value": "2020-01-26"
              },
              {
                "key": "isFeedBackToday",
                "value": true
              }
            ]
          },{
            "cellVos": [
              {
                "key": "userId",
                "value": "侯承志"
              },
              {
                "key": "userGroup",
                "value": ""
              },
              {
                "key": "location",
                "value": "湖北-武汉"
              },
              {
                "key": "temperature",
                "value": 36.2
              },
              {
                "key": "healthInfo",
                "value": "发热,咳嗽,感冒,四肢无力"
              },
              {
                "key": "feedBackTime",
                "value": "2020-01-26"
              },
              {
                "key": "isFeedBackToday",
                "value": true
              }
            ]
          },{
            "cellVos": [
              {
                "key": "userId",
                "value": "侯承志"
              },
              {
                "key": "userGroup",
                "value": ""
              },
              {
                "key": "location",
                "value": "湖北-武汉"
              },
              {
                "key": "temperature",
                "value": 36.2
              },
              {
                "key": "healthInfo",
                "value": "发热,咳嗽,感冒,四肢无力"
              },
              {
                "key": "feedBackTime",
                "value": "2020-01-26"
              },
              {
                "key": "isFeedBackToday",
                "value": true
              }
            ]
          },{
            "cellVos": [
              {
                "key": "userId",
                "value": "侯承志"
              },
              {
                "key": "userGroup",
                "value": ""
              },
              {
                "key": "location",
                "value": "湖北-武汉"
              },
              {
                "key": "temperature",
                "value": 36.2
              },
              {
                "key": "healthInfo",
                "value": "发热,咳嗽,感冒,四肢无力"
              },
              {
                "key": "feedBackTime",
                "value": "2020-01-26"
              },
              {
                "key": "isFeedBackToday",
                "value": true
              }
            ]
          },{
            "cellVos": [
              {
                "key": "userId",
                "value": "侯承志"
              },
              {
                "key": "userGroup",
                "value": ""
              },
              {
                "key": "location",
                "value": "湖北-武汉"
              },
              {
                "key": "temperature",
                "value": 36.2
              },
              {
                "key": "healthInfo",
                "value": "发热,咳嗽,感冒,四肢无力"
              },
              {
                "key": "feedBackTime",
                "value": "2020-01-26"
              },
              {
                "key": "isFeedBackToday",
                "value": true
              }
            ]
          },{
            "cellVos": [
              {
                "key": "userId",
                "value": "侯承志"
              },
              {
                "key": "userGroup",
                "value": ""
              },
              {
                "key": "location",
                "value": "湖北-武汉"
              },
              {
                "key": "temperature",
                "value": 36.2
              },
              {
                "key": "healthInfo",
                "value": "发热,咳嗽,感冒,四肢无力"
              },
              {
                "key": "feedBackTime",
                "value": "2020-01-26"
              },
              {
                "key": "isFeedBackToday",
                "value": true
              }
            ]
          },{
            "cellVos": [
              {
                "key": "userId",
                "value": "侯承志"
              },
              {
                "key": "userGroup",
                "value": ""
              },
              {
                "key": "location",
                "value": "湖北-武汉"
              },
              {
                "key": "temperature",
                "value": 36.2
              },
              {
                "key": "healthInfo",
                "value": "发热,咳嗽,感冒,四肢无力"
              },
              {
                "key": "feedBackTime",
                "value": "2020-01-26"
              },
              {
                "key": "isFeedBackToday",
                "value": true
              }
            ]
          },
          {
            "cellVos": [
              {
                "key": "userId",
                "value": "侯承志"
              },
              {
                "key": "userGroup",
                "value": ""
              },
              {
                "key": "location",
                "value": "湖北-武汉"
              },
              {
                "key": "temperature",
                "value": 36.2
              },
              {
                "key": "healthInfo",
                "value": "发热,咳嗽,感冒,四肢无力"
              },
              {
                "key": "feedBackTime",
                "value": "2020-01-26"
              },
              {
                "key": "isFeedBackToday",
                "value": true
              }
            ]
          },{
            "cellVos": [
              {
                "key": "userId",
                "value": "侯承志"
              },
              {
                "key": "userGroup",
                "value": ""
              },
              {
                "key": "location",
                "value": "湖北-武汉"
              },
              {
                "key": "temperature",
                "value": 36.2
              },
              {
                "key": "healthInfo",
                "value": "发热,咳嗽,感冒,四肢无力"
              },
              {
                "key": "feedBackTime",
                "value": "2020-01-26"
              },
              {
                "key": "isFeedBackToday",
                "value": true
              }
            ]
          },{
            "cellVos": [
              {
                "key": "userId",
                "value": "侯承志"
              },
              {
                "key": "userGroup",
                "value": ""
              },
              {
                "key": "location",
                "value": "湖北-武汉"
              },
              {
                "key": "temperature",
                "value": 36.2
              },
              {
                "key": "healthInfo",
                "value": "发热,咳嗽,感冒,四肢无力"
              },
              {
                "key": "feedBackTime",
                "value": "2020-01-26"
              },
              {
                "key": "isFeedBackToday",
                "value": true
              }
            ]
          },{
            "cellVos": [
              {
                "key": "userId",
                "value": "侯承志"
              },
              {
                "key": "userGroup",
                "value": ""
              },
              {
                "key": "location",
                "value": "湖北-武汉"
              },
              {
                "key": "temperature",
                "value": 36.2
              },
              {
                "key": "healthInfo",
                "value": "发热,咳嗽,感冒,四肢无力"
              },
              {
                "key": "feedBackTime",
                "value": "2020-01-26"
              },
              {
                "key": "isFeedBackToday",
                "value": true
              }
            ]
          },{
            "cellVos": [
              {
                "key": "userId",
                "value": "侯承志"
              },
              {
                "key": "userGroup",
                "value": ""
              },
              {
                "key": "location",
                "value": "湖北-武汉"
              },
              {
                "key": "temperature",
                "value": 36.2
              },
              {
                "key": "healthInfo",
                "value": "发热,咳嗽,感冒,四肢无力"
              },
              {
                "key": "feedBackTime",
                "value": "2020-01-26"
              },
              {
                "key": "isFeedBackToday",
                "value": true
              }
            ]
          },{
            "cellVos": [
              {
                "key": "userId",
                "value": "侯承志"
              },
              {
                "key": "userGroup",
                "value": ""
              },
              {
                "key": "location",
                "value": "湖北-武汉"
              },
              {
                "key": "temperature",
                "value": 36.2
              },
              {
                "key": "healthInfo",
                "value": "发热,咳嗽,感冒,四肢无力"
              },
              {
                "key": "feedBackTime",
                "value": "2020-01-26"
              },
              {
                "key": "isFeedBackToday",
                "value": true
              }
            ]
          },{
            "cellVos": [
              {
                "key": "userId",
                "value": "侯承志"
              },
              {
                "key": "userGroup",
                "value": ""
              },
              {
                "key": "location",
                "value": "湖北-武汉"
              },
              {
                "key": "temperature",
                "value": 36.2
              },
              {
                "key": "healthInfo",
                "value": "发热,咳嗽,感冒,四肢无力"
              },
              {
                "key": "feedBackTime",
                "value": "2020-01-26"
              },
              {
                "key": "isFeedBackToday",
                "value": true
              }
            ]
          },{
            "cellVos": [
              {
                "key": "userId",
                "value": "侯承志"
              },
              {
                "key": "userGroup",
                "value": ""
              },
              {
                "key": "location",
                "value": "湖北-武汉"
              },
              {
                "key": "temperature",
                "value": 36.2
              },
              {
                "key": "healthInfo",
                "value": "发热,咳嗽,感冒,四肢无力"
              },
              {
                "key": "feedBackTime",
                "value": "2020-01-26"
              },
              {
                "key": "isFeedBackToday",
                "value": true
              }
            ]
          },{
            "cellVos": [
              {
                "key": "userId",
                "value": "侯承志"
              },
              {
                "key": "userGroup",
                "value": ""
              },
              {
                "key": "location",
                "value": "湖北-武汉"
              },
              {
                "key": "temperature",
                "value": 36.2
              },
              {
                "key": "healthInfo",
                "value": "发热,咳嗽,感冒,四肢无力"
              },
              {
                "key": "feedBackTime",
                "value": "2020-01-26"
              },
              {
                "key": "isFeedBackToday",
                "value": true
              }
            ]
          },{
            "cellVos": [
              {
                "key": "userId",
                "value": "侯承志"
              },
              {
                "key": "userGroup",
                "value": ""
              },
              {
                "key": "location",
                "value": "湖北-武汉"
              },
              {
                "key": "temperature",
                "value": 36.2
              },
              {
                "key": "healthInfo",
                "value": "发热,咳嗽,感冒,四肢无力"
              },
              {
                "key": "feedBackTime",
                "value": "2020-01-26"
              },
              {
                "key": "isFeedBackToday",
                "value": true
              }
            ]
          },
          {
            "cellVos": [
              {
                "key": "userId",
                "value": "侯承志"
              },
              {
                "key": "userGroup",
                "value": ""
              },
              {
                "key": "location",
                "value": "湖北-武汉"
              },
              {
                "key": "temperature",
                "value": 36.2
              },
              {
                "key": "healthInfo",
                "value": "发热,咳嗽,感冒,四肢无力"
              },
              {
                "key": "feedBackTime",
                "value": "2020-01-26"
              },
              {
                "key": "isFeedBackToday",
                "value": true
              }
            ]
          },{
            "cellVos": [
              {
                "key": "userId",
                "value": "侯承志"
              },
              {
                "key": "userGroup",
                "value": ""
              },
              {
                "key": "location",
                "value": "湖北-武汉"
              },
              {
                "key": "temperature",
                "value": 36.2
              },
              {
                "key": "healthInfo",
                "value": "发热,咳嗽,感冒,四肢无力"
              },
              {
                "key": "feedBackTime",
                "value": "2020-01-26"
              },
              {
                "key": "isFeedBackToday",
                "value": true
              }
            ]
          },{
            "cellVos": [
              {
                "key": "userId",
                "value": "侯承志"
              },
              {
                "key": "userGroup",
                "value": ""
              },
              {
                "key": "location",
                "value": "湖北-武汉"
              },
              {
                "key": "temperature",
                "value": 36.2
              },
              {
                "key": "healthInfo",
                "value": "发热,咳嗽,感冒,四肢无力"
              },
              {
                "key": "feedBackTime",
                "value": "2020-01-26"
              },
              {
                "key": "isFeedBackToday",
                "value": true
              }
            ]
          },{
            "cellVos": [
              {
                "key": "userId",
                "value": "侯承志"
              },
              {
                "key": "userGroup",
                "value": ""
              },
              {
                "key": "location",
                "value": "湖北-武汉"
              },
              {
                "key": "temperature",
                "value": 36.2
              },
              {
                "key": "healthInfo",
                "value": "发热,咳嗽,感冒,四肢无力"
              },
              {
                "key": "feedBackTime",
                "value": "2020-01-26"
              },
              {
                "key": "isFeedBackToday",
                "value": true
              }
            ]
          },{
            "cellVos": [
              {
                "key": "userId",
                "value": "侯承志"
              },
              {
                "key": "userGroup",
                "value": ""
              },
              {
                "key": "location",
                "value": "湖北-武汉"
              },
              {
                "key": "temperature",
                "value": 36.2
              },
              {
                "key": "healthInfo",
                "value": "发热,咳嗽,感冒,四肢无力"
              },
              {
                "key": "feedBackTime",
                "value": "2020-01-26"
              },
              {
                "key": "isFeedBackToday",
                "value": true
              }
            ]
          },{
            "cellVos": [
              {
                "key": "userId",
                "value": "侯承志"
              },
              {
                "key": "userGroup",
                "value": ""
              },
              {
                "key": "location",
                "value": "湖北-武汉"
              },
              {
                "key": "temperature",
                "value": 36.2
              },
              {
                "key": "healthInfo",
                "value": "发热,咳嗽,感冒,四肢无力"
              },
              {
                "key": "feedBackTime",
                "value": "2020-01-26"
              },
              {
                "key": "isFeedBackToday",
                "value": true
              }
            ]
          },{
            "cellVos": [
              {
                "key": "userId",
                "value": "侯承志"
              },
              {
                "key": "userGroup",
                "value": ""
              },
              {
                "key": "location",
                "value": "湖北-武汉"
              },
              {
                "key": "temperature",
                "value": 36.2
              },
              {
                "key": "healthInfo",
                "value": "发热,咳嗽,感冒,四肢无力"
              },
              {
                "key": "feedBackTime",
                "value": "2020-01-26"
              },
              {
                "key": "isFeedBackToday",
                "value": true
              }
            ]
          },{
            "cellVos": [
              {
                "key": "userId",
                "value": "侯承志"
              },
              {
                "key": "userGroup",
                "value": ""
              },
              {
                "key": "location",
                "value": "湖北-武汉"
              },
              {
                "key": "temperature",
                "value": 36.2
              },
              {
                "key": "healthInfo",
                "value": "发热,咳嗽,感冒,四肢无力"
              },
              {
                "key": "feedBackTime",
                "value": "2020-01-26"
              },
              {
                "key": "isFeedBackToday",
                "value": true
              }
            ]
          },{
            "cellVos": [
              {
                "key": "userId",
                "value": "侯承志"
              },
              {
                "key": "userGroup",
                "value": ""
              },
              {
                "key": "location",
                "value": "湖北-武汉"
              },
              {
                "key": "temperature",
                "value": 36.2
              },
              {
                "key": "healthInfo",
                "value": "发热,咳嗽,感冒,四肢无力"
              },
              {
                "key": "feedBackTime",
                "value": "2020-01-26"
              },
              {
                "key": "isFeedBackToday",
                "value": true
              }
            ]
          },{
            "cellVos": [
              {
                "key": "userId",
                "value": "侯承志"
              },
              {
                "key": "userGroup",
                "value": ""
              },
              {
                "key": "location",
                "value": "湖北-武汉"
              },
              {
                "key": "temperature",
                "value": 36.2
              },
              {
                "key": "healthInfo",
                "value": "发热,咳嗽,感冒,四肢无力"
              },
              {
                "key": "feedBackTime",
                "value": "2020-01-26"
              },
              {
                "key": "isFeedBackToday",
                "value": true
              }
            ]
          },
        ]
      },
      "errorObj": null,
      "ok": true
    }
  },
  mock4GetLineData: function () {
    return {
      "resultObj": {
        "pointVoList": [
          {
            "name": "2020-01-25",
            "value": ["2020-01-25", 36.6]
          },
          {
            "name": "2020-01-27",
            "value": ["2020-01-27", 37.1]
          },
          {
            "name": "2020-01-28",
            "value": ["2020-01-28", 39.0]
          },
          {
            "name": "2020-01-29",
            "value": ["2020-01-29", 38.3]
          }
        ]
      },
      "errorObj": null,
      "ok": true
    }
  },
}
