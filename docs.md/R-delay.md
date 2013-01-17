T("delay")
==============
{ar} Delay signal


```timbre
var src = window.getDraggedFile() || "/timbre.js/misc/audio/guitar.wav";

var audio = T("audio", {isLooped:true}).load(src, function(res) {
    
    var d = T("delay", {time:250, fb:0.6, wet:0.5}, this).play();
    
});
```

## Properties ##
- `time` _(Number or timevalue)_
  - ディレイタイム. デフォルト値は **100** ms
- `fb`, `feedback` _(T-Object)_
  - フィードバッック. デフォルト値は **0**
- `wet` _(T-Object)_
  - 元のシグナルとのミックスレベル. デフォルト値は **1** (ディレイ音のみ出力)

## Source ##
https://github.com/mohayonao/timbre.js/blob/master/src/objects/delay.js