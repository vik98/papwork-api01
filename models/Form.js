const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FormSchema = new Schema({
    formID:{
        type: Schema.Types.ObjectId,
    },
    userID:{
        type:Schema.Types.ObjectId,
        ref:'users'
    },
    formName:{
        type:String,
        required:true
    },
    date: {
        type:Date,
        default: Date.now
    },
    pages:[{
        question:[{
            questionType:{
                type:String,
                default:null
            },
            fieldType:{
                type:String,
                default:null
            },
            typedQuestion:{
                type:String,
                required:true
            }
        }]
    }],
    image:{
        type:String
    }
});

mongoose.model("forms", FormSchema, 'forms');