interface Script {
    question: string;
    answer: string[];
}

const TEAM_2_SCRIPT: Script[] = [
    {
        question: "Me(pharmacist): Hi, how are you? How can I help you?",
        answer: ["Patient: I am looking for some medicines for the common cold."]
    },
    {
        question: "Me(pharmacist): May I know who is taking the medicines?",
        answer: [
            "Patient: My niece. She is 4 years old coughing with phlegm.",
            "Patient: My husband who is having runny nose and currently having gastric.",
            "Patient: Myself. I am working adult of 40 years with a painful headache and cold symptoms."
        ]
    }
]

export default TEAM_2_SCRIPT;