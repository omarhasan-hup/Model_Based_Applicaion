function TraceInfoFlag() {
    this.traceFlag = new Array();
    this.traceFlag["Controller.c:34c31"]=1;
    this.traceFlag["Controller.c:40c36"]=1;
}
top.TraceInfoFlag.instance = new TraceInfoFlag();
function TraceInfoLineFlag() {
    this.lineTraceFlag = new Array();
    this.lineTraceFlag["Controller.c:28"]=1;
    this.lineTraceFlag["Controller.c:34"]=1;
    this.lineTraceFlag["Controller.c:40"]=1;
    this.lineTraceFlag["Controller.c:41"]=1;
}
top.TraceInfoLineFlag.instance = new TraceInfoLineFlag();
