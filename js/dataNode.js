var basicData = [
    {
        // 数据项的名称
        name: '公证行政管理和行业管理系统',
        // 数据项值
        value: [1, 0, 1]
    },
    {
        name: '公证综合办证系统',
        value: [3, 0, 1]
    }, 
    {
        name: '公证基础数据平台',
        value: [5, 0, 1]
    },
    {
        name: '法律援助案件质量评估系统',
        value: [7, 0, 1]
    }, 
    {
        name: '法律援助信息管理系统',
        value: [9, 0, 1]
    },
    {
        name: '全国律师综合管理系统',
        value: [1, 1, 1]
    }, 
    {
        name: '司法鉴定管理系统',
        value: [3, 1, 1]
    },
    {
        name: '人民调解和基层司法所系统',
        value: [5, 1, 2]
    }, 
    {
        name: '人民监督员管理信息系统',
        value: [7, 1, 1]
    },
    {
        name: '中国知识产权平台',
        value: [9, 1, 2]
    }, 
    {
        name: '全国普法依法治理信息管理系统',
        value: [5, 2, 1]
    },
    {
        name: '立法公开征集意见系统',
        value: [7, 2, 1]
    }, 
    {
        name: '行政复议与行政应诉统计系统',
        value: [9, 2, 2]
    },
    {
        name: '监狱管理系统',
        value: [6, 4, 1]
    }, 
    {
        name: '戒毒管理系统',
        value: [7, 4, 1]
    },
    {
        name: '社区矫正管理系统',
        value: [8, 4, 1]
    }, 
    {
        name: '行政执法综合管理监督信息系统',
        value: [5, 5, 1]
    },
    {
        name: '法律法规规章备案审查工作平台',
        value: [6, 5, 1]
    }, 
    {
        name: '行政复议工作平台',
        value: [7, 5, 2]
    },
    {
        name: '法律职业资格考试管理系统',
        value: [8, 5, 2]
    }, 
    {
        name: '公安部',
        value: [0, 3, 1]
    },
    {
        name: '民政部',
        value: [2, 3, 1]
    }, 
    {
        name: '自然资源部',
        value: [0, 4, 1]
    }, 
    {
        name: '教育部',
        value: [2, 4, 1]
    }
];

var standardData = [
    {
        name: '行政立法',
        value: [4,0,1]
    },
    {
        name: '综合保障与政务管理',
        value: [5,1,2]
    }, 
    {
        name: '刑事执行',
        value: [2,2,3]
    },
    {
        name: '全面依法治国',
        value: [1,1,1]
    }, 
    {
        name: '公共法律服务',
        value: [3,3,3]
    }, 
    {
        name: '行政执法协调监督',
        value: [5,3,1.5]
    }
];

var mergeData = [
    {
        name: '主数据',
        value: [3,0,1]
    },
    {
        name: '业务专题',
        value: [1,1,1]
    }, 
    {
        name: '历史趋势',
        value: [4,1,2]
    },
    {
        name: '数据资源目录',
        value: [2,2,1]
    }
];

var applicationData = [
    {
        name: '全景搜索',
        value: [1,0,1]
    },
    {
        name: '数据看板',
        value: [0,1,2]
    }, 
    {
        name: '知识图谱',
        value: [2,1,1.5]
    },
    {
        name: '分析研判',
        value: [1,2,1]
    }
];


// 飞线图节点数据
var items = [    
    {
        level: 1,
        symbol: "",
        name: "普法依法治理",
        category: 0,
        active: true,
        speed: 6,
        value: [46.5, 17],
        belong:'综合保障与政务管理',
    },
    {
        level: 1,
        symbol: "",
        name: "人民调解和基层司法所",
        category: 0,
        active: true,
        speed: 6,
        value: [38.5, 15],
        belong:'综合保障与政务管理',
    },
    {
        level: 1,
        symbol: "",
        name: "人民监督员",
        category: 0,
        active: true,
        speed: 6,
        value: [46, 11],
        belong:'综合保障与政务管理',
    },
    {
        level: 1,
        symbol: "",
        name: "律师",
        category: 0,
        active: true,
        speed: 6,
        value: [26.5, 20],
        belong:'综合保障与政务管理',
    },
    {
        level: 1,
        symbol: "",
        name: "法律职业资格考试",
        category: 0,
        active: true,
        speed: 6,
        value: [76, 21],
        belong:'综合保障与政务管理',
    },
    {
        level: 1,
        symbol: "",
        name: "教育部",
        category: 0,
        active: true,
        speed: 6,
        value: [50, 26],
        belong:'法律职业资格考试',
    },
    {
        level: 1,
        symbol: "",
        name: "法律法规备案审查",
        category: 0,
        active: true,
        speed: 6,
        value: [68.5, 24],
        belong:'全面依法治国',
    },
    {
        level: 1,
        symbol: "",
        name: "立法意见征集",
        category: 0,
        active: true,
        speed: 6,
        value: [54, 14],
        belong:'行政立法',
    },
    {
        level: 1,
        symbol: "",
        name: "行政执法监督",
        category: 0,
        active: true,
        speed: 6,
        value: [65, 25],
        belong:'行政执法协调监督',
    },
    {
        level: 1,
        symbol: "",
        name: "行政复议与应诉",
        category: 0,
        active: true,
        speed: 6,
        value: [62.5, 11],
        belong:'行政执法协调监督',
    },    
    {
        level: 1,
        symbol: "",
        name: "行政复议工作平台",
        category: 0,
        active: true,
        speed: 6,
        value: [72, 23],
        belong:'行政执法协调监督',
    },
    {
        level: 1,
        symbol: "",
        name: "监狱",
        category: 0,
        active: true,
        speed: 6,
        value: [63, 21],
        belong:'刑事执行',
    },
    {
        level: 1,
        symbol: "",
        name: "戒毒",
        category: 0,
        active: true,
        speed: 6,
        value: [67, 20],
        belong:'刑事执行',
    },    
    {
        level: 1,
        symbol: "",
        name: "社区矫正",
        category: 0,
        active: true,
        speed: 6,
        value: [71, 19],
        belong:'刑事执行',
    },
    {
        level: 1,
        symbol: "",
        name: "公证行政和行业管理",
        category: 0,
        active: true,
        speed: 6,
        value: [17.5, 18],
        belong:'公共法律服务',
    },
    {
        level: 1,
        symbol: "",
        name: "公证综合办证",
        category: 0,
        active: true,
        speed: 6,
        value: [23, 15],
        belong:'公共法律服务',
    },    
    {
        level: 1,
        symbol: "",
        name: "公证基础数据平台",
        category: 0,
        active: true,
        speed: 6,
        value: [29, 11],
        belong:'公共法律服务',
    },
    {
        level: 1,
        symbol: "",
        name: "法援案件质量评估",
        category: 0,
        active: true,
        speed: 6,
        value: [36.5, 7],
        belong:'公共法律服务',
    },
    {
        level: 1,
        symbol: "",
        name: "法援管理系统",
        category: 0,
        active: true,
        speed: 6,
        value: [45, 2],
        belong:'公共法律服务',
    },
    {
        level: 1,
        symbol: "",
        name: "司法鉴定",
        category: 0,
        active: true,
        speed: 6,
        value: [32, 18],
        belong:'公共法律服务',
    },
    {
        level: 1,
        symbol: "",
        name: "公安部",
        category: 0,
        active: true,
        speed: 6,
        value: [39, 26],
        belong:'公证综合办证',
    },
    {
        level: 1,
        symbol: "",
        name: "民政部",
        category: 0,
        active: true,
        speed: 6,
        value: [44, 24],
        belong:'公证综合办证',
    },
    {
        level: 1,
        symbol: "",
        name: "自然资源部",
        category: 0,
        active: true,
        speed: 6,
        value: [45, 28],
        belong:'公证综合办证',
    },
    {
        level: 2,
        name: "全面依法治国",
        value: [39.5, 50],
        symbol: "",
        symbolSize: [30, 30],
        belong:'业务专题,数据资源目录'
    },
    {
        level: 2,
        name: "行政立法",
        value: [43, 45],
        symbol: "",
        symbolSize: [30, 30],
        belong:'业务专题,历史趋势,数据资源目录'
    },
    {
        level: 2,
        name: "行政执法协调监督",
        value: [60, 50],
        symbol: "",
        symbolSize: [30, 30],
        belong:'业务专题,历史趋势,数据资源目录'
    },
    {
        level: 2,
        name: "刑事执行",
        value: [47, 51],
        symbol: "",
        symbolSize: [30, 30],
        belong:'业务专题,主数据,历史趋势,数据资源目录'
    },
    {
        level: 2,
        name: "公共法律服务",
        value: [53.5, 52],
        symbol: "",
        symbolSize: [30, 30],
        belong:'业务专题,主数据,历史趋势,数据资源目录'
    },
    {
        level: 2,
        name: "综合保障与政务管理",
        value: [51, 46],
        symbol: "",
        symbolSize: [30, 30],
        belong:'业务专题,主数据,历史趋势,数据资源目录'
    }, 
    {
        level: 3,
        name: "主数据",
        value: [45, 71],
        symbol: "",
        symbolSize: [30, 30],
        belong:'全景搜索，知识图谱'
    },  
    {
        level: 3,
        name: "业务专题",
        value: [43, 76],
        symbol: "",
        symbolSize: [30, 30],
        belong:'数据看板,分析研判'
    },
    {
        level: 3,
        name: "历史趋势",
        value: [55, 71],
        symbol: "",
        symbolSize: [30, 30],
        belong:'数据看板'
    },
    {
        level: 3,
        name: "数据资源目录",
        value: [51, 76],
        symbol: "",
        symbolSize: [30, 30],
        belong:'分析研判'
    },
    {
        level: 4,
        name: "全景搜索",
        value: [43, 92],
        symbol: "",
        symbolSize: [30, 30]
    },  
    {
        level: 4,
        name: "数据看板",
        value: [44, 96],
        symbol: "",
        symbolSize: [30, 30]
    },
    {
        level: 4,
        name: "分析研判",
        value: [53.5, 96],
        symbol: "",
        symbolSize: [30, 30]
    },
    {
        level: 4,
        name: "知识图谱",
        value: [54.5, 93],
        symbol: "",
        symbolSize: [30, 30]
    }
];