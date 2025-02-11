import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
  username: { type:String,
    required:true
  },
  email:{type: String,required:true},
  phone: {type:String,required:true},
  location: {type:String,required:true},
  text: {type:String,required:true}
},
{timestamps:true});

const Form = mongoose.model("Form", formSchema);

export default Form;
