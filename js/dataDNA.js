    
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
    "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAABvCAYAAAA+ECgSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkMzREQ2QzM3RjFGNzExRTk5OUM4RjQyNURGMDk2RDlDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkMzREQ2QzM4RjFGNzExRTk5OUM4RjQyNURGMDk2RDlDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NTM2RDg2MENGMUY3MTFFOTk5QzhGNDI1REYwOTZEOUMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QzNERDZDMzZGMUY3MTFFOTk5QzhGNDI1REYwOTZEOUMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7xIaVlAAAW50lEQVR42uyde4wkR33Hf9U9Mzu7e7d7rz3fw9h3Zztwh20wQRgHOwhEkIAASohtFBIkAgn+J+ShKMQRipSICIKiRPY/cUiIFAIIjBKEpRglQZGiQzaOkjOx8QN8NvZxvjvfc3dvd2d2Zro731939WxNTVV39ezO7J636/S76p1HP6o+83vUU0RRRJs5Ba+IXch+H/KLkJ+RLz8LeQhyv39VdJ7K1E1iMwMDWD6E7EuQactH5iG/AWj+uURlkwMjYfkml0HOR7mA7iyh2cTAAJYZZMchU45fYU1zA6A5u9mB8Tbpc/92AVhIfvZ3S/2yeTXMD5C9oeDXnoSGubkEZnMC00Q2VvBrLQAzVgJTAuOaFgDM1tKH2Zzp2QG+80LpwWxeYB4yqlsE2J4UQ/rXEpfNa5J2I3tOj5QYlDBKwNGKpQyrNzMwEpq+hrsUmDSXqWy4K4HpQvMryP4BEjuzQtKhAHMZ8rESlhIYFZq08/H9MEWHURwcQf1Y+iz3lZ2PJTD2dE58lWaijyD/IvLfKgukjJJc02RZBKWGcdEwk9Asi8g/jPzrZYGUGiYvfUrmPyyLogTGJd0o83vLoiiBcUmlZil9mIF8mYPwYX5SFkSpYfLD6iTdWhZGCUyR9P6yCEpgXFIaSi+WRVH6MC4m6Ub4LqXjW2oY53SvBOezZVGUwBRJB8siKIFxSZ+R+WNlUZTAuKR3yvxLZVGUwBQB5otlUZTAuKQynC7D6oHC63civP7PsiBKDZMHyl+XhVACUyTtlvnHy6IogXFJpRkqfZhCJmk3fJez3bxMpYbJSakP8+GyKEpgiqRyPEwJjFO6X+blaLvSh3HyYcr2l1LDFEofl+CUXQMlMIVSOfOxNElOJqmc+ZgHzFLJSzeNn6N7GzP0OeQHkW8Kx3ecigFQmqTelM58LIdobjINwz7IdshOSpYl4wWDeD+BLfGPakUmKFlHqB7/etp0e1ilY36L3h7U6L/kuQLIsjzmtWO4xJYgDUUWIHOULEDEy5tdgFyiK2C4RFENcyUDwxW+H3I1ZC8lHYczEpIqJJSVGxmOSflbLYH4WIS0M/LiSu+Wk3YslNc85W/9uC3hOQfhrobTkJOQlyVoJTBDSgzBDZBrFEB2yF9/qOSqRBZoyABNfFxp0i936vQv0DQ3QtPo002EBoxq0oUFHE8TX8lZA52SAJ2gZJHGCxsdmMoGhIML8wDkeinXSbMSKBJKExBagIm0Y5tQTx5Rh82K16FDAObRDGB0TaOLZ4HGV45ZCx6Uz+hLYXP2PCUbZ7C8KJ9tw6TKBtIgvPb/TZDDsvC4oDoynzcAY9IqoQGU0AkWXmnVo0diPySKTcllAzAu0HgGcLwcbaPKYVkOaRk8A3kS8gRk3dfbWy+TxIXJu5+9EcIbPuyRcKiiApPC0THAEhg0SnHtkji9+6FZTlrudy20jNC0THpc0eCpKLkqZyQ4vLnGjzX/61XpwxyC/BzkzTJi6UjHcDWwhBZgnH2X9OaqC/R77S30V9VF+kh7kr5qcHhX68sIg2kqCk1V5hyZ/Q+EteILowJmFCaJ/Y87pMxIQFKV7wKLDkqQY4byIiKrhhGJD7PEUZIMnV00jXCMnFxMk6eA4gLN7ZB3yCjsqJT5K9UkcVTzLsjPyoprG6RjASbIAKaIGQoNmsWmYSK/RXuDGp2GprkTmuabjrCQQdN4qzRPul9TsUCjC3//fyHflVHXhjdJQgLyXhnpMBQtKSZY2goUNmCytEsWKFlapa/tRZqkdwOUfxcBjUe+tZ1EZDjCWQ6wS/Rkc4RVUHxFw+jA1KRUZYT1sAQo2mjAcAG8BfIB2UbS0qSt5J0MYGywpBolsJif0OKvRDlapUfDjM3SF5a30R+m+QDOL2lwkMEsmcyUr2icPGh0YCoKLCo0qXBjIe/e8t8mcNbDh+H+l7sgr5FN6AsSjmUDLG2Lo6v6LbqDGxVsmMvSKkZQlFcW4vuOeroD8qAxtf66hNsufo3qCJv8GV3TqNCMyZz9sXsg74M8SKtc+HE1Goab4n8VcossXFVMGsYVliBDq7i0sfQ5ul6AgouoAme2Ase2JqI4T365Uc+vOS4T0aE3RZU4dNU1VgfVHN9jJGLpQFqRF7/eCf34WbMcYJe2Gl3b+ANAo8qYJo9Dvia7KkZikviG3wP5oHyQZdkpZwKmbfBfAs0UBQUa5SKLdolkSy15Hap7IdUBRB2A1PHaWFp5wmySVgqjRfdENXoAd/U6VMGzjqaYTya65xW0DICaAKkZIg8rKBth1Dqeg7bJMk+pafINfkzVAkxd5lx234Z8B8AEwzRJ7J98UjZpN2UHWlMDxkW72GApHDL7bZqABpkAHFsYElIrL0lBt+E/Axb5zjS38sLp/SCc3ictjm4fNJJGIc9Rxfe5wqZildWiiOEBRAvQQEtBtRuuFzVRJmhaBi3TkqBkRaUMzZ3cHtYg8beA5vQwgOF2lF+XN7VkgSUVPTrKC5/d21dwVGnRJLTINoZEFl4kgQgyfRQciyhTBz8l2H+JKBSRWx9OJGSlR3YfR5rBnQB7F+49iOHxaLZTo0VF+xRpr9Ed4bZmotpKHYxZyp/L81rInwKafwI0R9fKJPGN/Rola6d0FFAaCiw2DbNaWLqgQJPU/Q7tACTTseI3tKsYYNCd3MiqWxIvZTuq5FI3zw6pXaKnXqj090XcfzUXVOgiNE9zQBNla6Mx+TF1JR9Xcv4Oz5b4Sp6JygOGT/g7kCOy8pc0WBoaMCZY2gZQOg5N/CH/VV2mafwyd+J4XAVEROYOxEyzE2UDI9r0Z1GV/gRO711weh90BkY4gdQDiwJReoYGTNaF9hjNyVc9hy6FigGcagY0KTDjGjQT8vNPQ+4HNI1BgOFRan8gG+BaEg4VGJOGyfNbTJolMmmVaoO2ARSOxGoGOEIjGJFmfgzgwDfZguKdQhVM4AMTnMeFKHCdFt0djdG3xDJ9CPlD8vwded42/m/JsHsJ97TEOZ5gHj7Lgkaf6IFLWPujPANELYBztj1OsxZtI3KcYVvUZNIwKjDj8nPc4PeXgOZyEWD4y/dKG5dqliUDNFnRkdowZwqdjeYHNn7Cb9E+saJR+ttQNICEpeUWb1ShMXZB7e/C8Q4U8TZZ0OanDmg/iv1lPMG7UHTfdY2S4vsPUcERXYTJPA9NdV4OkejRSlG/SbK15QjA0whqdAp+zhK5DchStY1Jy+jRkg7LhKJpeEDX5wDNkgswfCFu5XytrOQlTRoWYFRz1MkInY19QdAmVG0ClKTjr1eDKIBY4aDub3YMkOwHJHtRxLsyzEV/6uAHUqGXVt2Umbjg5/EsZwDPSTzNss209Wgj0d83xUNF23U6Ffo9znGWptFbg22+jGqWJjTh7/0I8gVA08kD5hMyIuJ3FqWYNIwpQtJDOFvnYY9mqSxTHZrlWvlQqhaJhKNfEtVoN/yOQyjGPYUgUQtjGeH0GH0b+XuQf2dNOk0SeF6BX/Q8TN7ZPH+nC1Dv51rQNC91xnoc46zWYd/Q16RrmLpFw0xK4et8D8D8XVZYfZuEhTQomoZ2F1VMvkvHEgn1aJbaEm2FdjkQP6wLJJrjClD2AJQj+Pb0Gnai1tawO5b/7ZH3OQdwngY4Zwz+jWpe4zBdgaeGH9R1KKcXWxPxsJDQ4BCHSu7ntGORwRTqbT4M0e0IuX8IaB41aRgu8L+QH2wp2mXRYpKaFmfXFjqbYJn2OjEs9lZYc2QTofC3oBJuwSPOrFnltunNMCMzuOKBqE5/M7SBH+zntOgY4Fl0iLh6WpPDSgzNXEbvt2+JnHTnt24xSZOK1GR9fxrQzOnA3CM1DMkOxAUHYJa1TkYTMKYoKKou0bjfoRvEyv7ieSFw929U5iFEOzfjm4NOxBOosD24y324wxlAsg1nn4pD96jbtJ4gJPBscEAh8/AnZlEN51AFpwDrGVrNEEluHAzoCdHsjpYTDqG6YMUTVOi59kRcDyIjivINY2dqBrNkA2aLYpoeRcE8oALD83v+XL7ZUoBZkJAsUu/kLR2YtuLsdizN/N1oBz6LgBwWKxWTC0laYOE4vQFFcWiAX3UNlfM6OKGvxfFrKOlGWI2paaJ6fgoH+0cA+FkctwY6T0AveA36P+1ZM+HBB9vwZ56BRJbxNp4Bmprmy9S18DqFZULCkkpN3ttnAM3JFJhPKL7LgkHDLCoObyPD2e1YnNye8Lg+T/vFyoqVfe0n1jofpzehCA4UqpAObRMNug3q/4jsiEwr4RLOdQpa4zxy1hyzOF7C66xVOvJOKnHfUIhCDKCFgrg7YhfyfXh9u3KuZZjIp6NxehTfmB0AmhcBzbGc0L0HHBTS2eZUPCHONvhcdYIrGc7vuOL4TmoaJhVORwHM3zMw/MH7lD4HBuVyAWBahsgosPUq1xap5gf0eunYOYHSNUOVeJaBq8r3xSLdDtPz1u7QBZ9OQCM8DXNyHEW4urGvHZrCua+HxjqCp70mrXqc+/vRJH0PT1eoFxhA/0AxTy7gRIFPT7Um+4ZU6C3Dfo5ZygJmq8zTjs5P8cFN8stkaMrP6ml26RfSx6cQPP0d3dYVB1Bk20odPsuNBczPuDdPdyHfL/XEM/j1HwUsazevB8AB4GO4+WOAZhe02B08LAIQvQ2VfyCcogdx387TYfn5hEencM/NzP4u5YcWlyX1+FKRwaQJWSep5ukoIAVK3VYNliI9Tk3aTZ7sJyJlKIBtyKRt+kceLD2Dm+C1bXXoDOyt/zG6Do9dcdUsgOXuGBaYnWgL/SMq71trCot+SZw7vgauFZs6XDu+h6g7KMvFJ6rEz+nyhCuzHLaSfTyz3k9nqjPbUBO9/tN0hIG5pue32d8pmNWrbHVstZhfhWOscHQh4olubh9dorfgyvvwnYuoxC/DRJyiESW+Fl+T2C/CPcT3MqTnlGVYt3S8muoizKlDUzNIoFgITtcwMLsVWGyTwooMaopyhhX4hWtCdLVS/kfb8ZRbiiboYVxp9Mtt4Jowf/+m3sswntNQlrZyDzO0T1ad6secdnvS2SEyD6AOHYcO5A24Tno052Tv7zBTmLT44td+ktYp4do/Ve+l0N0Xdb2z6yPKMf+m97MG04+vxwpUywM0ci0U+JUmLZKt2OFdl4RrX63eS4HnLKoRm6N+No9WFraxTY1Q3+tvVDK/L0yfa0zHr80PAMzpAr/uJ6Qv8z5Y4NGvholrImJ6r3ovBZ7zTMGrzefUh2kAlylUz5vlkL7X4DfPKh/0KHuGnkfmkWCm6RMmmCjy6GJRp9dbpufl2i35ZT5BjxGHpxHtQKTysVFqGr4WXxNKncfenI7vxR2WTvycBfCSZUkWKFzmQ4mMOtWPOZ3lgxOaxvHJ3JGlv2f629SA1PMwza1xA1CxlZZCaorAcQKWoACRyjdw9Ze5f0gs0EdRib/EbSVDAwXnjq+Ba8V9Urg27uHrRRrv4ucLC5mYC7IsTRrey+ky0OvXVNfqZ9N0gts2eBznOxSvW5+WaVpJQL9Q6kn7mvPkaY5c3EIZVuiU14kdwpqrtuFWUEQf23GFax0MbSOcpq+IRboDv/pboZsOi8uQpKX3qWiMjuM8l1dperaK5W5L77VKS+9j0SQdLdTSG9BLOa28uhlpcRmSfUEAUxeBCQ5TnZrqP03PpF0D98vKG3rXQLelfwG2PohXePCcW3yTzsdbCvUn2fuSLuI8p2VfEvcrzeF40dKXNIknmoZsl31Je9nkKecavC8p6Ud63OH5u8NBI5+ea26J68TkNw61a2BdOh/TwqlfRmVGdLBvBEye8R5keMNG663uH96QB0oyaEjQT2CKZnMClWF0Psaj71JgOAz8LI1oeIPavgNopmNoVkbcOcGDX/RWOYBqEN9kfcfDJAOoHofWu5wLSfKXiDVLAstcRkQzsuENnNIBVOlY3qEOoFJlbJHGvCAe41JXUHGCBxW3F/C8HkU0RRs9hTQPSJ4CLKcdIem2t4Q+vbA8GZd1llZxGUBVI7cRd5kDqDjxFIzP0wiHaKpSwe+40qSrRbI8BWWAY4JHAJwZgHM9Hu+qQQeBD6fZtzsI/DhAOUdZA6X6QeEPX+jU6WSn1jdYapRDNP8IwMzqwHDiBQs/mTbSOAKzqkHgutQWaRLahsEZp4JDN6WSrgOeq2E+uANy57rAk0ByAabuFCA5qYXLrkMxeSbkydZk17nNg8W3mKIs7ZLlw6RdRjxZ/5HujRmmmfwmJYvtjWyaiRZNxaVVW0JEEtBVYmUEf5Hpr5GEpwqtMwMHOZnIJqBFxRA25Ijiab3JRLYA/kkHmiSMyyBXg+gg4cZbuN9XWhN0Kepxd3PX/y0yzUSdLltomoltItunKVlHd60nsoUW38a4lAdPkQU4O+JQNoofJn8imx2i5JQVFIZP06apsl1nV/TMj2p1HWDzVNk5Ofo/KgqHfIB0KskSh/gA5WIknFbjFDltK6udyMaLKn7eZSIbyZP8MSVjZUY6VdbSdhNVmzTht2P/ZptcNaoLjBNEbkAVDa2F06d64Vh5LVnNajaoxrMbl6j4okPDmirLve08VbavM3TDTsa3+TjQNh7gmUS+XY448y0gGCfjF2gkpCIwaCfPmozPS51dhja5BEgWkYdUbL+CDTkZX9U0vNzHYVr75T7CHIc4fwRfshzIuBcipA4BUdJq7Tk6y4MAJApqm7T9pIG7Wgw9mm+PxW06Rft/TI6taRHo1S73wfsa3Dfoch+qT/NRyNtpHRcUIoclVUWyOtW4CGJ44vXtJEQiB4zVAtM9f5Q08i3Hy5T5tIhwuBGZAXFZmnWUCwrxhmJf1n2WQYBJ0x0SnArZ17cb/pJl9hW+rWvy+h2qASJeRZPXmqmyxP1E/Z1uSSuw9JEi0QNp7yDpZAXNdixeHNl0gkp3yocNkKwVw1ezZJkNFlN0VNeA6UhQ1mzJMjXtlS3CBzTtshaLIoaUvTCiy6YTWUNKsxZ1ztM0IuNvl8WePS0vsm6vT9nLehRZerWuaRn2Vx4osijioMuu8oiyD1DxZVdd9hYYfNnV/KXio4KguIKTp1UErf2yq7a9B1yXXeUVth4uuuzqahZ2voqShZ3fSNkLO7cznOCRLOxsACcLHldoXPYcMHUQDnNh51qG/5IKL1jNCzu/kkQ1o99rgGdO3k3JhH4VFpMvs9GWjh/06W3DIVe7dLyvhc2DLB2v+i4qNDwP+xtEPesPr+vmFLdKM7WHBtucIs+vGcbmFNGAJmnUm1NULK24LptTnJHm5zFag80phrH9De+29guUbH55RW1/M4Afs5G3v+FNRv+Dkl3bNtz2N6bEkRRvsPVWecM2aEa9wdagWqZoNDTqDbZq8pzfp2SDrRddKmkj7vnIzfc/D3mbdJSzfJl13cJvQJO0nlv4pbCwA/uIbHwrNLh9o28Synsq3Sa1zhStbpPQrIFZA20Savl7GJuE2kApsknovNQmLCcGrZCNDoxa6Dxj4BYZlu+mDbANsUPD3XpvQ8wj9h6X8hxtgm2IbYkHct9M9o3OXRr3AgsszhudFwili250roOS5eCqwAx9o/MrFRi9JfmAjLJYrpPmKwsY1+jJ1Y+JHLsAimgX237VKihsZp6XEc5x6bgGwyzsVwMwprRTmjAe0MVTYvZRMmg9JLcBWYP4MrSGvosJGB5UzbMXT0ofhE3MhVEX7KsVGPOzJq3LKUC7pWnbKR1DHZa8Hm4XH8bW9E/UP7/ckw79BWlKziqAcKtrY2MU4uYBJivxIObtEp4pRbbSykiztHvfo5X5UHWivkHiDFg66r+p/N1QhOdwzUmTMi8h4Q26Fjf+r64YAP8vwACDJRQ45aqQ9wAAAABJRU5ErkJggg==",
    "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAABtCAYAAABz2IkZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjUzNkQ4NjBBRjFGNzExRTk5OUM4RjQyNURGMDk2RDlDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjUzNkQ4NjBCRjFGNzExRTk5OUM4RjQyNURGMDk2RDlDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NTM2RDg2MDhGMUY3MTFFOTk5QzhGNDI1REYwOTZEOUMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NTM2RDg2MDlGMUY3MTFFOTk5QzhGNDI1REYwOTZEOUMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6i5RaaAAAURklEQVR42uxda6xcV3VeZ+5c34fjayexHTs2xnZCUvIoplROKNCqVSsRyqMVItBXKG1VqNQWWvVPWvqnaoVUVaqIKpXSIgolKICqtpSmICgqJCIYaIAQSGheruPYwe9r+75n5nQvz7cz6y7vvc/e5859MXtJS2fm3jMz56z9nfXaa69dlGVJg0gFtfWfthr+Q8OvN3wD/va44U8bvsfwKXlySUODKbcMmEv0ZsMfMrzZc/p5w79h+J8zYDJgGCyfuvSnMLGg3mJBkwEzmIDZZvhJwxORH2NN8xLDJwYVMA0abPq9BLAQzn3PIAts0AHzxhqfef0gC2zQTdKs4ZHEj87zZ7JJypQCmGySBpQer/GZpzNgBpc+XeMz/5F9mMH1YbYbfiKH1VnDxNIJ6mZwY56aEueeyCZpsIkzt3cavhA4h//3QpY3m6TBNUmS7OTjGwy/FCH3/8JneT/lyccMmADda/hXDH/Q8G+77dNgAqY5qKrVNeAOEG0cZHBkHyaerFb59yyKDJgY+n0cH82iyICJoVtwvDuLIgMmhrJmyVFSrchpn+FnstObNUwV3YvjbVkUGTAp9IYsggyYGLoPx6ksiuzDxPgwt0jHN/swWcNUkQ2n/zyLIgMmhfZlEWTAxNB7cTyURZEBE0M/g+OHsigyYFIA88EsigyYGMrhdA6rk8JqqWm+mMPqrGGq6K+zCDJgUmg7jr+ZRZEBE0NfzCLIPkyKD8Ma5oQ9Zh8ma5hYH+ZtWRQZMCmU62EyYKLoHhyfyaLIgImhjTi+N4siAyaGbDidpwYUNSuWjGZNQ5XLatc1pUaAWcO4Ka989FBBZeuHVTNcafhq6jYL2kTdLt9XGB4zPAoex0MzSt3+L9wg0TxyxcvM22/jc+cMz1G38TN3dOgYnsZr5hnDFw1PUrctCDcdOm34LK2DScxUDbOeF+PzwO8yvNvwTuo2ad4KkAxjYC2XgvV7AiBKHBkbBlilGfDGq8zpn3nh4eqCqwHwbRF/KwQ3BC8YPmP4JPi44aOGnwPQ1p8Ps06uk0HArcL2ACDXQIPw4LfB9vUMnmwNGA0UDRqR8i5/0NUs5Tw0jAUMKXBooOjjELTYfsPX4/0Q/sff+zwAdIS6rdNOZ5OUTizQvRAw8z6YlZYAR9sBlI7jtQZKxwESB2BeoGsNH/MAhhxg0YBpCIDI10MObsKcce7nSfBh3M+aMUlrBTCsQYzfQLcavhECbAluJwBGAqVKu2jQWLH8jvnT35rj7eb41UXyCmsaDRZtoqoAY4+W+b6+b/g7hh8h1QVrkHwYFiTvSXSAumuAdsDeL8CkhMDSUiDRYOk4tEpHgaN0AEW+XoADy9f2eaVhfGAhBRQNFhdoGgIoPtDsx0P0SzBhvF7qW9Rtp7biM8crDRi++Z8w/GOIZCxIzonXbRxjNIsETBnQMJRojj6PyKeFI0WaJQpomMJjokKaZhivh8Ec5b2GupWA7Kc9bPgrtILNplfCJE3gJl+NKGYevKC45QBKK9IEucxPyMkNmKNLtA+DUHi0Y5UDXERompCJajqA0xTAsbwBzKbqQcMPwA9alz4MRzU/C7PTEUCxYJlXIIkFS5XP0kkAiQcwxfvMn+82x981x7+JAExV9FTl06SCpgmgSNBswPewufoCoq4178OwQF5h+HUIgeegOl1g0UBpCZOkfZWQZik9ZigGLNp/wfHSUzRtjtcgSVd4/JhYR7jhcYp9mkb7NsMCQBI4LtDcgjHgUP1+w//TT1+nXxqGhXCQuvsPbQdQLM/juKBAo7VLO+CzSM1SRuRYtL/ScQPDKUj+24sMP2v4HYb/0XO/rmMjEG77AFNEaBoNHA0aC5wRvB4RzJWDvKfC11z3uxomiRF9J3IWNl2uAaM1i8/BTfVXUrSK1iilAyiWfsHwvyLpNu3QLlqzkCNiqtI2MVGUCzzaEXZpGgkYOw3C+aRPkmrHtpImiTXJLxv+UYBkEgDRgFkQxwWHVmlVmKF+OLYbHAJ2qX870HcibP0Tw3+Gv7uuz/ph9jiX6BA3KoATCr1djvCIOFq2Gt52Oud8zsep5p4JdQDDF3uH4TdBeOdp8UScT7ssKH+lVZFfcZkgX+bWmp2CepOKI5hvGoHQfebH5cdM4Xok8BoAGgWipw7u28rBTlKWjrA7lOxzZYebDoe4qUAzh2ucE4CZgxyshue2+H9h+N8M/2dqJjnVJPEk3zvh0E5DMDMCMLMVpsiXkAtplTIwiWgBMoG8zrgDEL7kXAy9Ak5jjA/nM1UEWU2Jh6sMTFoWFdrGl+ALmaZRwWPgcTjGf2fM0vHlAAznUn4Nr2ccgJlxgMUXDcX6Kj6zwwDhGeNNEFwo8qEaoPkD6q4cuNnwdxPBQhURVRtZ5EkAqGp6ITZn43KEJWjGHIAZw3X9kwHNA/0ySXxRv4rsop0JlmCZUdpl3mGKWom5FVe0M069+hZZ+NXugzbR527Bb7Mv86ceEFT9ThHI3UyArUk/LcJ3X9KvKpJaEIBZqEiMSmbN/FsFtTkL/zEDnPZSAMOIfLfhmwRQ7HHaAZa5BLCEEnBSm1wJh23ckeYPDVjq3yU9GqG1QiAK/aZ2im1tzTQytmcjNI5L2zQFcIYr/MaWY0qFFcIOA5x7DGhm6pgkVvd/ZPjFAMmUAsu0x9H1RUM+sLh8FPuU74BarcqbpDz1VyifZ1ypcBIDOE69ehipOaeVX3IxAUxFRV5nHpOM5xw5HdeclNY2vuhJ+jNj4t7HIQvL/2f4rwxoLqQAhr/wboDlIgRzUWkYn3bReZZWxISh1Ch80btxY1SRL6nSGCysbTBlVwEIMYmHNyGK+HHD34g4v40BPgPzchL3TxGA8b1nuR6FvH0ax2Wmmp48jXaAxwRYxvEgbcSRneH3GdBMx5ikJpw+l2YJmSNX+NyOyKmUImrYhcENZWOrTMoIAHctvmsphe67IgEzhN+ylYEdAOcYBn2uhm/F93Gd+J62CN0tYDoCMG1chzyGZvlDWpij4PcY8/SXBjStKsD8OnXrL2aV6p1yOLyzDlPk8llKlVPRmmUMM8QjNUFiE4nXwYwVtDT6Oo51i7gb0GzbkNhkE/OUJ1mm/Rv9/mo89c9A5oU4r6NyN22haToqXdEOPKzyuq22uhFTI38fAswrET4vKF9l2hEZzXhMUavCV9Eh8maApVEzytmJZNSWPk6iDuP4hT7Ns+0Es9l6jLrF4JQAHn6QbgBoJsX/CgGajpBhx5PbcoGk8ERkzK82WuZRo2UecgGGB+7t+LKZCPZpl1ACTl+wBUtB/toUH/FT93I8xf2mA3D+7kA2tF+0BQ8l+zjfpMXFWVWOewFZWdCUStsUyrx3KtwAcjjVrkzy2w1ovmdAM6md3nfhZmbh+V8QHDJHOotbpVVImKEbA2n7EHHO4NZIB9b31O+An7MNAzmBa9ogNExH3O95aIiT8Cmep6WVDbCMuFb36cTr5mv6vjBPFOEU62zwiCOJZ6OkTYIncN5DBjAfkBqGnbvbIYBZR6p/tmKOqOXQLqEq/SH4G0UNoR8AYFKJBfUjAOmLRBRW5YtYQW5V/2OZPIvBexzySJ2TO4BB+VZCgrGA7L4nHGFSWqahZE0ejeKKsFzR1e1Gy3zGgOaoBcwd1FvZN+fgecd7X64lVHhtaYd4ilOIa4H31jQDNwmnmpAgO4Zk2TnwtLgnEgIcx/dsAXCuRULxJeCfwwA+JPInKdqSB+3hRB+LZfickG2htFfDI3+fJmpibOXUgh1vfrhea/gfmlBJB0VyaoEWFzvNewDSitAsRO5Sg+01wLI/ESyXnDZoTvuUHcHAPklpta9nMTiSWDNcDyDugT/FEREvS3mQ0maB9wJoKebJtlWb92jqTmCKQmoWOd7DjvGeB2BuM1rm3iZ8gRGRZFsIcKsi1e9zbqUTd3WNsHcEE4GxNIZ5oF34XY5MHqD+rus5D63wMLTOa2DyXgUAfJLSlsPeDFDOJfgzVyPi0k5vIUCjAdPA2DVocWlsaMzbeNBvbeAJIXIXZLuA4SpySqnMn6gxONclmDB+at4KsLBm+Ijhf6FlWAQm6BR+4yP4zV24hqFEM3Nd4u9OqAfSVWWoS0LkuLnGtuXBAtNNDahTosvrUvQXpZRNhuZ+RmoMyM6Ecw/Cx+A0/Uept9R1JegYfvMUruFg4ud3JJ4/GgjHNVA06/GuKpNl2tMQ/kTMep8qbUJUPYtcp8rvioRzX4bj/bQ67Tb4Nz+nriWWNiWe36zI4bjqmEsPmKqAdclvalCviMa1QtBlVjoUX1jtouVeObcZx6O0evSsupZY6iSeHyPLMgCcToU506stxlajA9Vcjc9cTDh3UuSWVot2q2tJ0U4pNLvSN9YQnrxcW+NbMuH7P5G7ltUXXaTS8YRzH8Hx56nXDXMliX/zdepaYun5GpFaTDTlStzp9eBFxf+ZZhrUm0HV9RW+JZ6+pRP6An3gOV0ju/sU+etLNB2C88n1L+9YYU2zC795FUCesgVgC/cZSyX5GxC5FtpVLeUNrQG3wDnRQDKLKK53yVAEsIoK0MzXCHHZjH038lx20j6BnAaHnXcZ/kW6PLXfT9qK37gLv8m/fV9i8u7RRHN9itzTET5NUVVU3vSM/ZBMfDaR+fxpci/4bjq+qImnYUh50y6TJJNIpQo/N1OvJDKGOAu6JTLby2b2Y0imcfv3l4KPAHic6b2wRJBsEpneFwuwHkKSMAUshxOzvPOOdEFV/xo9I93wjG3TgwWmx/jFd3ABG8jdUkLygvhCHXZLkMi0dKkykVL93khpFXHfxHFvpKb5b+pO7Nm5pD0i73QGZsMWXk/C6XTNJW0EwG1B+k6YHakB684lHRb3FRtJPaUiJF9jgIYDKL7OED625zFGHmniaTyEp1EuKZWF0TZNPIwLHSZ/fUXpCRG1tpmGsPZR/FQBf+5hDEpseQOfyzUt/0WLZ6uvUoOeSkudra5T3sD3/wy513uHumH5NMiwZ7w1Dpi+xqsJrKr5LHUn6vSaXFclna90wV5sW7zvqBvScx1ncc7+RE3DQua6lJcn+CbziFoeofh6GDv51u96mFPQKhcSNcvT1Ku4o0CE49IsGih60b5+L7nEQ/eCbeIk11ehukcpXNAdqt4iAZqOAI0GlgTOeTyh+ymuRsUSC/vLMA83JSbJSpij47SyNAnTdbyGNnsax6q+NFUFVKEuD3pZ7Si+iwuojurUMnv1B8SJMWBxqUNZ3e4CjQs4swDN7hrRjB347XBCr6GlF4H3k/j+fgBH+0RNbXRU+YW+cNm3JluCZYTc7UBsBZ58PwLteh8Jp07aep44eyc+6Kt18dWDWrZT53LiqiB/uaYEzhE4o3sStQ1hME5Qb5nJLvgoq5HN7uA+nqPLl5mkaJUjyHIXEUApAuGyywyNRTB/50eNdjnnAgwTd2S8Gf7MONWvOJdgs4CwVWAuH0gWMnOk8hgGe6ewoSk5m6fAdiHbVnzfZqJl2cCxDXNzBhrhZEKiUZvzOWjMM8J5pQo/xTq2VQ6uXv0oa3olj+H8Bw1YviIv0DXb+WGo9xsUYKhCs9gLXaDFi6vaCizSVIVmvc+Cr8T1jDvyOVW0AAf1mBD+Rrp8qeyIigg2KGeZhF9n+77IpbJTlD5xqEPiaWjIs5FZ2lATolB9rm77sVHJwgLmCWBBXax/qewfwzRULZWdoV7Nbz+WyvpqasahLbSWWG/b4hYOzXTSESrHdK9KXSq7gRa3/fAtleV0AS+VnYoFjM1kVi3G1+uT+rUYPwQe2fFgwmNiyjUIDgkSG6JPqjRDypzPmlqMLzXNu5FWDwFmudp9+FYeSN9njHrNhcZocbU8rQCYioq/27VNtonQDC1ehOZLutVt9xEKn0crAMO+4/vrtvuQfg5Pqv0UrUxDoTLRXLlM10YhmJEIR7dcIjik9pgTMpkKmJpYsxPTcj4EFp/vIk0Sv/4SIqJWWABpLcvuot5S2piWZa6O30ttWdZRUw8x1X/SjluBDjkmV+UcDKl8ky6UbosHQvpvrgysT4tobdKPlmW+Pne+lmU2dH4g7olJb4r4LszFLEdTRN9+R50AcKrqi6sW+Jd9MEFFJFBChWi++qMhx7FfTRHZuf3AcjVFtMQXyhVlbxT2ea20XaVE4NT1Z4pEoOh8ynK1XfWl/ccUYPj7uDv4/VU97foBGEucgufGzrcqsLiiJt/qyZVq7NxP0FSBZbUaO+sW8nqOyIKGZ8g/jumKVWkdz4B5K2Z/V7p1fMqOaymt42NMUQggtESgLEfreJ5d/wQAI256dba/4Zu/DWZqG63fzSnKJYBFm521sjnFSZifQ7RGNqfQguRGgtzNYL8CjG9jLZ9fE7v9TZ2NKijRPPVr+5tYrdLwOLa+6rgNKpvLRy6H4J3lvhHSnmtpg6291N1g6yD1evAvBBzhldpgq1NhmkjNpJNnHo08WmUlNtjy+S38PbzNDbdaOxwzSGtxV1nOwP4kdfd63E5pW/i1IzPEPm1Tdwu/WMAsxxZ+TXLv/Rgqq+RJy4eQfEsqbl/r2xBz/uaV0DqbHGBZrk1CU8xTbISUsgtbvzYJlaC5AG3ClZJH6g7Ietm3moXHnZtsE57tEf5MSuidug1xXcD4knGNCM0Suw2xBAk7sN+mbj3wE/2YF1uvG51vBXD6tdF5nbA7FjBLCZvX/UbnawUwOpPMDvP1YF6GMpEAmHZEZriOWaras9oXOg8lAIbLHngZyZPgw5S4AdYgAsZFtiU7F3TtRpJwiyfsLqn+zHddcxSaYS48YfM5JNOOwgdhE3N6pQX7wwoYF3Gqexf19hWQtbvDCZFTrFmKKcLWZoh9Mlnna/ceeI7S+t9lwCwzcY3HldTbkMvyJlo8YzuKgR0FYEbp8lUGHeqtB5oV7+VMPZev2h3W7IZZXJs7tdYFlQqY/xdgAN9bGCGWQfNpAAAAAElFTkSuQmCC",
    "image://data:image/png;base64,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",
    "image://data:image/png;base64,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"
];
var pointSymbol = [
    "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAgCAYAAADJ2fKUAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAADKGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMwNjcgNzkuMTU3NzQ3LCAyMDE1LzAzLzMwLTIzOjQwOjQyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3OTQzNjc0N0E3MDcxMUU4QjM0REMzOTdCMkY4RDdEQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3OTQzNjc0OEE3MDcxMUU4QjM0REMzOTdCMkY4RDdEQyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjc5NDM2NzQ1QTcwNzExRThCMzREQzM5N0IyRjhEN0RDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjc5NDM2NzQ2QTcwNzExRThCMzREQzM5N0IyRjhEN0RDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Y/Y3eAAAAd1JREFUOE991dlqFFEUheF04jwhKiIqqCAoGHwCH8E7H98LvRLnIQ5xiGnXV9Rqqtp0NvzUqVN77b3qnK7Ti+VyuTWJxYjoVUIZoiIJOyMnRraDh3/DwYjxYUWST4ez4Xw4FwgPw8/wPfwYxwcVEVwIV8K1cDWcCap/Ce9H9sI+EWsqS74d7oU74WL4HV6HF+FleBP2+CY6GSTdDA/Dk/AsPA2Pw93Ahe47RIJ/76KbTrvhfngUHoRb4XIg2q6oC3EpXA83gjgVWPaOinK0qIhF3VSyIMYNHcwpqvhK1HA/FQjVzXk2bLiBNYc9sXl/wjTMDZsahv2pyMQmkWVf/RrCsvamnSRMo6IWnolqQ6ep8NhOFRL9Co2paMjbZE9iw1ihI+1VJKEic8faayUJtUdgrNBGUa1JdO/qG5qKhn0SU3tE+0EBH54xcS3+10nFfqnEX8O3QOh+o0iCZOJPwdeq40YRG7p8DhJ9qcbmanEl6vt4wI5zQfKHcVy7cmYLoQpLrEl+N8KiQgrORH2fWnsbXgX2KjqyU0WSiJxARB9DRfJmnUxWJPn5eHXfd5I3O5adfQ6P4rzonhUruqxIOHkcHq5wNrCsAyyE66qT6B/AFC++zkzE4joerrG19Q+FsQuu8dR/aQAAAABJRU5ErkJggg==",
    "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAgCAYAAADJ2fKUAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAADKGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMwNjcgNzkuMTU3NzQ3LCAyMDE1LzAzLzMwLTIzOjQwOjQyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowQzUxNDcxOUE3Q0IxMUU4QjM0REMzOTdCMkY4RDdEQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowQzUxNDcxQUE3Q0IxMUU4QjM0REMzOTdCMkY4RDdEQyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjBDNTE0NzE3QTdDQjExRThCMzREQzM5N0IyRjhEN0RDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjBDNTE0NzE4QTdDQjExRThCMzREQzM5N0IyRjhEN0RDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Jjx60AAAAiRJREFUOE+NlV0vA0EUhmfbUooSRAQJTSQkxC/wE9z5+S64QlHfiqod7zMzZ7uLikkeMzt73nPememO7OVixpValqBZ70uEZiIC6olGoiYI/BTDBOPcRAQ3xbRgoiUQ5uJNvIh+Gg9NhGBWLIplsSSmBNkfxE3iUbwiwhqZCd4QHbEp5sRAXIpTcSa64hHfiCYEQWti19Uah26yfewmWkd6PhBbAhdUryOi4R+fVOu4rL6fNee3s8bMnp53xLpYEIhqJrKNaIsV5/NVJtVP6i+WWSNJcZSZCItUI5M2xDNWC0dDBTaJpCQvRNZ4bjifzjH2ZLdzCwfOgDfAmXB4H3FICz1z4VBFyGIiJkaiVMnHnm0vfg3Cm71yJQJQ8IeRiSxxRWQ2ZI8gvf9HJRMieo8CYiqiEDfOngI1NapEIt7/qGQiAgY6WETM/WmPCSAg2fMI3gWJxoqSNQJVxecI+IbKonBOtLI9RK+aUgLPh6dxqGYWf1QiY/xSvax5/6Txs0BIsrEiAhTsJfZ3GvO1UnGsCBvcB/ea6WtNfKn3ac4sFiJbDy+wo3shJ7gXx0FklSobQRbWwzp6OqJr9YBFEpGwIrL1RGvOXcnauXrsmejXSiYiCBE3EKJbYSLiKpWYNFHX5cOT0MdnWxNxlWuZu48Hg/sintkItt6biMbNw+VBD9wNWKYCsBH0RSWa/QMow8K/U6yJhl/7wWLLLnyemQ/rcc65L2HyP9eIbO1cAAAAAElFTkSuQmCC",
    "image://data:image/png;base64,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",
    "image://data:image/png;base64,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",
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


