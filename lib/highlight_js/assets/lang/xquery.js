hljs.registerLanguage("xquery",function(e){var t="for let if while then else return where group by xquery encoding versionmodule namespace boundary-space preserve strip default collation base-uri orderingcopy-namespaces order declare import schema namespace function option in allowing emptyat tumbling window sliding window start when only end when previous next stable ascendingdescending empty greatest least some every satisfies switch case typeswitch try catch andor to union intersect instance of treat as castable cast map array delete insert intoreplace value rename copy modify update",a="false true xs:string xs:integer element item xs:date xs:datetime xs:float xs:double xs:decimal QName xs:anyURI xs:long xs:int xs:short xs:byte attribute",s={b:/\$[a-zA-Z0-9\-]+/},n={cN:"number",b:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",r:0},r={cN:"string",v:[{b:/"/,e:/"/,c:[{b:/""/,r:0}]},{b:/'/,e:/'/,c:[{b:/''/,r:0}]}]},i={cN:"meta",b:"%\\w+"},c={cN:"comment",b:"\\(:",e:":\\)",r:10,c:[{cN:"doctag",b:"@\\w+"}]},o={b:"{",e:"}"},l=[s,r,n,c,i,o];return o.c=l,{aliases:["xpath","xq"],cI:!1,l:/[a-zA-Z\$][a-zA-Z0-9_:\-]*/,i:/(proc)|(abstract)|(extends)|(until)|(#)/,k:{keyword:t,literal:a},c:l}});