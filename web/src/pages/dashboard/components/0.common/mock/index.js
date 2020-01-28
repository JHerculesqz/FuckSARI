export default {
  mock4GetPieData: function () {
    return {
      "resultObj": {
        "title": "体温异常分布",
        "subTitle": "",
        "legendItems": [
          "异常",
          "正常"
        ],
        "data": [
          {
            "name": "异常",
            "value": Math.random()*100
          },
          {
            "name": "正常",
            "value": 1.0
          }
        ]
      },
      "errorObj": null,
      "ok": true
    }
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
          }
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
            "name": "2020-01-27",
            "value": ["2020-01-27", 10.0]
          },
          {
            "name": "2020-01-28",
            "value": ["2020-01-28", 39.0]
          }
        ]
      },
      "errorObj": null,
      "ok": true
    }
  },
}
