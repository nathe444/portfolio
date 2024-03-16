const Reducer = (state, action) => {
  switch(action.type){
    case "HAMBURGER_TRUE":
      return{
        hamburger: true
      }

    case "HAMBURGER_FALSE":
      return{
        hamburger:false
      }
  }
}

export default Reducer