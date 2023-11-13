import React from "react";

const ProblemStatement3 = () => {
    return (
        <div
            className="problem_statement"
            style={{ color: "white", width: "90vw", margin: "0 auto" }}>
            <p className="apply_details">
                <span>Problem Statement :</span> Personalized Content Generation
                AI for Users
            </p>
            <br />
            <p className="problem_text">
                <span>Problem Description :</span> The challenge for this
                hackathon is to create an AI-powered system that generates
                personalized content, such as social media posts or written
                works, emulating a user's writing style and thought process.
                This system is open for all users and aims to assist individuals
                in overcoming creative blocks, generating content efficiently,
                and maintaining a consistent voice in their writing.
            </p>
            <br />
            <p className="problem_subheading">Problem Components</p>
            <br />
            <p className="problem_text">
                <span>1. Data Collection and Storage:</span> Develop a mechanism
                for collecting and storing a user's past thoughts,
                conversations, and written content securely.
            </p>
            <p className="problem_text">
                <span>2. Machine Learning Model:</span> Create a generative AI
                model based on advanced natural language processing (NLP)
                techniques that can generate content by learning from the user's
                historical data.
            </p>
            <p className="problem_text">
                <span>3. User Interface:</span> Design an intuitive and
                user-friendly interface where users can interact with the AI
                system, input prompts, and customize the generated content.
            </p>
            <p className="problem_text">
                <span>4. Privacy and Security Measures:</span> Implement strong
                privacy and security measures to protect the user's personal
                information and ensure compliance with relevant data protection
                regulations.
            </p>
            <br />
            <p className="problem_subheading">Data Sources</p>
            <br />
            <p className="problem_text">
                User-generated content and conversations, including text
                messages, chat logs, and written works. Pre-trained NLP models,
                such as GPT-3, as a starting point for model development.
            </p>
            <br />
            <p className="problem_subheading">Resources Required</p>
            <br />
            <p className="problem_text">
                <span>1. Machine Learning Frameworks:</span> Utilize machine
                learning frameworks like TensorFlow or PyTorch for model
                development and training.
            </p>
            <p className="problem_text">
                <span>2. Natural Language Processing Tools:</span> Employ NLP
                libraries such as NLTK, spaCy, and Hugging Face Transformers for
                text preprocessing, analysis, and model fine-tuning.
            </p>
            <p className="problem_text">
                <span>3. Hardware:</span> Access to GPU or TPU resources for
                training and deploying the AI model.
            </p>
            <p className="problem_text">
                <span>4. Data Storage and Management:</span> Implement a secure
                and scalable data storage system for user data.
            </p>
            <p className="problem_text">
                <span>5. User Interface Development:</span> Skills and tools for
                designing a user-friendly interface.
            </p>
            <p className="problem_text">
                <span>6. Privacy and Security Expertise:</span> Knowledge and
                best practices for ensuring data privacy and security.
            </p>

            <br />
            <p className="problem_subheading">Considerations</p>
            <br />
            <p className="problem_text">
                The model's output should be high-quality, coherent, and closely
                mimic the user's writing style.
            </p>
            <p className="problem_text">
                Compliance with privacy regulations is paramount. Users must be
                fully informed about data collection and usage.
            </p>
            <p className="problem_text">
                User consent and data anonymization are crucial to respect
                privacy.
            </p>
            <p className="problem_text">
                Ethical considerations are important, particularly regarding the
                potential to impersonate a user's writing style.
            </p>
            <br />
            <p className="problem_subheading">Evaluation Criteria</p>
            <br />
            <p className="problem_text">
                Judges will evaluate hackathon submissions based on the
                following criteria:
                <br />
                <br />
                <span>1. </span>Quality of generated content.
                <br />
                <span>2. </span>User interface design and usability.
                <br />
                <span>3. </span>Privacy and data security measures.
                <br />
                <span>4. </span>Ethical considerations and responsible AI usage.
                <br />
            </p>

            <br />
            <p className="problem_subheading">Deliverables</p>
            <br />
            <p className="problem_text">
                <span>1.</span> A functional AI system that generates
                personalized content.
            </p>
            <p className="problem_text">
                <span>2.</span> Documentation outlining the data handling, model
                architecture, and privacy measures.
            </p>
            <p className="problem_text">
                <span>3. </span> A presentation showcasing the system's features
                and capabilities.
            </p>
        </div>
    );
};

export default ProblemStatement3;
