function getParamURL(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
  }
// En tu archivo httml en el navegador agrega despues del nombre del archivo ?txtname=loquesea
//   console.log(getParamURL("txtname")); //descomentar esta linea
  