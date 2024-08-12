interface Script {
    question: string;
    answer: string;
}

const TEAM_3_SCRIPT: Script[] = [
    {
        question: "Me(pharmacist): Hello. How can I help you today?",
        answer: 
            "Patient: Hi, I'm a flight attendant.\n"+
            "I often have swollen legs from standing for long periods, and I also suffer from severe menstrual cramps.\n"+
            "But I have trouble swallowing pills, which makes things difficult for me."
        
    },
    {
        question: "Me(pharmacist): I see, that sounds challenging.\n"+
                "Let me find a solution that can help with both your swollen legs and menstrual cramps.\n"+
                "You mentioned you have trouble swallowing pills.\n"+
                "Would liquid or powder forms of medication work for you?",
        answer: "Patient: Yes, that would be fine."
        
    },
    {
        question: "Me(pharmacist): Are you currently taking any other medications?",
        answer: "Patient: No, I'm not."
        
    }
]

export default TEAM_3_SCRIPT;