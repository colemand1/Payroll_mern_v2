const mongoose = require("mongoose");
const Schema = mongoose.Schema
 
const employeeSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    netPay: {
      type: Number,
      required: false
    },
    totalHours: {
      type: Number,
      required: false
    },
    overtimeHours: {
      type: Number,
      required: false
    },
    dailyHours: {
      monday: {
        type: Number,
        required: false
      },
      tuesday: {
        type: Number,
        required: false
      },
      wednesday: {
        type: Number,
        required: false
      },
      thursday: {
        type: Number,
        required: false
      },
      friday: {
        type: Number,
        required: false
      },
      saturday: {
        type: Number,
        required: false
      },
      sunday: {
        type: Number,
        required: false
      }
    },
    dates: {
      monday: {
        type: String,
        required: false
      },
      tuesday: {
        type: String,
        required: false
      },
      wednesday: {
        type: String,
        required: false
      },
      thursday: {
        type: String,
        required: false
      },
      friday: {
        type: String,
        required: false
      },
      saturday: {
        type: String,
        required: false
      },
      sunday: {
        type: String,
        required: false
      }
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Employee", employeeSchema);