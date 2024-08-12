export interface Script {
    question: string;
    answer: string;
}

const TEAM_1_SCRIPT: Script[] = [
    {
        question: "Me (pharmacist): Hi, how are you? How can I help you?",
        answer: 
        "Patient: I seem to have caught a cold after returning from abroad a few days ago.\n"+
        "I have a headache and high fever.\n"+
        "I am also suffering from a severe cough, runny nose and stuffy nose."
    },
    {
        question: "Me (pharmacist): Okay, who will be taking the medicine?",
        answer:"Patient: Me and I am 34 years old."
    },
    {
        question: "Me (pharmacist): What’s your name? And your ID number?",
        answer: "Patient: My name is Joon and my ID number is 12345."
    },
    {
        question: "Me (pharmacist): Could you explain your symptoms in more detail?",
        answer: "Patient: I measured my body temperature in the morning and it was 37.9 degrees celsius.\nI have a stabbing pain in my head. I have both a runny and stuffy nose. I also have a wet cough."
    },
    {
        question: "Me (pharmacist): When did your symptoms start?",
        answer: "Patient: About 2 days ago."
    },
    {
        question: "Me (pharmacist) : I see. Do you have any other diseases? Or are you taking any medication?",
        answer: "Patient : I went to the dentist 3 days ago and was prescribed these antibiotics, dexibuprofen, and stomach medicine."
    },
    {
        question: "Me (pharmacist) : Are there any other things you are taking?",
        answer: "Patient : I take iron supplements every day."
    },
    {
        question: "Me (pharmacist) : I will keep that in mind. Have you seen the doctor after you caught your cold?",
        answer: "Patient : Not yet."
    },
    {
        question: "Me (pharmacist) : Then, do you have any drug allergies?",
        answer: "Patient : No, I do not."
    },
    {
        question: "Me (pharmacist) : Did you take the flu vaccine?",
        answer: "Patient : No, I have not."
    },
    {
        question: "Me (pharmacist) : Do you either drink or smoke?",
        answer: "Patient : Not really. I only drink a glass of beer once a week.\nAnd I have never smoked before."
    },
    {
        question: "Me (pharmacist) : Then do you have meals regularly? And do you drink enough water?",
        answer: "Patient : I never skip meals. But I rarely drink water."
    },
    {
        question: "Me (pharmacist) : What do you do?",
        answer: "Patient : I am a teacher at Daewon Middle School.\nI spend most of the time standing. That is the hardest part for me."
    },
    {
        question: "Me (pharmacist) : Oh, I am sorry to hear that. Do you live with anyone?",
        answer: "Patient : I live with my husband and my two sons. They are each 38 months and 5 months old.\nI am worried that my sons might catch my cold, since they are so little. "
    },
    {
        question: "Me (pharmacist) : Are there any other things I should know of?",
        answer: "Patient : I prefer drugs without caffeine.\nI do not like caffeine because I cannot get good quality sleep at night."
    },
    {
        question: "Me (pharmacist) : Okay. There is not that much caffeine in cold medications that might disturb your sleep, but I will try to find one without caffeine for you.",
        answer: "Patient : Thank you. That would be nice."
    }
]

export default TEAM_1_SCRIPT;