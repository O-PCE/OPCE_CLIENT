const TEAM_2_FORM_DATA = [
    [
        "1) This product will cause significant drowsiness",
        "2) Administer 1 packet of 5mL every 4 hours. For a maximum of 6 times a day.",
        "3) The product can still be used if the child is constantly coughing and wheezing.",
        "4) This product should only be administered with or after food",
        "5) This product should work in 30 minutes",
        "6) Vitamin C, Elderberry, Zinc can be given to boost the immunity of the child"

    ],
    [
        "1) This product helps relieve symptoms of runny nose, fever or body aches and cough with or without phelgm.",
        "2) This product works by drying up mucus, suppressing cough and dissolving phlegm",
        "3) Administer this with food",
        "4) Administer 20mL (2 packs) up to 4 times a day",
        "5) This product will cause drowsiness.",
        "6) It is recommended to use it more than 2 weeks",
        "7) Taking honey or drinking honey water can help soothe the throat."

    ],
    [
        "1) Administer this with or without food",
        "2) Administer 20mL (1 pack) three times a day",
        "3) Product can be administered every 4 hours",
        "4) This product can be used to treat the headache for more than 2 days",
        "5) You should not take other products that contain acetaminophen while taking this product.",
        "6) Acetaminophen may cause severe gastric side effects."
        
    ]

]

const TEAM_2_FORM_ANSWER = [
    [1, 4, 5],
    [0, 2, 3 ,6],
    [1, 2, 4]
]

const TEAM_2_FORM = {
    data: TEAM_2_FORM_DATA,
    answer: TEAM_2_FORM_ANSWER
}

export default TEAM_2_FORM;
