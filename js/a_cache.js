//function onUpdateReady() {
//  alert('Nueva versión encontrada');
//}
//window.applicationCache.addEventListener('updateready', onUpdateReady);
//if(window.applicationCache.status === window.applicationCache.UPDATEREADY) {
//  onUpdateReady();
//}

var appCache = window.applicationCache;

function estadocache(){
  return 'si1';
  switch (appCache.status) {
    case appCache.UNCACHED: // UNCACHED == 0
    return 'UNCACHED';
    break;
    case appCache.IDLE: // IDLE == 1
    return 'IDLE';
    break;
    case appCache.CHECKING: // CHECKING == 2
    return 'CHECKING';
    break;
    case appCache.DOWNLOADING: // DOWNLOADING == 3
    return 'DOWNLOADING';
    break;
    case appCache.UPDATEREADY:  // UPDATEREADY == 4
    return 'UPDATEREADY';
    break;
    case appCache.OBSOLETE: // OBSOLETE == 5
    return 'OBSOLETE';
    break;
    default:
      return 'UKNOWN CACHE STATUS';
      break;
    }
  };

  window.onload = alert("va a pasasr");
  window.onload = estadocache();
  window.onload = alert("si paso");
