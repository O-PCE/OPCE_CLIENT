interface Script {
    question: string;
    answer: string[];
}

const TEAM_4_SCRIPT: Script[] = [
    {
        question: "Me(pharmacist): Hello, good afternoon! How can I help you?",
        answer: ["Patient’s parent: Hi, I came to purchase this product\n(showing the Coldaewon Kidsfen Syrup packaging)"]
    },
    {
        question: "Me(pharmacist): Is it for your son? Can you tell me how is your son condition?\n\n"+
        "Patient’s parent: Yes, it is for my son, he is 8-year-old. My son has taken this medicine before when he had a fever and mild headache, and now he is experiencing",
        answer: [
            "Similar symptoms but also with sneezing, a dry cough, an itchy throat, and a runny nose.",
            "Having a nasal congestion followed by mild fever and sneezing.",
        ]
    },
    // {
    //     question: "Me(Pharmacist): I’m sorry ma’am, but according to your explanation, I don't think Coldaewon Kidsfen Syrup is suitable for your son’s condition.",
    //     answer: ["Patient’s parent: Oh really..? Can you help me to find the right one?"]
    // }
]

export default TEAM_4_SCRIPT;