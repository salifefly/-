//这个js是用WxMock来模拟一个请求数据
var Mock = require("./WxMock.js");
var Random = Mock.Random;
var videoDetail = Mock.mock("https://mock-date.com/videoDatail", {
    "codeText": "请求成功",
    "code": 200,
    "data": {
        videoInfo: {
            author: "阿兰若",
            commentcount: 12435,
            date: "2019-11-07",
            id: 233,
            playCount: "24.7万",
            videoSrc: Random.image('200X150', Random.color(), "视频详情"),
            videoTitle: "世界上最美的童话镇，你要去看吗？请带我……"
        }
    }
});
var navList = Mock.mock("https://mock-date.com/navList", {
    "codeText": "请求成功",
    "code": 200,
    "data": {
        navList: [
            {
                "text": "首页",
                "id": 0
            },
            {
                "text": "动画",
                "id": 1
            },
            {
                "text": "番剧",
                "id": 2
            },
            {
                "text": "国创",
                "id": 3
            },
            {
                "text": "音乐",
                "id": 4
            },
            {
                "text": "舞蹈",
                "id": 5
            },
            {
                "text": "游戏",
                "id": 6
            },
            {
                "text": "科技",
                "id": 7
            },
            {
                "text": "数码",
                "id": 8
            },
        ]
    }
});
export default {
    navList,
    swiperList,
    videoList,
    videoDetail
};