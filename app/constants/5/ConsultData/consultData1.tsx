const rightResult = 
"Patient Consult Instructions:\n"+
"1. Administer every 4 hours as needed.\n"+
"2. Administer 5 mL per dose.\n"+
"3. Do not exceed 6 doses in 24 hours.\n"+
"4. Do not take medications containing antihistamines (oral medications for rhinitis [nasal inflammation], motion sickness medications, allergy medications) while taking this medication.\n"+
"5. Consult a doctor/pharmacist if symptoms do not improve after taking the medicine 5-6 times.\n"+
"6. Increase fluid intake."


const wrongResult = "It appears that you gave wrong information to the patient."

const TEAM_5_CONSULT_RESULT_DATA = {
    right: rightResult,
    wrong: wrongResult
}

export default TEAM_5_CONSULT_RESULT_DATA;