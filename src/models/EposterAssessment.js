import mongoose from "mongoose";

const eposterAssessmentSchema = new mongoose.Schema({
    abstractId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Eposter",
        required: true
    },
    judgeId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Admin",
        required: true
    },
    scores: {
        researchTopic: Number,
        methods: Number,
        results: Number,
        presentation: Number,
        qa: Number
    },
    comments: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: Date
});

// 🔥 One admin can judge a poster only once
eposterAssessmentSchema.index({ abstractId: 1, judgeId: 1 }, { unique: true });

export default mongoose.model("EposterAssessment", eposterAssessmentSchema);
