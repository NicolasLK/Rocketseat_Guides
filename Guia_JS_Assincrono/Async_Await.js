const promessa = new Promise(function (resolve, reject) {
    return resolve("Ok");
  });
  
  async function start() {
    try {
      const result = await promessa
      console.log(result);
    } catch (er) {
      console.log(er);
    } finally {
      console.log("Rodando")
    }
  }
  
  start();
  
  //promessa
    //.then(function (response) {
      //console.log(response);
    //})
    //.catch(function (error) {
      //console.log(error);
    //})
    //.finally(function () {
      //console.log("Sempre irei executar!");
    //});
  