const questionsData = [
    // Grammar Part
    {
        id: 1,
        type: "grammar",
        context: "1. You arrive at the office and see that everyone is unusually quiet. Later you learn that the CEO announced major cuts this morning.\n\nNot until the CEO’s announcement ______ why everyone looked so tense.",
        text: "Which choice completes the text so that it conforms to the conventions of Standard English?",
        options: [
            "I understood",
            "did I understand",
            "I had understood",
            "have I understood"
        ],
        correct: 1, // B
        explanation: "Correct Answer: B. This sentence uses negative inversion. When a sentence starts with a negative phrase like 'Not until', the subject and auxiliary verb must be inverted ('did I understand' instead of 'I understood')."
    },
    {
        id: 2,
        type: "grammar",
        context: "2. A friend complains about missing a flight. He says he “didn’t think the traffic would be bad.”\n\nIf he ______ the traffic, he would have left earlier and caught the flight.",
        text: "Which choice completes the text so that it conforms to the conventions of Standard English?",
        options: [
            "considered",
            "would consider",
            "had considered",
            "has considered"
        ],
        correct: 2, // C
        explanation: "Correct Answer: C. This is a Third Conditional sentence identifying a past unreal situation. The structure requires 'If + past perfect' ('had considered') to match the result clause 'would have left'."
    },
    {
        id: 3,
        type: "grammar",
        context: "3. Your teammate keeps postponing an important task and keeps saying “I’ll do it tomorrow.”\n\nIt’s about time you ______ responsibility for this part of the project.",
        text: "Which choice completes the text so that it conforms to the conventions of Standard English?",
        options: [
            "take",
            "took",
            "have taken",
            "are taking"
        ],
        correct: 1, // B
        explanation: "Correct Answer: B. The phrase 'It’s about time' (or 'It’s time') is followed by the past subjunctive to express that something should have happened already. Therefore, 'took' is the correct form."
    },
    {
        id: 4,
        type: "grammar",
        context: "4. You read a review that sounds extremely confident, but you later realize the reviewer had never used the product.\n\nHe wrote as though he ______ it for months, yet he hadn’t even tried it once.",
        text: "Which choice completes the text so that it conforms to the conventions of Standard English?",
        options: [
            "used",
            "had been using",
            "has been using",
            "would be using"
        ],
        correct: 1, // B
        explanation: "Correct Answer: B. The phrase 'as though' indicates an unreal situation. Since the writing happened in the past strategy, we backshift to the Past Perfect Continuous ('had been using') to show the hypothetical duration before that time."
    },
    {
        id: 5,
        type: "grammar",
        context: "5. A colleague changed a file without telling you, and now the formatting is broken.\n\nI’d rather you ______ me before making changes to shared documents.",
        text: "Which choice completes the text so that it conforms to the conventions of Standard English?",
        options: [
            "tell",
            "told",
            "have told",
            "will tell"
        ],
        correct: 1, // B
        explanation: "Correct Answer: B. 'Would rather' followed by a subject (you) takes the past subjunctive to refer to the present or future preference. Thus, 'told' is correct."
    },

    // Vocabulary Part
    {
        id: 6,
        type: "vocabulary",
        context: "6. After the scandal, the company knew it couldn’t just issue a short apology and hope people would forget. It had to rebuild trust slowly, starting by being transparent and responding to criticism instead of ignoring it. The CEO promised to ______ the company’s reputation over the next year.",
        text: "Which choice completes the text with the most logical and precise word or phrase?",
        options: [
            "rebuild",
            "repair",
            "recover",
            "renew"
        ],
        correct: 0, // A
        explanation: "Correct Answer: A. 'Rebuild' is the most precise fit for 'reputation' in this context, especially as the text explicitly mentions 'rebuild trust' earlier. It implies constructing something again that was damaged."
    },
    {
        id: 7,
        type: "vocabulary",
        context: "7. During the meeting, Maya didn’t argue loudly, but she asked the same question in three different ways until she got a clear answer. Her approach was calm and systematic; she was clearly trying to be ______ rather than emotional.",
        text: "Which choice completes the text with the most logical and precise word or phrase?",
        options: [
            "methodical",
            "moderate",
            "movable",
            "mythical"
        ],
        correct: 0, // A
        explanation: "Correct Answer: A. The text describes her approach as 'calm and systematic'. 'Methodical' is a synonym for systematic, meaning doing things in a detailed, logical order."
    },
    {
        id: 8,
        type: "vocabulary",
        context: "8. The new rules were introduced because customer service teams were receiving the same complaints again and again. Management wanted to reduce the number of issues reported each week and improve overall satisfaction, so they aimed to ______ complaints by changing the process.",
        text: "Which choice completes the text with the most logical and precise word or phrase?",
        options: [
            "cut down on",
            "cut through",
            "cut into",
            "cut off"
        ],
        correct: 0, // A
        explanation: "Correct Answer: A. 'Cut down on' is a phrasal verb meaning to reduce the amount of something. The text explicitly states they wanted to 'reduce the number of issues'."
    },
    {
        id: 9,
        type: "vocabulary",
        context: "9. His explanation sounded confident, but it didn’t actually deal with the main problem. Instead of answering the question directly, he talked around it and used vague examples. In other words, what he said didn’t really ______ the issue.",
        text: "Which choice completes the text with the most logical and precise word or phrase?",
        options: [
            "address",
            "respond",
            "deliver",
            "insist"
        ],
        correct: 0, // A
        explanation: "Correct Answer: A. To 'address' an issue means to deal with or discuss it directly. The text contrasts this with 'talked around it', making 'address' the correct choice."
    },
    {
        id: 10,
        type: "vocabulary",
        context: "10. The speaker’s argument had a strong structure, but many of the examples were unrelated to the topic. People felt he was intelligent, yet his evidence didn’t connect to his main point, so it wasn’t very ______.",
        text: "Which choice completes the text with the most logical and precise word or phrase?",
        options: [
            "relevant",
            "reliable",
            "remote",
            "resistant"
        ],
        correct: 0, // A
        explanation: "Correct Answer: A. 'Relevant' means closely connected or appropriate to the matter at hand. Since the evidence 'didn't connect' to the point, it was not relevant."
    },

    // Reading Part
    {
        id: 11,
        type: "reading",
        context: "11) Researchers studying sleep found that people often underestimate how much their mood depends on consistent rest. Even when total sleep time stays the same, irregular bedtimes can disrupt attention and increase irritability the next day. The researchers conclude that a stable sleep schedule may matter as much as the number of hours slept.",
        text: "Which choice best states the main idea of the text?",
        options: [
            "People should always sleep more hours to improve mood.",
            "Sleep affects mood only when people sleep very little.",
            "Regular sleep timing can be as important as total sleep time for mood and focus.",
            "Irregular bedtimes are unavoidable for most people."
        ],
        correct: 2, // C
        explanation: "Correct Answer: C. The text's main conclusion is that 'a stable sleep schedule may matter as much as the number of hours slept'. Choice C paraphrases this accurately."
    },
    {
        id: 12,
        type: "reading",
        context: "12) To reduce plastic waste, some cities have banned single-use bags. However, several studies suggest that the effectiveness of such bans depends on what replaces the bags. If shoppers switch to thicker plastic bags or forget reusable ones and buy new ones frequently, waste may not decrease much. Researchers argue that policies work best when paired with public education and convenient, durable alternatives.",
        text: "Which choice best states the main idea of the text?",
        options: [
            "Bag bans always reduce waste quickly.",
            "Bag bans are ineffective and should be removed.",
            "The impact of bag bans depends on replacement behavior and supportive measures.",
            "Reusable bags create more waste than plastic bags."
        ],
        correct: 2, // C
        explanation: "Correct Answer: C. The text argues that bans aren't enough on their own; their success depends on 'what replaces the bags' and pairing them with 'public education'. Choice C captures this nuance."
    },
    {
        id: 13,
        type: "reading",
        context: "13) A museum introduced a “pay-what-you-wish” policy on weekday evenings. In the first month, attendance increased sharply, especially among students. While the average amount paid per visitor dropped slightly, total revenue did not fall because more people attended. The museum director said the policy would continue if these patterns remained stable.",
        text: "Which information is best supported by the text?",
        options: [
            "Students paid more than other visitors on weekday evenings.",
            "The museum is willing to accept a lower average payment if attendance keeps revenue steady.",
            "The museum will expand the policy to weekends immediately.",
            "Attendance increased because ticket prices were raised."
        ],
        correct: 1, // B
        explanation: "Correct Answer: B. The text states the director would continue the policy if patterns remained stable (revenue didn't fall despite lower average payment). This supports that they accept lower average payment as long as volume keeps revenue up."
    },
    {
        id: 14,
        type: "reading",
        context: "14) In a workplace study, participants were asked to rate their productivity after switching off email notifications for two hours each morning. Most participants reported feeling less distracted and finishing tasks more quickly. However, several also noted that they had to spend extra time later replying to messages that piled up. The researchers recommended scheduled notification-free periods rather than turning notifications off all day.",
        text: "Which information is best supported by the text?",
        options: [
            "Turning off notifications all day is the best strategy for everyone.",
            "Notification-free periods can improve focus but may shift some work to later.",
            "Email is the primary cause of low productivity in workplaces.",
            "Participants replied to fewer messages after the study ended."
        ],
        correct: 1, // B
        explanation: "Correct Answer: B. The study found participants were less distracted (improved focus) but had to 'spend extra time later' replying. This aligns perfectly with Choice B."
    },
    {
        id: 15,
        type: "reading",
        context: "15) A town planted trees along several busy streets to improve air quality. One year later, sensors showed slightly lower levels of certain pollutants near those streets, but the reduction was inconsistent and depended on wind direction. Local officials still considered the program worthwhile because residents reported that the streets felt cooler and more comfortable in summer.",
        text: "Which information is best supported by the text?",
        options: [
            "The trees had no measurable environmental effect.",
            "Wind direction can influence how much tree planting affects pollution readings.",
            "Officials care more about sensor data than resident experience.",
            "The program will be canceled due to inconsistent results."
        ],
        correct: 1, // B
        explanation: "Correct Answer: B. The text directly mentions that 'the reduction was inconsistent and depended on wind direction'. This makes Choice B the best supported statement."
    }
];
