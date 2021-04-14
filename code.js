var fyp;
(function (fyp) {

    var Edge = (function () {
        function Edge(source, dest) {
            if (this.source === undefined)
                this.source = 0;
            if (this.dest === undefined)
                this.dest = 0;
            this.source = source;
            this.dest = dest;
        }
        return Edge;
    }());
    fyp.Edge = Edge;
	Edge["__class"] = "fyp.Edge";
	
    var Graph = (function () {
        function Graph(edges, N) {
            this.adjList = null;
            this.adjList = ([]);
            for (var i = 0; i < N; i++) {
                {
                    /* add */ (this.adjList.push([]) > 0);
                }
                ;
            }
            for (var index20214 = 0; index20214 < edges.length; index20214++) {
                var edge = edges[index20214];
                {
                    var src = edge.source;
                    var dest = edge.dest;
                    /* add */ (this.adjList[src].push(dest) > 0);
                    /* add */ (this.adjList[dest].push(src) > 0);
                }
            }
        }
        return Graph;
    }());
    fyp.Graph = Graph;
	Graph["__class"] = "fyp.Graph";
	
    var code = (function () {
        function code() {
        }
        color_$LI$ = function () { if (code.color == null)
            code.color = ["", "BLUE", "GREEN", "RED", "YELLOW", "ORANGE", "PINK", "BLACK", "BROWN", "WHITE", "PURPLE", "VOILET"]; return code.color; };
        ;
        colorGraph = function (graph, N) {
            var result = ({});
            for (var u = 0; u < N; u++) {
                {
                    var assigned = ([]);
                    {
                        var array20216 = graph.adjList[u];
                        for (var index20215 = 0; index20215 < array20216.length; index20215++) {
                            var i = array20216[index20215];
                            {
                                if ((function (m, k) { if (m.entries == null)
                                    m.entries = []; for (var i_1 = 0; i_1 < m.entries.length; i_1++)
                                    if (m.entries[i_1].key.equals != null && m.entries[i_1].key.equals(k) || m.entries[i_1].key === k) {
                                        return true;
                                    } return false; })(result, i)) {
                                    /* add */ (function (s, e) { if (s.indexOf(e) == -1) {
                                        s.push(e);
                                        return true;
                                    }
                                    else {
                                        return false;
                                    } })(assigned, /* get */ (function (m, k) { if (m.entries == null)
                                        m.entries = []; for (var i_2 = 0; i_2 < m.entries.length; i_2++)
                                        if (m.entries[i_2].key.equals != null && m.entries[i_2].key.equals(k) || m.entries[i_2].key === k) {
                                            return m.entries[i_2].value;
                                        } return null; })(result, i));
                                }
                            }
                        }
                    }
                    var color = 1;
                    for (var index20217 = 0; index20217 < assigned.length; index20217++) {
                        var c = assigned[index20217];
                        {
                            if (color !== c) {
                                break;
                            }
                            color++;
                        }
                    }
                    /* put */ (function (m, k, v) { if (m.entries == null)
                        m.entries = []; for (var i = 0; i < m.entries.length; i++)
                        if (m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                            m.entries[i].value = v;
                            return;
                        } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(result, u, color);
                }
                ;
            }
            for (var v = 0; v < N; v++) {
                {
                    console.info("Color assigned to vertex " + v + " is " + color_$LI$()[(function (m, k) { if (m.entries == null)
                        m.entries = []; for (var i = 0; i < m.entries.length; i++)
                        if (m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                            return m.entries[i].value;
                        } return null; })(result, v)]);
                }
                ;
            }
		};
        
        main = function (inputname1,inputname2,inputname3,input,input2,input3,input4,input5,input6,input7,input8,input9,input10,input11,input12) {
            var edges = [];
            var check1 = false;
            var check2 = false;
            var check3 = false;
    //EXAMINER 1 AND 2
	if (input < input6 && input5 < input2){
        var check1 = true;
        console.log(inputname1 + " (Time:" + input + "-" + input2 + ") and " + inputname2 + " (Time:" + input5 + "-" + input6 + ") has overlapping time");
	}else if (input3 < input8 && input7 < input4){
        var check1 = true;
		console.log(inputname1 + " (Time:" + input3 + "-" + input4 + ") and " + inputname2 + " (Time:" + input7 + "-" + input8 + ") has overlapping time");
	}else if (input7 < input2 && input < input8){
        var check1 = true;
		console.log(inputname1 + " (Time:" + input + "-" + input2 + ") and " + inputname2 + " (Time:" + input7 + "-" + input8 + ") has overlapping time");
	}else if (input5 < input4 && input3 < input6){
        var check1 = true;
		console.log(inputname1 + " (Time:" + input3 + "-" + input4 + ") and " + inputname2 + " (Time:" + input5 + "-" + input6 + ") has overlapping time");
	}
    //EXAMINER 2 AND 3
	if (input5 < input10 && input9 < input6){
        var check2=true;
		console.log(inputname2 + " (Time:" + input5 + "-" + input6 + ") and " + inputname3 + " (Time:" + input9 + "-" + input10 + ") has overlapping time");	
	}else if (input7 < input12 && input11 < input8){
        var check2=true;
		console.log(inputname2 + " (Time:" + input7 + "-" + input8 + ") and " + inputname3 + " (Time:" + input11 + "-" + input12 + ") has overlapping time");
	}else if (input11 < input6 && input5 < input12){
        var check2=true;
		console.log(inputname2 + " (Time:" + input5 + "-" + input6 + ") and " + inputname3 + " (Time:" + input11 + "-" + input12 + ") has overlapping time");
	}else if (input9 < input8 && input7 < input10){
        var check2=true;
		console.log(inputname2 + " (Time:" + input7 + "-" + input8 + ") and " + inputname3 + " (Time:" + input9 + "-" + input10 + ") has overlapping time");
	}
	//EXAMINER 1 AND 3
	if (input9 < input2 && input < input10){
        var check3 = true;
		console.log(inputname1 + " (Time:" + input + "-" + input2 + ") and " + inputname3 + " (Time:" + input9 + "-" + input10 + ") has overlapping time");	
	}else if (input11 < input4 && input3 < input12){
        var check3 = true;
		console.log(inputname1 + " (Time:" + input3 + "-" + input4 + ") and " + inputname3 + " (Time:" + input11 + "-" + input12 + ") has overlapping time");	
	}else if (input < input12 && input11 < input2){
        var check3 = true;
		console.log(inputname1 + " (Time:" + input + "-" + input2 + ") and " + inputname3 + " (Time:" + input11 + "-" + input12 + ") has overlapping time");	
	}else if (input3 < input10 && input9 < input4){
        var check3 = true;
		console.log(inputname1 + " (Time:" + input3 + "-" + input4 + ") and " + inputname3 + " (Time:" + input9 + "-" + input10 + ") has overlapping time");	
    }
    
    if ((check1 ==true) && (check2== false) && (check3 == false) ){
       var edges = [new fyp.Edge(0,1)];
       console.log("Edge drawn Between Examiner 1 and 2");
    }else if ((check1 ==false) && (check2== true) && (check3 == false) ){
        var edges = [new fyp.Edge(1,2)];
        console.log("Edge drawn Between Examiner 2 and 3");
    }else if ((check1 ==false) && (check2== false) && (check3 == true) ){
        var edges = [new fyp.Edge(0,2)];
        console.log("Edge drawn Between Examiner 1 and 3");
    }else if ((check1 ==true) && (check2== true) && (check3 == false) ){
        var edges = [new fyp.Edge(0,1), new fyp.Edge(1,2)];
        console.log("Edge drawn Between Examiner 1 and 2");
        console.log("Edge drawn Between Examiner 2 and 3");
    }else if ((check1 ==true) && (check2== false) && (check3 == true) ){
        var edges = [new fyp.Edge(0,1), new fyp.Edge(1,2)];
        console.log("Edge drawn Between Examiner 1 and 2");
        console.log("Edge drawn Between Examiner 2 and 3");
    }else if ((check1 ==false) && (check2== true) && (check3 == true) ){
        var edges = [new fyp.Edge(0,2), new fyp.Edge(1,2)];
        console.log("Edge drawn Between Examiner 1 and 3");
        console.log("Edge drawn Between Examiner 2 and 3");
    }else if ((check1 ==true) && (check2== true) && (check3 == true) ){
        var edges = [new fyp.Edge(0,1), new fyp.Edge(0,2), new fyp.Edge(1,2)];
        console.log("Edge drawn Between Examiner 1 and 2");
        console.log("Edge drawn Between Examiner 1 and 3");
        console.log("Edge drawn Between Examiner 2 and 3");
    }else {
        console.log("No Edge drawn");
    }
            var N = 3;
            var graph = new fyp.Graph(edges, N);
            colorGraph(graph, N);
        };
        return code;
    }());
    fyp.code = code;
    code["__class"] = "fyp.code";
})(fyp || (fyp = {}));
color_$LI$();
fyp.code(null);

module.exports ={ main:main}