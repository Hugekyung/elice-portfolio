import { Schema, model } from "mongoose";

const ProjectSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
      default: "",
    },
    from_date: {
      type: Date,
      required: true,
      default: Date.now(),
    },
    to_date: {
      type: Date,
      required: true,
      default: Date.now(),
    },
  },
  {
    timestamps: true,
  }
);

const ProjectModel = model("User", ProjectSchema);

export { ProjectModel };
