(function(){function e(a,e){var g=a.getCursor("head"),h=a.getCursor("anchor");a.operation(function(){var b,c=Math.min(g.line,h.line),f=Math.max(g.line,h.line);if(!e||c>f)b=0;else{b=a.clipPos(d(c,0));var k=a.clipPos(d(f)),f=a.getRange(b,k);c<=a.firstLine()?a.replaceRange("",b,d(k.line+1,0)):a.replaceRange("",d(b.line-1),k);c=b.line+e;c<=a.firstLine()?(a.replaceRange(f+"\n",d(c,0)),b=a.firstLine()-b.line):(c=a.clipPos(d(c-1)),a.replaceRange("\n"+f,c),b=c.line+1-b.line)}a.setSelection(d(h.line+b,h.ch),
d(g.line+b,g.ch))})}var d=CodeMirror.Pos;CodeMirror.commands.moveLinesUp=function(a){e(a,-1)};CodeMirror.commands.moveLinesDown=function(a){e(a,1)};CodeMirror.keyMap["default"]["Alt-Up"]="moveLinesUp";CodeMirror.keyMap["default"]["Alt-Down"]="moveLinesDown"})();