const rightResult = [
"Fine-Q Ibufen Syrup contains 400mg of ibuprofen per sachet.\n"+
"The maximum daily dosage of ibuprofen is 3200mg, so it can be taken three times a day, with the possibility of additional doses if necessary.\n"+
"Fine-Q Ibufen Syrup should be taken every 4 to 6 hours as needed for pain relief.\n"+
"However, it is important not to exceed the maximum daily dose of 3200 mg.\n"+
"If pain persists despite this regimen, consult your healthcare provider for further evaluation and management."
,

"Newbein is most effective when taken during meals.\n"+
"Newbein does not have any specific food-related interactions, so it can be taken with or without food.\n"+
"However, maintaining a consistent routine might help with better absorption and effectiveness of the medication."


]


const wrongResult = [
    "Ibuprofen is an NSAID, a class of drugs known to cause gastrointestinal issues if taken on an empty stomach. It should be taken after meals to minimize gastrointestinal side effects.\n"+
    "As a flight attendant, you are at risk for dehydration due to the dry cabin environment. Ibuprofen can reduce kidney function, especially when you are dehydrated. It's important to stay well-hydrated when taking this medication to avoid potential kidney issues"

    ,

    "If symptoms do not improve after 1-2 weeks of use, you should visit the pharmacy or consult your healthcare provider again.\n"+
    "If you experience side effects such as headaches, gastrointestinal issues, allergic reactions, loss of appetite, vomiting, or facial flushing, stop taking the medication and consult a doctor or pharmacist."+
    "Newbein contains D-sorbitol solution and sucralose, which are artificial sweeteners.\n"+
    "While they are generally safe, some people may experience gastrointestinal discomfort like bloating or diarrhea, especially if they are sensitive to artificial sweeteners."
]
const TEAM_3_CONSULT_RESULT_DATA = {
    right: rightResult,
    wrong: wrongResult
}

export default TEAM_3_CONSULT_RESULT_DATA;