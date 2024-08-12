export interface Script {
  question: string;
  answer: string;
}

const TEAM_6_FINALRESULT: Script[] = [
  {
    question: "Me (pharmacist) : “Hello, it's good to see you again! Is your daughter doing better?”",
    answer: "Patient's father : “Yes, thank you!\n"+
            "As a single father I was really overwhelmed, but you definitely recommended a great product for my girl.”"
  },
  {
    question: "Me (pharmacist) : “Hello, it's good to see you again! Is your son feeling alright again?”",
    answer: "Patient's mother : “Yes, thank you!\n"+
            "My little one recovered very quickly. Today we were able to go to the playground again."
  },
  {
    question: "Me (pharmacist) : “Hello, it's good to see you again! How are you feeling, Madam?”",
    answer: "Patient : “Thank you for asking!\n"+
            "I'm doing much better. I hope you have a lovely day!”"
  },
  {
    question: "Me (pharmacist) : “Hello, it's good to see you again! How are you doing?”",
    answer: "Patient : “Hello there! I am feeling great, I have fully recovered and can eat without pain!\n"+
            "So I am on my way to grab some lunch."
  
  }
]

export default TEAM_6_FINALRESULT;