function onUpdateReady() {
  alert('Se han actualizado algunos archivos, por favor reinicia la aplicación');
}
window.applicationCache.addEventListener('updateready', onUpdateReady);
if(window.applicationCache.status === window.applicationCache.UPDATEREADY) {
  onUpdateReady();
}
