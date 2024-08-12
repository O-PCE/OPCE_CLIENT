const TEAM_5_FORM_DATA = [
    [
        "1. Administer every 4 hours as needed.",
        "2. Administer 5 mL per dose.",
        "3. Do not exceed 4 doses in 24 hours.",
        "4. It is okay to take medications containing antihistamines while taking this medication.",
        "5. Consult a doctor/pharmacist if symptoms do not improve after taking the medicine 5-6 times.",
        "6. Increase fluid intake."
    ],
    [
        "1. Administer every 4 hours as needed.",
        "2. Administer 20 mL per dose.",
        "3. Take the medication three times a day, 30 minutes before meals.",
        "4. This medication contains acetaminophen.\n"+
        "Exceeding the maximum daily dose of acetaminophen (4,000mg) can cause liver damage.\n"+
        "Therefore, do not exceed the maximum daily dose of this medication (4,000mg) and do not take it with other products containing acetaminophen.",
      "5. Avoid alcohol while taking this medication.\n"+
       "Taking this medication with alcohol can potentially cause liver damage.",
        "6. It is okay to take this medication with MAO inhibitors (antidepressants, antipsychotics, mood stabilizers, Parkinsons medications, etc.)",
        "7. It is okay to take this medication for a prolonged period.",
        "8. It may cause drowsiness.",
        "9. Increase fluid intake."
    ],
    [
        "1. Administer 30-40mL per dose.",
        "2. Administer 3-4 times daily.",
        "3. Avoid alcohol while taking this medication.\n"+
          "Taking this medication with alcohol can potentially cause gastrointestinal bleeding.",
        "4. There is an increased risk of serious cardiovascular thrombotic events, myocardial infarction, and stroke, which can be fatal.\n"+
          "The likelihood of cardiovascular adverse reactions may be higher in patients with cardiovascular disease or risk factors, or in long-term users of this medication.\n"+
          "Close monitoring for adverse reactions is necessary during treatment.",
        "5. There is a gastrointestinal risk, including potentially fatal serious gastrointestinal adverse reactions such as bleeding, ulceration, and perforation.",
        "6. Do not co-administer with other nonsteroidal anti-inflammatory drugs (NSAIDs).",
        "7. It is okay to take this medication with coumarin anticoagulants (such as warfarin).",
        "8. It is okay to take this medication with selective serotonin reuptake inhibitors (SSRIs).",
        "9. Increase fluid intake."
    ],
    [
        "1. For a 30-month-old child, administer 6.5ml per dose.",
        "2. Take it three times a day 30 minutes after meals.",
        "3. Take it with enough water.",
        "4. If you have liver dysfunction(jaundice) or gastrointestinal disorder, consult an expert.",
        "5. It is okay to take this medication for a prolonged period.",
        "6. It may cause drowsiness.",
        "7. If rash/redness [congestion and redness], itching, edema [swelling] occurs, stop the medication and discuss with a doctor or a pharmacist.",
        "8. If there is no improvement, take other products containing acetaminophen additionally.",
        "9. It is possible to take this medication with other cold medicines, antitussives, antipyretic painkillers, sedatives, medicines containing antihistamine(oral medication for rhinitis, motion sickness medication, allergy medication)"
    ],

    [
        "1. Administer two-thirds bag per dose for adults.",
        "2. Administer once daily, right after meal.",
        "3. Avoid alcohol while taking this medication. Taking this medication with alcohol can potentially cause gastrointestinal bleeding.",
        "4. Patients taking barbiturates, tricyclic antidepressants, and alcohol may have an increased ability to metabolize large amounts of acetaminophen, which may decrease the plasma half-life of acetaminophen.",
        "5. Pregnant women, women who may be pregnant, or lactating women can take this medication without any discussion with a doctor or a pharmacist.",
        "6. This medication does not conceal infection symptoms and does not delay the diagnosis of infectious complications.",
        "7. It could cause drowsiness.",
        "8. Increase fluid intake."
    ],
    [
        "1. Administer 3 times daily, 30 minutes after meal.",
        "2. It doesn't matter to drink alcohol while taking this medication.",
        "3. You can take this medicine up to 5,000mg of acetaminophen per day.",
        "4. If you are taking other cold medicines, do not take this medicine without consulting a healthcare professional.",
        "5. This medication should be avoided for children under 2 years old.\n"+
        "Please keep this medicine out of reach of children.",
        "6. You can take this medication with MAO inhibitors(antidepressants, antipsychotics, mood controllers, Parkinson's medication etc).",
        "7. Increase fluid intake."
    ]

]

const TEAM_5_FORM_ANSWER = [
    [0, 1, 4, 5],
    [0, 1, 3, 4, 7, 8],
    [1, 2, 3, 4, 5, 8],
    [1, 2, 3, 5, 6],
    [2, 6, 7],
    [0, 3, 4, 6]
]

const TEAM_5_FORM = {
    data: TEAM_5_FORM_DATA,
    answer: TEAM_5_FORM_ANSWER
}

export default TEAM_5_FORM;
