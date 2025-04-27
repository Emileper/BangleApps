

//********************************************
// Assets

  const imgSun =
require("heatshrink").decompress(atob("nc8wcBkmSpICGyeJBZICK4gUTkniCieSuJBUnBBUzhBUpxBUk8SFiawrk9sX6U4sO2jFiUJZ9DCgOG7YCBjDjLBAQRCtoCBsOBOhQsByIRC23YDQUSWxXjCgfbtpZBC4L4KpwmBCgYCBw0bOIgCFnYOBCghEBAQJBJyIpEhoXEfBNGjY+EDQaGCFg5rFiAaEQwIsH8ImD4FJgBBDsKwHyZ6BEweEI4rgDIIojCgEGQAOAgAICsBBKbQVsmwsBBAWGIJuGVoTgDZA5BDsBBC20ARgSbIQYeA8BBB7EOgxuKYocYgO2AoOAGohBGagbyHAQXECIMnCIryIAQtsFgV2BxICD2JuGPQQyKgiwMAQywLBwXDTYIXDWBgOBhkA4ZBEWA9OFgKAHMQJBINwTvCCISeDIJBuE7DFCcAJBKpM4EwVh2EDgE2fYZBIyKbEQYnYIJCbFtkGIgbFIFgaAD7BWDAoMSCg6bBQAgCDJQOJIJEk9r1GKwO2ChOTx0YsLIDCgKYB8RBJQwQXBCgkSBYKwIQwQRBjYUCsAOBFhAICcAKeCDQJrCFg+TO4nhwxBBBAhZJAQcntgOMAQ9xCiZ0DC6WcIKiqJNxkSFiahFASHENyi/NWCWQA"));

  const imgMoonBottomRight =
require("heatshrink").decompress(atob("kEgwcBkmSpMkz///4FCAQk/BQIAB5ILEp4KDAAILEv4LF8gLCyYKF//8HAoAFBYQFC/0//goBj+CpMnCQfAAgfwBYX4gEPBAOAgH/xxcC4//wI4BPAMcuEJBYYvBjkAg8fxwLC/8Av/H8AXB/gXBBQP4jkPBYMB4AXBnILB44XEEYPx4JND+IXC/Hj/wXCAAOPBYMOgAXGO4gFBC4gAFC4qkCC4WOgM/x4jD8CGC+PJn4IBAoPASQZ3ENwUAuP/R4SzECgU48anBBYYmB8Z9CgDXDgYvCv53Ba4LvCj5KB/ieBgESBYOTcYcDHwPgfYWSMwPxNYXAggLDpHjEYKbBnAIBBYVJni/BLgQLFkmenHgHAQLFAQ4"));

  const imgMoonTopRight =
require("heatshrink").decompress(atob("kMhwcBkmSpICNoAXBBY+R48cuPAggLFx/H/lwg8cgQLE/4AC44mBhILG+ImC44XH/4yCgALEF4M4/l/DQIyCCwf48YRCuPJkmf//ggE/8fx4ED+B6BBYIUB/A+BF4MP/EEyYkDBwPAj+B4EcyV///+gH/x4XBh048ESBYUHgfx/EAJoPguFPI4UD/0/geAIIOAhIwDPQPgh//geB4M/BYf4/hZBjl/4EnNwn/wB9C/8ESQhNDAAMANwaJGKwaPCTwKVDiRWCVoUHj4FCuVJGAg+BAAXwpJKG+IEBxz1GGQQLBfAKtD48AgIFCaIOSHwQUB+EHBYlJRISGBnALFGQgjFBYLgEBYwCBSogIDAQaYB/4IFARUgA"));

  const imgMoonTopLeft =
require("heatshrink").decompress(atob("kMhwcBkmSpICNoAXBBY+Qg8cuPHggLFwPHgFx/8fwQLEwEAjl//4AB5ILD+PHEYQMCC4gvCBQX//gvEj/x/HgBwXyEYYGB/HjDIYyBKYPggPH8f+gED//5BYM/8EAg8f/0//+P//kyfAjkP4ALDHwdA8eOQoN+DoMPBgOSo8Dx0HgEP4/guAaB/1IgeP/EDwP4/+AEwXJjkOg4ICRIn5kF/NwJ9B8fxMYckCIMfHwJTCAAXkwIDBNYIJDKwRuBBYM4BIZlCKwKSC/g1BBweSp8fDoVwRIILCVoIFDQwgFBpMnIgIjBNwILEkmOn4vCAQLFEyYFC4EAdgYLBHwILCGoJKCBYVJHIL1BgIXFGQJ4FBYoyDBY4CBKYwLEkmfQYQLHAQ8gA="));

  const imgMoonBottomLeft =
require("heatshrink").decompress(atob("kMhwcBkmSpICNv///wLHz//AAXkBYoKDAAPyBZX/5ILK/4LL/gLCx/H//x//jGQuPCgcDGQuen/ggE/MQMABwP5kmQnALBgALBg//EAJlBnH8uEAjl+DQI1BHwNA8fwDAILB8EPGIOSvALBg8Ah/H8FwGoVI8f+nEAgP4/+AnBKCBYX8JQMcV4IAB/Mjx/4gFwg/jHYIACk5uDPoJ0E8mOGoKVINwIFCj4MFKwIECgF/EwIRCyRWBAoKJBg4aBLIKtBgYyB8eASQIAC/1Jk+OnHjI4gLCkmAgAmB4/8Nwb4CC4P/4EAuP4GQILCpEDx/AOIQRBBYVJRIJKBgIjFGQRKBKYQLFGQLOC8eOhILEMoSMBxwIDAQaYB8YIFARUgA"));

  const imgMoonTop =
require("heatshrink").decompress(atob("kMh4kB/4ACEbcRACsiAAMhBxcgAAQRJiQMCAAIECB40QBIIgEAQIfIAAwhFD4IAJD5ohFD4sAAIQhGAgMCL4SdBMoQTBOwQJBgQCKgIwCFgQLEAAIKCEAQFBGIINDAocgEAIDBBAJaBB4apCCAUQCAYgGB4T2BB4Q9BAIwCBEAYGBBAQgDA4hyFAhIgCAAgjFAAQgCCAoHGOYQAETIqkEB4qHBCArFDAAbYEEAhCHIA4xFWIIiBGAwQEYITJEB4ZTGQIwQIKIoPEEJQPFCBIPGOw5vCCJYOLABUQ"));

  const imgMoonBottom =
require("heatshrink").decompress(atob("kMhwcBkmSpICNv///wLHz//AAXkBYoKDAAPyBZX/5ILK/4LGx//8YEB/gXG4EfGQojHGQZTB8EAn5iBgED//5BYkA/l+AYMPMoOTBYYAEn4+Bv/8A4V/4ADBg//R4WOg4gB/EAuE4GoNPBYM4geB/8DwE4MoPJLgP4NwQCBAoP/4M8v/48BEBKwQXB48kGIIACPQYABgnxPZMcyILJ/kSvAFCFgI7CAoOSpHjx0/HwP4gf+KwOCpKMC8eATwJZBR4NJk5uBDQILBAobFBwC2BF4K2BAAOAhLsBCIOPTwMB/AXBBYVIGQPAPQMHF4ILCpMjF4IIBUgIXDGQU4gEOHwIvDBYIyDF4oLCMoIADBAYCDzwaBBAoCKkA="));

  const imgMoonLeft =
require("heatshrink").decompress(atob("kMh4kB/4ACEbcRACsiAAMhBxcgAAQRJiQMCAAIECB40QBIIgEAQIfIAAwhFD4IAJD5ohFD4sAAIQhGAgMCL4SdBMoQTBOwQJBgQCKgIwCFgQLEAAIKCEAQFBGIINDAocgEAIDBBAJaBB4apCCAUQCAYgGB4T2BB4Q9BAIwCBEAYGBBAQgDA4hyFAhIgCAAgjFAAQgCCAoHGOYQAETIqkEB4qHBCArFDAAbYEEAhCHIA4xFWIIiBGAwQEYITJEB4ZTGQIwQIKIoPEEJQPFCBIPGOw5vCCJYOLABUQ"));

  const imgMoonRight =
require("heatshrink").decompress(atob("kMh4kB/4ACEbcRACsiAAMhBxcgAAQRJiQMCAAIECB40QBIIgEAQIfIAAwhFD4IAJD5ohFD4sAAIQhGAgMCL4SdBMoQTBOwQJBgQCKgIwCFgQLEAAIKCEAQFBGIINDAocgEAIDBBAJaBB4apCCAUQCAYgGB4T2BB4Q9BAIwCBEAYGBBAQgDA4hyFAhIgCAAgjFAAQgCCAoHGOYQAETIqkEB4qHBCArFDAAbYEEAhCHIA4xFWIIiBGAwQEYITJEB4ZTGQIwQIKIoPEEJQPFCBIPGOw5vCCJYOLABUQ"));

  const imgStarCardinal =
(atob("CQuDAAAAAAABwAAAOAAABwAAB/wAP//+AB/wAABwAAAOAAABwAAAAAAA"));

  let cX = g.getWidth()/2;
  let cY = g.getHeight()/2;

  let twoPi = 2*Math.PI;
  let Pi = Math.PI;
  let pRad = Math.PI / 180;

  function onMinute() {
    // clear existing hands
    queueMinuteTimer();

    let d = new Date();
    let hour = 23;
    let min = 0;
    let sec = d.getSeconds();

    drawSky(d, hour);

    g.clear();

    g.fillCircle(cX,cY,59);
    g.drawImage(imgSun,cX,cY,{rotate:0});
    g.drawImage(imgStarCardinal,(cX+59),cY,{rotate:1.5});
    g.drawImage(imgStarCardinal,(cX-59),cY,{rotate:1.5});
    g.drawImage(imgStarCardinal,cX,(cY+59),{rotate:0});
    g.drawImage(imgStarCardinal,cX,(cY-59),{rotate:0});
    g.setColor("#fff");
    g.fillCircle(58.5,36.90450117671,1);
    g.fillCircle(36.90450117671,58.5,1);
    g.fillCircle(117.5,36.90450117671,1);
    g.fillCircle(36.90450117671,117.5,1);
    g.fillCircle(139.09549882328,58.5,1);
    g.fillCircle(58.5,139.09549882328,1);
    g.fillCircle(139.09549882328,117.5,1);
    g.fillCircle(117.5,139.09549882328,1);

    drawMoon((360 * ((hour)+(min/60)))/12,hour,min,sec);
  }

  let moonRadius = 59;





  function drawMoon(moonAngle,hour,min,sec) {
    let moonA = moonAngle * pRad;
    let moonX = cX + Math.sin(moonA) * moonRadius;
    let moonY = cY - Math.cos(moonA) * moonRadius;

    let starAngle = (6 * min * (pRad) - pRad);
    let starX = moonX + Math.sin(starAngle) * (moonRadius - 35);
    let starY = moonY - Math.cos(starAngle) * (moonRadius - 35);


    starColor = g.blendColor("#000","#F00", 0.5);
    g.setColor(starColor);
    g.fillCircle(starX,starY,5);
    g.setColor("#F00");
    g.fillCircle(starX,starY,4);

    console.log(moonX);
    console.log(moonY);

    if (moonA >= 0.40142572795 && moonA <= 1.16937059883 || moonA >= 6.67588438887 && moonA <= 7.45255590601) {
    g.drawImage(imgMoonTopRight,moonX,moonY,{rotate:0});
    }
    else if (moonA >= 1.16937059883 && moonA <= 1.97222205475 || moonA >= 7.45255590601 && moonA <= 8.25540736193) {
    g.drawImage(imgMoonRight,moonX,moonY,{rotate:0});
    }
    else if (moonA >= 1.97222205475 && moonA <= 2.74016692563 || moonA >= 8.25540736193 && moonA <= 9.02335223281) {
    g.drawImage(imgMoonBottomRight,moonX,moonY,{rotate:0});
    }
    else if (moonA >= 2.74016692563 && moonA <= 3.54301838154 || moonA >= 9.02335223281 && moonA <= 9.82620368872) {
    g.drawImage(imgMoonBottom,moonX,moonY,{rotate:0});
    }
    else if (moonA >= 3.54301838154 && moonA <= 4.31968989868 || moonA >= 9.82620368872 && moonA <= 10.61160185212) {
    g.drawImage(imgMoonBottomLeft,moonX,moonY,{rotate:0});
    }
    else if (moonA >= 4.31968989868 && moonA <= 5.13126800086 || moonA >= 10.61160185212 && moonA <= 11.41445330804) {
    g.drawImage(imgMoonLeft,moonX,moonY,{rotate:0});
    }
    else if (moonA >= 5.13126800086 && moonA <= 5.89048622548 || moonA >= 11.41445330804 && moonA <= 12.17367153266) {
    g.drawImage(imgMoonTopLeft,moonX,moonY,{rotate:0});
	  }
    else {
    g.drawImage(imgMoonTop,moonX,moonY,{rotate:0});
    }
  }

  function drawSky(d, hour) {
    if (hour >= 8 && hour <= 17) {
    sky = g.blendColor("#00f","#0ff", 0.25);
    corona = g.blendColor("#0ff","#00f", 0.5);
    }
    else if (hour >= 5 && hour <= 8 || hour >= 17 && hour <= 19) {
    sky = g.blendColor("#f0f","#00f", 0.25);
    corona = g.blendColor("#ff0","#f0f", 0.75);
    }
    else {
    sky = g.blendColor("#000","#00f", 0.25);
    corona = g.blendColor("#000","#00f", 0.75);
    }
    g.setBgColor(sky);
    g.setColor(corona);
  }

  let minuteTimeout;

// Draw every minute
  function queueMinuteTimer() {
    if (minuteTimeout) clearTimeout(minuteTimeout);
    minuteTimeout = setTimeout(function() {
      minuteTimeout = undefined;
      onMinute();
    }, 60000 - (Date.now() % 60000));
  }

  onMinute();
  
  Bangle.setUI("clock");
