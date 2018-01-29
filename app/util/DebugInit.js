
 const DebuggerInit= () =>{
    let fundebug = require(`../../threefiles/fundebug.0.3.3.min.js`)
    var head= document.getElementsByTagName('head')[0];
    fundebug.releasestage=process.env.NODE_ENV
    fundebug.apikey="b762b8aa8c7735c6153891aaee6d206ba5a2dec98d5c5cf340ff02163038b858"
    var script= document.createElement('script');
    script.src= `/threefiles/fundebug.0.3.3.min.js`;
    head.appendChild(script);
}

 export default DebuggerInit