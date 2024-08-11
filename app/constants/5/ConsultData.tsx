const rightResult = [
    "Patient Consult Instructions:\n"+
    "1. Administer every 4 hours as needed.\n"+
    "2. Administer 5 mL per dose.\n"+
    "3. Do not exceed 6 doses in 24 hours.\n"+
    "4. Do not take medications containing antihistamines (oral medications for rhinitis [nasal inflammation], motion sickness medications, allergy medications) while taking this medication.\n"+
    "5. Consult a doctor/pharmacist if symptoms do not improve after taking the medicine 5-6 times.\n"+
    "6. Increase fluid intake."
    ,
    
    "Patient Consult Instructions:\n"+
    "1. Administer every 4 hours as needed.\n"+
    "2. Administer 20 mL per dose.\n"+
    "3. Take the medication three times a day, 30 minutes after meals.\n"+
    "4. This medication contains acetaminophen.\n"+
    "   Exceeding the maximum daily dose of acetaminophen (4,000mg) can cause liver damage.\n"+
    "   Therefore, do not exceed the maximum daily dose of this medication (4,000mg) and do not take it with other products containing acetaminophen.\n"+
    "5. Avoid alcohol while taking this medication. Taking this medication with alcohol can potentially cause liver damage.\n"+
    "6. Do not take this medication if you are currently taking or have taken MAO inhibitors (antidepressants, antipsychotics, mood stabilizers, Parkinson's medications, etc.) within the past 2 weeks.\n"+
    "7. Do not take this medication for a prolonged period.\n"+
    "8. It may cause drowsiness.\n"+
    "9. Increase fluid intake."
    ,
    
    "Patient Consult Instructions:\n"+
    "1. Administer 10-20mL per dose.\n"+
    "2. Administer 3-4 times daily.\n"+
    "3. Avoid alcohol while taking this medication.\n"+
    "Taking this medication with alcohol can potentially cause gastrointestinal bleeding.\n"+
    "4. There is an increased risk of serious cardiovascular thrombotic events, myocardial infarction, and stroke, which can be fatal.\n"+
    "   The likelihood of cardiovascular adverse reactions may be higher in patients with cardiovascular disease or risk factors, or in long-term users of this medication.\n"+
    "   Close monitoring for adverse reactions is necessary during treatment.\n"+
    "   5. There is a gastrointestinal risk, including potentially fatal serious gastrointestinal adverse reactions such as bleeding, ulceration, and perforation.\n"+
    "6. Do not co-administer with other nonsteroidal anti-inflammatory drugs (NSAIDs).\n"+
    "7. When co-administered with coumarin anticoagulants (such as warfarin), there is a potential for increased anticoagulant effects, leading to an increased risk of severe gastrointestinal bleeding.\n"+
    "8. When co-administered with selective serotonin reuptake inhibitors (SSRIs), there is an increased risk of gastrointestinal bleeding.\n"+
    "9. Increase fluid intake."
    ,
    
    "Patient Consult Instructions:\n"+
    "1. For a 30-month-old child, administer 5ml per dose.\n"+
    "2. Take it three times a day 30 minutes after meals.\n"+
    "3. Take it with enough water.\n"+
    "4. If you have liver dysfunction(jaundice) or gastrointestinal disorder, consult an expert.\n"+
    "5. Do not take this medication for a prolonged period.\n"+
    "6. It may cause drowsiness.\n"+
    "7. If rash/redness [congestion and redness], itching, edema [swelling] occurs, stop the medication and discuss with a doctor or a pharmacist.\n"+
    "8. This medication contains acetaminophen.\n"+
    "   Exceeding the maximum daily dose of acetaminophen (4,000mg) can cause liver damage.\n"+
    "   Therefore, do not exceed the maximum daily dose of this medication (4,000mg) and do not take it with other products containing acetaminophen.\n"+
    "9. Do not take this medication with other cold medicines, antitussives, antipyretic painkillers, sedatives, medicines containing antihistamine(oral medication for rhinitis, motion sickness medication, allergy medication)"
    ,
    
    "Patient Consult Instructions:\n"+
    "1. Administer two-thirds bag per dose for adults.\n"+
    "2. Administer once daily, right after meal.\n"+
    "3. Avoid alcohol while taking this medication.\n"+
    "   Taking this medication with alcohol can potentially cause gastrointestinal bleeding.\n"+
    "4. Patients taking barbiturates, tricyclic antidepressants, and alcohol may have an increased ability to metabolize large amounts of acetaminophen, which may decrease the plasma half-life of acetaminophen.\n"+
    "5. Pregnant women, women who may be pregnant, or lactating women can take this medication without any discussion with a doctor or a pharmacist.\n"+
    "6. This medication does not conceal infection symptoms and does not delay the diagnosis of infectious complications.\n"+
    "7. It could cause drowsiness.\n"+
    "8. Increase fluid intake."
    ,
    
    "Patient Consult Instructions:\n"+
    "1. Administer 3 times daily, 30 minutes after meal.\n"+
    "2. Alcohol can induce liver injury if taken with this drug, so you should avoid drinking alcohol while taking this medication.\n"+
    "3. Do not exceed the maximum daily dose, which is 4,000mg of acetaminophen.\n"+
    "4. If you are taking other cold medicines, do not take this medicine without consulting a healthcare professional.\n"+
    "5. This medication should be avoided for children under 2 years old.\n"+
    "   Please keep this medicine out of reach of children.\n"+
    "6. You cannot take this medication with MAO inhibitors or within 2 weeks after withdrawal of MAO inhibitors(antidepressants, antipsychotics, mood stabilizers, Parkinson's medications, etc.)\n"+
    "7. Increase fluid intake."
    ]
    
    const wrongResult = "It appears that you gave wrong information to the patient."
    
    const TEAM_5_CONSULT_RESULT_DATA = {
        right: rightResult,
        wrong: wrongResult
    }
    
    export default TEAM_5_CONSULT_RESULT_DATA;