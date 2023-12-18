

function handleChanges(sessionId, inputValue) {
  sessionStorage.setItem(sessionId, inputValue);
}

function Continuar (id, setId) {
    if(id!=4)
    setId(id+1);s
    
    console.log(id)
  };

  function Voltar (id, setId) {
    if(id!=1)
    setId(id-1);
  };

  function handleSubmit (input1, input2, input3) {
      if(
        sessionStorage.getItem(input1) &&
        sessionStorage.getItem(input2) &&
        sessionStorage.getItem(input3) != null 
      ) {
        console.log("Continuar");
      } else {
        console.log("Preencha tudo");
      }
  }

  function getInputInfo(name) {
    const item = sessionStorage.getItem(name);
    if (item != null) {
      console.log(item);
      return item;
    } else {
      console.log("ca");
      return "digite";
    }
  }


export { Continuar, Voltar, handleChanges, handleSubmit, getInputInfo};
