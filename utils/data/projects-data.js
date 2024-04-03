import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'FareMate: A Ride Sharing Application',
        description: "FareMate is a sustainable and cost-effective carpooling application built with React Native for a smooth user experience and Firebase for robust backend functionality.",
        tools: ['React Native', 'FireBase', 'OpenAI API', 'Google MAp API', 'Expo'],
        role: 'Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Tech Assist',
        description: 'Tech Assist is the ultimate destination for all your technical needs. Whether you are wrestling with software glitches, hardware hiccups, or seeking advice on the latest tech trends, our platform connects you with seasoned experts eager to lend a hand.',
        tools: ['PHP', 'Tailwind CSS', "Laravel", "Bootstrap", "MySQL", "VS code-Editor",],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'AI Powered Auto Evaluator',
        description: 'The Auto-Evaluator is a sophisticated tool designed to automate the evaluation process for question-answering systems. Leveraging advanced natural language processing (NLP) techniques and machine learning models, this tool streamlines the assessment of a system performance on a given set of documents and associated questions.',
        tools: ['Python', 'GPT-API', 'Streamlit', 'Models', 'LLM', 'UI', 'MongoDB', 'OpenAI API'],
        code: '',
        role: 'Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'AI Powered Story Generator',
        description: "This project is a Story Generator web application built with Streamlit, a Python library for creating interactive web apps. Users input a title, character name, era, genre, punchline, and desired story length. The app then utilizes the T5 model from the Hugging Face Transformers library to generate a story based on the provided inputs",
        tools: ['Python', 'HuggingFAce', 'Natural LAnguage Processing', 'T5 Model', "Streamlit"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },