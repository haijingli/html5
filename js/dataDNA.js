    
    // var data1 = [
    // [0,0,0],[1,0,1],[2,0,0],[3,0,1],[4,0,0],[5,0,1],[6,0,0],[7,0,1],[8,0,0],[9,0,1],
    // [0,1,0],[1,1,1],[2,1,0],[3,1,1],[4,1,0],[5,1,2],[6,1,0],[7,1,1],[8,1,0],[9,1,2],
    // [0,2,0],[1,2,0],[2,2,0],[3,2,0],[4,2,0],[5,2,1],[6,2,0],[7,2,1],[8,2,0],[9,2,2],
    // [0,3,1],[1,3,0],[2,3,1],[3,3,0],[4,3,0],[5,3,0],[6,3,0],[7,3,0],[8,3,0],[9,3,0],
    // [0,4,1],[1,4,0],[2,4,1],[3,4,0],[4,4,0],[5,4,0],[6,4,1],[7,4,1],[8,4,1],[9,4,0],
    // [0,5,0],[1,5,0],[2,5,0],[3,5,0],[4,5,0],[5,5,1],[6,5,1],[7,5,2],[8,5,2],[9,5,0]
    // ];

    const basicValue = [[0,1,0,1,0,1,0,1,0,1],[0,1,0,1,0,1,0,1,0,1],[0,0,0,0,0,1,0,1,0,1],[1,0,1,0,0,0,0,0,0,0],[1,0,1,0,0,0,1,1,1,0],[0,0,0,0,0,1,1,1,1,0]]

    var data1 = []
    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 10; j++) {
            var value = 0
            let hasValue = basicValue[i][j]
            if(!hasValue){
                data1.push({name:"",value:[j, i, value]});
            }            
        }
    }
    data1 = data1.concat(basicData)

    // var data2 = [
    // [0,0,0],[1,0,0],[2,0,0],[3,0,0],[4,0,2],[5,0,0],[6,0,0],
    // [0,1,0],[1,1,1],[2,1,0],[3,1,0],[4,1,0],[5,1,1],[6,1,0],
    // [0,2,0],[1,2,0],[2,2,1.5],[3,2,0],[4,2,0],[5,2,0],[6,2,0],
    // [0,3,0],[1,3,0],[2,3,0],[3,3,1],[4,3,0],[5,3,3],[6,3,0],
    // [0,4,0],[1,4,0],[2,4,0],[3,4,0],[4,4,0],[5,4,0],[6,4,0],
    // ];

    const standardValue = [[0,0,0,0,0,0,0],[0,1,0,0,0,1,0,],[0,0,1,0,0,0,0],[0,0,0,1,0,1,0],[0,0,0,0,0,0,0]]

    var data2 = []
    for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 7; j++) {
            var value = 0
            let hasValue = standardValue[i][j]
            if(!hasValue){
                data2.push({name:"",value:[j, i, value]});
            }            
        }
    }
    data2 = data2.concat(standardData)

    // var data3 = [
    // [0,0,0],[1,0,0],[2,0,0],[3,0,1],[4,0,0],
    // [0,1,0],[1,1,1],[2,1,0],[3,1,0],[4,1,2],
    // [0,2,0],[1,2,0],[2,2,1],[3,2,0],[4,2,0],
    // [0,3,0],[1,3,0],[2,3,0],[3,3,0],[4,3,0],
    // ];

    const mergeValue = [[0,0,0,1,0],[0,1,0,0,1],[0,0,1,0,0],[0,0,0,0,0]]

    var data3 = []
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 5; j++) {
            var value = 0
            let hasValue = mergeValue[i][j]
            if(!hasValue){
                data3.push({name:"",value:[j, i, value]});
            }            
        }
    }
    data3 = data3.concat(mergeData)

    // var data4 = [
    // [0,0,0],[1,0,1],[2,0,0],
    // [0,1,2],[1,1,0],[2,1,1.5],
    // [0,2,0],[1,2,1],[2,2,0]
    // ];

    const applicationValue = [[0,1,0],[1,0,1],[0,1,0]]

    var data4 = []
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            var value = 0
            let hasValue = applicationValue[i][j]
            if(!hasValue){
                data4.push({name:"",value:[j, i, value]});
            }            
        }
    }
    data4 = data4.concat(applicationData)

    option1 = {
        tooltip: {
            formatter: function (params) {
                let name = params.name
                let value = params.data.value[2]
                return '<span style="color:#93D14D;font-size:18px;margin-top:20px;margin-bottom:20px">' + name + '</span><br/>' 
                        + '<span style="font-size:22px;">' + value + '</span>  数据表<br/>' 
                        + '所属层级：源数据层'
            }
        },
        visualMap: {
            type: 'continuous',
            show: false,
            max:10,
            inRange: {
                color: ['rgba(200,200,200,0.3)','rgba(105,154,62,0.8)', 'rgba(147,209,77,0.8)','rgba(147,209,77,1)','rgba(147,209,77,1)','rgba(147,209,77,1)','rgba(147,209,77,1)','rgba(147,209,77,1)']
            }
        },
        xAxis3D: {
            type: 'value',                
        },
        yAxis3D: {
            type: 'value',                
        },
        zAxis3D: {
            type: 'value',                
            max: 20              
        },
        grid3D: {
            show : false,
            boxWidth: 100,
            boxDepth: 100,
            light: {
                main: {
                    intensity: 1.2
                },
                ambient: {
                    intensity: 0.5
                }
            },
            viewControl: {
                beta: 45,
                alpha: 5
            },
            // axisLine : {
            //     show : false
            // },
            // splitArea : {
            //     show :true,
            //     areaStyle:{
            //         color:['rgba(200,200,200,0.3)']
            //     }
            // }
        },
        series: [{
            type: 'bar3D',
            barSize: 5,
            data: data1,
            shading: 'lambert',            
            emphasis: {
                label: {
                    show: false
                },
                itemStyle: {
                    color: 'rgba(147,209,77,1)'
                }
            }
        }]
    }

    option2 = {
        tooltip: {
            formatter: function (params) {
                let name = params.name
                let value = params.data.value[2]
                return '<span style="color:rgb(79,190,193);font-size:18px;margin-top:20px;margin-bottom:20px">' + name + '</span><br/>' 
                        + '<span style="font-size:22px;">' + value + '</span>  数据表<br/>' 
                        + '所属层级：基础数据层'
            }
        },
        visualMap: {
            type: 'continuous',
            show: false,
            max: 10,
            inRange: {
                color: ['rgba(200,200,200,0.3)','rgba(70,185,187,0.8)', 'rgba(56,188,191,0.8)','rgba(79,190,193,1)','rgba(79,190,193,1)','rgba(79,190,193,1)','rgba(79,190,193,1)','rgba(79,190,193,1)']
            }
        },
        xAxis3D: {
            type: 'value',                
        },
        yAxis3D: {
            type: 'value',                
        },
        zAxis3D: {
            type: 'value',                
            max: 20              
        },
        grid3D: {
            show : false,
            boxWidth: 60,
            boxDepth: 60,
            light: {
                main: {
                    intensity: 1.2
                },
                ambient: {
                    intensity: 0.5
                }
            },
            viewControl: {
                beta: 45,
                alpha: 5
            }, 
        },
        series: [{
            type: 'bar3D',
            barSize: 6,
            data: data2,
            shading: 'lambert',
            emphasis: {
                label: {
                    show: false
                },
                itemStyle: {
                    color: 'rgba(79,190,193,1)'
                }
            }
        }]
    }

    option3 = {
        tooltip: {
            formatter: function (params) {
                let name = params.name
                let value = params.data.value[2]
                return '<span style="color:rgb(17,120,219);font-size:18px;margin-top:20px;margin-bottom:20px">' + name + '</span><br/>' 
                        + '<span style="font-size:22px;">' + value + '</span>  数据表<br/>' 
                        + '所属层级：融合数据层'
            }
        },
        visualMap: {
            type: 'continuous',
            show: false,
            max: 10,
            inRange: {
                color: ['rgba(200,200,200,0.3)', 'rgba(12,117,186,0.8)','rgba(17,120,219,0.8)','rgba(17,120,219,1)','rgba(17,120,219,1)','rgba(17,120,219,1)','rgba(17,120,219,1)']
            }
        },
        xAxis3D: {
            type: 'value',                
        },
        yAxis3D: {
            type: 'value',                
        },
        zAxis3D: {
            type: 'value',                
            max: 20              
        },
        grid3D: {
            show : false,
            boxWidth: 60,
            boxDepth: 60,
            light: {
                main: {
                    intensity: 1.2
                },
                ambient: {
                    intensity: 0.5
                }
            },
            viewControl: {
                beta: 45,
                alpha: 5
            }, 
        },
        series: [{
            type: 'bar3D',
            barSize: 8,
            data: data3,
            shading: 'lambert',
            emphasis: {                
                label: {
                    show: false
                },
                itemStyle: {
                    color: 'rgba(17,120,219,1)'
                }
            }
        }]
    }

    option4 = {
        tooltip: {
            formatter: function (params) {
                let name = params.name
                let value = params.data.value[2]
                return '<span style="color:rgb(174,102,248);font-size:18px;margin-top:20px;margin-bottom:20px">' + name + '</span><br/>' 
                        + '<span style="font-size:22px;">' + value + '</span>  数据表<br/>' 
                        + '所属层级：应用数据层'
            }
        },
        visualMap: {
            type: 'continuous',
            show: false,
            max: 10,
            inRange: {
                color: ['rgba(200,200,200,0.3)','rgba(122,49,202,0.8)', 'rgba(174,102,248,0.8)','rgba(174,102,248,1)','rgba(174,102,248,1)','rgba(174,102,248,1)','rgba(174,102,248,1)','rgba(174,102,248,1)']
            }
        },
        xAxis3D: {
            type: 'value',                
        },
        yAxis3D: {
            type: 'value',                
        },
        zAxis3D: {
            type: 'value',                
            max: 20              
        },
        grid3D: {
            show : false,
            boxWidth: 60,
            boxDepth: 60,
            light: {
                main: {
                    intensity: 1.2
                },
                ambient: {
                    intensity: 0.5
                }
            },
            viewControl: {
                beta: 45,
                alpha: 5
            }, 
        },
        series: [{
            type: 'bar3D',
            barSize: 10,
            data: data4,
            shading: 'lambert',           
            emphasis: {           
                label: {
                    show: false
                },     
                itemStyle: {
                    color: 'rgba(174,102,248,1)'
                }
            }
        }]
    }

    var basicChart = echarts.init(document.getElementById('basicChart'))
    basicChart.setOption(option1)

    var standardChart = echarts.init(document.getElementById('standardChart'))
    standardChart.setOption(option2)

    var mergeChart = echarts.init(document.getElementById('mergeChart'))
    mergeChart.setOption(option3)

    var applicationChart = echarts.init(document.getElementById('applicationChart'))
    applicationChart.setOption(option4)


// 涟漪特效动画的散点图数据
var symbolList = [
    "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAABvCAYAAAA+ECgSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkMzREQ2QzM3RjFGNzExRTk5OUM4RjQyNURGMDk2RDlDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkMzREQ2QzM4RjFGNzExRTk5OUM4RjQyNURGMDk2RDlDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NTM2RDg2MENGMUY3MTFFOTk5QzhGNDI1REYwOTZEOUMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QzNERDZDMzZGMUY3MTFFOTk5QzhGNDI1REYwOTZEOUMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7xIaVlAAAW50lEQVR42uyde4wk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",
    "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAABtCAYAAABz2IkZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjUzNkQ4NjBBRjFGNzExRTk5OUM4RjQyNURGMDk2RDlDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjUzNkQ4NjBCRjFGNzExRTk5OUM4RjQyNURGMDk2RDlDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NTM2RDg2MDhGMUY3MTFFOTk5QzhGNDI1REYwOTZEOUMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NTM2RDg2MDlGMUY3MTFFOTk5QzhGNDI1REYwOTZEOUMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6i5RaaAAAURklEQVR42uxda6xc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",
    "image://data:image/png;base64,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",
    "image://data:data:image/png;base64,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"
];
var pointSymbol = [
    "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAgCAYAAADJ2fKUAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAADKGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMwNjcgNzkuMTU3NzQ3LCAyMDE1LzAzLzMwLTIzOjQwOjQyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3OTQzNjc0N0E3MDcxMUU4QjM0REMzOTdCMkY4RDdEQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3OTQzNjc0OEE3MDcxMUU4QjM0REMzOTdCMkY4RDdEQyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjc5NDM2NzQ1QTcwNzExRThCMzREQzM5N0IyRjhEN0RDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjc5NDM2NzQ2QTcwNzExRThCMzREQzM5N0IyRjhEN0RDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Y/Y3eAAAAd1JREFUOE991dlqFFEUheF04jwhKiIqqCAoGHwCH8E7H98LvRLnIQ5xiGnXV9Rqqtp0NvzUqVN77b3qnK7Ti+VyuTWJxYjoVUIZoiIJOyMnRraDh3/DwYjxYUWST4ez4Xw4FwgPw8/wPfwYxwcVEVwIV8K1cDWcCap/Ce9H9sI+EWsqS74d7oU74WL4HV6HF+FleBP2+CY6GSTdDA/Dk/AsPA2Pw93Ahe47RIJ/76KbTrvhfngUHoRb4XIg2q6oC3EpXA83gjgVWPaOinK0qIhF3VSyIMYNHcwpqvhK1HA/FQjVzXk2bLiBNYc9sXl/wjTMDZsahv2pyMQmkWVf/RrCsvamnSRMo6IWnolqQ6ep8NhOFRL9Co2paMjbZE9iw1ihI+1VJKEic8faayUJtUdgrNBGUa1JdO/qG5qKhn0SU3tE+0EBH54xcS3+10nFfqnEX8O3QOh+o0iCZOJPwdeq40YRG7p8DhJ9qcbmanEl6vt4wI5zQfKHcVy7cmYLoQpLrEl+N8KiQgrORH2fWnsbXgX2KjqyU0WSiJxARB9DRfJmnUxWJPn5eHXfd5I3O5adfQ6P4rzonhUruqxIOHkcHq5wNrCsAyyE66qT6B/AFC++zkzE4joerrG19Q+FsQuu8dR/aQAAAABJRU5ErkJggg==",
    "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAgCAYAAADJ2fKUAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAADKGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMwNjcgNzkuMTU3NzQ3LCAyMDE1LzAzLzMwLTIzOjQwOjQyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowQzUxNDcxOUE3Q0IxMUU4QjM0REMzOTdCMkY4RDdEQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowQzUxNDcxQUE3Q0IxMUU4QjM0REMzOTdCMkY4RDdEQyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjBDNTE0NzE3QTdDQjExRThCMzREQzM5N0IyRjhEN0RDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjBDNTE0NzE4QTdDQjExRThCMzREQzM5N0IyRjhEN0RDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Jjx60AAAAiRJREFUOE+NlV0vA0EUhmfbUooSRAQJTSQkxC/wE9z5+S64QlHfiqod7zMzZ7uLikkeMzt73nPememO7OVixpValqBZ70uEZiIC6olGoiYI/BTDBOPcRAQ3xbRgoiUQ5uJNvIh+Gg9NhGBWLIplsSSmBNkfxE3iUbwiwhqZCd4QHbEp5sRAXIpTcSa64hHfiCYEQWti19Uah26yfewmWkd6PhBbAhdUryOi4R+fVOu4rL6fNee3s8bMnp53xLpYEIhqJrKNaIsV5/NVJtVP6i+WWSNJcZSZCItUI5M2xDNWC0dDBTaJpCQvRNZ4bjifzjH2ZLdzCwfOgDfAmXB4H3FICz1z4VBFyGIiJkaiVMnHnm0vfg3Cm71yJQJQ8IeRiSxxRWQ2ZI8gvf9HJRMieo8CYiqiEDfOngI1NapEIt7/qGQiAgY6WETM/WmPCSAg2fMI3gWJxoqSNQJVxecI+IbKonBOtLI9RK+aUgLPh6dxqGYWf1QiY/xSvax5/6Txs0BIsrEiAhTsJfZ3GvO1UnGsCBvcB/ea6WtNfKn3ac4sFiJbDy+wo3shJ7gXx0FklSobQRbWwzp6OqJr9YBFEpGwIrL1RGvOXcnauXrsmejXSiYiCBE3EKJbYSLiKpWYNFHX5cOT0MdnWxNxlWuZu48Hg/sintkItt6biMbNw+VBD9wNWKYCsBH0RSWa/QMow8K/U6yJhl/7wWLLLnyemQ/rcc65L2HyP9eIbO1cAAAAAElFTkSuQmCC",
    "image://data:image/png;base64,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",
    "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAgCAYAAADJ2fKUAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAADKGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMwNjcgNzkuMTU3NzQ3LCAyMDE1LzAzLzMwLTIzOjQwOjQyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3OTQzNjc0N0E3MDcxMUU4QjM0REMzOTdCMkY4RDdEQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3OTQzNjc0OEE3MDcxMUU4QjM0REMzOTdCMkY4RDdEQyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjc5NDM2NzQ1QTcwNzExRThCMzREQzM5N0IyRjhEN0RDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjc5NDM2NzQ2QTcwNzExRThCMzREQzM5N0IyRjhEN0RDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Y/Y3eAAAAd1JREFUOE991dlqFFEUheF04jwhKiIqqCAoGHwCH8E7H98LvRLnIQ5xiGnXV9Rqqtp0NvzUqVN77b3qnK7Ti+VyuTWJxYjoVUIZoiIJOyMnRraDh3/DwYjxYUWST4ez4Xw4FwgPw8/wPfwYxwcVEVwIV8K1cDWcCap/Ce9H9sI+EWsqS74d7oU74WL4HV6HF+FleBP2+CY6GSTdDA/Dk/AsPA2Pw93Ahe47RIJ/76KbTrvhfngUHoRb4XIg2q6oC3EpXA83gjgVWPaOinK0qIhF3VSyIMYNHcwpqvhK1HA/FQjVzXk2bLiBNYc9sXl/wjTMDZsahv2pyMQmkWVf/RrCsvamnSRMo6IWnolqQ6ep8NhOFRL9Co2paMjbZE9iw1ihI+1VJKEic8faayUJtUdgrNBGUa1JdO/qG5qKhn0SU3tE+0EBH54xcS3+10nFfqnEX8O3QOh+o0iCZOJPwdeq40YRG7p8DhJ9qcbmanEl6vt4wI5zQfKHcVy7cmYLoQpLrEl+N8KiQgrORH2fWnsbXgX2KjqyU0WSiJxARB9DRfJmnUxWJPn5eHXfd5I3O5adfQ6P4rzonhUruqxIOHkcHq5wNrCsAyyE66qT6B/AFC++zkzE4joerrG19Q+FsQuu8dR/aQAAAABJRU5ErkJggg==",
    "image://data:image/png;base64,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"
];

items.forEach(el => {
    el.symbol = symbolList[el.level - 1];
});

var lineColor = [
    '#fff',
    '#f6fb05',
    '#00fcff',
    'rgb(17,120,219)'
];

const curveness = -0.2;

var seriesOne = [{
    type: "effectScatter",
    layout: "none",
    coordinateSystem: "cartesian2d",
    symbolSize: [20, 20],
    symbolOffset: [0, -10],
    z: 3,
    circular: {
        rotateLabel: true
    },
    label: {
        normal: {
            show: true,
            position: 'top',
            distance:30,
            formatter: '{b}',
            fontSize: 14,
            color: "#fff",
            offset: [0, 20],
        }
    },
    itemStyle: {
        normal: {
            shadowColor: "none"
        }
    },
    data: []
}]

optionFlow = {
    legend: [],
    xAxis: {
        show: false,
        splitNumber:50,
        type: "value",
        max: 100,
        min: 0
    },
    yAxis: {
        show: false,
        type: "value",
        splitNumber:50,
        max: 100,
        min: 0
    },
    series: []
};

var flowChart = echarts.init(document.getElementById('flowChart'))

standardChart.on('click', function (params) {
    showDataFlow(params.name)
})

mergeChart.on('click', function (params) {
    showDataFlow(params.name)
})

applicationChart.on('click', function (params) {
    showDataFlow(params.name)
})


function showDataFlow(nodeName) {
    let dataArr = [
        [],
        [],
        [],
        []
    ]

    let nodeItems = []

    var lineSeries = []

    handleChildNode(nodeName,dataArr,nodeItems)    

    dataArr.forEach((el, index) => {
        lineSeries.push({
            name: "",
            type: "lines",
            coordinateSystem: "cartesian2d",
            z: 1,
            effect: {
                show: true,
                smooth: false,
                trailLength: 0,
                symbol: pointSymbol[index],
                symbolSize: [5, 20],
                period: 4
            },
    
            lineStyle: {
                width: 1,
                color: lineColor[index],
                curveness: curveness
            },
            data: el
        })
    })

    seriesOne[0].data = nodeItems

    let seriesData = seriesOne.concat(lineSeries)

    optionFlow.series = seriesData

    flowChart.setOption(optionFlow)
}

function handleChildNode(nodeName,dataArr,nodeItems) {
    items.forEach(el => {
        if (el.name === nodeName) {
            nodeItems.push(el)
            items.forEach(element =>{
                if(element.belong && element.belong.includes(el.name)){                   
                    nodeItems.push(element)
                    dataArr[el.level - 1].push([
                        {
                            coord: element.value
                        },
                        {
                            coord: el.value,
                        }
                    ])                   
                    handleChildNode(element.name,dataArr,nodeItems)
                }else{
                    return
                }
            })
        }
    })
}


