const Schemes = require("../schemes/scheme-model")
/*
  If `scheme_id` does not exist in the database:

  status 404
  {
    "message": "scheme with scheme_id <actual id> not found"
  }
*/
const checkSchemeId = (req, res, next) => {
  const {scheme_id} = req.params;
  Schemes.findById(scheme_id).then((scheme)=>{
    if(!scheme || Object.keys(scheme).length === 0){
      res.status(404).json({message: `scheme with scheme_id ${scheme_id} not found`})
    } else{
      next();
    }
  })
}

/*
  If `scheme_name` is missing, empty string or not a string:

  status 400
  {
    "message": "invalid scheme_name"
  }
*/
const validateScheme = (req, res, next) => {
  const { scheme_name } = req.body;
    
  if(scheme_name === undefined || scheme_name.length === 0 ||  typeof scheme_name !== "string"){
    res.status(400).json({ message: "invalid scheme_name" });
  }
  else {
    next();
  }
}

/*
  If `instructions` is missing, empty string or not a string, or
  if `step_number` is not a number or is smaller than one:

  status 400
  {
    "message": "invalid step"
  }
*/
const validateStep = (req, res, next) => {
  const { instructions, step_number} = req.body;
  if(instructions === undefined || instructions.length === 0 || typeof instructions !== "string" || step_number < 1 || typeof step_number){
    res.status(400).json({message:"invalid "})
  }
  next();
}

module.exports = {
  checkSchemeId,
  validateScheme,
  validateStep,
}
